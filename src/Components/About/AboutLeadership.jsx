// src/Components/About/AboutLeadership.jsx
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Users2, HeartHandshake, Globe2 } from 'lucide-react';

const AboutLeadership = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: '56px 0 24px', overflow: 'hidden' }}
    >
      <style>{`
        .about-wrapper { width: 100%; }

        /* Layout spacing */
        @media (min-width: 992px) {
          .about-content-wrap { margin-right: 40px; }
        }

        /* Main right-side image */
        .about-photo-wrap { width: 100%; text-align: center; }
        .about-photo {
          width: min(100%, 940px);
          height: auto;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 16px 50px rgba(0,0,0,.24);
          transform: scale(1.03);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .about-photo:hover {
          transform: scale(1.07);
          box-shadow: 0 22px 66px rgba(0,0,0,.26);
        }

        /* Founder portrait below main image */
        .founder-wrap {
          text-align: center;
          margin-top: 24px;
        }
        .founder-wrap img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          transition: transform .3s ease;
        }
        .founder-wrap img:hover { transform: scale(1.05); }
        .founder-caption {
          margin-top: 10px;
          font-weight: 600;
          font-size: 16px;
          color: #0E0F2C;
        }
        .founder-caption span {
          display: block;
          font-size: 14px;
          color: #26B6E0;
          font-weight: 500;
        }

        /* Lucide teal circle icon bullets */
        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }
        .about-items .icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          border-radius: 50%;
          background-color: #26B6E0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }
        .about-items .icon svg { width: 28px; height: 28px; color: #fff; }

        .about-items:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 29px;
          top: 60px;
          width: 2px;
          height: calc(100% - 30px);
          background: repeating-linear-gradient(
            to bottom,
            #26B6E0,
            #26B6E0 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .about-items .content h5 {
          font-weight: 700;
          margin-bottom: 6px;
          color: #0E0F2C;
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.55;
          color: #444;
          font-size: 15.5px;
        }

        /* Responsive tweaks */
        @media (max-width: 1199px) {
          .about-photo { width: min(100%, 860px); transform: scale(1.02); }
        }
        @media (max-width: 991px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
          .about-content-wrap { margin-right: 0; }
          .founder-wrap img { width: 120px; height: 120px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div className="about-content about-content-wrap">
                <div className="section-title">
                  <h2>People-Powered Leadership</h2>
                </div>

                <div className="about-items">
                  <div className="icon"><Users2 /></div>
                  <div className="content">
                    <h5>Our People, Our Strength</h5>
                    <p>
                      At 1 Global Enterprises, our greatest strength is our people. Across every division and region,
                      it is the passion, creativity, and commitment of our employees that turn ideas into real impact.
                      Their dedication drives innovation, builds trust with our partners, and fuels the progress that defines
                      who we are as a company.
                    </p>
                  </div>
                </div>

                <div className="about-items">
                  <div className="icon"><HeartHandshake /></div>
                  <div className="content">
                    <h5>Leadership That Empowers</h5>
                    <p>
                      JP, the Managing Director and Founder of 1 Global Enterprises, believes that true leadership begins
                      with empowering others. He attributes the company’s growth and success to the collective effort of
                      a talented and diverse team that shares a common purpose — creating meaningful progress for people
                      and the planet.
                    </p>
                  </div>
                </div>

                <div className="about-items">
                  <div className="icon"><Globe2 /></div>
                  <div className="content">
                    <h5>Vision for Lasting Impact</h5>
                    <p>
                      Under JP’s guidance, 1 Global Enterprises has evolved into a group of businesses spanning renewable energy,
                      sustainable supply chain solutions, software innovation, and responsible product distribution.
                      His vision proves that commercial excellence and social responsibility can coexist — empowering communities,
                      advancing cleaner technologies, and creating lasting value for generations to come through collaboration,
                      humility, and long-term thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE + FOUNDER SECTION */}
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <div className="about-photo-wrap">
                <img
                  src="/leadership.jpg"
                  alt="Leadership at 1 Global Enterprises"
                  className="about-photo"
                />
              </div>

              {/* Founder portrait and caption */}
              <div className="founder-wrap">
                <img src="/founder.jpg" alt="Jay Prakash" />
                <div className="founder-caption">
                  Managing Director and Founder
                  <span>Jay Prakash</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;
