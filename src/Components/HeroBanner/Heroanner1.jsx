// src/Components/HeroBanner1.jsx
import React from "react";
import Header3 from "../Header/Header3";

const HeroBanner1 = ({
  videoSrc = "/video.mp4",
  heroContent = {
    subtitle: "Sustainability Through Innovation",
    title: "“Where logistics, technology, and energy meet excellence.”",
  },
}) => {
  return (
    <section className="hero-section">
      <Header3 variant="header-transparent" />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .hero-section {
          position: relative;
          background: transparent;
        }

        .hero-section .cs_site_header_spacing_140 {
          display: none;
        }

        .header-transparent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          z-index: 5;
        }

        .hero-wrap {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ✅ Background video (unchanged) */
        .bg-layer {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .bg-layer video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* dark overlay for readability */
        .bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45));
        }

        /* ✅ Info card bottom-right aligned with header button */
        .info-card {
          position: absolute;
          bottom: clamp(40px, 6vh, 80px);
          right: clamp(30px, 4vw, 90px);
          background: linear-gradient(to right, #2563eb, #60a5fa); /* from-blue-600 to-blue-400 */
          color: #fff;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
          padding: clamp(18px, 3vw, 32px) clamp(22px, 3.6vw, 40px);
          width: min(92vw, 560px);
          font-family: 'Montserrat', sans-serif;
          z-index: 3;
          transition: background 0.25s ease, box-shadow 0.25s ease;
        }

        .info-card:hover {
          background: linear-gradient(to right, #1e40af, #3b82f6); /* hover darker blue */
          box-shadow: 0 14px 36px rgba(0,0,0,0.35);
        }

        /* ✅ Subtitle inside green span */
        .h-sub {
          margin: 0 0 6px 0;
          font-weight: 800;
          letter-spacing: 0.3px;
          font-size: clamp(14px, 1.3vw, 16px);
          text-transform: uppercase;
        }
        .h-sub span {
          color: #22C55E; /* emerald green */
        }

        /* ✅ White title (can wrap to 2 lines) */
        .h-title {
          margin: 0;
          color: #ffffff;
          font-weight: 800;
          line-height: 1.3;
          font-size: clamp(18px, 2vw, 24px);
          white-space: normal;      /* allow wrapping */
          overflow: visible;
          text-overflow: unset;
        }

        @media (max-width: 992px) {
          .info-card {
            right: 5%;
            bottom: 8%;
            width: 90%;
            padding: 20px 26px;
          }
          .h-title {
            font-size: clamp(18px, 4.8vw, 22px);
          }
        }
      `}</style>

      <div className="hero-wrap">
        {/* ✅ Background video (unchanged) */}
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        {/* ✅ Bottom-right aligned box */}
        <div className="info-card">
          <div className="h-sub">
            <span>{heroContent.subtitle}</span>
          </div>
          <h1 className="h-title">{heroContent.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
