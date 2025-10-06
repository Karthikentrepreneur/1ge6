import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section section-padding fix bg-cover position-relative overflow-hidden"
      style={{
        backgroundImage: "url('/team.jpeg')", // ✅ Use your full image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
        }}
      ></div>

      <div className="container position-relative z-10 text-white">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content py-5">
              <div className="section-title mb-4">
                <span className="sub-title wow fadeInUp text-warning">
                  Singapore Headquarters
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  1 Global Enterprises
                </h2>
              </div>

              <div className="about-area mt-4 mt-md-0">
                <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="content">
                    <h5>Who We Are</h5>
                    <p>
                      A diversified group with interests in Shipping, Logistics,
                      Distribution, IT, Clean Energy & Trading.
                    </p>
                  </div>
                </div>

                <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                  <div className="content">
                    <h5>Our Reach</h5>
                    <p>
                      700+ professionals operating across South-East Asia,
                      Middle East, USA & UK.
                    </p>
                  </div>
                </div>

                <div className="about-items wow fadeInUp" data-wow-delay=".7s">
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
        </div>
      </div>
    </section>
  );
};

export default About1;
