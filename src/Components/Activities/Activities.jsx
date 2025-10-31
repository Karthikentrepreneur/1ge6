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
const openLink = (link) =>
  link ? window.open(link, "_blank", "noopener,noreferrer") : null;

/* ---------- COMPONENT ---------- */
const Activities = () => {
  return (
    <section className="activities-section">
      <style>{`
        :root { --ink:#0F172A; --muted:#475569; --border:#E5E7EB; --card:#FFFFFF; --bg:#EDF2F7; --accent:#2563EB; }

        .activities-section { background:var(--bg); padding:56px 0; }

        .verticals-wrapper{
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));
          gap:28px;
          align-items:stretch;
        }

        .vertical-card{
          display:grid;
          grid-template-rows:auto 1fr;
          background:var(--card);
          border:1px solid var(--border);
          border-radius:16px;
          overflow:hidden;
          box-shadow:0 2px 8px rgba(2,8,23,.06);
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .vertical-card:hover{ transform:translateY(-4px); box-shadow:0 10px 26px rgba(2,8,23,.12); }

        /* ---------- Logo strip (flex for perfect centering with any count) ---------- */
        .logos-grid{
          display:flex;
          flex-wrap:wrap;
          gap:18px 28px;              /* row gap | column gap */
          justify-content:center;     /* center even if 1–2 logos */
          align-items:center;
          padding:22px 22px 20px;
          min-height:132px;           /* gives that airy header look */
          background:#F8FAFC;
          border-bottom:1px solid #E6EAF0;
        }

        .logo-cell{
          width:132px;                /* consistent footprint */
          height:88px;
          display:flex; align-items:center; justify-content:center;
          background:none; border:none; padding:0;
          cursor:default; transition:transform .18s ease;
        }
        .logo-cell.clickable{ cursor:pointer; }
        .logo-cell.clickable:hover{ transform:scale(1.06); }

        .logo-cell img{
          max-width:100%;
          max-height:74%;
          object-fit:contain;
          display:block;
          filter:none;                /* keep original brand colors */
        }

        /* ---------- Body ---------- */
        .card-body{ padding:24px 26px 26px; display:flex; flex-direction:column; }

        .title-row{
          display:flex; align-items:center; gap:12px;
          margin-bottom:12px;
        }
        .title-icon{
          width:40px; height:40px; border-radius:999px; background:var(--accent);
          display:flex; align-items:center; justify-content:center; color:#fff;
          box-shadow:0 6px 14px rgba(37,99,235,.18);
        }
        .title-row h3{
          margin:0; font-size:1.125rem; font-weight:800; color:var(--ink);
        }

        .desc{
          margin:0; color:var(--muted); font-size:.98rem; line-height:1.7;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px){
          .logos-grid{ min-height:120px; gap:16px 22px; }
          .logo-cell{ width:120px; height:80px; }
        }

        @media (max-width: 768px){
          .verticals-wrapper{ gap:22px; }
          .card-body{ padding:20px; }
          .logo-cell{ width:112px; height:76px; }
          .title-icon{ width:36px; height:36px; }
          .title-row h3{ font-size:1.05rem; }
          .desc{ font-size:.95rem; line-height:1.65; }
        }

        @media (max-width: 420px){
          .logo-cell{ width:46%; height:70px; } /* two per row on tiny phones */
          .logos-grid{ gap:14px 10px; }
        }
      `}</style>

      <div className="container">
        <div className="verticals-wrapper">
          {VERTICALS.map((v) => (
            <article key={v.title} className="vertical-card">
              {/* Top logos – perfectly centered regardless of count */}
              <div className="logos-grid">
                {v.logos.map((L, i) => (
                  <div
                    key={`${v.title}-logo-${i}`}
                    className={`logo-cell ${L.link ? "clickable" : ""}`}
                    onClick={() => L.link && openLink(L.link)}
                    title={L.alt}
                  >
                    <img src={L.img} alt={L.alt} loading="lazy" />
                  </div>
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
