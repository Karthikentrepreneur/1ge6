import React, { useEffect, useRef } from "react";

/* ---------- DATA ---------- */
const SERVICES = [
  {
    title: "Supply Chain Solutions",
    cover: "/image1.png",
    logos: [
      { img: "/logosss01.png", alt: "GGL", link: "https://www.ggl.sg/" },
      { img: "/logosss03.png", alt: "OECL", link: "https://www.oecl.sg/" },
      { img: "/logosss02.png", alt: "Global Consol", link: "https://www.globalconsol.com/" },
      { img: "/Haixun_logo.png", alt: "Hai Xun", link: "https://haixun.co/" },
      { img: "/one.png", alt: "ONE Global Logistics", link: "https://oneglobalqatar.com/" },
      { img: "/logo-2.png", alt: "Future Net Logistics", link: "https://futurenetlogistics.com" },
    ],
  },
  {
    title: "Renewable Energy",
    cover: "/wind.jpg",
    logos: [
      { img: "/logosss04.png", alt: "Moltech", link: "https://moltechglobal.com/" },
      { img: "/molgen.png", alt: "MoltechGen", link: "https://moltechgen.com/" },
      { img: "/superenergy.png", alt: "Super Energy", link: "https://www.superenergy.sg/" },
    ],
  },
  {
    title: "Product Distribution",
    cover: "/Productdistribution.jpg",
    logos: [
      { img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" },
    ],
  },
];

/* ---------- HELPERS ---------- */
const openLink = (url) => {
  if (typeof window !== "undefined" && url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

/* ---------- COMPONENT ---------- */
export default function Services() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const items = sectionRefs.current;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      items.forEach((el) => el?.classList.add("show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("show")),
      { threshold: 0.15 }
    );

    items.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="services-section">
      <style>{`
        :root {
          --logoH: 100px;
          --logoH-sm: 70px;
        }

        .services-section {
          background: transparent;
          width: 100%;
        }

        .slice {
          padding: clamp(40px, 5vw, 80px) 0;
          background: transparent;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .row.show { opacity: 1; transform: none; }

        .media {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: transparent;
          box-shadow: none;
        }

        .media img {
          width: 100%;
          height: auto;
          object-fit: contain;
          background: transparent;
          transition: transform 0.5s ease;
        }

        .media:hover img {
          transform: scale(1.02);
        }

        /* Logos grid */
        .logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: clamp(20px, 3vw, 30px);
          width: 100%;
          background: transparent;
        }

        .logo {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .logo:hover {
          transform: scale(1.08);
          filter: brightness(1.15);
        }

        .logo img {
          max-height: var(--logoH);
          width: auto;
          object-fit: contain;
          background: transparent;
          mix-blend-mode: multiply;
        }

        @media (max-width: 768px) {
          :root { --logoH: var(--logoH-sm); }
          .logos { gap: 16px; }
        }
      `}</style>

      {SERVICES.map((s, i) => (
        <div className="slice" key={s.title}>
          <div className="container">
            <div className="row" ref={(el) => (sectionRefs.current[i] = el)}>
              {/* Image Section */}
              <figure className="media">
                <img src={s.cover} alt={`${s.title} cover`} loading="lazy" />
              </figure>

              {/* Logos Section */}
              <div className="logos">
                {s.logos.map((L, idx) => (
                  <button key={idx} className="logo" onClick={() => openLink(L.link)}>
                    <img src={L.img} alt={L.alt} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
