// src/Components/Activities.jsx
import React, { useEffect, useRef } from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ---------- DATA ---------- */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    cover: "/image1.png",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/" },
      { img: "/logosss03.png", alt: "OECL", link: "https://www.oecl.sg/" },
      { img: "/logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/" },
      { img: "/Haixun_logo.svg", alt: "Hai Xun", link: "https://haixun.co/" },
      { img: "/ogl-logo.png", alt: "ONE Global Logistics", link: "https://oneglobalqatar.com/" },
      { img: "/logo-2.png", alt: "Future Net Logistics", link: "https://futurenetlogistics.com" },
    ],
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
    description:
      "We drive sustainable growth through strategic investments across the renewable energy value chain — from feedstock origination to processing and technology enablement. Our portfolio supports the global shift toward renewable fuels and SAF by securing and optimising advanced feedstock supply. Operating across multiple regions, we build ethical, traceable sourcing networks and pre-treatment infrastructure, strengthening transparency, efficiency, and environmental integrity while accelerating the transition to cleaner energy.",
    cover: "/wind.jpg",
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

/* ---------- HELPERS ---------- */
const openLink = (url) => url && window.open(url, "_blank", "noopener,noreferrer");

/* ---------- COMPONENT ---------- */
export default function Activities() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.18 }
    );
    rowRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="activities">
      <style>{`
        :root{
          --ink:#0f172a;
          --muted:#475569;
          --teal:#10a3a7;
          --blue:#2563eb;
          --bg1:#f3fbfc;
          --bg2:#f5f8ff;
          --logoH:76px;     /* ⬇️ slightly smaller logos */
          --logoH-sm:58px;  /* ⬇️ smaller on mobile */
        }

        .activities{ background:#fff; }

        .slice{
          position:relative;
          padding: clamp(42px, 6vw, 96px) 0;
          background: var(--bg1);
        }
        .slice.alt{ background: var(--bg2); }

        .container{
          max-width:1320px; margin:0 auto; padding:0 24px;
          position:relative; z-index:1;
        }

        /* 50/50 layout */
        .row{
          display:grid;
          grid-template-columns: 1fr 1fr; /* ✅ exact 50/50 split */
          align-items:center;
          gap: clamp(24px, 4.5vw, 48px);
          opacity:0; transform: translateY(24px);
          transition: opacity .6s ease, transform .6s cubic-bezier(.2,.65,.16,1);
        }
        .row.show{ opacity:1; transform:none; }

        /* alternate stacking order on large screens */
        .row.rev .media{ order:2; }
        .row.rev .content{ order:1; }

        /* IMAGE */
        .media{
          position:relative;
          border-radius:24px; overflow:hidden;
          box-shadow:0 28px 68px rgba(2,8,23,.14);
          background:#fff;
        }
        .media img{
          width:100%; height:100%;
          object-fit:cover;
          aspect-ratio: 16 / 10;
          transition: transform .6s ease;
        }
        .media:hover img{ transform: scale(1.035); }

        /* CONTENT */
        .content{ padding: 4px 6px; }
        .title{ display:flex; gap:12px; align-items:center; margin-bottom:10px; }
        .bubble{
          width:48px; height:48px; border-radius:50%;
          display:flex; align-items:center; justify-content:center; color:#fff;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          box-shadow:0 10px 22px rgba(16,163,167,.25);
          flex-shrink:0;
        }
        .title h3{
          margin:0; color:var(--ink); font-weight:900;
          font-size:clamp(22px,2vw,26px);
          letter-spacing:.1px;
        }
        .desc{
          margin:0 0 18px; color:var(--muted); line-height:1.75;
          font-size:clamp(15px,1vw,17px);
          max-width: 60ch;
        }

        /* LOGOS — smaller + tidy spacing, no white box */
        .logos{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: clamp(14px, 2.2vw, 22px);
          align-items:center; justify-items:center;
          max-width: 900px;
        }
        .logo{
          display:flex; align-items:center; justify-content:center;
          padding: clamp(8px, 1.2vw, 12px);
          cursor:pointer;
          transition: transform .22s ease, filter .18s ease;
        }
        .logo:hover{ transform: scale(1.06); filter: brightness(1.06); }
        .logo img{
          max-height: var(--logoH);
          width:auto; object-fit:contain; display:block;
          background: none !important;
          mix-blend-mode: multiply; /* keeps white boxes away on light bg */
        }

        /* RESPONSIVE */
        @media (max-width:1024px){
          .row{ grid-template-columns: 1fr; }   /* stack on tablet/mobile */
          .row.rev .media{ order:1; }
          .row.rev .content{ order:2; }
        }
        @media (max-width:768px){
          :root{ --logoH: var(--logoH-sm); }
          .bubble{ width:44px; height:44px; }
          .desc{ max-width: unset; }
          .logos{ grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap:14px; }
        }
      `}</style>

      {VERTICALS.map((v, i) => (
        <div className={`slice ${i % 2 ? "alt" : ""}`} key={v.title}>
          <div className="container">
            <div className={`row ${i % 2 ? "rev" : ""}`} ref={(el) => (rowRefs.current[i] = el)}>
              {/* IMAGE - 50% */}
              <figure className="media">
                <img src={v.cover} alt={`${v.title} cover`} loading="lazy" />
              </figure>

              {/* CONTENT - 50% */}
              <div className="content">
                <div className="title">
                  <span className="bubble">{v.icon}</span>
                  <h3>{v.title}</h3>
                </div>
                <p className="desc">{v.description}</p>

                <div className="logos">
                  {v.logos.map((L, idx) => (
                    <div
                      key={`${v.title}-${idx}`}
                      className="logo"
                      title={L.alt}
                      role="button"
                      tabIndex={0}
                      onClick={() => openLink(L.link)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLink(L.link)}
                    >
                      <img src={L.img} alt={L.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
