import React from "react";
import UpperImage from "../components/UpperImage";
import img from "../images/img.jpg";
import CityCard from "../components/CityCard";
import Map from "../components/Map";
import "../css/Cities.css";
import { Link } from "react-router-dom";

import jedImg from "../images/jed.jpeg";
import riyImg from "../images/riy1.jpeg";
import alulaImg from "../images/alula.jpeg";
import makImg from "../images/Makkah.jpeg";
import madImg from "../images/Madinah.jpeg";
import Footer from "../components/Footer";

// function Cities() {
//   return (
//     <>
//     <UpperImage title="Cities" backgroundImage={img}/>

//     <div className="title">
//         <h1>Popular Destinations</h1>
//       </div>
//     <div className="maps-container">
//       <div className="cities-sidebar">
//         <div className="jedCity">
//         <Link to="/city/Jeddah">
//           <CityCard image={jedImg} subtitle="Jeddah" title="Jeddah City" />
//           </Link>
//         </div>
//         <div className="riyCity">
//         <Link to="/city/Riyadh">
//           <CityCard image={riyImg} subtitle="Riyadh" title="Riyadh City" />
//           </Link>
//         </div>
//         <div className="alulaCity">
//         <Link to="/city/AlUla">
//           <CityCard image={alulaImg} subtitle="AlUla" title="AlUla City" />
//           </Link>
//         </div>
//       </div>
//       <div className="map-cities">
//         <Map />
//       </div>
//     </div>
//     <div className="title">
//         <h1>All Destinations</h1>
//       </div>
//       <div className="Allcities">
//       <div className="jedCity">
//   <Link to="/city/Jeddah">
//     <CityCard image={jedImg} subtitle="Jeddah" title="Jeddah City" />
//   </Link>
// </div>
// <div className="riyCity">
//   <Link to="/city/Riyadh">
//     <CityCard image={riyImg} subtitle="Riyadh" title="Riyadh City" />
//   </Link>
// </div>
// <div className="alulaCity">
//   <Link to="/city/AlUla">
//     <CityCard image={alulaImg} subtitle="AlUla" title="AlUla City" />
//   </Link>
// </div>
// <div className="makCity">
//   <Link to="/city/Makkah">
//     <CityCard image={makImg} subtitle="Makkah" title="Makkah City" />
//   </Link>
// </div>
// <div className="madCity">
//   <Link to="/city/Madinah">
//     <CityCard image={madImg} subtitle="Madinah" title="Madinah City" />
//   </Link>
// </div>
//       </div>
//     </>
//   );
// }

// export default Cities;

function Cities() {
  const popularCities = [
    {
      path: "/city/Jeddah",
      image: jedImg,
      subtitle: "Jeddah",
      title: "Jeddah City",
    },
    {
      path: "/city/Riyadh",
      image: riyImg,
      subtitle: "Riyadh",
      title: "Riyadh City",
    },
    {
      path: "/city/AlUla",
      image: alulaImg,
      subtitle: "AlUla",
      title: "AlUla City",
    },
  ];

  const allCities = [
    ...popularCities,
    {
      path: "/city/Makkah",
      image: makImg,
      subtitle: "Makkah",
      title: "Makkah City",
    },
    {
      path: "/city/Madinah",
      image: madImg,
      subtitle: "Madinah",
      title: "Madinah City",
    },
  ];

  return (
    <>
      <UpperImage title="Cities" backgroundImage={img} />

      <div className="title">
        <h1>Popular Destinations</h1>
      </div>

      <div className="maps-container">
        <div className="cities-sidebar">
          {popularCities.map((city, index) => (
            <div key={index} className="city">
              <Link to={city.path}>
                <CityCard
                  image={city.image}
                  subtitle={city.subtitle}
                  title={city.title}
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
        {allCities.map((city, index) => (
          <div key={index} className="city">
            <Link to={city.path}>
              <CityCard
                image={city.image}
                subtitle={city.subtitle}
                title={city.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cities;
