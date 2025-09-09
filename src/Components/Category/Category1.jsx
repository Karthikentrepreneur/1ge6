import React from 'react';
import { Link } from 'react-router';

const Category1 = () => {
  const categoryContent = [
    { img: '/shipping.png', title: 'Shipping', link: '/shipping' },
    { img: '/logistics.png', title: 'Logistics', link: '/logistics' },
    {
      img: '/product.png',
      title: 'Product Distribution',
      link: '/product-distribution',
    },
    {
      img: '/software.png',
      title: 'Software Development',
      link: '/software-development',
    },
    {
      img: '/renewable.png',
      title: 'Renewable Energy',
      link: '/renewable-energy',
    },
  ];

  return (
    <section className="destination-category-section pt-10 pb-4">
      <div className="plane-shape float-bob-y"></div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp"></span>
          <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
            Our Core Industries
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categoryContent.map((item, i) => (
            <div key={i} className="destination-category-item">
              <div className="category-image">
                <img src={item.img} alt="img" />
                <div className="category-content">
                  <h5>
                    <Link to={item.link}>{item.title}</Link>
                  </h5>
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
