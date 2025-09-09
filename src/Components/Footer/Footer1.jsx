import React, { useEffect } from "react";
import { Link } from "react-router";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer className="footer-section" aria-label="Website Footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Column 1 - Logo + About */}
          <div className="footer-col">
            <img
              src="/1global1.png"
              alt="1 Global Enterprises Logo"
              className="footer-logo"
            />

            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              1 Global Enterprises Pte Ltd is a Singapore head quartered
              business group having interest in Shipping, Logistics/Supply
              chain, Product distribution, Software development/IT, Renewal
              energy supplies/clean energy and trading.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="Twitter/X"><i className="bi bi-twitter-x" /></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/corporate-sustainability">Corporate Sustainability</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">
              1 Global Enterprises Pte Ltd <br />
              #03-01, Keppel Distripark, <br />
              511 Kampong Bahru Road, <br />
              Singapore 099447
            </p>
            <p className="footer-text">
              <a className="footer-link" href="mailto:jp@1ge.sg">jp@1ge.sg</a>
            </p>
            <p className="footer-text">
              <a className="footer-link" href="tel:+6569080838">+65 69080838</a> <br />
              <a className="footer-link" href="tel:+6569080849">+65 69080849</a> <br />
              <a className="footer-link" href="tel:+6598177292">+65 98177292</a>
            </p>

            <div className="footer-tags">
              <span>ISO Certified</span>
              <span>Green Logistics</span>
              <span>Global Network</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 1 Global Enterprises, All Rights Reserved.</p>
          <ul>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy & Environmental Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .footer-section {
          background: #000;
          position: relative;
          padding: 60px 0 30px;
          color: #fff;
        }
        .footer-section .container {
          position: relative;
          z-index: 1;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr; /* FIXED tighter spacing */
          gap: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 992px) {
          .footer-main {
            grid-template-columns: 1fr 1fr; /* 2 columns on tablets */
          }
        }
        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr; /* 1 column on mobile */
          }
        }
        .footer-col {
          padding: 0;
        }
        .footer-logo {
          max-height: 60px;
          margin-bottom: 16px;
        }
        .footer-heading {
          font-size: 20px;
          font-weight: 700;
          margin: 12px 0;
          color: #fff;
        }
        .footer-text {
          color: #fff;
          opacity: 0.9;
          line-height: 1.7;
          margin: 0 0 12px 0;
        }
        .footer-social a {
          margin: 0 6px 0 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          transition: opacity .25s ease;
        }
        .footer-social a:hover { opacity: 0.8; }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li { margin: 8px 0; }
        .footer-links a {
          color: #fff;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity .25s ease;
        }
        .footer-links a:hover { opacity: 1; }

        .footer-link {
          color: #fff;
          text-decoration: none;
          opacity: 0.9;
        }
        .footer-link:hover { opacity: 1; }

        .footer-tags span {
          display: inline-block;
          margin: 6px 6px 0 0;
          padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 20px;
          font-size: 14px;
          color: #fff;
          opacity: 0.9;
        }
        .footer-bottom ul {
          display: flex;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-bottom a {
          color: #fff;
          text-decoration: none;
          opacity: 0.9;
        }
        .footer-bottom a:hover { opacity: 1; }
      `}</style>
    </footer>
  );
};

export default Footer1;
