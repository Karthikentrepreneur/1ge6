// src/Components/HeroBanner1.jsx
import React, { useEffect } from "react";
import Header3 from "../Header/Header3";

const HeroBanner1 = ({
  videoSrc = "/video4.mp4",
  heroContent = {
    subtitle: "Sustainability Through Innovation",
    title: "“Where logistics, technology, and energy meet excellence.”",
  },
  anchorSelector = "#vision-strategy-btn, [data-anchor='vs-btn']" // CTA button selector
}) => {
  useEffect(() => {
    const anchor =
      document.querySelector(anchorSelector) ||
      document.querySelector("#vision-strategy-btn") ||
      document.querySelector("[data-anchor='vs-btn']");

    const applyAlign = () => {
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const gap = Math.max(0, Math.round(vw - rect.right)) + 0;
      document.documentElement.style.setProperty("--edge-gap", `${gap}px`);
      const cs = getComputedStyle(anchor);
      const r = cs.borderTopRightRadius || cs.borderRadius || "14px";
      document.documentElement.style.setProperty("--cta-radius", r);
    };

    applyAlign();
    window.addEventListener("resize", applyAlign);
    window.addEventListener("scroll", applyAlign, { passive: true });
    return () => {
      window.removeEventListener("resize", applyAlign);
      window.removeEventListener("scroll", applyAlign);
    };
  }, [anchorSelector]);

  return (
    <section className="hero-section">
      <Header3 variant="header-transparent" />

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
          background: linear-gradient(0deg, rgba(0,0,0,.45), rgba(0,0,0,.45));
        }

        /* ✅ Left-Center Aligned Info Card */
        .info-card {
          position: absolute;
          top: 50%;
          left: clamp(40px, 6vw, 100px);
          transform: translateY(-50%);
          background: linear-gradient(to right, #2563eb, #60a5fa);
          color: #fff;
          border-radius: 16px;
          border-top-left-radius: var(--cta-radius, 16px);
          border-bottom-left-radius: var(--cta-radius, 16px);
          box-shadow: 0 12px 34px rgba(0, 0, 0, 0.3);
          padding: clamp(22px, 3.2vw, 36px) clamp(26px, 3.8vw, 44px);
          width: min(96vw, 640px);
          font-family: "Montserrat", system-ui, sans-serif;
          z-index: 3;
          transition: left 0.2s ease, box-shadow 0.25s ease, background 0.25s ease;
          text-align: left;
        }
        .info-card:hover {
          background: linear-gradient(to right, #1e40af, #3b82f6);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.36);
        }

        .h-sub {
          margin: 0 0 8px;
          font-weight: 800;
          letter-spacing: 0.3px;
          font-size: clamp(14px, 1.3vw, 16px);
          text-transform: uppercase;
        }
        .h-sub span {
          color: #12ff6a;
        }

        .h-title {
          margin: 0;
          color: #fff;
          font-weight: 800;
          line-height: 1.3;
          font-size: clamp(18px, 2vw, 24px);
          white-space: normal;
        }

        @media (max-width: 992px) {
          .info-card {
            left: 4%;
            top: 50%;
            transform: translateY(-50%);
            width: 92%;
            padding: 20px 26px;
          }
          .h-title {
            font-size: clamp(18px, 4.8vw, 22px);
          }
        }
      `}</style>

      <div className="hero-wrap">
        <div className="bg-layer" aria-hidden="true">
          <video src={videoSrc} autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className="bg-overlay" />

        <div className="info-card">
          <div className="h-sub"><span>{heroContent.subtitle}</span></div>
          <h1 className="h-title">{heroContent.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
