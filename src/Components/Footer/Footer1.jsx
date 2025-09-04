import React, { useEffect } from 'react';
import { Link } from 'react-router';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer className="footer-section fix bg-cover" data-background="/footer.png">
      <div className="container">
        <div className="footer-widget-wrapper-new">
          <div className="row">
            {/* LOGO + Newsletter */}
            <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-widget-items text-center black-box">
                <div className="widget-head">
                  <a href="#">
                    <img
                      src="/one-globe.png"
                      alt="1 Global Enterprises Logo"
                      style={{
                        maxHeight: '100px',
                        width: 'auto',
                        background: 'white',
                        padding: '8px',
                        borderRadius: '6px'
                      }}
                    />
                  </a>
                </div>
                <div className="footer-content">
                  <h3>Subscribe Newsletter</h3>
                  <p>Get Our Latest Deals and Update</p>
                  <div className="footer-input">
                    <input type="email" id="email2" placeholder="Your email address" />
                    <button className="newsletter-btn theme-btn" type="submit">
                      Subscribe <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center justify-content-center">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/team">Our Team</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>

            {/* CONTACT US */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-widget-items">
                <div className="widget-head">
                  <h4>Contact Us</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="content">
                      <h6 className="footer-address">
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
                      <h6><a href="mailto:jp@1ge.sg">jp@1ge.sg</a></h6>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="tel:+6569080838">+65 69080838</a> <br />
                        <a href="tel:+6569080849">+65 69080849</a> <br />
                        <a href="tel:+6598177292">+65 98177292</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p className="footer-copy">
              Copyright © <span>1 Global Enterprises,</span> All Rights Reserved.
            </p>
            <ul className="bottom-list">
              <li>Terms of Use</li>
              <li>Privacy & Environmental Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* All footer text black except inside black box */
        .footer-section {
          color: black !important;
        }
        .footer-section a {
          color: black !important;
        }
        .footer-section a:hover {
          color: #007bff !important;
        }

        /* Address, copyright, and bottom links forced black */
        .footer-section .footer-address,
        .footer-section .footer-copy,
        .footer-section .bottom-list li,
        .footer-section .bottom-list li a {
          color: black !important;
        }

        /* Inside black box keep white */
        .footer-section .black-box {
          color: white !important;
        }
        .footer-section .black-box a {
          color: white !important;
        }
        .footer-section .black-box a:hover {
          color: #00bfff !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer1;
