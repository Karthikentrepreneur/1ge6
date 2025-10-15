// src/components/ServicesVideoSection.tsx (or .jsx)
import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Workflow, Droplets, Code2, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Lubricant Distribution", Icon: Droplets },
  { title: "Software Development", Icon: Code2 },
  { title: "Renewable Energy", Icon: Sun },
];

type Props = {
  videoSrc?: string;
  poster?: string;
  heading?: string;
  subheading?: string;
};

const ServicesVideoSection: React.FC<Props> = ({
  videoSrc = "/Video2.mp4",
  poster = "/video-poster.jpg",
  heading = "Our Services",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  const leftRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [matchHeight, setMatchHeight] = useState<number | null>(null);
  const [isPlaying, setPlaying] = useState(true);
  const [isMuted, setMuted] = useState(true);

  // Match video card to left column height on wide screens, but keep it BIG
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const apply = () => {
      const h = el.getBoundingClientRect().height;
      // Enforce a generous min/max so it always looks big
      const clamped = Math.max(560, Math.min(Math.round(h), 820));
      setMatchHeight(clamped);
    };

    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener("resize", apply);
    apply();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  // Auto-pause when offscreen (battery & UX friendly)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (isPlaying) vid.play().catch(() => {});
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(vid);
    return () => io.disconnect();
  }, [isPlaying]);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play().catch(() => {});
      setPlaying(true);
    } else {
      vid.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setMuted(vid.muted);
  };

  return (
    <section className="svs-wrap">
      <div className="svs-container">
        {/* LEFT */}
        <div className="svs-left" ref={leftRef}>
          <p className="svs-sub">{subheading}</p>
          <h2 className="svs-title">{heading}</h2>

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

          <div className="svs-cta">
            <a className="svs-btn" href="/contact">Talk to an expert</a>
            <a className="svs-link" href="/services">Explore services</a>
          </div>
        </div>

        {/* RIGHT – BIG cinematic video card */}
        <div className="svs-right">
          <div
            className="svs-video-card"
            style={{ ["--cardH" as any]: matchHeight ? `${matchHeight}px` : undefined }}
          >
            <div className="svs-glow" aria-hidden />
            <div className="svs-video-frame">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
                aria-label="Services highlight video"
              />
            </div>

            {/* Floating badges */}
            <div className="svs-badges">
              <div className="svs-badge">24/7 Ops</div>
              <div className="svs-badge">Global Reach</div>
              <div className="svs-badge">ISCC Ready</div>
            </div>

            {/* Controls */}
            <div className="svs-controls">
              <button className="svs-ctrl" onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button className="svs-ctrl" onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Section */
        .svs-wrap {
          position: relative;
          background: radial-gradient(1200px 500px at 10% 10%, #f2fbff 0%, #ffffff 55%);
          padding: 72px 0;
        }

        .svs-container {
          width: min(1280px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 1.2fr; /* more space to the video */
          gap: 36px;
          align-items: center;
        }

        /* Left column */
        .svs-sub {
          margin: 0 0 8px;
          letter-spacing: .3px;
          font-size: .98rem;
          color: #5f6b7a;
        }
        .svs-title {
          margin: 0 0 16px;
          font-size: clamp(2.1rem, 1.4rem + 2.2vw, 3rem);
          line-height: 1.08;
          font-weight: 900;
          color: #0E0F2C;
        }

        .svs-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-top: 14px;
        }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid #e6eef6;
          border-radius: 16px;
          background: #f9fbff;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .svs-item:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(10,40,80,.08); border-color: #d7e6f3; }
        .svs-icon {
          flex: 0 0 48px;
          width: 48px; height: 48px; border-radius: 14px;
          display: grid; place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1398c1;
        }
        .svs-icon svg { width: 24px; height: 24px; }
        .svs-item-title { font-weight: 800; color: #0E0F2C; }

        .svs-cta { display: flex; gap: 14px; margin-top: 22px; align-items: center; }
        .svs-btn {
          background: linear-gradient(90deg, #1ab2df, #0ea5c6);
          color: #fff; font-weight: 800;
          padding: 12px 18px; border-radius: 12px;
          text-decoration: none; border: 1px solid rgba(0,0,0,.04);
          box-shadow: 0 12px 30px rgba(16,155,195,.25);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
        }
        .svs-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 34px rgba(16,155,195,.32); filter: saturate(1.05); }
        .svs-link { color: #0e7490; font-weight: 700; text-decoration: none; }
        .svs-link:hover { text-decoration: underline; }

        /* Right column - BIG video */
        .svs-right { position: relative; }
        .svs-video-card {
          position: relative;
          width: 100%;
          height: var(--cardH, 640px);         /* big by default */
          padding: 14px;
          border-radius: 22px;
          background: rgba(255,255,255,.72);
          backdrop-filter: saturate(1.4) blur(6px);
          border: 1px solid rgba(180,200,220,.35);
          box-shadow: 0 28px 80px rgba(10,40,80,.12);
          overflow: hidden;
          transform: translateZ(0);
        }

        .svs-glow {
          position: absolute; inset: -12%;
          background: radial-gradient(600px 300px at 75% 25%, rgba(38,182,224,.35), transparent 70%),
                      radial-gradient(480px 240px at 35% 85%, rgba(14,165,198,.25), transparent 70%);
          filter: blur(30px);
          z-index: 0;
          pointer-events: none;
        }

        .svs-video-frame {
          position: relative;
          z-index: 1;
          width: 100%; height: 100%;
          overflow: hidden;
          border-radius: 16px;
          background: #000;
          /* subtle parallax tilt on hover */
          transform-style: preserve-3d;
          transition: transform .35s ease;
        }
        .svs-video-card:hover .svs-video-frame { transform: perspective(1200px) rotateX(1.2deg) rotateY(-1.2deg) scale(1.01); }

        .svs-video-frame video {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          display: block;
        }

        /* Floating badges */
        .svs-badges {
          position: absolute; z-index: 2;
          left: 24px; top: 18px;
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .svs-badge {
          font-size: .82rem; font-weight: 800; letter-spacing: .2px;
          color: #064e5f; background: rgba(255,255,255,.86);
          border: 1px solid rgba(0,0,0,.06);
          padding: 6px 10px; border-radius: 999px;
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
        }

        /* Controls */
        .svs-controls {
          position: absolute; z-index: 2;
          right: 16px; bottom: 16px;
          display: flex; gap: 8px;
        }
        .svs-ctrl {
          width: 40px; height: 40px; border-radius: 12px;
          display: grid; place-items: center;
          background: rgba(255,255,255,.9);
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          color: #0b6b86;
          cursor: pointer;
          transition: transform .15s ease, background .15s ease;
        }
        .svs-ctrl:hover { transform: translateY(-1px); background: #fff; }

        /* Responsiveness */
        @media (max-width: 1200px) {
          .svs-container { grid-template-columns: 1fr; gap: 28px; }
          .svs-video-card { height: 560px; }
        }
        @media (max-width: 768px) {
          .svs-wrap { padding: 56px 0; }
          .svs-video-card { height: auto; padding: 10px; }
          .svs-video-frame { aspect-ratio: 16 / 9; } /* keep cinematic on phones */
          .svs-badge { font-size: .78rem; }
        }
        @media (max-width: 480px) {
          .svs-video-frame { aspect-ratio: 9 / 16; } /* portrait if you prefer */
          .svs-controls { right: 12px; bottom: 12px; }
          .svs-ctrl { width: 36px; height: 36px; border-radius: 10px; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
