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
      setMatchHeight(Math.max(240, Math.round(h))); // smaller min height
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
                  <Icon strokeWidth={1.6} />
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

        /* Smaller vertical cards */
        .svs-list { display: grid; gap: 6px; margin-top: 10px; }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;            /* reduced padding */
          border: 1px solid #e4e8ec;
          border-radius: 8px;           /* smaller radius */
          background: #f9fdff;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .svs-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(10,40,80,.06);
          border-color: #cde2ef;
        }

        .svs-icon {
          flex: 0 0 28px;               /* smaller icon box */
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.3);
          color: #1c99bf;
        }
        .svs-icon svg { width: 15px; height: 15px; }
        .svs-item-title {
          font-weight: 600;
          color: #0E0F2C;
          font-size: .9rem;
          line-height: 1.3;
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
          max-width: 620px;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 36px;
          margin-bottom: 36px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        .svs-video-frame video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 1024px) {
          .svs-container { grid-template-columns: 1fr; }
          .svs-right { order: -1; }
          .svs-video-frame { max-width: 720px; margin: 32px auto; }
        }

        @media (max-width: 600px) {
          .svs-video-frame { max-width: 100%; margin: 28px auto; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
