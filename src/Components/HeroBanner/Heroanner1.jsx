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

        /* Background video */
        .bg-layer{ position:absolute; inset:0; z-index:0; }
        .bg-layer video{
          width:100%; height:100%;
          object-fit:cover; object-position:center;
          display:block;
        }

        .bg-overlay{
          position:absolute; inset:0; z-index:1;
          background: linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4));
        }

        /* grid layout - card left bottom */
        .hero-grid{
          position:relative; z-index:2;
          width:100%; max-width:1500px;
          padding: clamp(16px, 3vw, 32px);
          display:grid;
          grid-template-columns: minmax(320px, 560px) 1fr;
          align-items:end;
        }

        /* Blue box */
        .info-card{
          justify-self:start;
          background: linear-gradient(180deg, #43A5E6 0%, #2D8DD8 100%);
          color:#fff;
          border-radius:22px;
          box-shadow:0 18px 40px rgba(0,0,0,0.25);
          padding: clamp(18px, 3.2vw, 28px) clamp(20px, 3.6vw, 36px);
          width:min(92vw, 560px);
          font-family:'Montserrat', sans-serif;

          /* ✅ Move box to bottom left */
          margin-bottom: clamp(60px, 14vh, 120px);
          margin-left: clamp(40px, 5vw, 90px);
        }

        /* ✅ Subtitle green gradient */
        .h-sub{
          font-weight:700;
          letter-spacing:.4px;
          font-size:clamp(16px,1.6vw,20px);
          background:linear-gradient(90deg,#00C853,#B2FF59);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          text-transform:uppercase;
          margin:0 0 8px;
        }

        /* ✅ Title white smaller */
        .h-title{
          font-weight:700;
          line-height:1.25;
          color:#fff;
          font-size:clamp(20px,2.5vw,30px);
          margin:6px 0 0 0;
        }

        @media (max-width:992px){
          .hero-grid{ grid-template-columns:1fr; }
          .info-card{
            justify-self:start;
            width:90%;
            margin-left:5%;
            margin-bottom: clamp(40px, 10vh, 100px);
          }
        }
      `}</style>

      <div className="hero-wrap">
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        <div className="hero-grid">
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
