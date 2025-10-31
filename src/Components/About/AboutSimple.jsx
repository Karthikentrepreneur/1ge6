// src/Components/About/AboutSimple.jsx
import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// lucide-react icons
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

        /* Add gap between image & content on desktop */
        @media (min-width: 992px) {
          .about-photo-wrap { margin-right: 40px; }
        }

        /* ===== Team Image ===== */
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
        .about-photo:hover { transform: scale(1.07); box-shadow: 0 22px 66px rgba(0,0,0,.26); }

        /* ===== Section Title ===== */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        /* ===== Items (desktop/tablet baseline) ===== */
        .about-items {
          position: relative;
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
          z-index: 1;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }
        .about-items .icon svg {
          width: 28px;
          height: 28px;
          color: #fff; /* make lucide icons white inside teal circle */
        }

        /* Dotted connector (timeline) shown on desktop/tablet only) */
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

        .about-items .content h5 {
          font-weight: 800;
          margin-bottom: 6px;
          color: var(--ink);
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.5;
          color: var(--muted);
          font-size: 15px;
        }

        /* ===== Responsiveness ===== */
        @media (max-width: 1199px) {
          .about-photo { width: min(100%, 860px); transform: scale(1.02); }
        }
        @media (max-width: 991px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
        }

        /* ===== MOBILE (≤768px) =====
           Clean, readable layout: icon + title on one row, description below.
           Hide the dotted connector to avoid crowding. */
        @media (max-width: 768px) {
          .container { padding-left: 18px; padding-right: 18px; }
          .about-wrapper .row { flex-direction: column; gap: 22px; }

          .about-content .section-title h2 {
            font-size: clamp(26px, 7vw, 30px);
            line-height: 1.15;
            margin-bottom: 16px;
          }

          .about-items {
            display: grid;
            grid-template-columns: 52px 1fr; /* icon | text */
            grid-auto-rows: min-content;
            column-gap: 14px;
            row-gap: 6px;
            margin-bottom: 18px;
            align-items: center;
          }
          .about-items .icon {
            width: 52px; height: 52px; min-width: 52px;
            grid-row: 1 / span 2; /* span title + description */
            box-shadow: 0 3px 8px rgba(38,182,224,0.28);
          }
          .about-items .icon svg { width: 22px; height: 22px; }

          /* Hide dotted connector on mobile */
          .about-items:not(:last-child)::after { content: none !important; }

          .about-items .content h5 {
            grid-column: 2 / 3;
            margin: 0;
            font-size: 16px;
            line-height: 1.22;
          }
          .about-items .content p {
            grid-column: 2 / 3;
            margin-top: 4px;
            font-size: 14px;
            line-height: 1.5;
          }

          .about-photo { transform: none; border-radius: 16px; box-shadow: 0 10px 26px rgba(0,0,0,.15); }
        }

        /* Very small phones */
        @media (max-width: 480px) {
          .about-items { grid-template-columns: 46px 1fr; column-gap: 12px; }
          .about-items .icon { width: 46px; height: 46px; }
          .about-items .content p { font-size: 13.5px; }
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
                  {/* Who We Are */}
                  <div className="about-items">
                    <div className="icon">
                      <Users2 aria-hidden="true" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  {/* Our Reach */}
                  <div className="about-items">
                    <div className="icon">
                      <Globe2 aria-hidden="true" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="about-items">
                    <div className="icon">
                      <BadgeCheck aria-hidden="true" />
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
            {/* End Right Text */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
