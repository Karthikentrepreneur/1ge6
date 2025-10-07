import React from "react";
import { Ship, Workflow, Truck, Droplets, Code2, Sun } from "lucide-react";

const SERVICES = [
  { title: "Shipping", Icon: Ship },
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Logistics", Icon: Truck },
  { title: "Lubricant Distribution", Icon: Droplets },
  { title: "Software Development", Icon: Code2 },
  { title: "Renewable Energy", Icon: Sun },
];

const ServicesVideoSection = ({
  videoSrc = "/videos/Video2.mp4",
  heading = "Our Services",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT: Services list */}
        <div className="svs-left">
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

        {/* RIGHT: Video */}
        <div className="svs-right">
          <div className="svs-video-card">
            <div className="svs-video-frame">
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
      </div>

      <style>{`
        .svs-split {
          background: #fff;
          padding: 56px 0;
        }
        .svs-container {
          width: min(1200px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 520px; /* left / right */
          gap: 32px;
          align-items: stretch;            /* ⬅ make both columns equal height */
        }

        /* LEFT */
        .svs-header { margin-bottom: 16px; }
        .svs-sub {
          margin: 0 0 6px;
          font-size: .95rem;
          letter-spacing: .2px;
          color: #5f6b7a;
        }
        .svs-title {
          margin: 0;
          font-size: clamp(1.8rem, 1.2rem + 2vw, 2.4rem);
          font-weight: 800;
          color: #0E0F2C;
        }
        .svs-list {
          display: grid;
          gap: 12px;
          margin-top: 14px;
        }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid #e9eef3;
          border-radius: 14px;
          background: #fafcff;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .svs-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(10, 40, 80, 0.08);
          border-color: #dbe7f1;
        }
        .svs-icon {
          flex: 0 0 44px; width: 44px; height: 44px;
          border-radius: 12px;
          display: grid; place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: 22px; height: 22px; }
        .svs-item-title { font-weight: 700; color: #0E0F2C; letter-spacing: .2px; }

        /* RIGHT: Match text height */
        .svs-right { display: flex; }
        .svs-video-card {
          background: #ffffff;
          border: 1px solid #eef2f6;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(10, 40, 80, 0.08);
          padding: 16px;
          width: 100%;
          max-width: 520px;
          display: flex;           /* ⬅ stretch inner frame */
          height: 100%;            /* ⬅ column height = left column height */
        }
        .svs-video-frame {
          flex: 1;                 /* ⬅ fill the card */
          min-height: 0;
          overflow: hidden;
          border-radius: 14px;
          background: #000;
        }
        .svs-video-frame video {
          width: 100%;
          height: 100%;            /* ⬅ fill the frame height */
          object-fit: cover;       /* crop to fit if needed */
          object-position: center;
          display: block;
        }

        /* Responsive: stack & go portrait frame again */
        @media (max-width: 1024px) {
          .svs-container { grid-template-columns: 1fr; }
          .svs-right { justify-content: center; }
          .svs-video-card { max-width: 440px; height: auto; }
          .svs-video-frame { aspect-ratio: 9 / 16; }  /* restore portrait on mobile */
          .svs-video-frame video { height: 100%; }
        }
        @media (max-width: 480px) {
          .svs-video-card { max-width: 360px; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
