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
  videoSrc = "/videos/services.mp4",
  heading = "What We Do",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  return (
    <section className="services-video-section" style={{ position: "relative" }}>
      <div className="svs__video">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      <div className="svs__overlay" />

      <div className="svs__container">
        <header className="svs__header">
          <p className="svs__sub">{subheading}</p>
          <h2 className="svs__title">{heading}</h2>
        </header>

        <div className="svs__grid">
          {SERVICES.map(({ title, Icon }) => (
            <div key={title} className="svs__card">
              <div className="svs__icon">
                <Icon strokeWidth={1.75} />
              </div>
              <h3 className="svs__cardTitle">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-video-section {
          overflow: hidden;
          min-height: 75vh;
          display: grid;
          place-items: center;
        }
        .svs__video { position: absolute; inset: 0; z-index: 0; }
        .svs__video video {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: saturate(1.05) contrast(1.02);
        }
        .svs__overlay {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.35) 40%, rgba(0,0,0,.55));
        }
        .svs__container {
          position: relative; z-index: 2; color: #fff;
          width: min(1200px, 92%); margin: 0 auto; padding: 56px 0;
        }
        .svs__header { text-align: center; margin-bottom: 28px; }
        .svs__sub { margin: 0 0 6px; font-size: .95rem; letter-spacing: .3px; opacity: .9; }
        .svs__title { margin: 0; font-size: clamp(1.8rem, 1.2rem + 2vw, 2.6rem); font-weight: 800; }
        .svs__grid { display: grid; gap: 16px; grid-template-columns: repeat(6, minmax(0, 1fr)); }
        .svs__card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 16px;
          padding: 18px 16px;
          backdrop-filter: blur(4px);
          display: flex; align-items: center; gap: 12px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .svs__card:hover { transform: translateY(-2px); background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.18); }
        .svs__icon {
          flex: 0 0 44px; width: 44px; height: 44px; border-radius: 12px;
          display: grid; place-items: center;
          background: rgba(38,182,224,.18);
          border: 1px solid rgba(38,182,224,.35);
        }
        .svs__icon svg { width: 22px; height: 22px; color: #EAFBFF; }
        .svs__cardTitle { margin: 0; font-size: 1rem; font-weight: 700; letter-spacing: .2px; line-height: 1.2; }

        @media (max-width: 1199px) { .svs__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (max-width: 639px)  { .svs__grid { grid-template-columns: 1fr; } .svs__card { padding: 16px 14px; } }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
