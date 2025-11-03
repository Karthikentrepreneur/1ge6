// src/Components/About/AboutSimple.jsx
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Users2, Globe2, BadgeCheck } from "lucide-react";

const AboutSimple = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: "56px 0 24px", overflow: "hidden" }}
    >
      <style>{`
        :root { --accent:#26B6E0; --ink:#0E0F2C; --muted:#444; }

        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }

        /* ===== IMAGE EXACT SIZE (no white frame, full proportion) ===== */
        .about-photo-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-photo {
          width: 100%;
          max-width: 920px; /* tuned for perfect match to your screenshot */
          height: auto;
          border-radius: 12px; /* subtle rounded edge */
          object-fit: cover; /* fills horizontally like screenshot */
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }

        /* Keep proportional on large screens */
        @media (min-width: 1600px) {
          .about-photo { max-width: 1080px; }
        }

        /* Tablets */
        @media (max-width: 1199px) {
          .about-photo { max-width: 100%; border-radius: 10px; }
        }

        /* Mobile: full width, smaller radius */
        @media (max-width: 768px) {
          .about-photo { width: 100%; border-radius: 8px; }
        }

        /* ===== RIGHT CONTENT ===== */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .about-items {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .about-items .icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 50%;
          background-color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }

        .about-items .icon svg { width: 28px; height: 28px; color: #fff; }
        .about-items .content h5 { font-weight: 800; margin-bottom: 6px; color: var(--ink); }
        .about-items .content p { margin: 0; line-height: 1.5; color: var(--muted); font-size: 15px; }

        /* Connector line only on desktop */
        .about-items:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 29px;
          top: 60px;
          width: 2px;
          height: calc(100% - 30px);
          background: repeating-linear-gradient(
            to bottom,
            var(--accent),
            var(--accent) 4px,
            transparent 4px,
            transparent 8px
          );
          z-index: 0;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .about-wrapper .row { flex-direction: column; gap: 22px; }
          .about-items { gap: 14px; margin-bottom: 22px; }
          .about-items .icon { width: 52px; height: 52px; }
          .about-items .icon svg { width: 22px; height: 22px; }
          .about-items:not(:last-child)::after { content: none !important; }
          .about-items .content p { font-size: 14px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img
                  src="/team.jpg"
                  alt="1 Global Enterprises Group"
                  className="about-photo"
                />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
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
                        Each business unit is led by experts ensuring sustainability,
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
