import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <section
      className="about-section section-padding fix bg-cover"
      data-background="/about-bg.png"
    >
      <div className="right-shape float-bob-x">
        <img src="/assets/img/about/right-shape.png" alt="img" />
      </div>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            {/* LEFT IMAGE + VIDEO */}
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/assets/img/about/01.png"
                  alt="img"
                  className="wow img-custom-anim-left"
                />
                <div className="border-image">
                  <img src="/assets/img/about/border.png" alt="" />
                </div>
                <div className="vdeo-item">
                  <a onClick={handelClick} className="video-btn video-popup">
                    <i className="bi bi-play-fill"></i>
                  </a>
                  <h5>WATCH VIDEO</h5>
                </div>

                <div className="about-image-2">
                  <img
                    src="/assets/img/about/02.png"
                    alt="img"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                  />
                  {/* Removed plane-shape.png */}

                  <div className="about-tour">
                    <div className="icon">
                      <img src="/assets/img/icon/10.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h4>Global Operations</h4>
                      <span>16+ Countries • 700+ Team</span>
                    </div>
                  </div>
                </div>
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
                  <div className="line-image">
                    <img src="/assets/img/about/Line-image.png" alt="img" />
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        A diversified group with interests in Shipping,
                        Logistics, Distribution, IT, Clean Energy & Trading.
                      </p>
                    </div>
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="//assets/img/icon/06.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>
                        700+ professionals operating across South-East Asia,
                        Middle East, USA & UK.
                      </p>
                    </div>
                  </div>

                  <div className="about-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="img" />
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

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </section>
  );
};

export default About1;
