import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Event Management System</h1>
      <p>Creating smile in every face.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Getting Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          About Us <i className="fa fa-play-circle" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
