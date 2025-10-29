// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    logos: [
      { img: "/logosss01.png", alt: "GGL" },
      { img: "logosss03.png", alt: "OECL" },
      { img: "logosss02.png", alt: "GC" },
      { img: "Haixun_logo.svg", alt: "HAI XUN" },
      { img: "ogl-logo.png", alt: "ONE GLOBAL LOGISTICS" },
    ],
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement. Our portfolio supports the global shift toward renewable fuels and SAF by securing and optimising advanced feedstock supply. Operating across multiple regions, we build ethical, traceable sourcing networks and pre-treatment infrastructure, strengthening transparency, efficiency, and environmental integrity while accelerating the transition to cleaner energy.",
    logos: [
      { img: "/logosss04.png", alt: "Moltech" },
      { img: "/molgen.png", alt: "MoltechGen" },
      { img: "superenergy.png", alt: "Super Energy" },
    ],
    icon: <Leaf size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    logos: [{ img: "/logosss05.png", alt: "CityGn" }],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
  },
];

const Activities = () => {
  return (
    <section className="activities-section">
      <style>{`
        .activities-section {
          background: #edf2f7;
          padding: 56px 0;
        }

        .verticals-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        .vertical-card {
          display: grid;
          grid-template-rows: auto 1fr;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(2, 8, 23, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .vertical-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(2, 8, 23, 0.12);
        }

        .logos-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 12px;
          padding: 14px;
          background: #f8fafc;
          border-bottom: 1px solid #e6eaf0;
          min-height: 108px;
          justify-items: center;
        }

        .logos-top img {
          width: 100%;
          height: 56px;
          object-fit: contain;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 8px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .logos-top img:hover {
          transform: scale(1.05);
          border-color: #2563eb;
          box-shadow: 0 6px 14px rgba(37, 99, 235, 0.12);
        }

        .card-body {
          padding: 22px 26px 26px;
          display: flex;
          flex-direction: column;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          min-height: 46px; /* ✅ equal alignment for all titles */
        }

        .title-icon {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .title-row h3 {
          margin: 0;
          font-size: 1.15rem;
          color: #111827;
          font-weight: 700;
          letter-spacing: 0.2px;
          white-space: nowrap;       /* ✅ keeps it on one line */
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .desc {
          margin: 0;
          color: #475569;
          font-size: 0.98rem;
          line-height: 1.65;
          flex-grow: 1;
        }

        @media (max-width: 768px) {
          .card-body {
            padding: 20px;
          }
          .title-row h3 {
            font-size: 1.05rem;
          }
          .desc {
            font-size: 0.95rem;
          }
          .logos-top {
            grid-template-columns: repeat(3, 1fr);
            min-height: 96px;
          }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((v, i) => (
            <article key={v.title} className="vertical-card">
              <div className="logos-top">
                {v.logos.map((L) => (
                  <img key={L.alt} src={L.img} alt={L.alt} loading="lazy" />
                ))}
              </div>

              <div className="card-body">
                <div className="title-row">
                  <div className="title-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                </div>
                <p className="desc">{v.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
