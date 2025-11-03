// src/Components/Activities.jsx
import React, { useEffect, useRef } from "react";
import { Truck, Leaf, Package } from "lucide-react";

/* ---------- DATA ---------- */
const VERTICALS = [
  {
    title: "Supply Chain Solutions",
    description:
      "1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.",
    cover: "/image-gen.png", // keep images in /public
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
const open = (url) => url && window.open(url, "_blank", "noopener,noreferrer");

/* ---------- COMPONENT ---------- */
export default function Activities() {
  const rowsRef = useRef([]);

  /* Reveal on scroll (reduced motion friendly) */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = rowsRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="vertx">
      <style>{`
        :root{
          --ink:#0F172A;
          --muted:#475569;
          --accent:#10A3A7; /* teal */
          --accent-2:#2563EB; /* blue */
          --bg:#ffffff;
          --surface:#ffffff;
        }

        .vertx{
          position:relative;
          background: var(--bg);
          overflow:hidden;
        }

        /* Decorative soft gradient behind the section */
        .vertx::before{
          content:"";
          position:absolute; inset:-20% -10% auto -10%;
          height:520px;
          background:
            radial-gradient(1200px 380px at 20% 10%, rgba(16,163,167,.08), transparent 60%),
            radial-gradient(800px 320px at 90% 0%, rgba(37,99,235,.08), transparent 60%);
          pointer-events:none;
          z-index:0;
        }

        .container{
          position:relative;
          z-index:1;
          max-width:1180px;
          margin:0 auto;
          padding:40px 20px 64px;
        }

        /* Section header (optional, looks nice if you keep) */
        .vh{
          text-align:center;
          margin: 18px 0 34px;
        }
        .vh small{
          display:inline-block;
          font-weight:700;
          letter-spacing:.14em;
          text-transform:uppercase;
          color: var(--accent);
          opacity:.9;
          margin-bottom:6px;
        }
        .vh h2{
          margin:0;
          font-size: clamp(22px, 3.8vw, 34px);
          color: var(--ink);
          font-weight: 900;
        }

        /* Row (zig-zag) */
        .row{
          display:grid;
          grid-template-columns: 1.05fr 1.15fr;
          align-items:center;
          gap:40px;
          margin: 38px 0 74px;
          transform: translateY(28px);
          opacity:0;
          transition: transform .7s cubic-bezier(.2,.65,.16,1), opacity .7s ease;
        }
        .row.in{ transform:none; opacity:1; }
        .row.rev{ grid-template-columns: 1.15fr 1.05fr; }

        /* Media block */
        .media{
          position:relative;
          border-radius:18px;
          overflow:hidden;
          line-height:0;
          box-shadow: 0 24px 60px rgba(2,8,23,.18);
          isolation:isolate;
        }
        .media img{
          width:100%;
          height:100%;
          max-height:560px;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display:block;
          transform:scale(1.03);
          transition: transform .6s ease;
        }
        .media::after{
          /* subtle top-left gradient sheen */
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(180deg, rgba(0,0,0,.0), rgba(0,0,0,.08) 80%);
          mix-blend-mode:multiply;
          pointer-events:none;
        }
        .media:hover img{ transform:scale(1.06); }

        /* Content */
        .content{
          padding: 22px 4px;
        }
        .title{
          display:flex; gap:12px; align-items:center;
          margin-bottom:12px;
        }
        .bubble{
          width:44px; height:44px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          color:#fff; box-shadow:0 10px 24px rgba(16,163,167,.25);
          flex-shrink:0;
        }
        .title h3{
          margin:0; color:var(--ink);
          font-weight:900; letter-spacing:.2px;
          font-size: clamp(18px, 2.2vw, 22px);
        }

        .desc{
          margin:0 0 18px; color:var(--muted);
          line-height:1.75; font-size: clamp(14px, 1.3vw, 16px);
          max-width: 54ch;
        }

        /* Logos */
        .logos{
          display:grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 14px 18px;
          align-items:center;
          margin-top:10px;
          max-width:720px;
        }
        .logo{
          display:flex; align-items:center; justify-content:center;
          padding:10px 12px;
          border-radius:12px;
          background:#fff;
          transition: transform .2s ease, box-shadow .25s ease, filter .25s ease;
          box-shadow:0 4px 14px rgba(2,8,23,.06);
          cursor:pointer;
        }
        .logo img{
          max-height:58px; width:auto; display:block; object-fit:contain;
          filter: grayscale(.1) contrast(1.05);
        }
        .logo:hover{
          transform: translateY(-3px);
          box-shadow:0 16px 30px rgba(2,8,23,.12);
        }
        .logo:hover img{ filter:none; }

        /* Alternating soft separators to make rows pop without boxes */
        .row::before{
          content:"";
          position:absolute;
          inset:auto -8vw -34px -8vw;
          height:1px;
          background:linear-gradient(90deg, transparent, rgba(15,23,42,.08), transparent);
          pointer-events:none;
        }

        /* Responsive */
        @media (max-width: 1024px){
          .row, .row.rev{ grid-template-columns:1fr; gap:22px; }
          .content{ padding:0; }
          .media img{ aspect-ratio: 16 / 9; max-height:none; }
        }
        @media (max-width: 640px){
          .logos{ grid-template-columns: repeat(2, minmax(120px, 1fr)); }
          .logo img{ max-height:50px; }
        }
      `}</style>

      <div className="container">
        <header className="vh">
          <small>Our Verticals</small>
          <h2>Building Reliable, Connected & Sustainable Businesses</h2>
        </header>

        {VERTICALS.map((v, i) => (
          <div
            key={v.title}
            ref={(el) => (rowsRef.current[i] = el)}
            className={`row ${i % 2 ? "rev reveal" : "reveal"}`}
          >
            {/* IMAGE */}
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
                    onClick={() => open(L.link)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(L.link)}
                  >
                    <img src={L.img} alt={L.alt} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
