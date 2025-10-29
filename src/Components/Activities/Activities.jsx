// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    logos: [
      { img: "/logosss01.png", alt: "GGL logo" },
      { img: "logosss03.png", alt: "OECL logo" },
      { img: "logosss02.png", alt: "GC logo" },
      { img: "Haixun_logo.svg", alt: "HAI XUN logo" },
      { img: "ogl-logo.png", alt: "ONE GLOBAL LOGISTICS logo" },
    ],
    icon: <Truck size={28} strokeWidth={2.3} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement. Our portfolio supports the global shift toward renewable fuels and SAF by securing and optimising advanced feedstock supply. Operating across multiple regions, we build ethical, traceable sourcing networks and pre-treatment infrastructure, strengthening transparency, efficiency, and environmental integrity while accelerating the transition to cleaner energy.",
    logos: [
      { img: "/logosss04.png", alt: "Moltech logo" },
      { img: "/molgen.png", alt: "MoltechGen logo" },
      { img: "superenergy.png", alt: "Superenergy logo" },
    ],
    icon: <Leaf size={28} strokeWidth={2.3} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    logos: [{ img: "/logosss05.png", alt: "CityGn logo" }],
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
          margin-top: 10px;
        }

        .vertical-card {
          background: #ffffff;
          border-radius: 12px;
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

        /* TOP: logos (replacing previous image area) */
        .vertical-card__logos-top {
          width: 100%;
          background: #f8fafc;
          padding: 18px;
          border-bottom: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 14px;
        }

        .vertical-card__logos-top img {
          width: 100%;
          height: 65px;
          object-fit: contain;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          padding: 8px;
        }

        .vertical-card__logos-top img:hover {
          border-color: #2563eb;
          transform: scale(1.06);
          box-shadow: 0 6px 14px rgba(37, 99, 235, 0.12);
        }

        .vertical-card__content {
          padding: 26px 28px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
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
          font-size: 1.18rem;
          color: #111827;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .vertical-card__description {
          margin: 0;
          color: #475569;
          font-size: 0.96rem;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .vertical-card__content { padding: 22px; }
          .vertical-card__logos-top { grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); }
          .vertical-card__logos-top img { height: 56px; }
          .vertical-card__title h3 { font-size: 1.06rem; }
          .vertical-card__description { font-size: 0.95rem; line-height: 1.6; }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((vertical, index) => (
            <article
              key={vertical.title}
              className="vertical-card wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.1}s`}
            >
              {/* TOP LOGOS (replaces previous image area) */}
              <div className="vertical-card__logos-top">
                {vertical.logos.map((logo) => (
                  <img key={logo.alt} src={logo.img} alt={logo.alt} loading="lazy" />
                ))}
              </div>

              {/* CONTENT */}
              <div className="vertical-card__content">
                <div className="vertical-card__title">
                  <div className="vertical-card__title-icon">{vertical.icon}</div>
                  <h3>{vertical.title}</h3>
                </div>
                <p className="vertical-card__description">{vertical.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
