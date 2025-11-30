import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError("");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const res = await axios.get(url);

      setData({
        name: res.data.name,
        temp: Math.round(res.data.main.temp),
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        desc: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
      });
    } catch (err) {
      setError("City not found. Try again.");
      setData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {data && <WeatherCard data={data} />}
    </div>
  );
}

export default App;
