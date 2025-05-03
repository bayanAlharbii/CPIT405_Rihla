import React from "react";

function CityCard(props) {
  return (
    <div className="city-card">
      <img src={props.image} alt={props.subtitle} />
      <p> {props.title}</p>
    </div>
  );
}

export default CityCard;
