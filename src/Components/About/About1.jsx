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
          <div className="row g-0 align-items-stretch">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 d-flex">
              <div className="about-image w-100 h-100">
                <img
                  src="/about9.png"
                  alt="About 1 Global Enterprises"
                  style={{
                    width: '100%',
                    height: '100%',         // Make image fill entire column height
                    borderRadius: '16px',
                    objectFit: 'cover',     // Crop nicely
                  }}
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6 d-flex">
              <div className="about-content w-100 d-flex flex-column justify-content-center p-4">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Singapore Headquarters
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    1 Global Enterprises
                  </h2>
                </div>

                <div className="about-area mt-4 mt-md-0">
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
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
