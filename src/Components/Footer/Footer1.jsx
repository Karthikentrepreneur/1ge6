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
              <div className="single-widget-items text-center">
                <div className="widget-head">
                  <a href="#">
                    <img
                      src="/assets/img/logo/1global1.png"
                      alt="1 Global Enterprises Logo"
                      style={{ maxHeight: '120px', width: 'auto' }} // shrink logo
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
                <div className="contact-info footer-text">
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
        <div className="footer-bottom footer-text">
          <div className="footer-wrapper">
            <p className="wow fadeInUp" data-wow-delay=".3s">
              Copyright © <span>1 Global Enterprises,</span> All Rights Reserved.
            </p>
            <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
              <li>Terms of Use</li>
              <li>Privacy & Environmental Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Styling */}
      <style>{`
        .footer-section .footer-links a,
        .footer-section .footer-text,
        .footer-section .footer-text a {
          color: black !important;
        }
        .footer-section .footer-links a:hover,
        .footer-section .footer-text a:hover {
          color: #007bff !important; /* blue hover */
        }
      `}</style>
    </footer>
  );
};

export default Footer1;
