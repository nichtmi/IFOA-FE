import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)
import './App.css'

function App() {
  

  return (
    <>
      <FontAwesomeIcon icon={icon({name: 'coffee', style: 'regular'})} />
    </>
  )
}

export default App

// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=15cac6e53154a1fe4efb820385c044cd

// try {
//   const apiKey = '01e48cc5f9ed4b4aa24b162806bf7256';
//   const apiUrl = https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric;

//   const response = await fetch(apiUrl);