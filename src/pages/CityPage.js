import React from "react";
import { useParams } from "react-router-dom";
import cities from "../data/citiesData";
import CityCard from "../components/CityCard";
import Weather from "../components/Weather";
import UpperImage from "../components/UpperImage";

function CityPage() {
  const { cityName } = useParams(); // call the function useParams() to return the name of city
  let city;
  for (let i = 0; i < cities.length; i++) {
    //loop to find city in citiesData file
    if (cities[i].name.toLowerCase() === cityName.toLowerCase()) {
      city = cities[i]; // the object that contain city info
      break;
    }
  }

  const attractions = []; // array to hold city cards
  for (let i = 0; i < city.attractions.length; i++) {
    const place = city.attractions[i]; //attractions of city
    attractions.push(
      // push into array the cityCard
      <CityCard
        image={`/images/${city.name}/${place.img}`} //path of image
        title={place.name} //title of image
        subtitle={place.alt} //alt
      />
    );
  }

  const festivals = []; // array to hold rendered city cards
  for (let i = 0; i < city.festivals.length; i++) {
    const event = city.festivals[i]; //events of city
    festivals.push(
      // push into array the cityCard
      <CityCard
        image={`/images/${city.name}/${event.img}`} //path of image
        title={event.name} //title of image
        subtitle={event.alt} //alt
      />
    );
  }

  return (
    //parnet element
    <main className="cityPage">
      <UpperImage
        backgroundImage={`/images/${city.name}/${city.headerImage}`}
        title={city.name}
      />

      <section>
        <h2>About {city.name}</h2>
        <p>{city.description}</p>
      </section>

      <section>
        <h2>Top Tourist Attractions</h2>
        <div className="grid">{attractions}</div>
      </section>

      <section>
        <h2>Events & Festivals</h2>
        <div className="grid">{festivals}</div>
      </section>

      <section>
        <h2>Weather Overview</h2>
        <Weather city={cityName} />
      </section>

      <section>
        <h2>Transportation Options</h2>
        <p>Private car</p>
        <p>Public Transportation</p>
        <p>Ride Hailing</p>
      </section>
    </main>
  );
}

export default CityPage;
