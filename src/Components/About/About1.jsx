// src/Components/About/About1.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Logos (Shipsoft filtered out)
  const rawLogos = [
    { img: '/logosss01.png', alt: 'Brand 1' },
    { img: '/logosss02.png', alt: 'Brand 2' },
    { img: '/logosss03.png', alt: 'Brand 3' },
    { img: '/logosss04.png', alt: 'Brand 4' },
    { img: '/logosss05.png', alt: 'Brand 5' },
  ];
  const logos = rawLogos.filter(
    (l) => !/shipsoft/i.test(l.img) && !/shipsoft/i.test(l.alt)
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3200,
    pauseOnHover: true,
    fade: true,
    adaptiveHeight: true,
    appendDots: (dots) => <ul className="brand-dots">{dots}</ul>,
    customPaging: () => <button type="button" aria-label="Show brand" />,
  };

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: '56px 0 24px', overflow: 'hidden' }}
    >
      <style>{`
        .about-wrapper { width: 100%; }

        /* Add gap between image & content */
        @media (min-width: 992px) {
          .about-photo-wrap { margin-right: 40px; }
        }

        /* Team Image */
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

        /* Section content */
        .about-content .section-title h2 {
          margin-bottom: 18px;
        }

        /* Full teal circle icons */
        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }

        .about-items .icon {
          position: relative;
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

        .about-items .icon img {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
        }

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
          z-index: 0;
        }

        .about-items .content h5 {
          font-weight: 700;
          margin-bottom: 4px;
          color: #0E0F2C;
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.5;
          color: #444;
          font-size: 15px;
        }

        /* Group Companies */
        .brand-block {
          position: relative;
          margin-top: 60px;
          padding: 36px 20px 46px;
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 60px rgba(8, 23, 49, 0.16);
          overflow: hidden;
        }

        .brand-block::before,
        .brand-block::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
          z-index: 0;
        }

        .brand-block::before {
          top: -120px;
          left: -80px;
          background: rgba(38, 182, 224, 0.6);
        }

        .brand-block::after {
          bottom: -120px;
          right: -100px;
          background: rgba(16, 65, 115, 0.5);
        }

        .brand-title {
          position: relative;
          z-index: 1;
          text-align: center;
          margin: 0 0 18px 0;
          font-weight: 700;
          color: #0b1a33;
        }
        .brand-slider-wrap {
          position: relative;
          z-index: 1;
          max-width: 520px;
          margin: 0 auto;
          padding: 0 12px;
        }

        .brand-slide {
          display: flex !important;
          align-items: center;
          justify-content: center;
          padding: 8px 0;
        }

        .brand-card {
          width: min(420px, 100%);
          margin: 0 auto;
          padding: 34px 20px;
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(14, 31, 59, 0.9), rgba(38, 182, 224, 0.84));
          box-shadow: 0 16px 44px rgba(10, 28, 60, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(4px);
          position: relative;
        }

        .brand-card::after {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: 22px;
          border: 1px dashed rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        .brand-logo {
          max-width: 240px;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 24px rgba(11, 30, 58, 0.45));
          transition: transform .25s ease;
        }

        .brand-card:hover .brand-logo {
          transform: translateY(-4px) scale(1.02);
        }

        .brand-dots {
          margin: 24px 0 0;
          padding: 0;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 12px;
          list-style: none;
        }

        .brand-dots li button {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          border: none;
          background: rgba(10, 24, 48, 0.3);
          padding: 0;
          cursor: pointer;
          transition: all .3s ease;
        }

        .brand-dots li.slick-active button {
          width: 28px;
          background: linear-gradient(135deg, #26b6e0, #1173b7);
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .about-photo { width: min(100%, 860px); transform: scale(1.02); }
        }
        @media (max-width: 991px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
          .brand-block {
            margin-top: 48px;
            padding: 32px 18px 40px;
            border-radius: 28px;
          }

          .brand-card {
            padding: 28px 16px;
            border-radius: 22px;
          }

          .brand-card::after {
            inset: 8px;
            border-radius: 18px;
          }

          .brand-logo {
            max-width: 210px;
          }
          .brand-block { margin-top: 40px; }
        }
        @media (max-width: 575px) {
          .brand-block {
            margin-top: 36px;
            padding: 26px 14px 34px;
            border-radius: 24px;
          }

          .brand-slider-wrap { padding: 0 8px; }
          .brand-card {
            padding: 26px 14px;
            border-radius: 20px;
          }

          .brand-card::after {
            inset: 6px;
            border-radius: 16px;
          }

          .brand-logo {
            max-width: 190px;
          }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Image */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img
                  src="/team.jpg"
                  alt="1 Global Enterprises Group"
                  className="about-photo"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Expertise" />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring sustainability,
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Group Companies Section */}
          <div className="brand-block">
            <h4 className="brand-title">Group Companies</h4>
            <div className="brand-slider-wrap">
              <Slider {...sliderSettings}>
                {logos.map((item, i) => (
                  <div key={i} className="brand-slide">
                    <div className="brand-card">
                      <img src={item.img} alt={item.alt} className="brand-logo" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
