import React from "react";
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
  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT COLUMN */}
        <div className="svs-left">
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <div className="svs-item" key={title}>
                <div className="svs-icon"><Icon strokeWidth={1.75} /></div>
                <div className="svs-item-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — responsive video */}
        <div className="svs-right">
          <div className="svs-video-wrapper">
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

      <style>{`
        .svs-split {
          background: #fff;
          padding: clamp(36px, 6vw, 80px) 0;
          overflow: hidden;
        }

        .svs-container {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          width: min(1200px, 92vw);
          margin: 0 auto;
          align-items: stretch;
          gap: clamp(16px, 4vw, 48px);
        }

        /* LEFT */
        .svs-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .svs-header { margin-bottom: clamp(8px, 1.2vw, 16px); }
        .svs-sub { margin: 0 0 6px; font-size: .95rem; color: #5f6b7a; }
        .svs-title { margin: 0; font-size: clamp(1.6rem, 1.2rem + 2vw, 2.4rem); font-weight: 800; color: #0E0F2C; }

        /* Turn the list into 2 columns on large screens to reduce height */
        .svs-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 12px;
        }
        @media (min-width: 1100px) {
          .svs-list {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
            gap: 12px;
          }
        }

        .svs-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fcff;
          transition: all .2s ease;
        }
        .svs-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          border-color: #c9e4f5;
          background: #f4fbff;
        }
        .svs-icon {
          flex: 0 0 40px;
          width: 40px; height: 40px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: 20px; height: 20px; }
        .svs-item-title { font-weight: 700; color: #0E0F2C; font-size: 1rem; line-height: 1.4; }

        /* RIGHT */
        .svs-right {
          position: relative;
          width: 100%;
          display: flex;
          align-items: stretch; /* make child fill height */
        }

        /* Default: keep 16:9 on small/medium to avoid tall gaps */
        .svs-video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 14px 36px rgba(14, 24, 44, 0.18);
        }
        .svs-video-wrapper video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: transparent;
          border: none;
        }

        /* On large screens: match the left column height (kills dead space) */
        @media (min-width: 1100px) {
          .svs-video-wrapper {
            aspect-ratio: auto;     /* cancel fixed ratio */
            height: 100%;           /* fill available column height */
            min-height: 360px;      /* sensible floor */
            border-radius: 20px;
            box-shadow: 0 20px 50px rgba(14, 24, 44, 0.25);
          }
        }

        /* Tablet / Mobile */
        @media (max-width: 992px) {
          .svs-container {
            grid-template-columns: 1fr;
          }
          .svs-right {
            order: -1; /* video on top */
          }
          .svs-video-wrapper {
            aspect-ratio: 16 / 9;
            border-radius: 12px;
            box-shadow: 0 12px 28px rgba(0,0,0,.15);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
