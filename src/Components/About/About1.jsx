import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="about-section section-padding fix bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT HALF IMAGE */}
          <div className="col-lg-6">
            <div
              className="about-image position-relative"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="/team.jpeg" // ✅ Make sure this file is in /public
                alt="1 Global Enterprises Group"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>

          {/* RIGHT HALF CONTENT */}
          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <div className="section-title mb-4">
                <span className="sub-title text-primary fw-semibold">
                  Singapore Headquarters
                </span>
                <h2 className="fw-bold mt-2 mb-3">1 Global Enterprises</h2>
              </div>

              <p className="mb-4 text-muted">
                A diversified group with interests in Shipping, Logistics,
                Distribution, IT, Clean Energy & Trading. As part of a global
                network, 1 Global Enterprises benefits from strategic
                partnerships and investments across multiple brands
                specializing in transportation, warehousing, and sustainable
                energy solutions.
              </p>

              <div className="mb-3">
                <h5 className="fw-semibold">Our Reach</h5>
                <p className="text-muted mb-2">
                  700+ professionals operating across South-East Asia, the
                  Middle East, USA & UK.
                </p>
              </div>

              <div>
                <h5 className="fw-semibold">Expertise</h5>
                <p className="text-muted">
                  Each business unit is led by experts ensuring strong execution
                  and sustainable growth across regions.
                </p>
              </div>

              <hr className="my-4" />

              <div className="d-flex align-items-center gap-2">
                <span className="fw-semibold">Proud member of</span>
                <img
                  src="/assets/img/logo/fta.png"
                  alt="FTA Logo"
                  style={{ height: "32px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
