import React, { useEffect, useState } from "react";
import "../css/Weather.css";
import clear_icon from "../images/clear.png";
import cloud_icon from "../images/cloud.png";
import drizzle_icon from "../images/drizzle.png";
import humidity_icon from "../images/humidity.png";
import rain_icon from "../images/rain.png";
import snow_icon from "../images/snow.png";
import wind_icon from "../images/wind.png";

const API_KEY = "988188c3967f08d815b19689d1a26dfd";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10n": rain_icon,
    "10d": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
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
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
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
