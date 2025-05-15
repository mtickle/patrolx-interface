import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';


export const MiniWeather = () => {

  const API_KEY = "afd91300c7c073a148d3fb8141297070";
  const WEATHER_CITY = "raleigh";
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(WEATHER_CITY);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY}&appid=${API_KEY}&units=imperial`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      setCity(cityName);
    } catch (err) {
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);



  if (loading) return <div className="wrapper">Loading...</div>;

  return (
    <div className="wrapper">

      {error && <p className="error">{error}</p>}

      {weatherData && weatherData.main && weatherData.weather && (
        <>
          {weatherData.main.temp}°F ({weatherData.weather[0].main})<br></br>
        </>
      )}
    </div>
  );
};