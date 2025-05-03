import React, { useState } from "react";
import "../css/FAQs.css";

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
      "You can use the Contact Us page and it will direct you to our website's WhatsApp chat. to send feedback, suggest a place, or ask for help. We usually respond within 48 hours.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions (FAQs)</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggle(index)}>
            {faq.question}
            <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
