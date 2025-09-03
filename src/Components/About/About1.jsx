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
      data-background="/assets/img/about/about-bg.jpg"
    >
      <div className="right-shape float-bob-x">
        <img src="/assets/img/about/right-shape.png" alt="img" />
      </div>

      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            {/* LEFT: Images & Video */}
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
                  <div className="plane-shape float-bob-y">
                    <img src="/assets/img/about/plane-shape.png" alt="" />
                  </div>

                  {/* Small badge card */}
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

            {/* RIGHT: Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title wow fadeInUp">
                    Singapore-Headquartered Business Group
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Enabling growth across<br />
                    logistics, technology & energy
                  </h2>
                </div>

                <div className="about-area mt-4 mt-md-0">
                  <div className="line-image">
                    <img src="/assets/img/about/Line-image.png" alt="img" />
                  </div>

                  {/* Item 1 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <img src="/assets/img/icon/05.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>
                        1 Global Enterprises Pte Ltd is a Singapore-headquartered group with
                        diversified interests spanning Shipping, Logistics & Supply Chain,
                        Product Distribution, Software/IT, Renewable Energy (clean/green
                        solutions), and Trading.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Regional Footprint</h5>
                      <p>
                        Our 700+ professionals operate in 16+ countries across South-East Asia,
                        the Indian Sub-continent, the Middle East, the USA, and the UK—delivering
                        dependable solutions and seamless execution at scale.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <img src="/assets/img/icon/07.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>Expert-Led Business Units</h5>
                      <p>
                        Each business unit is led by seasoned domain experts who ensure
                        disciplined execution, compliance, and the successful implementation of
                        our strategic plans across markets and industries.
                      </p>
                    </div>
                  </div>

                  {/* Optional: quick pillars row (kept minimal, no layout changes) */}
                  {/* You can remove this block if not needed */}
                  <div className="about-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="icon">
                      <img src="/assets/img/icon/06.svg" alt="img" />
                    </div>
                    <div className="content">
                      <h5>What We Do</h5>
                      <p>
                        <strong>Shipping & Logistics</strong> • <strong>Product Distribution</strong> •{' '}
                        <strong>Software/IT</strong> • <strong>Renewable/Clean Energy</strong> •{' '}
                        <strong>Trading</strong>
                      </p>
                    </div>
                  </div>
                  {/* End optional block */}
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
