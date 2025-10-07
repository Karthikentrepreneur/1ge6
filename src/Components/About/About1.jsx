// src/Components/About/About1.jsx (or .tsx)
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // ---- logos (auto-filters out any "shipsoft" asset) ----
  const rawLogos = [
    { img: '/logosss01.png', alt: 'Brand 1' },
    { img: '/logosss02.png', alt: 'Brand 2' },
    { img: '/logosss03.png', alt: 'Brand 3' },
    { img: '/logosss04.png', alt: 'Brand 4' },
    { img: '/logosss05.png', alt: 'Brand 5' },
    { img: '/logosss06.png', alt: 'Brand 6' },
  ];
  const logos = rawLogos.filter(
    l => !/shipsoft/i.test(l.img) && !/shipsoft/i.test(l.alt)
  );

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
      className="about-section section-padding fix bg-cover"
      data-background="/about-bg.png"
      style={{ overflow: 'hidden' }}
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">

            {/* LEFT IMAGE (Bigger) */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div
                className="about-image"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <img
                  src="/team.jpeg"
                  alt="1 Global Enterprises Group"
                  style={{
                    width: '100%',
                    maxWidth: '980px',     // ⬅ bigger cap
                    height: 'auto',
                    borderRadius: '24px',
                    objectFit: 'cover',
                    boxShadow: '0 18px 55px rgba(0,0,0,0.28)',
                    transform: 'scale(1.16)',         // ⬅ bigger visual presence
                    transition: 'transform 0.35s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.16)')}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Singapore Headquarters
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    1 Global Enterprises
                  </h2>
                </div>

                <div className="about-area mt-4 mt-md-0">
                  <div className="line-image">
                    <img
                      src="/assets/img/about/Line-image.png"
                      alt="Line Decoration"
                    />
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping,
                        Logistics, Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>
                        700+ professionals operating across South-East Asia,
                        Middle East, USA & UK.
                      </p>
                    </div>
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Expertise" />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring strong
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT CONTENT */}
          </div>

          {/* --- Logos carousel INSIDE the same About section --- */}
          <div className="row mt-5">
            <div className="col-12">
              <h4 className="brand-title wow fadeInUp mb-3" data-wow-delay=".2s">
                Group Companies
              </h4>
              <Slider {...sliderSettings}>
                {logos.map((item, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 120,
                        padding: '0 8px',
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        style={{
                          maxHeight: 100,
                          width: 'auto',
                          objectFit: 'contain',
                          opacity: 1,
                          filter: 'none',
                          mixBlendMode: 'normal',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          {/* --- /logos --- */}
        </div>
      </div>
    </section>
  );
};

export default About1;
