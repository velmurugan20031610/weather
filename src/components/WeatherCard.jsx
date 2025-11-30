import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt="icon"
        className="weather-icon"
      />

      <h2 className="city">{data.name}</h2>

      <h1 className="temp">{data.temp}°</h1>

      <p className="desc">{data.desc}</p>

      <div className="details">
        <div>
          <h4>Humidity</h4>
          <p>{data.humidity}%</p>
        </div>

        <div>
          <h4>Wind</h4>
          <p>{data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
