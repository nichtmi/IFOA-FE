import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '15cac6e53154a1fe4efb820385c044cd';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=it`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city.trim() === '') {
          // Evita di effettuare la richiesta API se il nome della città è vuoto
          return;
        }
  
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Errore nella richiesta: ${response.status}`);
        }
  
        const data = await response.json();
        setTemperature(data.main.temp);
        setCity(data.name);
      } catch (error) {
        console.error('Errore nella richiesta fetch:', error);
        setError(`Errore nella richiesta fetch: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [city]);

  if (loading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore: {error}</div>;
  }

  
  return (
    <div>
      <h1>Condizioni meteo a {city}</h1>
      <p>Temperatura: {temperature}°C</p>
    </div>
  );
};

export default WeatherComponent;