import React, { useState } from "react";

import "../css/FAQs.css";

export default function FAQs() {
  const faqData = [
    {
      question: "🌍 What is this website about?",
      answer:
        "This website provides information for major cities in Saudi Arabia, including tourist attractions, dining spots, cultural experiences, and more.",
    },
    {
      question: "🏙 Which cities are covered?",
      answer:
        "We currently cover popular destinations such as Riyadh, Jeddah, Makkah, Madinah, Abha, AlUla — with new cities added regularly.",
    },
    {
      question: "📸 What types of tourist attractions does the site display?",
      answer:
        " We display a wide range of places including historical landmarks, natural parks, museums, shopping centers, beaches, and entertainment venues.",
    },

    {
      question: "🧭 How do I plan a trip using this website?",
      answer:
        "Use our city pages to explore top attractions, and check maps and suggested itineraries.You can also enter each available city and you will see a list of the most important tourist attractions in the city, as well as the festivals and events held there.",
    },
    {
      question: "📆 How often is the information updated?",
      answer:
        "Our content is reviewed and updated regularly by our editorial team and community contributors to ensure accuracy and relevance.",
    },
    {
      question: "📩 How can I contact the team?",
      answer:
        "You can click on the 'Contact Us' field located in the main bar at the top of the page and it will take you directly to the Contact Us section where you can send feedback, suggest a place, or ask for help. We usually respond within 48 hours.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-banner">
        <img
          src="images/FAQ_img/faq_Rimg.jpg"
          alt="FAQs top image"
          className="faq-image"
        />
        <h1 className="faq-title">Frequently Asked Questions (FAQs)</h1>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{item.question}</h2>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
