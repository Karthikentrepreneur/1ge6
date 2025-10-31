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
    { img: "/logosss03.png", alt: "OECL Supply Chain",       link: "https://www.oecl.sg/" },
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
      style={{ padding: "56px 0 24px", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        :root { --accent:#26B6E0; --ink:#0E0F2C; --muted:#444; }

        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }

        /* subtle bottom-right glow to match second UI */
        .about-section::after{
          content:"";
          position:absolute; inset:auto 0 0 auto;
          width: 46%; height: 46%;
          background: radial-gradient(60% 60% at 80% 80%, rgba(200,30,48,.10), transparent 60%);
          pointer-events:none;
        }

        /* layout */
        .about-photo-wrap { width: 100%; display:flex; justify-content:center; }
        /* framed card look */
        .about-photo-card{
          background:#fff;
          padding:18px;
          border-radius:24px;
          box-shadow: 0 22px 60px rgba(0,0,0,.18);
          display:inline-block;
        }
        .about-photo {
          width: min(100%, 980px);
          height: auto;
          display:block;
          border-radius:16px;
        }

        /* Title like the 2nd image (bigger, right column head) */
        .section-title h2{
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.4px;
          line-height: 1.1;
          margin: 0 0 18px;
          font-size: clamp(28px, 3.5vw, 56px); /* grow big on desktop */
        }

        /* items stack with dotted connector */
        .about-items{
          position: relative;
          display:flex; gap: 16px;
          align-items:flex-start;
          padding-left: 0;
          margin-bottom: 26px;
        }
        .about-items .icon{
          width: 64px; height: 64px; min-width:64px;
          border-radius: 50%;
          background: var(--accent);
          display:flex; align-items:center; justify-content:center;
          box-shadow: 0 6px 14px rgba(38,182,224,.32);
          position: relative;
          z-index: 2;
        }
        .about-items .icon img{ width: 28px; height: 28px; filter: brightness(0) invert(1); }

        /* dotted connector aligned to icon centers */
        .about-items:not(:last-child)::after{
          content:"";
          position:absolute;
          left: 32px; /* half of icon width */
          top: 64px;
          width:2px;
          height: calc(100% - 18px);
          background:
            linear-gradient(var(--accent), var(--accent)) left top / 2px 0 no-repeat,
            repeating-linear-gradient(to bottom, var(--accent), var(--accent) 4px, transparent 4px, transparent 10px);
          z-index:1;
          opacity:.9;
        }

        .about-items .content h5{
          margin: 4px 0 6px;
          font-weight: 800;
          color: var(--ink);
          font-size: 18px;
        }
        .about-items .content p{
          margin:0; color: var(--muted);
          line-height: 1.55; font-size: 15.5px;
        }

        /* group companies */
        .brand-block { margin-top: 44px; }
        .brand-title {
          text-align:center; margin: 0 0 14px;
          font-weight: 800; color: var(--ink);
          letter-spacing: -.2px;
        }
        .brand-slider-wrap { max-width: 1100px; margin: 0 auto; padding: 0 8px; }
        .brand-slide { display:flex; align-items:center; justify-content:center; height:110px; }
        .brand-logo { max-height: 90px; width:auto; object-fit:contain; transition: transform .2s ease; }
        .brand-logo:hover { transform: translateY(-2px); }

        /* spacing balance at lg+ to mimic screenshot */
        @media (min-width: 992px){
          .about-photo-wrap{ margin-right: 28px; }
        }

        /* Tablet */
        @media (max-width: 991.98px){
          .about-section{ padding: 44px 0 18px !important; }
          .about-photo-card{ padding:14px; border-radius:20px; }
          .about-photo{ border-radius:14px; }
          .brand-block{ margin-top: 36px; }
        }

        /* Mobile */
        @media (max-width: 768px){
          .container{ padding-left:16px; padding-right:16px; }
          .row.g-4{ gap:18px !important; }
          .section-title h2{ font-size: clamp(24px, 6vw, 32px); }
          .about-items{ gap:12px; margin-bottom:20px; }
          .about-items .icon{ width:52px; height:52px; min-width:52px; }
          .about-items:not(:last-child)::after{ left:26px; top:52px; }
          .about-items .content h5{ font-size:16px; }
          .about-items .content p{ font-size:14px; }
          .brand-slide{ height:84px; }
          .brand-logo{ max-height:68px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left: Photo card */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <div className="about-photo-card">
                  <img
                    src="/team.jpg"
                    alt="1 Global Enterprises Group"
                    className="about-photo"
                  />
                </div>
              </div>
            </div>

            {/* Right: Title + bullets (bigger like reference) */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-2">
                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping, Logistics,
                        Distribution, IT, Clean Energy &amp; Trading.
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
                        execution &amp; growth.
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
