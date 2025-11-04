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
    icon: <Truck size={20} strokeWidth={2.2} color="#fff" />,
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
    icon: <Leaf size={20} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Product Distribution",
    description:
      "Through strategic partnerships, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.",
    cover: "/Productdistribution.jpg",
    logos: [
      { img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" },
    ],
    icon: <Package size={20} strokeWidth={2.2} color="#fff" />,
  },
];

/* ---------- HELPERS ---------- */
const openLink = (url) => {
  if (!url) return;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

/* ---------- COMPONENT ---------- */
export default function Activities() {
  const rowRefs = useRef([]);

  useEffect(() => {
    const rows = rowRefs.current;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      rows.forEach((el) => el?.classList.add("show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("show")),
      { threshold: 0.18 }
    );
    rows.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="activities">
      <style>{`
        :root {
          --ink: #0f172a;
          --muted: #475569;
          --teal: #10a3a7;
          --blue: #2563eb;
          --bg1: #f6faff;
          --bg2: #f3fbfc;
          --logoH: 70px;
          --logoH-sm: 56px;
        }

        .activities { background: #fff; }

        .slice {
          position: relative;
          padding: clamp(40px, 5vw, 80px) 0;
          background: var(--bg1);
        }
        .slice.alt { background: var(--bg2); }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 50/50 layout */
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          gap: clamp(22px, 4vw, 44px);
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .55s ease, transform .55s cubic-bezier(.2,.65,.16,1);
        }
        .row.show { opacity: 1; transform: none; }

        .row.rev .media { order: 2; }
        .row.rev .content { order: 1; }

        /* IMAGE */
        .media {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 26px 60px rgba(2,8,23,.12);
          height: 100%;
          display: flex;
        }

        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform .6s ease;
        }
        .media:hover img { transform: scale(1.035); }

        /* CONTENT */
        .content { padding: 4px 8px; display: flex; flex-direction: column; justify-content: center; }
        .title { display: flex; gap: 10px; align-items: center; margin-bottom: 10px; }
        .bubble {
          width: 44px; height: 44px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #fff;
          box-shadow: 0 8px 18px rgba(16,163,167,.22);
          flex-shrink: 0;
        }
        .title h3 {
          margin: 0; color: var(--ink); font-weight: 900;
          font-size: clamp(20px, 1.9vw, 26px);
        }
        .desc {
          margin: 0 0 18px; color: var(--muted); line-height: 1.7;
          font-size: clamp(14.5px, 1vw, 16.5px);
          max-width: 60ch;
        }

        /* LOGOS grid */
        .logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: clamp(12px, 2vw, 18px);
          align-items: center; justify-items: center;
          max-width: 860px;
          margin-top: 12px;
        }
        .logo {
          display: inline-flex; align-items: center; justify-content: center;
          padding: clamp(6px, 1vw, 10px);
          cursor: pointer;
          transition: transform .2s ease, filter .18s ease;
          border: none;
          background: transparent;
        }
        .logo:hover { transform: scale(1.05); filter: brightness(1.08); }
        .logo:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 4px;
        }
        .logo img {
          max-height: var(--logoH);
          width: auto;
          object-fit: contain;
          background: none !important;
          mix-blend-mode: multiply;
        }

        @media (max-width: 1024px) {
          .row { grid-template-columns: 1fr; }
          .row.rev .media { order: 1; }
          .row.rev .content { order: 2; }
        }

        @media (max-width: 768px) {
          :root { --logoH: var(--logoH-sm); }
          .bubble { width: 38px; height: 38px; }
          .desc { max-width: unset; }
          .logos { grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 12px; }
        }
      `}</style>

      {VERTICALS.map((v, i) => (
        <div className={`slice ${i % 2 ? "alt" : ""}`} key={v.title}>
          <div className="container">
            <div className={`row ${i % 2 ? "rev" : ""}`} ref={(el) => (rowRefs.current[i] = el)}>
              
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

                {/* Logos for all sections, including last one */}
                <div className="logos">
                  {v.logos.map((L, idx) => (
                    <button
                      key={`${v.title}-${idx}`}
                      type="button"
                      className="logo"
                      title={L.alt}
                      aria-label={`Visit ${L.alt}`}
                      onClick={() => openLink(L.link)}
                    >
                      <img src={L.img} alt={L.alt} loading="lazy" />
                    </button>
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
