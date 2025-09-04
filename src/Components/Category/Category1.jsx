import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Category1: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 1199, settings: { slidesToShow: 4 } },
      { breakpoint: 575,  settings: { slidesToShow: 1 } },
    ],
  };

  const categoryContent = [
    { img: "/shipping.png",   title: "Shipping" },
    { img: "/logistics.png",  title: "Logistics" },
    { img: "/product.png",    title: "Product Distribution" },
    { img: "/software.png",   title: "Software Development" },
    { img: "/renewable.png",  title: "Renewable Energy" },
  ];

  return (
    <section className="destination-category-section">
      {/* Section-scoped styles to fix spacing & polish */}
      <style>{`
        .destination-category-section{
          padding: 64px 0;            /* even, visible space at top & bottom */
          background: #fff;
        }
        .destination-category-section .section-title{
          margin-bottom: 24px;
        }
        /* tighten dots area & kill large gap below */
        .destination-category-section .swiper-dot4{
          margin-top: 12px !important; /* was mt-5 (~3rem) */
        }
        /* prevent double spacing when next section also has big top margin */
        .destination-category-section + *{
          margin-top: 0 !important;
        }

        /* Card polish */
        .destination-category-item{
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(10,22,50,.06);
          transition: transform .25s ease, box-shadow .25s ease;
          background: #f7f9fc;
        }
        .destination-category-item:hover{
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(10,22,50,.12);
        }
        .destination-category-item .category-image{
          position: relative;
        }
        .destination-category-item img{
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }
        .destination-category-item .category-content{
          position: absolute; left: 12px; bottom: 12px;
          background: rgba(255,255,255,.92);
          border-radius: 12px;
          padding: 8px 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }
        .destination-category-item h5{
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #0b1730;
        }

        /* responsive image height */
        @media (max-width: 1199px){
          .destination-category-item img{ height: 200px; }
        }
        @media (max-width: 575px){
          .destination-category-item img{ height: 220px; }
        }
      `}</style>

      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title">Wonderful Place For You</span>
          <h2>Browse By Destination Category</h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className="swiper category-slider">
          <div className="swiper-wrapper cs_slider_gap_301">
            <Slider {...settings}>
              {categoryContent.map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="destination-category-item">
                    <div className="category-image">
                      <img src={item.img} alt={item.title} />
                      <div className="category-content">
                        <h5>
                          <Link to="/destination/destination-details">
                            {item.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* dots area (kept for compatibility; spacing adjusted above) */}
        <div className="swiper-dot4">
          <div className="dot" />
        </div>
      </div>
    </section>
  );
};

export default Category1;
