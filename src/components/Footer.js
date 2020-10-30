import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join With Us</p>
        <p className="footer-subscription-text">Creating Smile</p>
        <div className='input-areas'>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="footer-input"
          />
          <Button buttonStyle="btn--online">Submit</Button>
        </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up"> How It Works </Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Carrers</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up"> How It Works </Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Carrers</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/"> Instagram </Link>
            <Link to="/">Facebook</Link>
            <Link to="/">linkId</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              EMS <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">EMS © 2020 </small>
          <div className="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
