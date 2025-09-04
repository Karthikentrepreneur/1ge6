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
    setIframeSrc("singapore.mp4");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <section className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            {/* LEFT IMAGE + VIDEO */}
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src="/about3.png"
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
                    src="/about4.png"
                    alt="img"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                  />

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

            {/* RIGHT CONTENT - BRIEF */}
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
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    We are a diversified group with expertise in Shipping,
                    Logistics, Distribution, IT, Clean Energy & Trading.  
                    With 700+ professionals worldwide, we ensure reliable 
                    solutions and sustainable growth across 16+ countries.
                  </p>
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
      />
    </section>
  );
};

export default About1;
