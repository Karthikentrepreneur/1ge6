import React from 'react';
import { Link } from 'react-router';

const Category1 = () => {
  const categoryContent = [
    {
      img: '/assets/img/destination/category1.jpg',
      subtitle: 'MARITIME SOLUTIONS',
      title: 'Shipping & Maritime',
    },
    {
      img: '/assets/img/destination/category2.jpg',
      subtitle: 'SUPPLY CHAIN',
      title: 'Logistics & Supply Chain',
    },
    {
      img: '/assets/img/destination/category3.jpg',
      subtitle: 'DIGITAL SOLUTIONS',
      title: 'Software & IT Solutions',
    },
    {
      img: '/assets/img/destination/category4.jpg',
      subtitle: 'CLEAN ENERGY',
      title: 'Renewable Energy',
    },
    {
      img: '/assets/img/destination/category5.jpg',
      subtitle: 'GLOBAL MARKETS',
      title: 'Global Trading',
    },
  ];

  return (
    <section className="destination-category-section section-padding pt-0">
      <div className="container">
        <div className="section-title text-center mb-10">
          <span className="sub-title">Our Core Industries</span>
          <h2>
            Five strategic business verticals delivering comprehensive solutions across global markets
          </h2>
        </div>

        {/* 1x5 layout */}
        <div className="grid grid-cols-5 gap-4">
          {categoryContent.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="text-center">
                  <h5 className="text-white text-lg font-semibold">
                    <Link to="/destination/destination-details">{item.title}</Link>
                  </h5>
                  <p className="text-white/80 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category1;
