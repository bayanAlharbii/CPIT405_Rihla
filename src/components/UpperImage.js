import React from "react";
import "../css/UpperImage.css";

function UpperImage({ backgroundImage = "", title = "" }) {
  return (
    <div
      className="imgHeader"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="imgText">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default UpperImage;
