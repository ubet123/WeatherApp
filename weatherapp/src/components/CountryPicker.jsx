import React, { useState } from "react";
import { fetchWeatherData } from "../api/weatherAPI";
import "./CountryPicker.css";

const CountryPicker = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
    } else {
      alert("City not found or error fetching data. Please try again.");
    }
  };

  return (
    <div className="country-picker">
        <h2>Enter City:</h2>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter City"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CountryPicker;
