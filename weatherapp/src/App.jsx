// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import CountryPicker from "./components/CountryPicker";
import { fetchWeatherData } from "./api/weatherAPI";
import "./index.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchInitialWeather = async () => {
      const data = await fetchWeatherData("London");
      setWeatherData(data);
    };
    fetchInitialWeather();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <CountryPicker setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
