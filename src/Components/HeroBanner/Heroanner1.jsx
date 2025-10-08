import React from 'react';
import Header3 from '../Header/Header3';

const Heroanner1 = () => {
  const videoSrc = 'video.mp4‎';

  const heroContent = {
    subtitle: 'Sustainability Through Innovation',
    title: '“Where logistics, technology, and energy meet excellence.”',
  };

  return (
    <section className="hero-section">
      <Header3 variant="header-transparent" />

      {/* Import Montserrat font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
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
          z-index: 3;
        }
        .header-transparent .cs_top_header,
        .header-transparent .cs_main_header {
          background: transparent;
        }
        .hero-1 {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 8%;
        }
        .video-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }
        .video-bg video {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .video-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative; 
          z-index: 2;
          color: #fff;
          text-align: left;
          max-width: 650px;
        }
        .hero-content h1 {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin-top: 15px;
        }
        .hero-content .sub-title {
          font-size: 1.3rem;
          font-weight: 500;
          opacity: 0.9;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 0.5px;
        }
        @media (max-width: 768px) {
          .hero-1 { padding-left: 5%; }
          .hero-content h1 { font-size: 2rem; }
          .hero-content .sub-title { font-size: 1.1rem; }
        }
      `}</style>

      <div className="hero-1">
        {/* Background video */}
        <div className="video-bg" aria-hidden="true">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="video-overlay" />

        <div className="hero-content">
          <div className="sub-title">{heroContent.subtitle}</div>
          <h1>{heroContent.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Heroanner1;
