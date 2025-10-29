// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ------------------ DATA ------------------ */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/" },
      { img: "logosss03.png", alt: "OECL", link: "https://www.oecl.sg/" },
      { img: "logosss02.png", alt: "GC", link: "https://www.globalconsol.com/" },
      { img: "Haixun_logo.svg", alt: "HAI XUN", link: "https://haixun.co/" },
      { img: "ogl-logo.png", alt: "ONE GLOBAL LOGISTICS", link: "https://oneglobalqatar.com/" },
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
      // 4th will be placeholder
    ],
    icon: <Leaf size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    logos: [
      { img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" },
      // 3 placeholders will show
    ],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
  },
];

/* ------------------ HELPERS ------------------ */
const openLink = (link) =>
  link ? window.open(link, "_blank", "noopener,noreferrer") : null;

// pad array to length with nulls (placeholders)
const padTo = (arr, len) => [...arr, ...Array(Math.max(0, len - arr.length)).fill(null)].slice(0, len);

/* ------------------ COMPONENT ------------------ */
const Activities = () => {
  return (
    <section className="activities-section">
      <style>{`
        .activities-section { background:#edf2f7; padding:56px 0; }
        .verticals-wrapper{
          display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));
          gap:28px; align-items:stretch;
        }
        .vertical-card{
          display:grid; grid-template-rows:auto 1fr;
          background:#fff; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden;
          box-shadow:0 2px 8px rgba(2,8,23,.06);
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .vertical-card:hover{ transform:translateY(-4px); box-shadow:0 10px 26px rgba(2,8,23,.12); }

        /* ===== Default (Renewable & Product) – fixed 2x2 with placeholders ===== */
        .logos-top{
          display:grid; grid-template-columns:repeat(2, 1fr);
          gap:12px; padding:16px; background:#f8fafc; border-bottom:1px solid #e6eaf0;
        }

        /* ===== Supply Chain – exactly 2 rows: 3 + 2 (second row centered) ===== */
        .logos-top-sc{
          display:flex; flex-direction:column; gap:12px;
          padding:16px; background:#f8fafc; border-bottom:1px solid #e6eaf0;
        }
        .logos-top-sc .row{ display:flex; gap:12px; }
        .logos-top-sc .row.first{ justify-content:space-between; }
        .logos-top-sc .row.second{ justify-content:center; }

        .logo-cell{
          height:64px; background:#fff; border:1px solid #e5e7eb; border-radius:10px;
          display:flex; align-items:center; justify-content:center; padding:8px;
          transition:transform .2s ease, border-color .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .logo-cell.clickable{ cursor:pointer; }
        .logo-cell.clickable:hover{
          transform:scale(1.04); border-color:#2563eb; box-shadow:0 6px 14px rgba(37,99,235,.12);
        }
        .logo-cell.placeholder{ opacity:.88; } /* subtle white tile */

        .logo-cell img{ max-width:80%; max-height:70%; object-fit:contain; display:block; }

        .card-body{ padding:22px 26px 26px; display:flex; flex-direction:column; }
        .title-row{ display:flex; align-items:center; gap:12px; margin-bottom:10px; min-height:46px; }
        .title-icon{ width:36px; height:36px; border-radius:999px; background:#2563eb; display:flex; align-items:center; justify-content:center; }
        .title-row h3{ margin:0; font-size:1.15rem; color:#111827; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .desc{ margin:0; color:#475569; font-size:.98rem; line-height:1.65; flex-grow:1; }

        @media(max-width:768px){
          .logo-cell{ height:58px; }
          .card-body{ padding:20px; }
          .title-row h3{ font-size:1.05rem; }
          .desc{ font-size:.95rem; }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((v) => {
            const isSupply = v.title === "Supply Chain Solutions";

            return (
              <article key={v.title} className="vertical-card">
                {isSupply ? (
                  /* ===== Supply Chain: 3 in row-1, 2 in row-2 (placeholders if missing) ===== */
                  <div className="logos-top-sc">
                    {/* row 1 (3 slots) */}
                    <div className="row first">
                      {padTo(v.logos.slice(0, 3), 3).map((L, i) => (
                        L ? (
                          <div
                            key={`sc-top-${i}`}
                            className="logo-cell clickable"
                            onClick={() => openLink(L.link)}
                            title={L.alt}
                          >
                            <img src={L.img} alt={L.alt} loading="lazy" />
                          </div>
                        ) : (
                          <div key={`sc-top-ph-${i}`} className="logo-cell placeholder" aria-hidden />
                        )
                      ))}
                    </div>
                    {/* row 2 (2 slots, centered) */}
                    <div className="row second">
                      {padTo(v.logos.slice(3, 5), 2).map((L, i) => (
                        L ? (
                          <div
                            key={`sc-bottom-${i}`}
                            className="logo-cell clickable"
                            onClick={() => openLink(L.link)}
                            title={L.alt}
                          >
                            <img src={L.img} alt={L.alt} loading="lazy" />
                          </div>
                        ) : (
                          <div key={`sc-bottom-ph-${i}`} className="logo-cell placeholder" aria-hidden />
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  /* ===== Others: fixed 2×2 grid with placeholders ===== */
                  <div className="logos-top">
                    {padTo(v.logos, 4).map((L, i) =>
                      L ? (
                        <div
                          key={`${v.title}-logo-${i}`}
                          className="logo-cell clickable"
                          onClick={() => openLink(L.link)}
                          title={L.alt}
                        >
                          <img src={L.img} alt={L.alt} loading="lazy" />
                        </div>
                      ) : (
                        <div key={`${v.title}-ph-${i}`} className="logo-cell placeholder" aria-hidden />
                      )
                    )}
                  </div>
                )}

                <div className="card-body">
                  <div className="title-row">
                    <div className="title-icon">{v.icon}</div>
                    <h3>{v.title}</h3>
                  </div>
                  <p className="desc">{v.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Activities;
