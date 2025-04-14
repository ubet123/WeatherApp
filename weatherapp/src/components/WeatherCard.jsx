import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return <p>Loading...</p>;

  const { main, weather, wind } = weatherData;

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "clear sky":
        return "☀️";
      case "few clouds":
        return "🌤️";
      case "scattered clouds":
        return "🌥️";
      case "rain":
        return "🌧️";
      case "snow":
        return "❄️";
      case "thunderstorm":
        return "⛈️";
        case "smoke":
        return "🚬";
        case "overcast clouds":
            return "🌥️";
            case "light rain":
            return "🌦️";
            case "haze":
            return "🌫️";
            case "broken clouds":
            return "⛈️";
            case "moderate rain":
            return "🌦️";
            case "light snow":
            return "🌨️";
            case "mist":
            return "🌫️";
            case "drizzle":
              return "🌦️";

      default:
        return "🌈";
    }
  };

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p className="weather-condition">{getWeatherIcon(weather[0].description)} {weather[0].description}</p>
      <div className="weather-details">
        <div>
          <h3>Temperature</h3>
          <p>{main.temp}°C</p>
        </div>
        <div>
          <h3>Humidity</h3>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <h3>Wind Speed</h3>
          <p>{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
