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
  <div className="weather-container">

    <div className="weather--wrapper">

      <div className="weather--img"></div>

      <div className="weather_content">

        <form onSubmit={(e)=>{e.preventDefault(); searchWeather();}}>
          <input
            type="text"
            placeholder="Search Location"
            onChange={(e)=>setCity(e.target.value)}
          />
          <button className="btn_search">Search</button>
        </form>

        {weather && (
  <div className="day_info">

    <div className="content">
      <p className="title">CITY</p>
      <span className="value">{weather.name}</span>
    </div>

    <div className="content">
      <p className="title">TEMP</p>
      <span className="value">{weather.main.temp}°C</span>
    </div>

    <div className="content">
      <p className="title">HUMIDITY</p>
      <span className="value">{weather.main.humidity}%</span>
    </div>

    <div className="content">
      <p className="title">WIND</p>
      <span className="value">{weather.wind.speed} km/h</span>
    </div>

  </div>
)}

      </div>

    </div>

  </div>
);
}

export default App;