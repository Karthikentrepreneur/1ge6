import React, { useEffect, useRef, useState } from "react";
import { Workflow, Droplets, Code2, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Renewable Energy", Icon: Sun },
  { title: "Product Distribution", Icon: Droplets },
  { title: "Technology", Icon: Code2 },
];

const ServicesVideoSection = ({
  videoSrc = "/video.mp4",
  heading = "Business Verticals",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  const leftRef = useRef(null);
  const [matchHeight, setMatchHeight] = useState(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const setH = () => {
      const h = el.getBoundingClientRect().height;
      setMatchHeight(Math.max(220, Math.round(h)));
    };
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    window.addEventListener("resize", setH);
    setH();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setH);
    };
  }, []);

  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* RIGHT moves on top for mobile via CSS order */}
        <div className="svs-right">
          <div
            className="svs-video-frame"
            style={{ height: matchHeight ? `${matchHeight}px` : "auto" }}
          >
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Services video"
            />
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="svs-left" ref={leftRef}>
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <button className="svs-item" key={title} type="button">
                <span className="svs-icon" aria-hidden="true">
                  <Icon strokeWidth={1.75} />
                </span>
                <span className="svs-item-title">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        :root {
          --card-w: 85%;
          --icon-box: 40px;
          --icon: 20px;
          --pad-y: 10px;
          --pad-x: 14px;
          --radius: 10px;
        }

        .svs-split {
          background: #fff;
          padding: clamp(40px, 6vw, 70px) 0;
        }

        .svs-container {
          width: min(1200px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        /* HEADERS (fluid sizes) */
        .svs-header { margin-bottom: 12px; }
        .svs-sub { margin: 0 0 6px; font-size: clamp(.9rem, .8rem + .3vw, .95rem); color: #5f6b7a; }
        .svs-title { margin: 0; font-size: clamp(1.6rem, 1.1rem + 2.2vw, 2.6rem); font-weight: 800; color: #0E0F2C; }

        /* LIST */
        .svs-list { display: grid; gap: 10px; margin-top: 14px; }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: var(--pad-y) var(--pad-x);
          border: 1px solid #e2e8f0;
          border-radius: var(--radius);
          background: #f8fcff;
          width: var(--card-w);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
          text-align: left;
        }
        .svs-item:hover, .svs-item:focus-visible {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          border-color: #c9e4f5;
          background: #f4fbff;
          outline: none;
        }

        .svs-icon {
          flex: 0 0 var(--icon-box);
          width: var(--icon-box);
          height: var(--icon-box);
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: var(--icon); height: var(--icon); }

        .svs-item-title {
          font-weight: 700;
          color: #0E0F2C;
          font-size: clamp(.98rem, .9rem + .4vw, 1.05rem);
          line-height: 1.35;
        }

        /* VIDEO */
        .svs-right { display: flex; justify-content: center; align-items: center; }
        .svs-video-frame {
          aspect-ratio: 16 / 9;
          width: 100%;
          max-width: 640px;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          margin-bottom: 40px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }
        .svs-video-frame video { width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; }

        /* ====== BREAKPOINTS ====== */

        /* Tablet (≤ 1024px): stack columns, full-width cards */
        @media (max-width: 1024px) {
          .svs-container { grid-template-columns: 1fr; }
          .svs-right { order: -1; }
          .svs-item { width: 100%; }
        }

        /* Large phones (≤ 768px): slightly smaller cards/icons */
        @media (max-width: 768px) {
          :root {
            --card-w: 100%;
            --icon-box: 36px;
            --icon: 18px;
            --pad-y: 9px;
            --pad-x: 12px;
            --radius: 10px;
          }
          .svs-video-frame { max-width: 100%; margin: 28px 0; }
          .svs-title { letter-spacing: 0; }
        }

        /* Small phones (≤ 480px): comfy tap targets, no overflow */
        @media (max-width: 480px) {
          :root {
            --icon-box: 34px;
            --icon: 16px;
            --pad-y: 10px;   /* keep tap area ≥ 44px total height */
            --pad-x: 12px;
            --radius: 9px;
          }
          .svs-container { gap: 20px; }
          .svs-list { gap: 8px; }
          .svs-item-title { font-size: 1rem; } /* keep readable on small screens */
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .svs-item { transition: none; }
          .svs-item:hover { transform: none; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
