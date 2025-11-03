// src/Components/About/AboutSimple.jsx
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Users2, Globe2, BadgeCheck } from "lucide-react";

const AboutSimple = () => {
  useEffect(() => { loadBackgroudImages(); }, []);

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: "56px 0 24px", overflow: "hidden" }}
    >
      <style>{`
        :root { --accent:#26B6E0; --ink:#0E0F2C; --muted:#444; }

        .about-section { overflow-x: hidden; }
        .about-wrapper { width: 100%; }

        /* === IMAGE FRAME & SIZING (exact look) === */
        .about-photo-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* White frame like the screenshot */
        .about-photo-frame {
          background: #fff;
          border-radius: 18px;
          padding: 18px;                 /* frame thickness */
          box-shadow: 0 18px 48px rgba(14, 24, 44, 0.18);
        }

        /* Lock image width at each desktop breakpoint (no crop, no scale tricks) */
        .about-photo {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;            /* never crop */
          object-position: center;
          border-radius: 10px;
        }

        /* Desktop widths that match the screenshot feel */
        @media (min-width: 1400px) {
          .about-photo-frame { width: 1080px; }
        }
        @media (min-width: 1200px) and (max-width: 1399.98px) {
          .about-photo-frame { width: 980px; }
        }
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .about-photo-frame { width: 860px; }
        }

        /* Tablet & Mobile: full width within container */
        @media (max-width: 991.98px) {
          .about-photo-frame { width: 100%; padding: 14px; border-radius: 16px; }
          .about-photo { border-radius: 8px; }
          .about-section { padding: 40px 0 16px !important; }
        }

        /* Title */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.2px;
          font-size: clamp(28px, 2.4vw + 16px, 44px);
          line-height: 1.15;
        }

        /* Items */
        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }
        .about-items:last-child { margin-bottom: 0; }

        .about-items .icon {
          width: 60px; height: 60px; min-width: 60px;
          border-radius: 50%;
          background: var(--accent);
          display: grid; place-items: center;
          box-shadow: 0 4px 10px rgba(38,182,224,.35);
        }
        .about-items .icon svg { width: 28px; height: 28px; color: #fff; }

        .about-items .content h5 { margin: 4px 0 6px; font-weight: 800; color: var(--ink); }
        .about-items .content p { margin: 0; color: var(--muted); line-height: 1.55; font-size: 15.5px; }

        /* Dotted connector (desktop/tablet only) */
        @media (min-width: 769px) {
          .about-items:not(:last-child)::after {
            content: "";
            position: absolute;
            left: 29px;
            top: 60px;
            width: 2px;
            height: calc(100% - 30px);
            background: repeating-linear-gradient(
              to bottom,
              var(--accent), var(--accent) 4px,
              transparent 4px, transparent 8px
            );
          }
        }

        /* Mobile tweaks */
        @media (max-width: 768px) {
          .about-wrapper .row { gap: 22px; }
          .about-items { gap: 14px; margin-bottom: 22px; }
          .about-items .icon { width: 52px; height: 52px; min-width: 52px; }
          .about-items .icon svg { width: 22px; height: 22px; }
          .about-items .content p { font-size: 14px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* LEFT: Framed Image with exact size */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <div className="about-photo-frame">
                  <img
                    src="/team.jpg"          /* put your exact image path */
                    alt="1 Global Enterprises Group"
                    className="about-photo"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-1">
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>A diversified group with interests in Shipping, Logistics, Distribution, IT, Clean Energy & Trading.</p>
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
                      <p>Each business unit is led by experts ensuring sustainability, execution & growth.</p>
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
