import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityPage from "./pages/CityPage";
import Footer from "./components/Footer";
import Cities from "./pages/Cities";
import Navbar from "./components/Navbar";
import FAQs from "./pages/FAQ";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/FAQ" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
