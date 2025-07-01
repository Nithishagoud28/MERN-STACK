import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* --- top grid ---------------------------------------------------- */}
      <div className="footer__grid">
        {/* brand / about */}
        <div className="footer__col footer__brand">
          <div className="brand__name">
            <span className="brand__logo">🎓</span>
            TheDev&nbsp;School
          </div>
          <p className="brand__tagline">
            Empowering careers through quality education and industry‑focused
            training for over a decade.
          </p>

          <div className="brand__socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* quick links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/placements">Placements</Link>
            </li>
            <li>
              <Link to="/batches">Batches</Link>
            </li>
            <li>
              <Link to="/about">Aboutus</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* courses */}
        <div className="footer__col">
          <h4 className="footer__heading">Courses</h4>
          <ul className="footer__list">
            <li>Data Science</li>
            <li>FullStack Development</li>
            <li>Cloud Computing</li>
            <li>Artificial Intelligence</li>
            <li>DevOps</li>
            <li>
              <Link to="/courses">View All Courses</Link>
            </li>
          </ul>
        </div>

        {/* newsletter */}
        <div className="footer__col">
          <h4 className="footer__heading">Newsletter</h4>
          <p className="newsletter__text">
            Subscribe to our newsletter for the latest updates and offers.
          </p>

          <form
            className="newsletter__form"
            onSubmit={(e) => {
              e.preventDefault();
              /* handle submit */
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email"
            />
            <button type="submit" aria-label="Subscribe">
              <FaPaperPlane />
            </button>
          </form>

          <small className="newsletter__legal">
            By subscribing, you agree to our&nbsp;
            <Link to="/privacy">Privacy Policy</Link> and consent to receive
            updates.
          </small>
        </div>
      </div>
    </footer>
  );
}
