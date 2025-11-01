// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ---------- DATA ---------- */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure.",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/", label: "GGL" },
      { img: "logosss03.png", alt: "OECL", link: "https://www.oecl.sg/", label: "OECL" },
      { img: "logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/", label: "Global Consol" },
      { img: "Haixun_logo.svg", alt: "Hai Xun", link: "https://haixun.co/", label: "Hai Xun" },
      { img: "ogl-logo.png", alt: "ONE Global", link: "https://oneglobalqatar.com/", label: "ONE Global" },
    ],
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement.",
    logos: [
      { img: "/logosss04.png", alt: "Moltech", link: "https://moltechglobal.com/", label: "Moltech" },
      { img: "/molgen.png", alt: "MoltechGen", link: "https://moltechgen.com/", label: "MoltechGen" },
      { img: "superenergy.png", alt: "Super Energy", link: "https://www.superenergy.sg/", label: "Super Energy" },
    ],
    icon: <Leaf size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Citygn manages distribution of ENOC lubricants and other industrial products with efficient, customer-centric networks.",
    logos: [{ img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/", label: "CityGn" }],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
  },
];

/* ---------- HELPERS ---------- */
const openLink = (url) => url && window.open(url, "_blank", "noopener,noreferrer");

/* ---------- COMPONENT ---------- */
const Activities = () => {
  return (
    <section className="activities-section">
      <style>{`
        :root {
          --ink:#0F172A; --muted:#475569; --border:#E5E7EB; --card:#FFFFFF; --bg:#F3F7FA;
        }

        .activities-section { background:var(--bg); padding:56px 0; }

        .verticals-wrapper{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));
          gap:28px;
          align-items:stretch;
        }

        .vertical-card{
          display:flex; flex-direction:column;
          background:var(--card);
          border:1px solid var(--border);
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 4px 18px rgba(2,8,23,.06);
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .vertical-card:hover{ transform:translateY(-4px); box-shadow:0 12px 26px rgba(2,8,23,.12); }

        /* ---------- LOGO GRID (rectangular tiles) ---------- */
        .logos-grid{
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          gap:18px 22px;
          padding:24px;
          background:#F8FAFC;
          border-bottom:1px solid #EEF2F6;
        }

        .logo-tile{
          width:100%;
          height:122px; /* big logo area */
          display:flex; flex-direction:column; justify-content:space-between; align-items:center;
          border:1px solid #E6EAF0;
          background:#fff;
          border-radius:14px;
          box-shadow:0 2px 8px rgba(15, 23, 42, .05);
          cursor:pointer;
          transition:transform .18s ease, box-shadow .18s ease;
          overflow:hidden;
        }
        .logo-tile:hover{ transform:translateY(-2px); box-shadow:0 10px 20px rgba(2,8,23,.10); }

        .logo-wrap{
          height:84px; width:100%;
          display:flex; align-items:center; justify-content:center;
          padding:10px 12px;
        }
        .logo-wrap img{
          max-width:86%;
          max-height:72px; /* large */
          object-fit:contain;
          display:block;
        }

        .logo-name{
          width:100%;
          padding:8px 10px;
          text-align:center;
          background:#F1F5F9; /* subtle gray bar */
          color:var(--ink);
          font-weight:800;
          font-size:.85rem;
          line-height:1;
          border-top:1px solid #E6EAF0;
        }

        .card-body{ padding:24px 26px 26px; display:flex; flex-direction:column; }
        .title-row{ display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .title-icon{
          width:40px; height:40px; border-radius:999px; background:#0ea5e9;
          display:flex; align-items:center; justify-content:center; color:#fff;
          box-shadow:0 6px 14px rgba(14,165,233,.25);
        }
        .title-row h3{ margin:0; font-size:1.12rem; font-weight:800; color:var(--ink); }
        .desc{ margin:0; color:var(--muted); font-size:.98rem; line-height:1.7; }

        /* ---------- Responsive ---------- */
        @media (max-width: 768px){
          .logos-grid{ grid-template-columns:repeat(2, 1fr); gap:16px; padding:20px; }
          .logo-tile{ height:116px; }
          .logo-wrap img{ max-height:66px; }
          .card-body{ padding:20px; }
          .title-row h3{ font-size:1.05rem; }
          .desc{ font-size:.95rem; }
        }

        @media (max-width:480px){
          .logos-grid{ gap:14px; }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((v) => (
            <article key={v.title} className="vertical-card">
              {/* Show only the logos that exist; no placeholders */}
              {v.logos?.length > 0 && (
                <div className="logos-grid">
                  {v.logos.map((L, i) => (
                    <div
                      key={`${v.title}-logo-${i}`}
                      className="logo-tile"
                      role="button"
                      aria-label={`Open ${L.alt}`}
                      onClick={() => openLink(L.link)}
                      title={L.alt}
                    >
                      <div className="logo-wrap">
                        <img src={L.img} alt={L.alt} loading="lazy" />
                      </div>
                      <div className="logo-name">{L.label ?? L.alt}</div>
                    </div>
                  ))}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
