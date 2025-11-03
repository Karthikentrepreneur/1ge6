// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    cover: "/image-gen.png‎‎",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/" },
      { img: "/logosss03.png", alt: "OECL", link: "https://www.oecl.sg/" },
      { img: "/logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/" },
      { img: "/Haixun_logo.svg", alt: "Hai Xun", link: "https://haixun.co/" },
      { img: "/ogl-logo.png", alt: "ONE Global Logistics", link: "https://oneglobalqatar.com/" },
    ],
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement. Our portfolio supports the global shift toward renewable fuels and SAF by securing and optimising advanced feedstock supply. Operating across multiple regions, we build ethical, traceable sourcing networks and pre-treatment infrastructure, strengthening transparency, efficiency, and environmental integrity while accelerating the transition to cleaner energy.",
    cover: "/wind.jpg‎",
    logos: [
      { img: "/logosss04.png", alt: "Moltech", link: "https://moltechglobal.com/" },
      { img: "/molgen.png", alt: "MoltechGen", link: "https://moltechgen.com/" },
      { img: "/superenergy.png", alt: "Super Energy", link: "https://www.superenergy.sg/" },
    ],
    icon: <Leaf size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    cover: "/Productdistribution.jpg",
    logos: [{ img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" }],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
  },
];

const openLink = (url) => url && window.open(url, "_blank", "noopener,noreferrer");

const Activities = () => {
  return (
    <section className="activities-full">
      <style>{`
        :root {
          --ink:#0F172A; --muted:#475569; --accent:#2563EB;
        }

        .activities-full {
          background: #fff;
          overflow: hidden;
        }

        .activity-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          min-height: 520px;
          width: 100%;
        }

        .activity-row.reverse {
          grid-template-columns: 1fr 1.1fr;
        }

        .activity-image {
          width: 100%;
          height: 100%;
        }

        .activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .activity-content {
          padding: 80px 60px;
          background: #fff;
        }

        .activity-row.reverse .activity-content {
          order: -1;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .title-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .title-row h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--ink);
        }

        .activity-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 24px;
          max-width: 700px;
        }

        .logos-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
        }

        .logo-item {
          flex: 0 0 auto;
          cursor: pointer;
          transition: transform 0.25s ease;
        }

        .logo-item:hover {
          transform: scale(1.06);
        }

        .logo-item img {
          max-height: 60px;
          object-fit: contain;
          width: auto;
          display: block;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .activity-row {
            grid-template-columns: 1fr;
          }

          .activity-content {
            padding: 40px 24px;
          }

          .activity-image img {
            height: 300px;
            object-fit: cover;
          }
        }
      `}</style>

      {VERTICALS.map((v, i) => {
        const reverse = i % 2 !== 0;
        return (
          <div className={`activity-row ${reverse ? "reverse" : ""}`} key={v.title}>
            <div className="activity-image">
              <img src={v.cover} alt={v.title} />
            </div>

            <div className="activity-content">
              <div className="title-row">
                <div className="title-icon">{v.icon}</div>
                <h3>{v.title}</h3>
              </div>

              <p className="activity-description">{v.description}</p>

              <div className="logos-grid">
                {v.logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="logo-item"
                    onClick={() => openLink(logo.link)}
                    title={logo.alt}
                  >
                    <img src={logo.img} alt={logo.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Activities;
