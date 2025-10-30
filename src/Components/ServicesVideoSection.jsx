import React, { useEffect, useRef, useState } from "react";
import { Workflow, Droplets, Code2, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Renewable Energy", Icon: Sun },
  { title: "Product Distribution", Icon: Droplets },
  { title: "Technology", Icon: Code2 },
];

const ServicesVideoSection = ({
  videoSrc = "/Video2.mp4",
  heading = "Business Verticals",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  const leftRef = useRef(null);
  const [matchHeight, setMatchHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = leftRef.current as HTMLDivElement | null;
    if (!el) return;

    const calc = () => {
      const h = el.getBoundingClientRect().height;
      setMatchHeight(Math.max(280, Math.round(h)));
    };

    const ro = new ResizeObserver(calc);
    ro.observe(el);
    window.addEventListener("resize", calc);

    calc();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT SIDE */}
        <div className="svs-left" ref={leftRef}>
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <div className="svs-item" key={title}>
                <div className="svs-icon">
                  <Icon strokeWidth={1.75} />
                </div>
                <div className="svs-item-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Video Section) */}
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
      </div>

      {/* ✨ Styles */}
      <style>{`
        .svs-split {
          background: #fff;
          padding: 80px 0;
        }

        .svs-container {
          width: min(1200px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        /* LEFT SIDE */
        .svs-header { margin-bottom: 14px; }
        .svs-sub { margin: 0 0 6px; font-size: .95rem; color: #5f6b7a; }
        .svs-title { margin: 0; font-size: clamp(1.8rem, 1.2rem + 2vw, 2.6rem); font-weight: 800; color: #0E0F2C; }

        /* compact list */
        .svs-list { display: grid; gap: 8px; margin-top: 12px; }
        .svs-item {
          display: flex; align-items: center;
          gap: 8px;                 /* tighter icon-to-text gap */
          padding: 10px 12px;       /* compact padding */
          border: 1px solid #e5eaf0;
          border-radius: 10px;
          background: #fafdff;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .svs-item:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(10,40,80,.08); border-color: #d4e4ef; }

        .svs-icon {
          flex: 0 0 34px; width: 34px; height: 34px;
          border-radius: 8px;
          display: grid; place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: 18px; height: 18px; }

        .svs-item-title {
          font-weight: 600; color: #0E0F2C;
          font-size: .95rem; line-height: 1.35;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }

        /* RIGHT SIDE */
        .svs-right { display: flex; justify-content: center; align-items: center; }

        /* 16:9 video frame */
        .svs-video-frame {
          aspect-ratio: 16 / 9;
          width: 100%;
          max-width: 640px;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          display: flex; justify-content: center; align-items: center;
          margin-top: 40px; margin-bottom: 40px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.15);
        }

        .svs-video-frame video {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }

        /* ====== RESPONSIVE ====== */

        /* Tablet and below: stack, video on top */
        @media (max-width: 1024px) {
          .svs-container { grid-template-columns: 1fr; align-items: stretch; }
          .svs-right { order: -1; }
          .svs-video-frame { max-width: 100%; margin: 24px auto 28px; }
        }

        /* Mobile: remove empty box space + make buttons 50% width (2 per row) */
        @media (max-width: 768px) {
          /* keep headings readable but tighter */
          .svs-title { font-size: clamp(1.6rem, 2.8vw + 1rem, 2.1rem); }
          .svs-sub { font-size: .9rem; }

          /* 2-column grid for the cards = ~50% width each */
          .svs-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          /* ensure there is no leftover internal space in each card */
          .svs-item {
            padding: 10px 10px;
            min-height: 48px;
          }
          .svs-icon { width: 32px; height: 32px; }
          .svs-icon svg { width: 18px; height: 18px; }
          .svs-item-title { font-size: .92rem; }
        }

        /* Very small screens: fall back to 1 column if needed */
        @media (max-width: 380px) {
          .svs-list { grid-template-columns: 1fr; }
          .svs-item-title { white-space: normal; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
