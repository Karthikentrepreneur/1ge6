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
          --bg1:#f3fbfc;   /* light teal */
          --bg2:#f5f8ff;   /* light blue */
          --logoH:84px;    /* desktop logo height (equal for all) */
          --logoH-md:72px; /* tablet */
          --logoH-sm:56px; /* mobile */
        }

        .activities{ background:#fff; }

        /* Alternating slices with soft gradients */
        .slice{
          position:relative;
          padding: clamp(48px, 7vw, 110px) 0;
          background: var(--bg1);
        }
        .slice.alt{ background: var(--bg2); }

        .slice::before{
          content:"";
          position:absolute; inset:-10% -5% auto -5%;
          height:420px; pointer-events:none;
          background:
            radial-gradient(720px 280px at 10% 10%, rgba(16,163,167,.10), transparent 60%),
            radial-gradient(680px 260px at 90% 0%, rgba(37,99,235,.08), transparent 60%);
          opacity:.75;
        }

        .container{
          max-width:1320px; margin:0 auto; padding:0 24px;
          position:relative; z-index:1;
        }

        /* Zig-zag layout — bigger visuals */
        .row{
          display:grid;
          grid-template-columns: 1.2fr 1fr;   /* make image column larger */
          align-items:center;
          gap: clamp(24px, 5vw, 56px);
          opacity:0; transform: translateY(36px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.2,.65,.16,1);
        }
        .row.show{ opacity:1; transform:none; }
        .row.rev{ grid-template-columns: 1fr 1.2fr; }

        /* Media (big, elegant card) */
        .media{
          border-radius:22px; overflow:hidden;
          box-shadow:0 28px 70px rgba(2,8,23,.16);
          background: #fff;
        }
        .media img{
          width:100%; height:100%;
          aspect-ratio: 21 / 9;    /* wide cinematic */
          object-fit: cover;
          display:block;
          transform: scale(1.015);
          transition: transform .55s ease;
        }
        .media:hover img{ transform: scale(1.04); }

        /* Content */
        .content{ padding: 4px 6px; }
        .title{ display:flex; gap:14px; align-items:center; margin-bottom:12px; }
        .bubble{
          width:52px; height:52px; border-radius:50%;
          display:flex; align-items:center; justify-content:center; color:#fff;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          box-shadow:0 12px 26px rgba(16,163,167,.25);
          flex-shrink:0;
        }
        .title h3{
          margin:0; color:var(--ink); font-weight:900;
          font-size:clamp(22px,2.2vw,28px);
          letter-spacing:.1px;
        }
        .desc{
          margin:0 0 22px; color:var(--muted); line-height:1.8;
          font-size:clamp(15px,1.1vw,17px); max-width:68ch;
        }

        /* Logos — equal size, bigger, no background boxes */
        .logos{
          display:grid;
          grid-template-columns: repeat(5, minmax(120px, 1fr));
          gap:18px 22px; max-width:900px; align-items:stretch;
        }
        .logo{
          background: transparent;
          border-radius: 16px;
          padding: 12px 10px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer;
          transition: transform .18s ease, filter .18s ease, box-shadow .18s ease, background .18s ease;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        .logo:focus-visible{ outline:2px solid #94d2ff; outline-offset:4px; border-radius:16px; }
        .logo:hover{
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(2,8,23,.10);
          background: rgba(255,255,255,.65);
        }
        .logo img{
          max-height: var(--logoH);
          width: auto;
          aspect-ratio: auto;
          object-fit: contain;
          display:block;
          filter: grayscale(.02) contrast(1.04);
          background: transparent !important;
          mix-blend-mode: multiply; /* no white boxes on light bg */
        }

        /* Responsive */
        @media (max-width:1200px){
          .logos{ grid-template-columns: repeat(4, minmax(120px, 1fr)); }
        }
        @media (max-width:1024px){
          .row, .row.rev { grid-template-columns:1fr; }
          .media img{ aspect-ratio: 20 / 10; }
          .logos{ grid-template-columns: repeat(3, minmax(110px, 1fr)); }
        }
        @media (max-width:768px){
          :root{ --logoH: var(--logoH-md); }
          .logos{ grid-template-columns: repeat(3, minmax(100px, 1fr)); gap:14px 16px; }
          .bubble{ width:46px; height:46px; }
        }
        @media (max-width:560px){
          :root{ --logoH: var(--logoH-sm); }
          .logos{ grid-template-columns: repeat(2, minmax(120px, 1fr)); }
          .media{ border-radius:16px; }
        }
      `}</style>

      {VERTICALS.map((v, i) => (
        <div className={`slice ${i % 2 ? "alt" : ""}`} key={v.title}>
          <div className="container">
            <div className={`row ${i % 2 ? "rev" : ""}`} ref={(el) => (rowRefs.current[i] = el)}>
              {/* IMAGE — bigger */}
              <figure className="media">
                <img src={v.cover} alt={`${v.title} cover`} loading="lazy" />
              </figure>

              {/* CONTENT */}
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
