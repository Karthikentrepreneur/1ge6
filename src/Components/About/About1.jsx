// src/Components/About/About1.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const logos = [
    { img: "/logosss01.png", alt: "Global Gateway Logistics", link: "https://www.ggl.sg/" },
    { img: "/logosss03.png", alt: "OECL Supply Chain",       link: "https://www.oecl.sg/" }, // fixed
    { img: "/logosss02.png", alt: "Global Consol",           link: "https://www.globalconsol.com/" },
    { img: "/Haixun_logo.png", alt: "Hai Xun Logistics",     link: "https://www.haixun.co/" },
    { img: "/one.png", alt: "ONE Global Logistics",          link: "https://www.onegloballogistics.co/" },
    { img: "/logosss04.png", alt: "Moltech Energy",          link: "https://www.moltechglobal.com/" },
    { img: "/logosss05.png", alt: "CityGn Distribution",     link: "https://www.citygnenergy.com/" },
    { img: "/logo-2.png", alt: "Future Net Logistics",       link: "https://futurenetlogistics.com/" },
  ];

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
      { breakpoint: 767,  settings: { slidesToShow: 2, centerMode: true, centerPadding: "10px" } },
      { breakpoint: 575,  settings: { slidesToShow: 1, centerMode: true, centerPadding: "30px" } },
    ],
  };

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: "56px 0 24px", overflow: "hidden" }}
    >
      <style>{`
        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }
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
        .about-photo:hover { transform: scale(1.07); box-shadow: 0 22px 66px rgba(0,0,0,.26); }

        .brand-block { margin-top: 60px; }
        .brand-title { text-align: center; margin: 0 0 15px; font-weight: 700; }
        .brand-slider-wrap { max-width: 1100px; margin: 0 auto; padding: 0 8px; }
        .brand-slide {
          display:flex;
          align-items:center;
          justify-content:center;
          height:110px;
          transition: transform .2s ease;
          outline: none;
        }
        .brand-slide:focus-visible { box-shadow: 0 0 0 3px rgba(155,17,30,0.35); border-radius: 12px; }
        .brand-slide:hover { transform: translateY(-4px); }
        .brand-logo {
          max-height: 90px;
          width:auto;
          object-fit:contain;
          transition: transform .2s ease;
          user-drag: none;
          -webkit-user-drag: none;
        }
        .brand-logo:hover { transform: scale(1.05); }
        .brand-link {
          display:flex; align-items:center; justify-content:center;
          height:100%; width:100%;
          cursor:pointer;
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img
                  src="/team.jpg"
                  alt="1 Global Enterprises Group"
                  className="about-photo"
                />
              </div>
            </div>

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

          {/* Group Companies Slider */}
          <div className="brand-block">
            <h4 className="brand-title">Group Companies</h4>
            <div className="brand-slider-wrap">
              <Slider {...sliderSettings}>
                {logos.map((item, i) => (
                  <div key={i} className="brand-slide">
                    <a
                      className="brand-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open ${item.alt}`}
                      onDragStart={(e) => e.preventDefault()}
                    >
                      <img src={item.img} alt={item.alt} className="brand-logo" />
                    </a>
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
