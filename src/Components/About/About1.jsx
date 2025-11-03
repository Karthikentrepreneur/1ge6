// src/Components/About/About1.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Users2, Globe2, BadgeCheck } from "lucide-react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => { loadBackgroudImages(); }, []);

  const logos = [
    { img: "/logosss01.png", alt: "Global Gateway Logistics", link: "https://www.ggl.sg/" },
    { img: "/logosss03.png", alt: "OECL Supply Chain", link: "https://www.oecl.sg/" },
    { img: "/logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/" },
    { img: "/Haixun_logo.png", alt: "Hai Xun Logistics", link: "https://www.haixun.co/" },
    { img: "/one.png", alt: "ONE Global Logistics", link: "https://www.onegloballogistics.co/" },
    { img: "/logosss04.png", alt: "Moltech Energy", link: "https://www.moltechglobal.com/" },
    { img: "/logosss05.png", alt: "CityGn Distribution", link: "https://www.citygnenergy.com/" },
    { img: "/logo-2.png", alt: "Future Net Logistics", link: "https://futurenetlogistics.com/" },
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
      style={{ padding: "40px 0 20px", overflow: "hidden" }}
    >
      <style>{`
        :root { --accent:#26B6E0; --ink:#0E0F2C; --muted:#444; }

        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }

        /* ===== Left image (original, no crop) ===== */
        .about-image-col { padding-right: 16px; }
        .about-photo-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-photo {
          display: block;
          width: 100%;
          height: auto;           /* preserve original aspect ratio */
          object-fit: contain;    /* never crop */
          object-position: center;
          border-radius: 12px;
          border: 2px solid #e6eef3;
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
          background: #fff;       /* avoids transparency edges on contain */
        }

        /* Right column */
        .about-text-col { position: relative; z-index: 2; padding-left: 16px; }

        /* ===== Title ===== */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.2px;
          font-size: 34px;
          line-height: 1.15;
        }

        /* ===== Info Items ===== */
        .about-items {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
        }
        .about-items .icon {
          width: 54px; height: 54px; min-width: 54px;
          border-radius: 50%;
          background-color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 10px rgba(38,182,224,.35);
        }
        .about-items .icon svg { width: 24px; height: 24px; color: #fff; }
        .about-items .content h5 { font-weight: 800; margin: 2px 0 6px; color: var(--ink); }
        .about-items .content p { margin: 0; line-height: 1.55; color: var(--muted); font-size: 15.5px; }

        /* ===== Group Companies (enlarged) ===== */
        .brand-block {
          margin-top: 80px;
          padding: 60px 0;
          background: linear-gradient(180deg, #f8fbfd 0%, #eef5f9 100%);
          border-radius: 20px;
        }
        .brand-title {
          text-align: center;
          margin: 0 0 35px;
          font-size: 32px;
          font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.3px;
        }
        .brand-slider-wrap { max-width: 1200px; margin: 0 auto; padding: 0 8px; }
        .brand-slide { display: flex; align-items: center; justify-content: center; height: 160px; }
        .brand-logo { max-height: 110px; width: auto; object-fit: contain; transition: transform .25s ease, filter .25s ease; filter: brightness(.9); }
        .brand-logo:hover { transform: scale(1.08); filter: brightness(1.05); }

        /* ===== Responsive ===== */
        @media (max-width: 991px) {
          .about-image-col { padding-right: 0; }
          .about-text-col  { padding-left: 0; margin-top: 18px; }
          .brand-slide { height: 130px; }
          .brand-logo { max-height: 90px; }
        }
        @media (max-width: 575px) {
          .about-content .section-title h2 { font-size: 28px; }
          .about-items .icon { width: 48px; height: 48px; min-width: 48px; }
          .brand-title { font-size: 26px; margin-bottom: 25px; }
          .brand-slide { height: 110px; }
          .brand-logo { max-height: 80px; }
        }
      `}</style>

      <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="about-wrapper">
          <div className="row g-4 align-items-center mx-0">
            {/* Left Image */}
            <div className="col-lg-7 about-image-col d-flex">
              <div className="about-photo-wrap w-100">
                <img
                  src="/team1.jpg"
                  alt="1 Global Enterprises Team"
                  className="about-photo"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-lg-5 about-text-col">
              <div className="about-content pe-lg-4 ps-lg-2 px-3 px-lg-0">
                <div className="section-title"><h2>1 Global Enterprises</h2></div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>A diversified group with interests in Shipping, Logistics, Distribution, IT, Clean Energy &amp; Trading.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><Globe2 /></div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><BadgeCheck /></div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>Each business unit is led by experts ensuring sustainability, execution &amp; growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Group Companies (ENLARGED & CENTERED) ===== */}
          <div className="brand-block">
            <h3 className="brand-title">Group Companies</h3>
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
                      <img src={item.img} alt={item.alt} className="brand-logo" loading="lazy" />
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
