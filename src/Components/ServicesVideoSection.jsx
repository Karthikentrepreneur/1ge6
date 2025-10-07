import React from "react";
import { Ship, Workflow, Truck, Droplets, Code2, Sun } from "lucide-react";
// ^ Install first:  npm i lucide-react

type Service = {
  title: string;
  Icon: React.ComponentType<any>;
};

const SERVICES: Service[] = [
  { title: "Shipping", Icon: Ship },
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Logistics", Icon: Truck },
  { title: "Lubricant Distribution", Icon: Droplets },
  { title: "Software Development", Icon: Code2 },
  { title: "Renewable Energy", Icon: Sun },
];

interface Props {
  /** Path to your mp4/webm file, e.g. "/videos/hero.mp4" */
  videoSrc?: string;
  /** Optional heading text */
  heading?: string;
  /** Optional subheading text */
  subheading?: string;
}

const ServicesVideoSection: React.FC<Props> = ({
  videoSrc = "/videos/services.mp4",
  heading = "What We Do",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  return (
    <section className="services-video-section" style={{ position: "relative" }}>
      {/* Background video */}
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

      {/* Dark gradient overlay for readability */}
      <div className="svs__overlay" />

      {/* Content */}
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

      {/* Local styles */}
      <style>{`
        .services-video-section {
          overflow: hidden;
          min-height: 75vh;
          display: grid;
          place-items: center;
        }

        /* Video fills the section */
        .svs__video {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .svs__video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.05) contrast(1.02);
        }

        /* Overlay for text contrast (no background image used) */
        .svs__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.35) 40%,
            rgba(0,0,0,0.55) 100%
          );
        }

        /* Content container */
        .svs__container {
          position: relative;
          z-index: 2;
          width: min(1200px, 92%);
          margin: 0 auto;
          padding: 56px 0;
          color: #fff;
        }

        .svs__header {
          text-align: center;
          margin-bottom: 28px;
        }
        .svs__sub {
          margin: 0 0 6px 0;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
          opacity: 0.9;
        }
        .svs__title {
          margin: 0;
          font-size: clamp(1.8rem, 1.2rem + 2vw, 2.6rem);
          font-weight: 800;
          letter-spacing: 0.2px;
        }

        /* Services grid */
        .svs__grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        .svs__card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 18px 16px;
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .svs__card:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.18);
        }

        .svs__icon {
          flex: 0 0 44px;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,0.18); /* brand teal tint */
          border: 1px solid rgba(38,182,224,0.35);
        }
        .svs__icon svg {
          width: 22px;
          height: 22px;
          color: #EAFBFF;
        }

        .svs__cardTitle {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.2px;
          line-height: 1.2;
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .svs__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 639px) {
          .svs__grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .svs__card { padding: 16px 14px; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
