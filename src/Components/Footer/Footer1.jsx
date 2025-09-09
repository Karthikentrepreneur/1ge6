import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer1: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">

        {/* Top / Main */}
        <div className="grid">
          {/* Brand + Newsletter */}
          <section aria-label="Subscribe Newsletter" className="col">
            <img src="/1global1.png" alt="1 Global Enterprises" className="logo" />
            <h3 className="h3">Subscribe Newsletter</h3>
            <p className="muted">Get our latest deals and updates</p>

            <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
              />
              <button type="submit">Subscribe →</button>
            </form>

            <div className="social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="X (Twitter)"><FaXTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </section>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="col">
            <h4 className="h4">Quick Links</h4>
            <ul className="links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="col" aria-label="Contact Us">
            <h4 className="h4">Contact Us</h4>

            <div className="item">
              <FaMapMarkerAlt className="ico" aria-hidden />
              <div>
                1 Global Enterprises Pte Ltd<br />
                #03-01, Keppel Distripark,<br />
                511 Kampong Bahru Road,<br />
                Singapore 099447
              </div>
            </div>

            <div className="item">
              <FaEnvelope className="ico" aria-hidden />
              <a href="mailto:jp@1ge.sg">jp@1ge.sg</a>
            </div>

            <div className="item">
              <FaPhone className="ico" aria-hidden />
              <div className="phones">
                <a href="tel:+6569080838">+65 69080838</a>
                <a href="tel:+6569080849">+65 69080849</a>
                <a href="tel:+6598177292">+65 98177292</a>
              </div>
            </div>

            <div className="tags">
              <span>ISO Certified</span>
              <span>Green Logistics</span>
              <span>Global Network</span>
            </div>
          </address>
        </div>

        {/* Divider */}
        <hr className="divide" />

        {/* Bottom bar */}
        <div className="bottom">
          <p>© 1 Global Enterprises, All Rights Reserved.</p>
          <ul>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy & Environmental Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Base */
        .footer {
          background: #0b0b0b;     /* pure black base */
          color: #ffffff;          /* all text white */
          padding: 56px 0 28px;
        }
        .container {
          width: min(1200px, 92%);
          margin: 0 auto;
        }

        /* Grid – one unified panel (no boxes) */
        .grid {
          display: grid;
          grid-template-columns: 1.1fr .7fr 1fr;
          gap: 42px;
          align-items: start;
        }
        @media (max-width: 992px) {
          .grid { grid-template-columns: 1fr; gap: 28px; }
        }

        .col { /* columns share same base spacing, no backgrounds */
          padding: 4px 0;
        }

        /* Headings */
        .h3 { font-size: 22px; font-weight: 800; margin: 10px 0 6px; }
        .h4 { font-size: 18px; font-weight: 800; margin: 6px 0 14px; }

        .muted { color: rgba(255,255,255,0.7); }

        /* Logo */
        .logo { max-height: 56px; width: auto; display: block; margin-bottom: 12px; }

        /* Subscribe */
        .subscribe { display: flex; gap: 10px; margin: 12px 0 14px; }
        .subscribe input {
          flex: 1;
          height: 46px;
          background: #141414;
          border: 1px solid #2a2a2a;
          color: #fff;
          border-radius: 12px;
          padding: 0 14px;
          outline: none;
        }
        .subscribe input::placeholder { color: rgba(255,255,255,0.65); }
        .subscribe button {
          height: 46px;
          padding: 0 16px;
          font-weight: 700;
          border: 0;
          border-radius: 12px;
          cursor: pointer;
          color: #fff;
          background: linear-gradient(135deg, #4f8df9, #2a66f0);
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .subscribe button:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(42,102,240,.35); }

        /* Social */
        .social { display: flex; gap: 10px; margin-top: 6px; }
        .social a {
          width: 40px; height: 40px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: #151515;
          border: 1px solid #2a2a2a;
          color: #fff;
          font-size: 16px;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .social a:hover { transform: translateY(-2px); background: #1f1f1f; border-color: #2f6af5; }

        /* Links */
        .links { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .links a {
          color: #ffffff;
          text-decoration: none;
          opacity: .9;
          transition: opacity .15s ease, color .15s ease, transform .15s ease;
        }
        .links a:hover { color: #62a0ff; transform: translateX(2px); }

        /* Contact items */
        .item { display: grid; grid-template-columns: 24px 1fr; gap: 10px; margin: 10px 0; }
        .ico { font-size: 18px; margin-top: 2px; }
        .phones { display: grid; gap: 4px; }
        .col a { color: #fff; text-decoration: none; opacity: .9; }
        .col a:hover { color: #62a0ff; opacity: 1; }

        /* Tags */
        .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .tags span {
          display: inline-block;
          font-size: 12px; font-weight: 700;
          padding: 6px 12px;
          border-radius: 999px;
          background: #111;
          border: 1px solid #2a2a2a;
          color: #fff;
        }

        /* Divider & bottom */
        .divide {
          height: 1px; border: 0; margin: 28px 0 14px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.2), rgba(255,255,255,0.06));
        }
        .bottom {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.85);
        }
        .bottom ul { list-style: none; display: flex; gap: 18px; padding: 0; margin: 0; }
        .bottom a { color: #fff; opacity: .9; text-decoration: none; }
        .bottom a:hover { color: #62a0ff; opacity: 1; }
      `}</style>
    </footer>
  );
};

export default Footer1;
