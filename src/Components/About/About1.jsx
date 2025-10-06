import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section section-padding fix bg-cover"
      data-background="/about-bg.png"
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4 align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="about-image">
                <img
                  src="/team.jpeg" // ✅ Make sure the file in /public is exactly named team.jpeg
                  alt="1 Global Enterprises Group"
                  width={630}
                  height={418}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.4s ease-in-out',
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.02)')
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Singapore Headquarters
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    1 Global Enterprises
                  </h2>
                </div>

                <div className="about-area mt-4 mt-md-0">
                  <div className="line-image mb-3">
                    <img
                      src="/assets/img/about/Line-image.png"
                      alt="Line Decoration"
                      style={{ maxWidth: '120px' }}
                    />
                  </div>

                  {/* Item 1 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/05.svg"
                        alt="Who We Are"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping,
                        Logistics, Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/06.svg"
                        alt="Our Reach"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>
                        700+ professionals operating across South-East Asia,
                        Middle East, USA & UK.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/07.svg"
                        alt="Expertise"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>
                        Each business unit is led by experts ensuring strong
                        execution & growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
