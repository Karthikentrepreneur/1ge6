// src/Components/Activities.jsx
import React from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ---------- DATA ---------- */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    // Optional cover; falls back to first logo if omitted
    cover: "/covers/supply-chain.jpg",
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
    cover: "/covers/renewables.jpg",
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
    cover: "/covers/distribution.jpg",
    logos: [{ img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" }],
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
          --ink:#0F172A; --muted:#475569; --border:#E5E7EB; --card:#FFFFFF;
          --bg:#F5F7FB; --accent:#2563EB;
        }

        .activities-section { background:var(--bg); padding:56px 0; }

        /* Grid of cards (3 -> 2 -> 1) */
        .zz-grid{
          display:grid;
          grid-template-columns:repeat(3, minmax(0, 1fr));
          gap:28px;
        }
        @media (max-width:1200px){ .zz-grid{ grid-template-columns:repeat(2, minmax(0, 1fr)); } }
        @media (max-width:768px){ .zz-grid{ grid-template-columns:1fr; } }

        /* Card with two panes */
        .zz-card{
          background:var(--card);
          border:1px solid var(--border);
          border-radius:16px;
          overflow:hidden;
          box-shadow:0 2px 10px rgba(2,8,23,.06);
          transition:transform .25s ease, box-shadow .25s ease;
          display:grid;
          grid-template-columns: 1.05fr 1.25fr;
          min-height: 360px;
        }
        .zz-card:hover{ transform:translateY(-4px); box-shadow:0 12px 28px rgba(2,8,23,.12); }

        /* Zig-zag swap */
        .zz-card.reverse { grid-template-columns: 1.25fr 1.05fr; }
        .zz-card.reverse .media { order: 2; }
        .zz-card.reverse .info  { order: 1; }

        .media{
          background:#0b1220;
          display:flex; align-items:center; justify-content:center;
          padding: 16px;
        }
        .media-inner{
          width:100%; height:100%;
          background:#0b1220;
          border-right:1px solid var(--border);
          display:flex; align-items:center; justify-content:center;
        }
        .media img{
          width:100%;
          height:100%;
          object-fit:cover;           /* change to 'contain' if you prefer full logo view */
          border-radius:12px;
        }

        .info{
          display:flex; flex-direction:column;
          padding:24px 26px;
          background:#fff;
        }

        .title-row{ display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .title-icon{
          width:40px; height:40px; border-radius:999px; background:var(--accent);
          display:flex; align-items:center; justify-content:center; color:#fff;
          box-shadow:0 6px 14px rgba(37,99,235,.18);
          flex:0 0 auto;
        }
        .title-row h3{ margin:0; font-size:1.125rem; font-weight:800; color:var(--ink); }

        .desc{ margin:0 0 16px; color:var(--muted); font-size:.98rem; line-height:1.7; }

        /* Logo header */
        .logos-title{
          margin: 8px 0 8px;
          font-size:.9rem;
          color:#0f172a;
          font-weight:700;
        }

        /* 3x3 logo grid (auto-center if not full) */
        .logo-grid{
          display:grid;
          grid-template-columns:repeat(3, 1fr);
          grid-auto-rows:minmax(64px, auto);
          gap:16px 22px;
          align-items:center;
          justify-items:center;
          padding-top:4px;
        }

        .logo-item{
          display:flex; align-items:center; justify-content:center;
          width:100%; height:100%;
          cursor:pointer; border:1px dashed #eef2f7; border-radius:10px;
          transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          background:#fafcff;
          padding:10px;
        }
        .logo-item:hover{
          transform:scale(1.04);
          box-shadow:0 6px 20px rgba(2,8,23,.08);
          border-color:#dbe4f0;
        }
        .logo-item img{
          max-width:140px; max-height:56px; width:auto; height:auto; object-fit:contain; display:block;
        }

        @media (max-width:1024px){
          .zz-card, .zz-card.reverse{ grid-template-columns: 1fr; min-height: 0; }
          .media-inner{ border-right:none; }
          .media img{ height:260px; object-fit:cover; }
        }
      `}</style>

      <div className="container">
        <div className="zz-grid">
          {VERTICALS.map((v, idx) => {
            const coverSrc = v.cover || v?.logos?.[0]?.img || "/placeholder.jpg";
            const reverse = idx % 2 === 1; // zig-zag
            return (
              <article key={v.title} className={`zz-card ${reverse ? "reverse" : ""}`}>
                {/* IMAGE pane */}
                <div className="media">
                  <div className="media-inner">
                    <img src={coverSrc} alt={`${v.title} cover`} loading="lazy" />
                  </div>
                </div>

                {/* CONTENT pane */}
                <div className="info">
                  <div className="title-row">
                    <div className="title-icon">{v.icon}</div>
                    <h3>{v.title}</h3>
                  </div>
                  <p className="desc">{v.description}</p>

                  <div className="logos-title">Group Companies & Partners</div>
                  <div className="logo-grid">
                    {v.logos?.map((L, i) => (
                      <div
                        key={`${v.title}-logo-${i}`}
                        className="logo-item"
                        onClick={() => openLink(L.link)}
                        title={L.alt}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLink(L.link)}
                      >
                        <img src={L.img} alt={L.alt} loading="lazy" />
                      </div>
                    ))}
                    {/* If you ever have fewer than 9 logos and want perfect centering,
                        you can pad with empty grid items (kept out for now). */}
                  </div>
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
