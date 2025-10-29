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

        .bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
        }

        /* ✅ Bottom-left card with blue gradient background */
        .info-card {
          position: absolute;
          bottom: clamp(40px, 6vh, 80px);
          right: clamp(30px, 4vw, 90px);
          background: linear-gradient(to right, #2563eb, #60a5fa);
          color: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          padding: clamp(18px, 3vw, 32px) clamp(22px, 3.6vw, 40px);
          width: min(92vw, 520px);
          font-family: 'Montserrat', sans-serif;
          z-index: 3;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: linear-gradient(to right, #1e40af, #3b82f6);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
        }

        /* ✅ Clean green subtitle (no gradient) */
        .h-sub {
          color: #22C55E; /* solid bright emerald green */
          font-weight: 700;
          letter-spacing: 0.4px;
          font-size: clamp(16px, 1.5vw, 20px);
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        /* ✅ White smaller title */
        .h-title {
          font-weight: 700;
          line-height: 1.25;
          color: #ffffff;
          font-size: clamp(20px, 2.3vw, 28px);
          margin: 6px 0 0 0;
        }

        @media (max-width: 992px) {
          .info-card {
            left: 5%;
            bottom: 8%;
            width: 90%;
            padding: 20px 26px;
          }
        }
      `}</style>

      <div className="hero-wrap">
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        {/* ✅ Refined card with solid green subtitle */}
        <div className="info-card">
          <div className="h-sub">{heroContent.subtitle}</div>
          <h1 className="h-title">{heroContent.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
