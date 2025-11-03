// src/Components/About/About1.jsx
import React, { useEffect } from "react";
import { Users2, Globe2, BadgeCheck } from "lucide-react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: "28px 0 0", overflow: "hidden" }}
    >
      <style>{`
        :root {
          --accent:#26B6E0;
          --ink:#0E0F2C;
          --muted:#444;
        }

        .about-section {
          overflow-x: hidden;
          background: #fff;
        }

        .about-wrapper { width: 100%; }

        .about-image-col { padding-right: 16px; }
        .about-photo-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-photo {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
          border-radius: 12px;
          border: 2px solid #e6eef3;
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
          background: #fff;
        }

        .about-text-col { padding-left: 16px; position: relative; z-index: 2; }

        .about-content .section-title h2 {
          margin-bottom: 16px;
          color: var(--ink);
          font-weight: 800;
          font-size: 34px;
          line-height: 1.15;
        }

        .about-items {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
        }
        .about-items:last-child { margin-bottom: 0; }

        .about-items .icon {
          width: 54px;
          height: 54px;
          min-width: 54px;
          border-radius: 50%;
          background-color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(38,182,224,.35);
        }
        .about-items .icon svg {
          width: 24px;
          height: 24px;
          color: #fff;
        }
        .about-items .content h5 {
          font-weight: 800;
          margin: 2px 0 6px;
          color: var(--ink);
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.55;
          color: var(--muted);
          font-size: 15.5px;
        }

        @media (max-width: 991px) {
          .about-image-col { padding-right: 0; }
          .about-text-col { padding-left: 0; margin-top: 12px; }
        }

        @media (max-width: 575px) {
          .about-content .section-title h2 { font-size: 26px; }
        }
      `}</style>

      <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="about-wrapper">
          <div className="row g-4 align-items-center mx-0">
            {/* Left Image */}
            <div className="col-lg-7 about-image-col d-flex">
              <div className="about-photo-wrap w-100">
                <img
                  src="/team1.jpg"
                  alt="1 Global Enterprises Team"
                  className="about-photo"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-5 about-text-col">
              <div className="about-content pe-lg-4 ps-lg-2 px-3 px-lg-0">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics, Distribution, IT, Clean Energy &amp; Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><Globe2 /></div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><BadgeCheck /></div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring sustainability, execution &amp; growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed Group Companies Section */}
        </div>
      </div>
    </section>
  );
};

export default About1;
