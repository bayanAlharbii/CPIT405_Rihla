import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";
import "../css/Homepage.css";
import CityCard from "../components/CityCard";
import jedImg from "../images/jed.jpeg";
import riyImg from "../images/riy1.jpeg";
import madImg from "../images/Madinah.jpeg";
import makImg from "../images/Makkah.jpeg";
import alulaImg from "../images/alula.jpeg";

function HomePage() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const topCities = [
    { path: "/city/Jeddah", image: jedImg, title: "Jeddah" },
    { path: "/city/Riyadh", image: riyImg, title: "Riyadh" },
    { path: "/city/Madinah", image: madImg, title: "Madinah" },
    { path: "/city/Makkah", image: makImg, title: "Makkah" },
    { path: "/city/AlUla", image: alulaImg, title: "AlUla" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url("images/HomepagePic/heroPic.jpg")` }}
      >
        <div className="hero-overlay">
          <h1>Discover the Magic of Saudi Arabia</h1>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/cities")}>
              Start Exploring
            </button>
            <button className="btn-secondary" onClick={scrollToAbout}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <main className="homePage">
        {/* About Section */}
        <section className="about" ref={aboutRef}>
          <h2>About Saudi Arabia</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Saudi Arabia, the heart of the Arab world, offers rich culture,
                ancient heritage, and breathtaking landscapes waiting to be
                explored. From the vibrant city life of Riyadh and Jeddah to the
                historical wonders of AlUla and Makkah, Saudi Arabia provides a
                unique blend of modernity and tradition.
              </p>
              <p>
                With ongoing efforts to diversify its economy and promote
                tourism through Vision 2030, the Kingdom is opening its doors to
                the world. Visitors can experience authentic Arabian
                hospitality, stunning desert adventures, and spiritual journeys
                unlike anywhere else.
              </p>
            </div>
            <div className="about-image">
              <img
                src="images/HomepagePic/madinah.avif"
                alt="About Saudi Arabia"
              />
            </div>
          </div>
        </section>

        {/* Top Tourist Cities */}
        <section className="top-cities">
          <h2>Top Tourist Cities</h2>
          <div className="scroll-row">
            {topCities.map((city, i) => (
              <Link key={i} to={city.path}>
                <CityCard image={city.image} title={city.title} />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Country" />
              <select>
                <option>Interested in</option>
                <option>Tourism</option>
                <option>Business</option>
                <option>Investment</option>
              </select>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>

            <div className="contact-image">
              <img src="/images/HomepagePic/conact.avif" alt="Contact Us" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
