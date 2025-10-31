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

    const ro = new ResizeObserver(() => {
      const h = el.getBoundingClientRect().height;
      setMatchHeight(Math.max(240, Math.round(h)));
    });
    ro.observe(el);

    const onResize = () => {
      const h = el.getBoundingClientRect().height;
      setMatchHeight(Math.max(240, Math.round(h)));
    };
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
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
            style={{
              height: matchHeight ? `${matchHeight}px` : "auto",
            }}
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
          padding: 70px 0;
          overflow-x: hidden; /* ✅ Prevent horizontal scroll globally */
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
        .svs-header { margin-bottom: 12px; }
        .svs-sub { margin: 0 0 6px; font-size: .95rem; color: #5f6b7a; }
        .svs-title { margin: 0; font-size: clamp(1.8rem, 1.2rem + 2vw, 2.6rem); font-weight: 800; color: #0E0F2C; }

        /* Compact but bold cards */
        .svs-list { display: grid; gap: 10px; margin-top: 14px; }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fcff;
          width: 85%;
          transition: all 0.2s ease;
        }
        .svs-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          border-color: #c9e4f5;
          background: #f4fbff;
        }

        .svs-icon {
          flex: 0 0 40px;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: 20px; height: 20px; }

        .svs-item-title {
          font-weight: 700;
          color: #0E0F2C;
          font-size: 1rem;
          line-height: 1.4;
        }

        /* RIGHT SIDE */
        .svs-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

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

        .svs-video-frame video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* ✅ MOBILE FIX ONLY (no desktop changes) */
        @media (max-width: 768px) {
          .svs-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .svs-right {
            order: -1; /* video above content */
            width: 100%;
            overflow: hidden;
          }

          .svs-video-frame {
            max-width: 100%;
            width: 100%;
            border-radius: 14px;
            margin: 20px auto;
            box-shadow: 0 8px 18px rgba(0,0,0,0.1);
          }

          .svs-video-frame video {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .svs-left {
            width: 100%;
            text-align: left;
            padding-inline: 8px;
          }

          .svs-item {
            width: 100%; /* full width cards */
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
