import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Brand1 from '../Brand/Brand1';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <>
      <section
        className="about-section section-padding fix bg-cover"
        data-background="/about-bg.png"
      >
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">

              {/* LEFT IMAGE */}
              <div className="col-lg-7 d-flex justify-content-center">
                <div
                  className="about-image"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <img
                    src="/team.jpeg"
                    alt="1 Global Enterprises Group"
                    style={{
                      width: '100%',
                      maxWidth: '850px', // increased size
                      height: 'auto',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      boxShadow: '0 10px 35px rgba(0,0,0,0.3)',
                      transform: 'scale(1.08)',
                      transition: 'transform 0.4s ease-in-out',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-lg-5">
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
                    <div className="line-image">
                      <img
                        src="/assets/img/about/Line-image.png"
                        alt="Line Decoration"
                      />
                    </div>

                    <div
                      className="about-items wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                      </div>
                      <div className="content">
                        <h5>Who We Are</h5>
                        <p>
                          A diversified group with interests in Shipping,
                          Logistics, Distribution, IT, Clean Energy & Trading.
                        </p>
                      </div>
                    </div>

                    <div
                      className="about-items wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                      </div>
                      <div className="content">
                        <h5>Our Reach</h5>
                        <p>
                          700+ professionals operating across South-East Asia,
                          Middle East, USA & UK.
                        </p>
                      </div>
                    </div>

                    <div
                      className="about-items wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="icon">
                        <img src="/assets/img/icon/07.svg" alt="Expertise" />
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
              {/* END RIGHT CONTENT */}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Brand Slider Below the Section */}
      <Brand1 />
    </>
  );
};

export default About1;
