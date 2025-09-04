import React from "react";
import { Link } from "react-router-dom";

const Category1: React.FC = () => {
  const categoryContent = [
    { img: "/shipping.png", title: "Shipping" },
    { img: "/logistics.png", title: "Logistics" },
    { img: "/product.png", title: "Product Distribution" },
    { img: "/software.png", title: "Software Development" },
    { img: "/renewable.png", title: "Renewable Energy" },
  ];

  return (
    <section className="destination-category-section">
      {/* local styles for this section only */}
      <style>{`
        .destination-category-section{
          padding: 64px 0; /* even top & bottom space */
          background: #fff;
        }
        .destination-category-section .section-header{
          text-align:center;
          margin-bottom: 28px;
        }
        .destination-category-section .section-header .sub{
          display:inline-block;
          font-size:14px;
          letter-spacing:.15em;
          text-transform:uppercase;
          color:#00a389;
          margin-bottom:8px;
          opacity:.9;
        }
        .destination-category-section .section-header h2{
          font-size:36px;
          line-height:1.2;
          margin:0;
          color:#0b1730;
          font-weight:700;
        }

        /* Grid */
        .cat-grid{
          display:grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }
        @media (max-width: 1199px){
          .cat-grid{ grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 575px){
          .cat-grid{ grid-template-columns: 1fr; }
        }

        /* Card */
        .cat-card{
          position:relative;
          border-radius:18px;
          overflow:hidden;
          background:#f5f7fb;
          box-shadow: 0 6px 18px rgba(10,22,50,.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .cat-card:hover{
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(10,22,50,.10);
        }
        .cat-img{
          display:block;
          width:100%;
          height:220px;
          object-fit:cover;
        }

        /* Overlay title on hover */
        .cat-overlay{
          position:absolute; inset:0;
          display:flex; align-items:flex-end; justify-content:flex-start;
          padding:16px 18px;
          background: linear-gradient(to top, rgba(11,23,48,.55) 0%, rgba(11,23,48,0) 60%);
          opacity:0; transition: opacity .25s ease;
        }
        .cat-card:hover .cat-overlay{ opacity:1; }

        .cat-title{
          background: rgba(255,255,255,.92);
          color:#0b1730;
          padding:8px 12px;
          border-radius:10px;
          font-weight:600;
          font-size:16px;
          line-height:1;
          text-decoration:none;
          box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }

        /* Remove extra section bottoms from sliders/components below if any */
        .destination-category-section + *{
          margin-top: 0 !important;  /* avoid unexpected big gap */
        }
      `}</style>

      <div className="container">
        <div className="section-header">
          <span className="sub">Wonderful Place For You</span>
          <h2>Browse By Destination Category</h2>
        </div>

        <div className="cat-grid">
          {categoryContent.map((item, i) => (
            <div key={i} className="cat-card">
              <img className="cat-img" src={item.img} alt={item.title} />
              <div className="cat-overlay">
                <Link to="/destination/destination-details" className="cat-title">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category1;
