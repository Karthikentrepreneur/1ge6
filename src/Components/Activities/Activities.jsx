// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ---------- DATA ---------- */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/" },
      { img: "logosss03.png", alt: "OECL", link: "https://www.oecl.sg/" },
      { img: "logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/" },
      { img: "Haixun_logo.svg", alt: "Hai Xun", link: "https://haixun.co/" },
      { img: "ogl-logo.png", alt: "ONE Global", link: "https://oneglobalqatar.com/" },
    ],
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement. Our portfolio supports the global shift toward renewable fuels and SAF by securing and optimising advanced feedstock supply. Operating across multiple regions, we build ethical, traceable sourcing networks and pre-treatment infrastructure, strengthening transparency, efficiency, and environmental integrity while accelerating the transition to cleaner energy.",
    logos: [
      { img: "/logosss04.png", alt: "Moltech", link: "https://moltechglobal.com/" },
      { img: "/molgen.png", alt: "MoltechGen", link: "https://moltechgen.com/" },
      { img: "superenergy.png", alt: "Super Energy", link: "https://www.superenergy.sg/" },
    ],
    icon: <Leaf size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    logos: [
      { img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" },
    ],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
  },
];

/* ---------- HELPERS ---------- */
const openLink = (url) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

const padTo = (arr, len) =>
  [...arr, ...Array(Math.max(0, len - arr.length)).fill(null)].slice(0, len);

/* ---------- COMPONENT ---------- */
const Activities = () => {
  return (
    <section className="activities-section">
      <style>{`
        :root {
          --ink:#0F172A;
          --muted:#475569;
          --border:#E5E7EB;
          --card:#FFFFFF;
          --bg:#F3F7FA;
          --teal1:#06b6d4; /* cyan-500 */
          --teal2:#0284c7; /* sky-600 */
        }

        .activities-section {
          background: var(--bg);
          padding: 60px 0;
        }

        .verticals-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
          align-items: stretch;
        }

        .vertical-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          box-shadow: 0 4px 18px rgba(2,8,23,.06);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .vertical-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 26px rgba(2,8,23,.12);
        }

        /* ---------- Circular Logo Grid ---------- */
        .logos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          justify-items: center;
          align-items: center;
          padding: 30px 24px 20px;
          background: #f8fafc;
        }

        .logo-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--teal1), var(--teal2));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(6, 182, 212, 0.3);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .logo-circle:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 28px rgba(2,132,199,0.35);
        }

        .logo-circle img {
          width: 60%;
          height: 60%;
          object-fit: contain;
          background: #fff;
          border-radius: 50%;
          padding: 10px;
        }

        .card-body {
          padding: 26px 28px;
          display: flex;
          flex-direction: column;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .title-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--teal1), var(--teal2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 6px 14px rgba(6,182,212,0.3);
        }

        .title-row h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
        }

        .desc {
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.7;
          margin: 0;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 768px) {
          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 24px;
          }
          .logo-circle {
            width: 90px;
            height: 90px;
          }
          .card-body {
            padding: 20px;
          }
          .title-row h3 {
            font-size: 1.05rem;
          }
          .desc {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .logo-circle {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((v) => (
            <article key={v.title} className="vertical-card">
              <div className="logos-grid">
                {padTo(v.logos, 6).map((L, i) =>
                  L ? (
                    <div
                      key={`${v.title}-logo-${i}`}
                      className="logo-circle"
                      onClick={() => openLink(L.link)}
                      title={L.alt}
                    >
                      <img src={L.img} alt={L.alt} loading="lazy" />
                    </div>
                  ) : (
                    <div key={`${v.title}-ph-${i}`} className="logo-circle" style={{ opacity: 0.2 }} />
                  )
                )}
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
