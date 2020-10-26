import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="photos/1.jpg"
              text="Wedding Ceremony"
              label="Wedding"
              path="./services"
            />
            <CardItem
              src="photos/3.jpg"
              text="Birthday Ceremony"
              label="Birthday"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="photos/4.jpg"
              text="Theme Parties"
              label="Party"
              path="./services"
            />
            <CardItem
              src="photos/1.jpg"
              text="Wedding Anniversary"
              label="Anniversary"
              path="./services"
            />
            <CardItem
              src="photos/2.jpg"
              text="Get together"
              label="Re-Union"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="photos/3.jpg"
              text="Family Events"
              label="Family Meeting"
              path="./services"
            />
            <CardItem
              src="photos/4.jpg"
              text="Picnic"
              label="Picnic"
              path="./services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
