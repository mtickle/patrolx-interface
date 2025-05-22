import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';


export const Weather = () => {

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

      const foreCastresponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${WEATHER_CITY}&appid=${API_KEY}&units=imperial`
      );
      const forecastdata = await foreCastresponse.json();

     // console.log(forecastdata);

      setCity(cityName);

      const dailyForecast = forecastdata.list.filter(
        (item, index) => index % 8 === 0
      );
      setForecast(dailyForecast);
    } catch (error) {
      setError("Sorry, we couldn’t retrieve the weather data at this time");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    fetchWeatherData(searchInput);
  }

  if (loading) return <div className="wrapper">Loading...</div>;

  return (
    <>
      {error && <p className="error">{error}</p>}

      {weatherData && weatherData.main && weatherData.weather && (
        <>
          &nbsp;{weatherData.main.temp}°F and {weatherData.weather[0].main} - 
          Humidity {Math.round(weatherData.main.humidity)}% - 
          Wind Speed {Math.round(weatherData.wind.speed)} mph
        </>
      )}
    </>
  );
};