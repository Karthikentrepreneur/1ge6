// src/Components/About/About1.jsx
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Users2, Globe2, BadgeCheck } from "lucide-react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

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
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2, centerMode: true, centerPadding: "10px" } },
      { breakpoint: 575, settings: { slidesToShow: 1, centerMode: true, centerPadding: "30px" } },
    ],
  };

  return (
    <section
      className="about-section bg-cover"
      data-background="/about-bg.png"
      style={{ padding: "56px 0 24px", overflow: "hidden" }}
    >
      <style>{`
        :root {
          --accent: #26B6E0;
          --ink: #0E0F2C;
          --muted: #444;
        }

        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }

        /* ===== Image ===== */
        .about-photo-wrap { width: 100%; text-align: center; }
        .about-photo {
          width: min(100%, 940px);
          height: auto;
          border-radius: 22px;
          object-fit: cover;
          box-shadow: 0 16px 50px rgba(0, 0, 0, 0.24);
          transform: scale(1.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-photo:hover {
          transform: scale(1.07);
          box-shadow: 0 22px 66px rgba(0, 0, 0, 0.26);
        }

        @media (min-width: 992px) {
          .about-photo-wrap {
            margin-right: 40px;
          }
        }

        /* ===== Title ===== */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -0.2px;
          font-size: 32px;
        }

        /* ===== Items + Dotted Connector (Desktop) ===== */
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
          background-color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(38, 182, 224, 0.35);
          z-index: 1;
        }

        .about-items .icon svg {
          width: 28px;
          height: 28px;
          color: #fff;
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
            var(--accent),
            var(--accent) 4px,
            transparent 4px,
            transparent 8px
          );
          z-index: 0;
        }

        .about-items .content h5 {
          font-weight: 800;
          margin: 2px 0 6px;
          color: var(--ink);
          font-size: 18px;
        }

        .about-items .content p {
          margin: 0;
          line-height: 1.55;
          color: var(--muted);
          font-size: 15.5px;
        }

        /* ===== Brand slider ===== */
        .brand-block { margin-top: 44px; }
        .brand-title {
          text-align: center;
          margin: 0 0 14px;
          font-weight: 800;
          color: var(--ink);
        }
        .brand-slider-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 8px;
        }
        .brand-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 110px;
        }
        .brand-logo {
          max-height: 90px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }
        .brand-logo:hover {
          transform: translateY(-2px);
        }

        /* ===== Responsive (Mobile behaves same visually) ===== */
        @media (max-width: 768px) {
          .about-section { padding: 32px 0 12px !important; }
          .container { padding-left: 18px; padding-right: 18px; }

          .about-wrapper .row { flex-direction: column; gap: 22px; }

          .about-content .section-title h2 {
            font-size: 28px;
            line-height: 1.2;
            text-align: left;
          }

          .about-items {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 20px;
          }

          .about-items .icon {
            width: 52px;
            height: 52px;
            min-width: 52px;
            flex-shrink: 0;
            box-shadow: 0 3px 8px rgba(38,182,224,0.28);
          }

          .about-items .icon svg {
            width: 22px;
            height: 22px;
          }

          .about-items:not(:last-child)::after {
            left: 25px;
            top: 52px;
            height: calc(100% - 22px);
          }

          .about-items .content h5 {
            font-size: 16px;
            margin-bottom: 4px;
          }

          .about-items .content p {
            font-size: 14px;
            line-height: 1.5;
          }

          .about-photo {
            transform: none;
            border-radius: 16px;
            box-shadow: 0 10px 26px rgba(0,0,0,.15);
          }

          .brand-slide { height: 84px; }
          .brand-logo { max-height: 68px; }
        }

        @media (max-width: 480px) {
          .about-items .icon { width: 46px; height: 46px; }
          .about-items .icon svg { width: 20px; height: 20px; }
          .about-items .content p { font-size: 13.5px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-7 d-flex justify-content-center">
              <div className="about-photo-wrap">
                <img src="/team.jpg" alt="1 Global Enterprises Group" className="about-photo" />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="col-lg-5">
              <div className="about-content">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  {/* Who We Are */}
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>A diversified group with interests in Shipping, Logistics, Distribution, IT, Clean Energy & Trading.</p>
                    </div>
                  </div>

                  {/* Our Reach */}
                  <div className="about-items">
                    <div className="icon"><Globe2 /></div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="about-items">
                    <div className="icon"><BadgeCheck /></div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>Each business unit is led by experts ensuring sustainability, execution & growth.</p>
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
