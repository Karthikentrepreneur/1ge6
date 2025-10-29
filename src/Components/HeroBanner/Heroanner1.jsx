// src/Components/HeroBanner1.jsx
import React from "react";
import Header3 from "../Header/Header3";

const HeroBanner1 = ({
  videoSrc = "/video.mp4",
  heroContent = {
    // ✅ your existing copy
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
        .hero-section{ position:relative; background:transparent; }
        .hero-section .cs_site_header_spacing_140{ display:none; }

        .header-transparent{
          position:absolute; top:0; left:0; width:100%;
          background:transparent; z-index:5;
        }

        .hero-wrap{
          position:relative; min-height:100vh; width:100%;
          display:flex; align-items:center; justify-content:center;
          overflow:hidden;
        }

        /* Background video (UNCHANGED) */
        .bg-layer{ position:absolute; inset:0; z-index:0; }
        .bg-layer video{
          width:100%; height:100%; object-fit:cover; object-position:center;
          display:block;
        }

        /* subtle dark layer for readability */
        .bg-overlay{
          position:absolute; inset:0; z-index:1;
          background: linear-gradient(0deg, rgba(0,0,0,0.38), rgba(0,0,0,0.38));
        }

        /* grid keeps card on right side */
        .hero-grid{
          position:relative; z-index:2;
          width:100%; max-width:1500px;
          padding: clamp(16px, 3vw, 32px);
          display:grid;
          grid-template-columns: 1fr minmax(320px, 560px);
          align-items:end; /* ✅ helps place card lower */
          gap: clamp(16px, 4vw, 40px);
        }

        /* Blue card */
        .info-card{
          justify-self:end;
          background: linear-gradient(180deg, #43A5E6 0%, #2D8DD8 100%);
          color:#fff;
          border-radius:22px;
          box-shadow:0 18px 40px rgba(0,0,0,0.25);
          padding: clamp(18px, 3.2vw, 28px) clamp(20px, 3.6vw, 36px);
          width:min(92vw, 560px);
          font-family:'Montserrat', sans-serif;

          /* ✅ move box further DOWN */
          margin-top: clamp(120px, 22vh, 260px);
        }

        /* Title & subtitle (original content only) */
        .h-sub{
          font-weight:600; letter-spacing:.2px; opacity:.95;
          font-size: clamp(14px, 1.4vw, 18px);
          margin: 2px 0 8px;
        }
        .h-title{
          font-weight:800; line-height:1.15; letter-spacing:.2px;
          font-size: clamp(28px, 4.2vw, 44px);
          margin: 6px 0 0 0;
          text-wrap: balance;
        }

        /* left slot just for layout balance */
        .hero-left{ min-height:35vh; }

        @media (max-width: 992px){
          .hero-grid{ grid-template-columns:1fr; }
          .info-card{
            justify-self:stretch; width:100%;
            margin-top: clamp(60px, 14vh, 140px); /* a bit less drop on mobile */
          }
        }
      `}</style>

      <div className="hero-wrap">
        {/* ✅ Keep your video background exactly as-is */}
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        <div className="hero-grid">
          {/* Left side empty (like sample) */}
          <div className="hero-left" />

          {/* Right blue info card — logo & button removed */}
          <div className="info-card">
            <div className="h-sub">{heroContent.subtitle}</div>
            <h1 className="h-title">{heroContent.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
