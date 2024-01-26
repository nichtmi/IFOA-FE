import React, { useState } from 'react';
import WeatherComponent from './WeatherComponent';

const SearchBar = () => {
  const [city, setCity] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Valore di city:', city); // Stampa il valore di city
    // Qui aggiorniamo lo stato "city" con il valore inserito nella barra di ricerca
    // L'effetto nel componente WeatherComponent gestirà la richiesta API automaticamente
    // perché abbiamo incluso "city" nell'array di dipendenze di useEffect
    setCity(event.target.elements.city.value);
  };

  return (
    <div>
      <div className="searchbar">
        <form className="formSearchBar" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="city"  // Aggiungi il nome all'input per accedervi facilmente
            placeholder="Cerca"
            className="inputfield"
            value={city}
            onChange={(e) => setCity(e.target.value)}  // Aggiorna lo stato mentre l'utente digita
          />
          <input type="submit" className="buttonSearch" value="🔍" />
        </form>
      </div>
      <WeatherComponent city={city} />
    </div>
  );
};

export default SearchBar;