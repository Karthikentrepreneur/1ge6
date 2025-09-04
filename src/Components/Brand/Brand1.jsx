import React from "react";
import Slider from "react-slick";

const Brand1: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 1199, settings: { slidesToShow: 4 } },
      { breakpoint: 991,  settings: { slidesToShow: 3 } },
      { breakpoint: 767,  settings: { slidesToShow: 2 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } },
    ],
  };

  const logos = [
    { img: "/logosss01.png", alt: "Brand 1" },
    { img: "/logosss02.png", alt: "Brand 2" },
    { img: "/logosss03.png", alt: "Brand 3" },
    { img: "/logosss04.png", alt: "Brand 4" },
    { img: "/logosss05.png", alt: "Brand 5" },
    { img: "/logosss06.png", alt: "Brand 6" },
  ];

  // inline, component-scoped styles to avoid global CSS conflicts
  const wrapStyle: React.CSSProperties = {
    position: "relative",
  };
  const slideStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 90,       // adjust if you need taller logos
    padding: "10px 16px",
  };
  const imgStyle: React.CSSProperties = {
    maxHeight: 70,    // keeps logos uniform height
    width: "auto",
    objectFit: "contain",
    opacity: 1,       // ensure no faded look from global rules
    mixBlendMode: "normal",
    filter: "none",
  };

  return (
    <div className="brand-section section-padding pt-0" style={wrapStyle}>
      <div className="left-shape">
        <img src="/assets/img/brand/shape.png" alt="" />
      </div>

      <div className="container">
        <div className="brand-wrapper">
          <h4 className="brand-title wow fadeInUp" data-wow-delay=".3s">
            1k + Brands Trust Us
          </h4>

          {/* Pure react-slick (no swiper classes) */}
          <Slider {...settings}>
            {logos.map((item, i) => (
              <div key={i}>
                <div style={slideStyle}>
                  <img src={item.img} alt={item.alt} style={imgStyle} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Brand1;
