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
    >
      <div className="container">
        <div className="footer-widget-wrapper-new">
          <div className="row g-row">
            {/* LOGO + Newsletter */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
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
                  <form className="footer-input" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter subscription form">
                    <input type="email" id="email2" placeholder="Your email address" aria-label="Your email address" />
                    <button className="newsletter-btn theme-btn" type="submit" aria-label="Subscribe to newsletter">
                      Subscribe <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>

                  {/* SOCIAL ICONS */}
                  <div className="social-icon d-flex align-items-center justify-content-center">
                    <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-widget-items cardish">
                <div className="widget-head">
                  <h4 className="footer-title">Quick Links</h4>
                </div>
                <ul className="list-items footer-links two-col">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* CONTACT US */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-widget-items cardish">
                <div className="widget-head">
                  <h4 className="footer-title">Contact Us</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-items">
                    <div className="icon"><i className="bi bi-geo-alt-fill"></i></div>
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
                    <div className="icon"><i className="bi bi-envelope-fill"></i></div>
                    <div className="content">
                      <h6><a href="mailto:jp@1ge.sg">jp@1ge.sg</a></h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon"><i className="bi bi-telephone-fill"></i></div>
                    <div className="content">
                      <h6>
                        <a href="tel:+6569080838">+65 69080838</a><br />
                        <a href="tel:+6569080849">+65 69080849</a><br />
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
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy & Environmental Policy</Link></li>
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
        .footer-section {
          position: relative;
          color: #0a0a0a;
          background: url('/footer.png') no-repeat center center / cover;
          overflow: hidden;
        }
        /* Remove the white overlay */
        .footer-section::before{
          display: none;
        }
        .footer-section > .container { position: relative; z-index: 1; }

        /* Add a subtle dark overlay to improve text contrast */
        .footer-section::after {
          content: "";
          position: absolute; inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 0;
        }

        .cardish, .black-box {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </footer>
  );
};

export default Footer1;
