const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

export const fetchWeatherData = async (city) => {
  try {
    // Using Fetch API to get weather data
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // Check if the response is successful (status 200)
    if (!response.ok) {
      throw new Error('City not found or API error');
    }
    

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;  // Return null if there's an error
  }
};
