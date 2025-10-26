import React from "react";
import { Truck, Leaf, Package } from "lucide-react"; // ✅ Modern clean icons

const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    logos: [
      { img: "/logosss01.png", alt: "GGL logo" },
      { img: "logosss03.png", alt: "OECL logo" },
      { img: "logosss01.png", alt: "GC logo" },
      { img: "Haixun_logo.svg", alt: "HAI XUN logo" },
      { img: "ogl-logo.png", alt: "ONE GLOBAL LOGISTICS logo" },
    ],
    image: "/image-gen.png", // ✅ Replace with your real image path
    icon: <Truck size={28} strokeWidth={2.3} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "As part of its commitment to sustainable growth, 1 Global Enterprises strategically invests in the renewable energy value chain, focusing on feedstock origination, processing, and technology enablement. Our portfolio supports the global shift toward renewable diesel and sustainable aviation fuel (SAF) by securing and optimising the supply of advanced feedstocks. We work across multiple regions to build ethical and traceable sourcing networks, ensuring transparency from collection to conversion. Through investments in IoT-driven monitoring systems, digital traceability, and pre-treatment infrastructure, we strengthen both environmental integrity and operational efficiency. By combining responsible sourcing practices with long-term investment vision, 1 Global Enterprises is helping accelerate the world’s transition to cleaner energy.",
    logos: [
      { img: "/logosss04.png", alt: "Moltech logo" },
      { img: "/brand-logos/moltechgen.svg", alt: "MoltechGen logo" },
      { img: "superenergy.png", alt: "Superenergy logo" },
    ],
    image: "/wind.jpg", // ✅ Replace with your real image
    icon: <Leaf size={28} strokeWidth={2.3} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "1 Global Enterprises invests in high-performing distribution platforms that bring world-class products to regional markets. Through strategic partnerships and on-ground execution, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    logos: [{ img: "/logosss05.png", alt: "CityGn logo" }],
    image: "/Productdistribution", // ✅ Replace with your real image
    icon: <Package size={28} strokeWidth={2.3} color="#fff" />,
  },
];

const Activities = () => {
  return (
    <section className="activities-section fix section-padding">
      <style>{`
        .activities-section {
          background: #f0f4f8;
          padding: 60px 0;
        }

        .verticals-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .vertical-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e7eb;
        }

        .vertical-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
        }

        .vertical-card__image {
          width: 100%;
          height: 180px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vertical-card__image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
        }

        .vertical-card__icon {
          position: relative;
          z-index: 2;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
        }

        .vertical-card__content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .vertical-card__title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .vertical-card__title-icon {
          width: 38px;
          height: 38px;
          background: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vertical-card__title h3 {
          margin: 0;
          font-size: 1.3rem;
          color: #111827;
          font-weight: 700;
        }

        .vertical-card__description {
          margin: 0 0 20px 0;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          flex: 1;
        }

        .vertical-card__logos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 12px;
          padding: 16px 0 0 0;
          border-top: 1px solid #e2e8f0;
        }

        .vertical-card__logos img {
          width: 100%;
          height: 45px;
          object-fit: contain;
          background: #f8fafc;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          transition: all 0.25s ease;
          padding: 6px;
        }

        .vertical-card__logos img:hover {
          background: #fff;
          border-color: #2563eb;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .vertical-card__content {
            padding: 24px;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-title text-center">
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Business Verticals
          </h2>
        </div>

        <div className="verticals-wrapper">
          {VERTICALS.map((vertical, index) => (
            <article
              key={vertical.title}
              className="vertical-card wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              {/* Top Image with Overlay & Icon */}
              <div
                className="vertical-card__image"
                style={{ backgroundImage: `url(${vertical.image})` }}
              >
                <div className="vertical-card__icon">{vertical.icon}</div>
              </div>

              {/* Text Content */}
              <div className="vertical-card__content">
                <div className="vertical-card__title">
                  <div className="vertical-card__title-icon">
                    {vertical.icon}
                  </div>
                  <h3>{vertical.title}</h3>
                </div>

                <p className="vertical-card__description">
                  {vertical.description}
                </p>

                <div className="vertical-card__logos">
                  {vertical.logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.img}
                      alt={logo.alt}
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
