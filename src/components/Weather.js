import React, { useEffect, useState } from "react";
import "../css/Weather.css";
import "../styles.css";

const API_KEY = "988188c3967f08d815b19689d1a26dfd";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": "/images/weatherImg/clear.png",
    "01n": "/images/weatherImg/clear.png",
    "02d": "/images/weatherImg/cloud.png",
    "02n": "/images/weatherImg/cloud.png",
    "03d": "/images/weatherImg/cloud.png",
    "03n": "/images/weatherImg/cloud.png",
    "04d": "/images/weatherImg/drizzle.png",
    "04n": "/images/weatherImg/drizzle.png",
    "09d": "/images/weatherImg/rain.png",
    "09n": "/images/weatherImg/rain.png",
    "10n": "/images/weatherImg/rain.png",
    "10d": "/images/weatherImg/rain.png",
    "13d": "/images/weatherImg/snow.png",
    "13n": "/images/weatherImg/snow.png",
  };

  const cityWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };
  useEffect(() => {
    if (props.city) {
      cityWeather(props.city);
    }
  }, [props.city]);

  return (
    <div className="weather">
      <img src={weatherData.icon} alt="" className="weather-icon" />
      <p className="temprature">{weatherData.temperature} °C</p>
      <p className="location">{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={"/images/weatherImg/humidity.png"} alt="weather icon" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={"/images/weatherImg/wind.png"} alt="weather icon" />
          <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
