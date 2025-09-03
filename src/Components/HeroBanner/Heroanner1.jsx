import React from 'react';

const Heroanner1 = () => {
  const videoSrc = 'singapore.mp4'; // change if needed

  return (
    <section className="hero-section">
      <style>{`
        .hero-1{position:relative;min-height:92vh;overflow:hidden;}
        .video-bg{position:absolute;inset:0;width:100%;height:100%;z-index:0;}
        .video-bg video{width:100%;height:100%;object-fit:cover;object-position:center;}
        /* Depth & readability */
        .video-overlay{
          position:absolute;inset:0;z-index:1;
          background:
            radial-gradient(120% 90% at 50% 10%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 85%);
        }
        .content-wrap{
          position:relative;z-index:2;display:flex;align-items:center;justify-content:flex-start;
          min-height:92vh;padding:8vh 24px;
        }
        .hero-inner{max-width:980px;color:#fff;}
        /* Subtitle pill */
        .sub-pill{
          display:inline-block;
          padding:8px 14px;
          border-radius:999px;
          backdrop-filter:saturate(140%) blur(6px);
          background:rgba(255,255,255,0.12);
          border:1px solid rgba(255,255,255,0.25);
          font-size:clamp(14px,1.4vw,18px);
          letter-spacing:.3px;
          font-weight:600;
          opacity:.95;
        }
        /* Headline */
        .headline{
          margin-top:18px;
          font-weight:700;
          line-height:1.12;
          letter-spacing:.2px;
          font-size:clamp(28px,5vw,60px);
          text-wrap:balance;
          text-shadow:0 6px 24px rgba(0,0,0,.35);
        }
        .emph{
          background:linear-gradient(90deg,#8dd6ff 0%,#34d399 40%,#22d3ee 70%,#60a5fa 100%);
          -webkit-background-clip:text;background-clip:text;color:transparent;
        }
        /* Supporting line (optional – looks luxe) */
        .tagline{
          margin-top:14px;
          font-size:clamp(16px,1.6vw,22px);
          color:rgba(255,255,255,.9);
          max-width:900px;
        }
        /* CTAs */
        .cta-row{margin-top:28px;display:flex;gap:14px;flex-wrap:wrap}
        .btn{
          appearance:none;border:none;cursor:pointer;
          padding:14px 20px;border-radius:14px;font-weight:600;
          transition:transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease;
        }
        .btn-primary{
          background:#10b981;color:#031016;
          box-shadow:0 12px 30px rgba(16,185,129,.25), inset 0 1px 0 rgba(255,255,255,.15);
        }
        .btn-primary:hover{transform:translateY(-1px);box-shadow:0 16px 36px rgba(16,185,129,.32)}
        .btn-ghost{
          background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.25);
        }
        .btn-ghost:hover{transform:translateY(-1px);background:rgba(255,255,255,.14)}
        /* Scroll cue */
        .scroll-cue{
          position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:2;
          color:rgba(255,255,255,.75);font-size:12px;letter-spacing:.3px;
        }
        .scroll-cue::after{
          content:"";display:block;margin:8px auto 0;width:1px;height:30px;
          background:linear-gradient(to bottom, rgba(255,255,255,.8), rgba(255,255,255,0));
          animation:pulse 1.6s ease-in-out infinite;
        }
        @keyframes pulse{
          0%{opacity:.25;transform:translateY(0)}
          50%{opacity:1;transform:translateY(4px)}
          100%{opacity:.25;transform:translateY(0)}
        }
        @media (max-width:640px){
          .content-wrap{justify-content:center;text-align:left}
          .hero-inner{max-width:92%}
        }
      `}</style>

      <div className="hero-1">
        <div className="video-bg" aria-hidden="true">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="video-overlay" />

        <div className="content-wrap">
          <div className="hero-inner">
            <span className="sub-pill">Sustainability Through Innovation</span>

            <h1 className="headline">
              “Where <span className="emph">Logistics</span>, <span className="emph">Technology</span>, and
              <span className="emph"> Energy</span> meet excellence.”
            </h1>

            <p className="tagline">
              Integrated solutions that move the world—responsibly and intelligently.
            </p>

            <div className="cta-row">
              <a href="#solutions" className="btn btn-primary">Explore Solutions</a>
              <a href="#contact" className="btn btn-ghost">Talk to Us</a>
            </div>
          </div>
        </div>

        <div className="scroll-cue">Scroll</div>
      </div>
    </section>
  );
};

export default Heroanner1;
