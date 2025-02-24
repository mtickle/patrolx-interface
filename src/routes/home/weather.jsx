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

          <div className='row'>
            <div className="col-sm">
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_US70.jpg&t=1739970403174" /> */}
                <Card.Body>

                  Currently {weatherData.main.temp}°F and {weatherData.weather[0].main}<br></br>
                  Humidity {Math.round(weatherData.main.humidity)}%<br></br>
                  Wind Speed {Math.round(weatherData.wind.speed)} mph
                  
                </Card.Body>
              </Card>
            </div>
          </div>
         
          
        </>
      )}

      {/* {forecast.length > 0 && (
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
      )} */}
    </div>
  );
};