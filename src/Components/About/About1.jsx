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
        {/* stretch columns same height & remove gutters */}
        <div className="row g-0 align-items-center justify-content-between">

          {/* LEFT: IMAGE (≈60%) */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div
              className="about-image w-100 shadow-sm"
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%',   // 16:9 aspect (9/16)
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/about9.png"
                alt="About 1 Global Enterprises"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* RIGHT: TEXT (≈40%) */}
          <div className="col-lg-5">
            <div className="about-content w-100 h-100 d-flex flex-column justify-content-center ps-lg-4">
              <div className="section-title mb-3">
                <span className="sub-title wow fadeInUp">
                  Singapore Headquarters
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  1 Global Enterprises
                </h2>
              </div>

              <div className="about-area mt-3">
                <div className="about-items d-flex align-items-start wow fadeInUp mb-3" data-wow-delay=".3s">
                  <div className="icon me-3 flex-shrink-0">
                    <img src="/assets/img/icon/05.svg" alt="Who We Are" />
                  </div>
                  <div className="content">
                    <h5 className="mb-1">Who We Are</h5>
                    <p className="mb-0">
                      A diversified group with interests in Shipping, Logistics,
                      Distribution, IT, Clean Energy &amp; Trading.
                    </p>
                  </div>
                </div>

                <div className="about-items d-flex align-items-start wow fadeInUp mb-3" data-wow-delay=".5s">
                  <div className="icon me-3 flex-shrink-0">
                    <img src="/assets/img/icon/06.svg" alt="Our Reach" />
                  </div>
                  <div className="content">
                    <h5 className="mb-1">Our Reach</h5>
                    <p className="mb-0">
                      700+ professionals operating across South-East Asia, Middle East, USA &amp; UK.
                    </p>
                  </div>
                </div>

                <div className="about-items d-flex align-items-start wow fadeInUp" data-wow-delay=".7s">
                  <div className="icon me-3 flex-shrink-0">
                    <img src="/assets/img/icon/07.svg" alt="Expertise" />
                  </div>
                  <div className="content">
                    <h5 className="mb-1">Expertise</h5>
                    <p className="mb-0">
                      Each business unit is led by experts ensuring strong execution &amp; growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default About1;
