import React from 'react';
import { Link } from 'react-router';

const Category1 = () => {
  const categoryContent = [
    {
      img: '/shipping.png',
      title: 'Shipping',
      description:
        'We specialize in ocean freight management for LCL and FCL loads, ensuring reliable and cost-efficient shipping solutions worldwide.',
      link: '/shipping',
    },
    {
      img: '/logistics.png',
      title: 'Logistics',
      description:
        'End-to-end logistics support with streamlined operations, warehousing, and distribution tailored to your business needs.',
      link: '/logistics',
    },
    {
      img: '/product.png',
      title: 'Product Distribution',
      description:
        'A robust distribution network delivering your products efficiently and effectively to domestic and global markets.',
      link: '/product-distribution',
    },
    {
      img: '/software.png',
      title: 'Software Development',
      description:
        'Custom software solutions that integrate technology into logistics and energy, driving innovation and efficiency.',
      link: '/software-development',
    },
  ];

  return (
    <section className="destination-category-section pt-10 pb-4">
      <div className="container">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-bold">Our Core Industries</h2>
        </div>

        {/* Strict 1x4 row layout */}
        <div className="grid grid-cols-4 gap-8">
          {categoryContent.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold mb-2">
                  <Link to={item.link} className="hover:text-blue-600">
                    {item.title}
                  </Link>
                </h5>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <Link
                  to={item.link}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn More →
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
