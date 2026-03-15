import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "b7885f8487c810fac20997c4bc26013b";

  const searchWeather = async () => {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
     <div className="weather-card">

      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>
        Search
      </button>
{weather && (
  <div>

    <h2>{weather.name}</h2>

    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt="weather icon"
    />

    <h3>{weather.main.temp} °C</h3>

    <p>{weather.weather[0].description}</p>

    <p>Humidity: {weather.main.humidity}%</p>

    <p>Wind Speed: {weather.wind.speed} km/h</p>

  </div>
)}
    </div>
  );
}

export default App;