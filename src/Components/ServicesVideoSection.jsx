import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Workflow, Droplets, Code2, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Lubricant Distribution", Icon: Droplets },
  { title: "Software Development", Icon: Code2 },
  { title: "Renewable Energy", Icon: Sun },
];

const ServicesVideoSection = ({
  videoSrc = "/Video2.mp4",
  poster = "/video-poster.jpg",
  heading = "Our Services",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  const leftRef = useRef(null);
  const videoRef = useRef(null);
  const [matchHeight, setMatchHeight] = useState(null);
  const [isPlaying, setPlaying] = useState(true);
  const [isMuted, setMuted] = useState(true);

  // Match video card to left column height on wide screens (but keep it big)
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const apply = () => {
      const h = el.getBoundingClientRect().height;
      const clamped = Math.max(560, Math.min(Math.round(h), 820)); // 560–820px
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

  // Auto-pause when offscreen
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

        {/* RIGHT – BIG cinematic video */}
        <div className="svs-right">
          <div
            className="svs-video-card"
            style={{ "--cardH": matchHeight ? `${matchHeight}px` : undefined }}
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
              <div cl
