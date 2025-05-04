import React from "react";
import "../styles.css";
import UpperImage from "../components/UpperImage";
import CityCard from "../components/CityCard";
import Map from "../components/Map";
import "../css/Cities.css";
import { Link } from "react-router-dom";

function Cities() {
  const popularCities = [
    {
      path: "/city/Jeddah",
      image: "/images/Jeddah/jed.jpeg",
      subtitle: "Jeddah",
      title: "Jeddah City",
    },
    {
      path: "/city/Riyadh",
      image: "/images/Riyadh/riy1.jpeg",
      subtitle: "Riyadh",
      title: "Riyadh City",
    },
    {
      path: "/city/AlUla",
      image: "/images/AlUla/alula.jpeg",
      subtitle: "AlUla",
      title: "AlUla City",
    },
  ];

  const allCities = [
    ...popularCities,
    {
      path: "/city/Makkah",
      image: "/images/Makkah/Makkah.jpeg",
      subtitle: "Makkah",
      title: "Makkah City",
    },
    {
      path: "/city/Madinah",
      image: "/images/Madinah/Madinah.jpeg",
      subtitle: "Madinah",
      title: "Madinah City",
    },
  ];

  return (
    <>
      <UpperImage title="Cities" backgroundImage={"/images/Jeddah/img.jpg"} />

      <div className="title">
        <h1>Popular Destinations</h1>
      </div>

      <div className="maps-container">
        <div className="cities-sidebar">
          {popularCities.map((city, i) => (
            <div key={i} className="city">
              <Link to={city.path}>
                <CityCard
                  image={city.image}
                  subtitle={city.subtitle}
                  title={city.title}
                  className="cities-city-card"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="map-cities">
          <Map />
        </div>
      </div>

      <div className="title">
        <h1>All Destinations</h1>
      </div>

      <div className="Allcities">
        {allCities.map((city, i) => (
          <div key={i} className="city">
            <Link to={city.path}>
              <CityCard
                image={city.image}
                subtitle={city.subtitle}
                title={city.title}
                className="cities-city-card"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cities;
