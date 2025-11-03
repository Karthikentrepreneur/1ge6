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
    const update = () => setMatchHeight(Math.max(260, Math.round(el.getBoundingClientRect().height)));
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

        {/* RIGHT (Video) */}
        <div className="svs-right">
          <div
            className="svs-video-frame svs-video-bleed"
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
        .svs-split{background:#fff;padding:70px 0;overflow-x:hidden;}
        .svs-container{
          width:min(1200px,92%);
          margin:0 auto;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:32px;
          align-items:start;
        }

        /* LEFT */
        .svs-header{margin-bottom:12px;}
        .svs-sub{margin:0 0 6px;font-size:.95rem;color:#5f6b7a;}
        .svs-title{margin:0;font-size:clamp(1.8rem,1.2rem + 2vw,2.6rem);font-weight:800;color:#0E0F2C;}
        .svs-list{display:grid;gap:10px;margin-top:14px;}
        .svs-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fcff;width:85%;transition:.2s;}
        .svs-item:hover{transform:translateY(-2px);box-shadow:0 8px 18px rgba(10,40,80,.08);border-color:#c9e4f5;background:#f4fbff;}
        .svs-icon{flex:0 0 40px;width:40px;height:40px;border-radius:8px;display:grid;place-items:center;background:rgba(38,182,224,.12);border:1px solid rgba(38,182,224,.35);color:#1c99bf;}
        .svs-icon svg{width:20px;height:20px;}
        .svs-item-title{font-weight:700;color:#0E0F2C;font-size:1rem;line-height:1.4;}

        /* RIGHT — fill & bleed to edge */
        .svs-right{
          display:flex;
          align-items:stretch;
          justify-content:stretch;
          padding-right:0; /* no inner padding on the column */
        }
        .svs-video-frame{
          width:100%;
          height:100%;
          border-radius:18px;
          overflow:hidden;
          background:#000;
          margin:0;
          box-shadow:0 12px 28px rgba(0,0,0,.15);
          display:flex;
        }
        /* Full-bleed to the page edge on large screens */
        @media (min-width: 1200px){
          .svs-video-bleed{
            width: calc(100% + 60px);
            margin-right: -60px;   /* push to the very edge */
          }
        }
        @media (min-width: 1500px){
          .svs-video-bleed{
            width: calc(100% + 90px);
            margin-right: -90px;
          }
        }

        .svs-video-frame video{
          width:100%;
          height:100%;
          object-fit:cover;   /* 100% fill, no blank */
          object-position:center;
          display:block;
        }

        /* Mobile */
        @media (max-width:768px){
          .svs-container{grid-template-columns:1fr;gap:20px;}
          .svs-right{order:-1;width:100%;}
          .svs-video-frame{border-radius:14px;box-shadow:0 8px 18px rgba(0,0,0,.1);}
          .svs-left{width:100%;text-align:left;padding-inline:8px;}
          .svs-item{width:100%;}
          /* no bleed on small screens */
          .svs-video-bleed{width:100%;margin-right:0;}
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
