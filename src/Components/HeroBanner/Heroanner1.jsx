// src/Components/HeroBanner1.jsx
import React from "react";
import Header3 from "../Header/Header3";

const HeroBanner1 = ({
  videoSrc = "/video.mp4",
}) => {
  return (
    <section className="hero-section">
      <Header3 variant="header-transparent" />

      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .hero-section{
          position:relative;
          background:transparent;
        }
        .hero-section .cs_site_header_spacing_140{ display:none; }

        .header-transparent{
          position:absolute; top:0; left:0; width:100%;
          background:transparent; z-index:5;
        }

        .hero-wrap{
          position:relative; min-height:100vh;
          display:flex; align-items:center; justify-content:center;
          overflow:hidden;
        }

        .bg-layer{ position:absolute; inset:0; z-index:0; }
        .bg-layer video{
          width:100%; height:100%;
          object-fit:cover; object-position:center;
          display:block;
        }

        .bg-overlay{
          position:absolute; inset:0; z-index:1;
          background: linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45));
        }

        .hero-grid{
          position:relative; z-index:2;
          width:100%; max-width:1500px;
          padding: clamp(16px, 3vw, 32px);
          display:grid;
          grid-template-columns: 1fr minmax(320px, 560px);
          align-items:center; gap: clamp(16px, 4vw, 40px);
        }

        .info-card{
          justify-self:end;
          background:#3FA9F5;
          color:#fff;
          border-radius:20px;
          box-shadow:0 12px 30px rgba(0,0,0,0.25);
          padding: clamp(20px, 3vw, 36px);
          width:min(92vw, 520px);
          font-family:'Montserrat', sans-serif;
        }

        .school-badge{
          display:flex; align-items:center; gap:10px;
          margin-bottom:10px;
        }
        .school-badge img{
          height:40px; width:auto; object-fit:contain;
          background:rgba(255,255,255,0.9);
          border-radius:8px;
          padding:6px;
        }

        .h-title{
          font-size:clamp(30px, 4vw, 44px);
          font-weight:800;
          line-height:1.2;
          margin:10px 0 12px;
          letter-spacing:0.2px;
        }

        .h-support{
          font-size:clamp(15px,1.4vw,18px);
          font-weight:500;
          opacity:.95;
          margin-bottom:20px;
        }

        .cta{
          display:inline-block;
          background:#FFD12A;
          color:#0b1320;
          font-weight:700;
          border:none;
          border-radius:10px;
          padding:12px 24px;
          text-decoration:none;
          box-shadow:0 6px 20px rgba(0,0,0,0.18);
          transition: all .2s ease;
        }
        .cta:hover{
          transform:translateY(-2px);
          box-shadow:0 10px 28px rgba(0,0,0,0.25);
        }

        .hero-left{ min-height:40vh; }

        @media(max-width:992px){
          .hero-grid{ grid-template-columns:1fr; gap:18px; }
          .info-card{ justify-self:stretch; width:100%; }
        }
      `}</style>

      <div className="hero-wrap">
        {/* ✅ Keep your video background exactly as before */}
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        <div className="hero-grid">
          <div className="hero-left" />
          <div className="info-card">
            <div className="school-badge">
              <img src="/ai-campus-logo.png" alt="Next Gen AI Enabled Campus" />
            </div>
            <h1 className="h-title">Shaping Tomorrow's Leaders Today</h1>
            <div className="h-support">
              Experience innovative education that combines tradition with
              technology for a brighter future.
            </div>
            <a href="/admissions" className="cta">Admissions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
