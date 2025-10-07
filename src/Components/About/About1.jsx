// src/Components/About/About1.jsx
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Logos (Shipsoft filtered out if present)
  const rawLogos = [
    { img: '/logosss01.png', alt: 'Brand 1' },
    { img: '/logosss02.png', alt: 'Brand 2' },
    { img: '/logosss03.png', alt: 'Brand 3' },
    { img: '/logosss04.png', alt: 'Brand 4' },
    { img: '/logosss05.png', alt: 'Brand 5' },
    { img: '/logosss06.png', alt: 'Brand 6' },
  ];
  const logos = rawLogos.filter(l => !/shipsoft/i.test(l.img) && !/shipsoft/i.test(l.alt));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 1199, settings: { slidesToShow: 4 } },
      { breakpoint: 991,  settings: { slidesToShow: 3 } },
      { breakpoint: 767,  settings: { slidesToShow: 2 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: '56px 0 24px', overflow: 'hidden' }}
    >
      <style>{`
        .about-wrapper { width: 100%; }

        /* Slightly smaller image so it doesn't crowd the text */
        .about-photo-wrap { width: 100%; text-align: center; }
        .about-photo {
          width: min(100%, 960px);   /* was 1100px */
          height: auto;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 16px 50px rgba(0,0,0,.24);
          transform: scale(1.04);    /* was 1.12 */
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .about-photo:hover {
          transform: scale(1.08);    /* was 1.16 */
          box-shadow: 0 22px 66px rgba(0,0,0,.26);
        }

        .about-content .section-title .sub-title {
          color: #26B6E0; margin-bottom: 6px; font-weight: 600; display: inline-block;
        }
        .about-content .section-title h2 { margin-bottom: 12px; }
        .about-items { margin-bottom: 18px; }
        .about-items .icon img { width: 44px; height: 44px; }

        /* Group Companies centered + full color logos (no grayscale) */
        .brand-block { margin-top: 26px; }
        .brand-title { text-align: center; margin: 0 0 10px 0; font-weight: 700; }
        .brand-slider-wrap { max-width: 1100px; margin: 0 auto; padding: 0 8px; }
        .brand-slide { display:flex; align-items:center; justify-content:center; height:110px; }
        .brand-logo {
          max-height: 90px; width:auto; object-fit:contain;
          opacity: 1; filter: none; transition: transform .2s ease;
        }
        .brand-logo:hover { transform: translateY(-2px); }

        /* Layout tweaks so text never overlaps image */
        @media (min-width: 1200px) {
          .about-left-col { padding-right: 16px; } /* small gutter */
          .about-right-col { padding-left: 24px; } /* breathing room for text */
        }

        /* Responsive adjustments */
        @media (max-width: 1199px) {
          .about-photo { width: min(100%, 880px); transform: scale(1.02); }
        }
        @media (max-width: 991px) {
          .about-section { padding: 40px 0 16px !important; }
          .about-photo { width: 100%; transform: scale(1.0); border-radius: 18px; }
          .brand-slide { height: 96px; }
          .brand-logo { max-height: 80px; }
        }
        @media (max-width: 575px) {
          .brand-slide { height: 86px; }
          .brand-logo { max-height: 72px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Slightly smaller than before: 7 / 5 split */}
            <div className="col-lg-7 about-left-col d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img src="/team.jpeg" alt="1 Global Enterprises Group" className="about-photo" />
              </div>
            </div>

            <div className="col-lg-5 about-right-col">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title">Singapore Headquarters</span>
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="line-image mb-2">
                    <img src="/assets/img/about/Line-image.png" alt="Line Decoration" />
                  </div>

                  <div className="about-items d-flex gap-3">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p className="mb-0">
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items d-flex gap-3">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p className="mb-0">
                        700+ professionals operating across South-East Asia,
                        Middle East, USA & UK.
                      </p>
                    </div>
                  </div>

                  <div className="about-items d-flex gap-3">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Expertise" />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p className="mb-0">
                        Each business unit is led by experts ensuring strong
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Group Companies (inside) */}
          <div className="brand-block">
            <h4 className="brand-title">Group Companies</h4>
            <div className="brand-slider-wrap">
              <Slider {...sliderSettings}>
                {logos.map((item, i) => (
                  <div key={i} className="brand-slide">
                    <img src={item.img} alt={item.alt} className="brand-logo" />
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
