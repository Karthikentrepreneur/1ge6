import React, { useEffect } from "react";
import { Link } from "react-router";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer
      className="footer-section bg-cover"
      data-background="/footer.png"
      aria-label="Website Footer"
    >
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Column 1 - Logo + Newsletter */}
          <div className="footer-col">
            <img src="/1global1.png" alt="1 Global Enterprises Logo" className="footer-logo" />
            <h3 className="footer-heading">Subscribe Newsletter</h3>
            <p className="footer-subtext">Get our latest deals and updates</p>
            <form className="footer-input" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe →</button>
            </form>

            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
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
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <p>
              1 Global Enterprises Pte Ltd <br />
              #03-01, Keppel Distripark, <br />
              511 Kampong Bahru Road, <br />
              Singapore 099447
            </p>
            <p><a href="mailto:jp@1ge.sg">jp@1ge.sg</a></p>
            <p>
              <a href="tel:+6569080838">+65 69080838</a> <br />
              <a href="tel:+6569080849">+65 69080849</a> <br />
              <a href="tel:+6598177292">+65 98177292</a>
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
          background: url('/footer.png') center/cover no-repeat;
          position: relative;
          padding: 60px 0 30px;
          color: #fff;
        }
        .footer-section::before {
          content: "";
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(8px);
        }
        .footer-section .container {
          position: relative;
          z-index: 2;
        }
        .footer-main {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-col {
          background: rgba(255, 255, 255, 0.05);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        }
        .footer-logo {
          max-height: 60px;
          margin-bottom: 20px;
        }
        .footer-heading {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
          position: relative;
        }
        .footer-subtext {
          font-size: 14px;
          margin-bottom: 16px;
          color: #ccc;
        }
        .footer-input {
          display: flex;
          margin-bottom: 16px;
        }
        .footer-input input {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 8px 0 0 8px;
          outline: none;
        }
        .footer-input button {
          padding: 10px 16px;
          background: linear-gradient(135deg, #4f8df9, #2a66f0);
          border: none;
          border-radius: 0 8px 8px 0;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
        .footer-social a {
          margin: 0 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #222;
          color: #fff;
          transition: all .3s ease;
        }
        .footer-social a:hover {
          background: #2a66f0;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links li {
          margin: 8px 0;
        }
        .footer-links a {
          color: #ddd;
          text-decoration: none;
          transition: color .3s ease;
        }
        .footer-links a:hover {
          color: #2a66f0;
        }
        .footer-tags span {
          display: inline-block;
          margin: 5px 6px 0 0;
          padding: 5px 12px;
          background: #2a66f0;
          color: #fff;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          font-size: 14px;
          color: #aaa;
        }
        .footer-bottom ul {
          display: flex;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-bottom a {
          color: #ddd;
          text-decoration: none;
          transition: color .3s ease;
        }
        .footer-bottom a:hover {
          color: #2a66f0;
        }
      `}</style>
    </footer>
  );
};

export default Footer1;
