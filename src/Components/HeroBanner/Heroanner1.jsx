import React from 'react';
import parse from 'html-react-parser';

const Heroanner1 = () => {
  // Update with your actual video path
  const videoSrc = '/assets/videos/hero.mp4';

  const heroContent = {
    subtitle: 'Get unforgettable pleasure with us',
    title: 'Let’s make your best <br> trip with us',
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
        .hero-content, .counter-area {
          position: relative; z-index: 2;
        }
      `}</style>

      <div className="hero-1">
        {/* Background video */}
        <div className="video-bg" aria-hidden="true">
          <video
            src="singapore.mp4"
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
                <h1>{parse(heroContent.title)}</h1>
              </div>

              <div className="counter-area">
                <div className="counter-items">
                  <div className="counter-text">
                    <h2><span className="count">20.5</span>k</h2>
                    <p>Featured Projects</p>
                  </div>
                  <div className="counter-text">
                    <h2><span className="count">100.5</span>k</h2>
                    <p>Luxury Houses</p>
                  </div>
                  <div className="counter-text">
                    <h2><span className="count">150.5</span>k</h2>
                    <p>Satisficed Clients</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroanner1;
