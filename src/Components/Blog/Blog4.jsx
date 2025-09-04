import React from 'react';
import { Link } from 'react-router';

const Blog4 = () => {
  // Updated company blog posts
  const blogContent = [
    {
      img: '/blog1.png',
      title: '1GE Expands Operations Across 16+ Countries',
      date: '15',
      month: 'Aug',
      author: 'Corporate Comms',
      tag: 'Global Expansion',
    },
    {
      img: '/blog2.png',
      title: 'Driving Sustainable Logistics & Renewable Solutions',
      date: '02',
      month: 'Sep',
      author: 'Sustainability Team',
      tag: 'Sustainability',
    },
    {
      img: '/blog3.png',
      title: 'Empowering Clients With Technology-Driven Solutions',
      date: '22',
      month: 'Oct',
      author: 'Innovation Desk',
      tag: 'Technology',
    },
  ];

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="row g-4">
          {blogContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-card-items-3 style-4">
                <div className="news-image">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="news-content">
                  <ul className="post-meta">
                    <li className="post">
                      {item.date}
                      <span>{item.month}</span>
                    </li>
                    <li>
                      <i className="bi bi-person"></i>
                      By {item.author}
                    </li>
                    <li>
                      <i className="bi bi-tag-fill"></i>
                      {item.tag}
                    </li>
                  </ul>
                  <h4>
                    <Link to="/blog/blog-details">{item.title}</Link>
                  </h4>
                  <Link to="/blog/blog-details" className="link-btn">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog4;
