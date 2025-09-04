import React from 'react';
import { Link } from 'react-router';

const Category1 = () => {
  const categoryContent = [
    {
      img: '/assets/img/destination/category1.jpg',
      subtitle: 'MARITIME SOLUTIONS',
      title: 'Shipping & Maritime',
      description:
        'Comprehensive maritime solutions including vessel management, port operations, and global shipping logistics.',
    },
    {
      img: '/assets/img/destination/category2.jpg',
      subtitle: 'SUPPLY CHAIN',
      title: 'Logistics & Supply Chain',
      description:
        'End-to-end supply chain management with cutting-edge technology and global network coverage.',
    },
    {
      img: '/assets/img/destination/category3.jpg',
      subtitle: 'DIGITAL SOLUTIONS',
      title: 'Software & IT Solutions',
      description:
        'Custom software development, maritime technology, and digital transformation services.',
    },
    {
      img: '/assets/img/destination/category4.jpg',
      subtitle: 'CLEAN ENERGY',
      title: 'Renewable Energy',
      description:
        'Clean energy solutions, sustainable technology, and environmental consulting services.',
    },
    {
      img: '/assets/img/destination/category5.jpg',
      subtitle: 'GLOBAL MARKETS',
      title: 'Global Trading',
      description:
        'International trade facilitation, commodity trading, and market expansion services.',
    },
  ];

  return (
    <section className="destination-category-section section-padding pt-0">
      <div className="plane-shape float-bob-y">
        <img src="/assets/img/destination/shape.png" alt="shape" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">
            Our Core Industries
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Five strategic business verticals delivering comprehensive solutions across global markets
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          {categoryContent.map((item, i) => (
            <div key={i} className="destination-category-item">
              <div className="category-image relative overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="category-content p-4 bg-white">
                  <h5 className="font-semibold text-lg">
                    <Link to="/destination/destination-details">
                      {item.title}
                    </Link>
                  </h5>
                  <p className="text-sm text-gray-600 font-medium uppercase">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">
                    {item.description}
                  </p>
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
