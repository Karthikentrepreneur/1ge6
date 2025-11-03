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
    const update = () =>
      setMatchHeight(Math.max(480, Math.round(el.getBoundingClientRect().height * 1.2)));
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    update();
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, []);

  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT */}
        <div className="svs-left" ref={leftRef}>
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

        {/* RIGHT */}
        <div className="svs-right">
          <div
            className="svs-video-card"
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

      <style>{`
        .svs-split { background:#fff; padding:72px 0; overflow:hidden; }

        .svs-container {
          width:100%;
          margin:0;
          display:grid;
          grid-template-columns: 0.7fr 1.3fr;
          align-items:stretch;
        }

        /* LEFT SIDE */
        .svs-left {
          padding: 0 4vw;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .svs-header { margin-bottom:12px; }
        .svs-sub { margin:0 0 6px; font-size:.95rem; color:#5f6b7a; }
        .svs-title { margin:0; font-size:clamp(1.8rem,1.2rem + 2vw,2.6rem); font-weight:800; color:#0E0F2C; }
        .svs-list { display:grid; gap:10px; margin-top:14px; }
        .svs-item {
          display:flex; align-items:center; gap:10px;
          padding:10px 14px;
          border:1px solid #e2e8f0;
          border-radius:10px;
          background:#f8fcff;
          transition:all .2s ease;
        }
        .svs-item:hover {
          transform:translateY(-2px);
          box-shadow:0 8px 18px rgba(10,40,80,.08);
          border-color:#c9e4f5;
          background:#f4fbff;
        }
        .svs-icon {
          flex:0 0 40px; width:40px; height:40px;
          border-radius:8px; display:grid; place-items:center;
          background:rgba(38,182,224,.12);
          border:1px solid rgba(38,182,224,.35);
          color:#1c99bf;
        }
        .svs-icon svg { width:20px; height:20px; }
        .svs-item-title { font-weight:700; color:#0E0F2C; font-size:1rem; line-height:1.4; }

        /* RIGHT SIDE — Full Panel Fill */
        .svs-right {
          position:relative;
          width:100%;
          height:auto;
          overflow:hidden;
        }

        .svs-video-card {
          position:relative;
          width:100%;
          height:100%;
          border-radius:0;
          overflow:hidden;
          background:transparent !important;
          box-shadow:none !important;
        }

        .svs-video-card video {
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover; /* ✅ fills full right panel */
          object-position:center;
          background:transparent !important;
          border:none;
        }

        /* Mobile responsive */
        @media (max-width: 992px) {
          .svs-container {
            grid-template-columns:1fr;
            gap:20px;
          }
          .svs-right {
            order:-1;
            height: 60vh;
          }
          .svs-video-card {
            border-radius:0;
            height:100%;
          }
          .svs-video-card video {
            object-fit:cover;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
