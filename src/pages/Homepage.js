// Import necessary hooks and modules from React and React Router
import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Import styles and components
import "../styles.css";
import "../css/Homepage.css";
import CityCard from "../components/CityCard";

function HomePage() {
  const navigate = useNavigate(); // Hook for navigation
  const aboutRef = useRef(null); // Ref to scroll to the About section

  // Scroll function to smoothly scroll to the About section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // List of top tourist cities with their routes, images, and titles
  const topCities = [
    { path: "/city/Jeddah", image: "/images/Jeddah/jed.jpeg", title: "Jeddah" },
    {
      path: "/city/Riyadh",
      image: "/images/Riyadh/riy1.jpeg",
      title: "Riyadh",
    },
    {
      path: "/city/Madinah",
      image: "/images/Madinah/Madinah.jpeg",
      title: "Madinah",
    },
    {
      path: "/city/Makkah",
      image: "/images/Makkah/Makkah.jpeg",
      title: "Makkah",
    },
    { path: "/city/AlUla", image: "/images/AlUla/alula.jpeg", title: "AlUla" },
  ];

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with validation and API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.email.includes("@") ||
      formData.message.length < 10
    ) {
      alert("Please fill in all required fields correctly.");
      return;
    }
    // Submit form data using Formspree
    try {
      const response = await fetch("https://formspree.io/f/mvgakwdw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setSubmitted(true);
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          interest: "",
          message: "",
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Submission error:", error);
    }
  };

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
                <CityCard
                  image={city.image}
                  title={city.title}
                  className="home-city-card"
                />
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="contact">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Interested in</option>
                <option value="Tourism">Tourism</option>
                <option value="Business">Business</option>
                <option value="Investment">Investment</option>
              </select>
              <textarea
                name="message"
                placeholder="Message (at least 10 characters)"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
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
