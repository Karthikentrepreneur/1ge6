// src/Components/About/AboutSimple.jsx
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const AboutSimple = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: '56px 0 24px', overflow: 'hidden' }}
    >
      <style>{`
        .about-wrapper { width: 100%; }

        /* Add gap between image & content */
        @media (min-width: 992px) {
          .about-photo-wrap { margin-right: 40px; }
        }

        /* Team Image */
        .about-photo-wrap { width: 100%; text-align: center; }
        .about-photo {
          width: min(100%, 940px);
          height: auto;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 16px 50px rgba(0,0,0,.24);
          transform: scale(1.03);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .about-photo:hover {
          transform: scale(1.07);
          box-shadow: 0 22px 66px rgba(0,0,0,.26);
        }

        /* Section content */
        .about-content .section-title h2 {
          margin-bottom: 18px;
        }

        /* Full teal circle icons */
        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .about-items .icon {
          position: relative;
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 50%;
          background-color: #26B6E0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }

        .about-items .icon img {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
        }

        .about-items:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 29px;
          top: 60px;
          width: 2px;
          height: calc(100% - 30px);
          background: repeating-linear-gradient(
            to bottom,
            #26B6E0,
            #26B6E0 4px,
            transparent 4px,
            transparent 8px
          );
          z-index: 0;
        }

        .about-items .content h5 {
          font-weight: 700;
          margin-bottom: 4px;
          color: #0E0F2C;
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.5;
          color: #444;
          font-size: 15px;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .about-photo { width: min(100%, 860px); transform: scale(1.02); }
        }
        @media (max-width: 991px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Image */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img
                  src="/team.jpg"
                  alt="1 Global Enterprises Group"
                  className="about-photo"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Expertise" />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring sustainability,
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
