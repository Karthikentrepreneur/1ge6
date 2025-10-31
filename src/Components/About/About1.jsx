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
      style={{ padding: "56px 0 24px", overflow: "hidden" }}
    >
      <style>{`
        :root { --accent:#26B6E0; --ink:#0E0F2C; --muted:#444; }
        .about-wrapper { width: 100%; }
        .about-section { overflow-x: hidden; }

        /* IMAGE (desktop) */
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
        @media (min-width: 992px) { .about-photo-wrap { margin-right: 40px; } }

        /* TITLE */
        .about-content .section-title h2 {
          margin-bottom: 18px;
          color: var(--ink);
          font-weight: 800;
          letter-spacing: -.2px;
        }

        /* TIMELINE ITEMS */
        .about-items {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 28px;
        }
        .about-items .icon {
          width: 60px; height: 60px; min-width: 60px;
          border-radius: 50%;
          background-color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          z-index: 1;
          box-shadow: 0 4px 10px rgba(38,182,224,0.35);
        }
        .about-items .icon img { width: 28px; height: 28px; filter: brightness(0) invert(1); }
        .about-items:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 29px; top: 60px;
          width: 2px;
          height: calc(100% - 30px);
          background: repeating-linear-gradient(
            to bottom, var(--accent), var(--accent) 4px, transparent 4px, transparent 8px
          );
          z-index: 0;
        }
        .about-items .content h5 {
          font-weight: 800;
          margin: 2px 0 6px;
          color: var(--ink);
        }
        .about-items .content p {
          margin: 0;
          line-height: 1.55;
          color: var(--muted);
          font-size: 15px;
        }

        /* BRAND SLIDER */
        .brand-block { margin-top: 44px; }
        .brand-title { text-align: center; margin: 0 0 14px; font-weight: 800; color: var(--ink); }
        .brand-slider-wrap { max-width: 1100px; margin: 0 auto; padding: 0 8px; }
        .brand-slide { display: flex; align-items: center; justify-content: center; height: 110px; }
        .brand-logo { max-height: 90px; width: auto; object-fit: contain; transition: transform .2s ease; }
        .brand-logo:hover { transform: translateY(-2px); }
        .brand-link { display:flex; align-items:center; justify-content:center; width:100%; height:100%; }

        /* ======= MOBILE: match your screenshot layout ======= */
        @media (max-width: 768px) {
          .about-section { padding: 28px 0 8px !important; }
          .container { padding-left: 18px; padding-right: 18px; }

          /* Hide big image column on mobile; focus on text timeline */
          .about-photo-col { display: none !important; }
          .about-text-col { width: 100%; max-width: 100%; }

          /* Section title a touch smaller, strong weight */
          .about-content .section-title h2 {
            font-size: clamp(20px, 5.2vw, 24px);
            margin-bottom: 14px;
          }

          /* Compact timeline like the screenshot */
          .about-items { gap: 12px; margin-bottom: 22px; }
          .about-items .icon {
            width: 46px; height: 46px; min-width: 46px;
            box-shadow: 0 3px 8px rgba(38,182,224,.30);
          }
          .about-items .icon img { width: 22px; height: 22px; }

          /* Dotted connector aligned to icon center */
          .about-items:not(:last-child)::after {
            left: 23px;  /* half of 46px */
            top: 46px;
            height: calc(100% - 20px);
          }

          /* Typography to match the screenshot */
          .about-items .content h5 {
            font-size: 16px;
            margin-bottom: 6px;
            line-height: 1.25;
          }
          .about-items .content p {
            font-size: 13.5px;
            line-height: 1.55;
          }

          /* Slight tighter list area spacing on mobile */
          .about-area { margin-top: 6px; }

          /* Brand row smaller on mobile */
          .brand-slide { height: 84px; }
          .brand-logo { max-height: 68px; }
        }

        /* Very small phones */
        @media (max-width: 420px) {
          .about-items .icon { width: 42px; height: 42px; min-width: 42px; }
          .about-items .icon img { width: 20px; height: 20px; }
          .about-items:not(:last-child)::after { left: 21px; top: 42px; }
          .about-items .content p { font-size: 13px; }
        }
      `}</style>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* Left Image (hidden on mobile) */}
            <div className="col-lg-7 d-flex justify-content-center about-photo-col">
              <div className="about-photo-wrap">
                <img src="/team.jpg" alt="1 Global Enterprises Group" className="about-photo" />
              </div>
            </div>

            {/* Right Text (full width on mobile) */}
            <div className="col-lg-5 about-text-col">
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
                      <h5>Our People, Our Strength</h5>
                      <p>
                        At 1 Global Enterprises, our greatest strength is our people. Across every division and region,
                        it is the passion, creativity, and commitment of our employees that turn ideas into real impact.
                        Their dedication drives innovation, builds trust with our partners, and fuels the progress that
                        defines who we are as a company.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="Leadership" />
                    </div>
                    <div className="content">
                      <h5>Leadership That Empowers</h5>
                      <p>
                        JP, the Managing Director and Founder of 1 Global Enterprises, believes that true leadership
                        begins with empowering others. He attributes the company’s growth and success to the collective
                        effort of a talented and diverse team that shares a common purpose — creating meaningful progress
                        for our people and our customers.
                      </p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="Vision" />
                    </div>
                    <div className="content">
                      <h5>Vision For Lasting Impact</h5>
                      <p>
                        Under JP’s guidance, 1 Global Enterprises has evolved into a group of businesses spanning
                        renewable energy, sustainable supply chain solutions, software innovation, and responsible
                        product distribution. His vision proves that commercial excellence and social responsibility can
                        coexist — empowering growth that benefits communities and industries alike.
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
