// src/Components/Brand/Brand1.jsx
import React from "react";
import Slider from "react-slick";

function Brand1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,   // you can reduce to 4 if you want them even bigger
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

  const wrapStyle = { position: "relative" };

  // reduce padding → less gap between logos
  const slideStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 120,         // more vertical space for logos
    padding: "0px 8px",  // smaller horizontal padding → less gap
  };

  // increase logo size
  const imgStyle = {
    maxHeight: 100,      // bigger logos (was 70 before)
    width: "auto",
    objectFit: "contain",
    opacity: 1,
    mixBlendMode: "normal",
    filter: "none",
  };

  return (
    <div className="brand-section section-padding pt-0" style={wrapStyle}>
      <div className="left-shape">
      </div>

      <div className="container">
        <div className="brand-wrapper">
          <h4 className="brand-title wow fadeInUp" data-wow-delay=".3s">
            1k + Brands Trust Us
          </h4>

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
}

export default Brand1;
