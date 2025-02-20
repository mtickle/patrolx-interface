import { useEffect, useState } from "react";

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

      console.log(forecastdata);

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
    <div className="wrapper">

      {error && <p className="error">{error}</p>}

{weatherData && weatherData.main && weatherData.weather && (
  <>
    <div className="header">
      <p className="temperature">{weatherData.main.temp}°F</p>
      <p className="condition">{weatherData.weather[0].main}</p>
    </div>
    <div className="weather-details">
      <div >
        <p >Humidity</p>
        <p style={{fontWeight:"bold"}}>{Math.round(weatherData.main.humidity)}%</p>
      </div>
      <div>
        <p>Wind Speed</p>
        <p style={{fontWeight:"bold"}}>{Math.round(weatherData.wind.speed)} mph</p>
      </div>
    </div>
  </>
)}

{forecast.length > 0 && (
  <>
    <div className="forecast">
      <h2 className="forecast-header">5-Day Forecast</h2>
      <div className="forecast-days">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <p>{Math.round(day.main.temp)}°F</p>
          </div>
        ))}
      </div>
    </div>
  </>
)}
    </div>
  );
};