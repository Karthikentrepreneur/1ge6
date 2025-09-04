import React, { useEffect } from 'react';
import { Link } from 'react-router';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer
      className="footer-section fix bg-cover"
      data-background="/footer.png"
      aria-label="Website Footer"
      style={{ backgroundImage: 'url(/footer.png)' }} // hard fallback so bg is guaranteed
    >
      {/* Top CTA Strip */}

      <div className="container">
        <div className="footer-widget-wrapper-new">
          <div className="row g-row">
            {/* LOGO + Newsletter */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-widget-items text-center black-box cardish">
                <div className="widget-head">
                  <a href="#" aria-label="1 Global Enterprises Home">
                    <img
                      src="/1global1.png"
                      alt="1 Global Enterprises Logo"
                      className="footer-logo"
                    />
                  </a>
                </div>

                <div className="footer-content">
                  <h3 className="fw-600">Subscribe Newsletter</h3>
                  <p>Get our latest deals and updates</p>
                  <form
                    className="footer-input"
                    onSubmit={(e) => e.preventDefault()}
                    aria-label="Newsletter subscription form"
                  >
                    <input
                      type="email"
                      id="email2"
                      placeholder="Your email address"
                      aria-label="Your email address"
                    />
                    <button
                      className="newsletter-btn theme-btn"
                      type="submit"
                      aria-label="Subscribe to newsletter"
                    >
                      Subscribe <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>

                  {/* SOCIAL ICONS */}
                  <div className="social-icon d-flex align-items-center justify-content-center">
                    <a href="#" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="X (Twitter)">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-widget-items cardish">
                <div className="widget-head">
                  <h4 className="footer-title">Quick Links</h4>
                </div>
                <ul className="list-items footer-links two-col">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/activities">Activities</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* CONTACT US */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-widget-items cardish">
                <div className="widget-head">
                  <h4 className="footer-title">Contact Us</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        1 Global Enterprises Pte Ltd <br />
                        #03-01, Keppel Distripark, <br />
                        511 Kampong Bahru Road, <br />
                        Singapore 099447
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="mailto:jp@1ge.sg">jp@1ge.sg</a>
                      </h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="tel:+6569080838">+65 69080838</a>
                        <br />
                        <a href="tel:+6569080849">+65 69080849</a>
                        <br />
                        <a href="tel:+6598177292">+65 98177292</a>
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Small badges/labels */}
                <ul className="badges">
                  <li>ISO Certified</li>
                  <li>Green Logistics</li>
                  <li>Global Network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p className="footer-copy">
              Copyright © <span>1 Global Enterprises</span>, All Rights Reserved.
            </p>
            <ul className="bottom-list">
              <li>
                <Link to="/terms">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Environmental Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="bi bi-chevron-up"></i>
      </button>

      {/* Styles */}
      <style>{`
        /* ---------- Foundation ---------- */
        .footer-section {
          position: relative;
          color: #0a0a0a;
          background: transparent;        /* show background image */
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        /* SOFTER overlay so image is visible */
        .footer-section::before{
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.75) 0%,
            rgba(255,255,255,0.85) 35%,
            rgba(255,255,255,0.95) 100%
          );
          pointer-events: none;
        }
        .footer-section > .container, .footer-cta .container { position: relative; z-index: 1; }

        /* ---------- CTA Strip ---------- */
        .footer-cta {
          background: linear-gradient(90deg, #0d0d0d 0%, #1f1f1f 100%);
          color: #fff;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cta-wrap {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          flex-wrap: wrap;
        }
        .cta-wrap h3 {
          margin: 0; font-weight: 700; letter-spacing: 0.2px;
        }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ffffff; color: #0d0d0d !important;
          padding: 10px 16px; border-radius: 10px; font-weight: 600;
          transition: transform .2s ease, box-shadow .2s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.15);
        }
        .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 22px rgba(0,0,0,0.18); }

        /* ---------- Grid & Cards ---------- */
        .g-row { row-gap: 28px; }
        .cardish {
          background: #fff; border: 1px solid #eee; border-radius: 14px;
          padding: 22px 18px;
          box-shadow: 0 10px 28px rgba(0,0,0,0.05);
        }
        .widget-head { margin-bottom: 14px; }
        .fw-600 { font-weight: 600; }

        /* ---------- Logo box ---------- */
        .black-box {
          background: #0d0d0d;
          color: #fff !important;
        }
        .black-box .footer-logo {
          max-height: 88px; width: auto;
          background: #000; padding: 10px 12px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .black-box h3, .black-box p { color: #fff !important; }

        /* ---------- Newsletter ---------- */
        .footer-input {
          display: flex; gap: 10px; margin: 12px 0 16px;
        }
        .footer-input input {
          flex: 1; height: 44px; padding: 0 12px; border-radius: 10px;
          border: 1px solid #2b2b2b; background: #111; color: #fff;
        }
        .footer-input input::placeholder { color: #c7c7c7; }
        .newsletter-btn {
          height: 44px; padding: 0 14px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #4f8df9 0%, #2a66f0 100%);
          color: #fff; font-weight: 600;
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .newsletter-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(79,141,249,.35); }

        /* ---------- Social ---------- */
        .social-icon a {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; margin: 0 6px;
          background: #000; color: #fff !important; border-radius: 50%;
          font-size: 16px; transition: transform .2s ease, background .2s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .social-icon a:hover { transform: translateY(-2px); background: #2a66f0; }

        /* ---------- Headings & Links ---------- */
        .footer-section .footer-title {
          font-weight: 700; color: #000 !important; margin-bottom: 12px;
          position: relative; padding-bottom: 6px;
        }
        .footer-section .footer-title::after {
          content: ""; position: absolute; bottom: 0; left: 0; width: 46px; height: 3px;
          background: linear-gradient(135deg, #4f8df9 0%, #2a66f0 100%);
          border-radius: 6px;
        }
        .footer-links {
          display: grid; gap: 8px; margin-top: 10px;
        }
        .footer-links.two-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 18px;
        }
        .footer-links a {
          color: #0a0a0a; text-decoration: none; font-weight: 500;
          position: relative; padding-left: 0; transition: color .2s ease;
        }
        .footer-links a::before {
          content: "›"; position: absolute; left: -14px; opacity: 0; transition: all .2s ease;
        }
        .footer-links a:hover { color: #2a66f0; }
        .footer-links a:hover::before { left: -8px; opacity: 1; }

        /* ---------- Contact ---------- */
        .contact-info { display: grid; gap: 12px; }
        .contact-items { display: grid; grid-template-columns: 28px 1fr; gap: 10px; align-items: start; }
        .contact-items .icon i {
          color: #000 !important; font-size: 18px;
        }
        .contact-items a { color: #0a0a0a; }
        .contact-items a:hover { color: #2a66f0; }

        /* ---------- Badges ---------- */
        .badges {
          display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 0;
          list-style: none;
        }
        .badges li {
          background: #f4f6ff; color: #2a66f0; border: 1px solid #e5ecff;
          padding: 6px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;
        }

        /* ---------- Divider & Bottom ---------- */
        .footer-divider {
          border: none; height: 1px; margin: 22px 0 10px;
          background: linear-gradient(90deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02), rgba(0,0,0,0.08));
        }
        .footer-bottom .footer-wrapper {
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
          padding: 8px 0 18px;
        }
        .footer-copy { margin: 0; color: #000 !important; }     /* force black */
        .footer-copy span { font-weight: 700; color: #000 !important; }
        .bottom-list { display: flex; gap: 18px; margin: 0; padding: 0; list-style: none; }
        .bottom-list a { color: #0a0a0a; font-weight: 500; }
        .bottom-list a:hover { color: #2a66f0; }

        /* ---------- Back to Top ---------- */
        .back-to-top {
          position: fixed; right: 18px; bottom: 18px; z-index: 10;
          width: 42px; height: 42px; border-radius: 12px; border: none;
          display: inline-flex; align-items: center; justify-content: center;
          background: #0d0d0d; color: #fff; cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .back-to-top:hover { transform: translateY(-2px); background: #2a66f0; box-shadow: 0 12px 26px rgba(42,102,240,.35); }

        /* ---------- Responsive ---------- */
        @media (max-width: 1199px) {
          .footer-links.two-col { grid-template-columns: 1fr; }
        }
        @media (max-width: 575px) {
          .cta-wrap { align-items: flex-start; }
          .cta-wrap h3 { font-size: 18px; }
        }

        /* Keep your requested black text for key areas */
        .footer-section, 
        .footer-section a, 
        .footer-section h4, 
        .footer-section h6 {
          color: black !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer1;
