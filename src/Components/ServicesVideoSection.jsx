// No imports used

// Inline SVG icons (lightweight)
const IconWorkflow = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="7" height="7" rx="2"></rect>
    <rect x="14" y="3" width="7" height="7" rx="2"></rect>
    <rect x="14" y="14" width="7" height="7" rx="2"></rect>
    <path d="M7 10v4a2 2 0 0 0 2 2h5"></path>
  </svg>
);
const IconSun = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
  </svg>
);
const IconDroplets = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2s5 6 5 9a5 5 0 0 1-10 0c0-3 5-9 5-9z"></path>
    <path d="M19 16.5a3.5 3.5 0 0 1-7 0c0-2.1 3.5-6.5 3.5-6.5S19 14.4 19 16.5z"></path>
  </svg>
);
const IconCode = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 9l-4 3 4 3"></path>
    <path d="M16 9l4 3-4 3"></path>
    <path d="M12 20l2-16"></path>
  </svg>
);

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: IconWorkflow },
  { title: "Renewable Energy", Icon: IconSun },
  { title: "Product Distribution", Icon: IconDroplets },
  { title: "Technology", Icon: IconCode },
];

const ServicesVideoSection = ({
  videoSrc = "/Video2.mp4",
  heading = "Business Verticals",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  const leftRef = React.useRef(null);
  const [matchHeight, setMatchHeight] = React.useState(null);

  React.useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const calc = () => {
      const h = el.getBoundingClientRect().height;
      setMatchHeight(Math.max(280, Math.round(h)));
    };

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(calc);
      ro.observe(el);
    } else {
      const t = setInterval(calc, 500);
      calc();
      return () => clearInterval(t);
    }

    window.addEventListener("resize", calc);
    calc();

    return () => {
      if (ro) ro.disconnect();
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
                  <Icon />
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

        /* Compact list (no empty box space) */
        .svs-list { display: grid; gap: 8px; margin-top: 12px; }
        .svs-item {
          display: flex; align-items: center;
          gap: 8px;                     /* tight icon-to-text gap */
          padding: 10px 12px;           /* compact padding */
          min-height: 52px;             /* even rows but compact */
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

        /* Mobile: 2-per-row (≈50% width) and tighter layout */
        @media (max-width: 768px) {
          .svs-title { font-size: clamp(1.6rem, 2.8vw + 1rem, 2.1rem); }
          .svs-sub { font-size: .9rem; }

          .svs-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
          .svs-item { padding: 10px 10px; min-height: 48px; }
          .svs-icon { width: 32px; height: 32px; }
          .svs-item-title { font-size: .92rem; }
        }

        /* Very small screens: fall back to 1 column */
        @media (max-width: 380px) {
          .svs-list { grid-template-columns: 1fr; }
          .svs-item-title { white-space: normal; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
