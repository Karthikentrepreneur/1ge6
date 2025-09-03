import React from 'react';

const Heroanner1 = () => {
  // Update with your actual video path
  const videoSrc = 'singapore.mp4';

  const heroContent = {
    subtitle: 'Sustainability Through Innovation',
    title: '“Where logistics, technology, <br> and energy meet excellence.”',
  };

  return (
    <section className="hero-section">
      {/* Inline styles for the video background */}
      <style>{`
        .hero-1 { position: relative; overflow: hidden; }
        .video-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }
        .video-bg video {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .video-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 2;
          color: #fff;
          text-align: left;
          padding-top: 180px; /* adjust spacing as needed */
        }
        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin-top: 10px;
        }
        .hero-content .sub-title {
          font-size: 1.25rem;
          font-weight: 500;
          opacity: 0.9;
        }
      `}</style>

      <div className="hero-1">
        {/* Background video */}
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

        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="hero-content">
                <div className="sub-title">{heroContent.subtitle}</div>
                <h1>{heroContent.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroanner1;
