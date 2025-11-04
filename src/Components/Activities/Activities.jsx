import React, { useEffect, useRef } from "react";
import { Truck, Leaf, Package } from "lucide-react";

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
    icon: <Truck size={22} strokeWidth={2.2} color="#fff" />,
  },
  {
    title: "Renewable Energy",
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
    cover: "/Productdistribution.jpg",
    logos: [
      { img: "/logosss05.png", alt: "CityGn", link: "https://citygnenergy.com/" },
    ],
    icon: <Package size={22} strokeWidth={2.2} color="#fff" />,
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
      { threshold: 0.18 }
    );

    items.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="services-section">
      <style>{`
        :root {
          --ink: #0f172a;
          --muted: #475569;
          --teal: #10a3a7;
          --blue: #2563eb;
          --bg1: #ffffff;
          --bg2: #ffffff;
          --logoH: 100px;
          --logoH-sm: 70px;
        }

        .services-section { background: transparent; }

        .slice {
          position: relative;
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
          gap: clamp(22px, 4vw, 44px);
          opacity: 0;
          transform: translateY(22px);
          transition: opacity .55s ease, transform .55s cubic-bezier(.2,.65,.16,1);
        }
        .row.show { opacity: 1; transform: none; }

        .media {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: none;
          background: transparent;
        }

        .media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: transparent;
          transition: transform .6s ease;
        }
        .media:hover img { transform: scale(1.03); }

        .logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: clamp(20px, 3vw, 30px);
          width: 100%;
          margin-top: 20px;
          background: transparent;
        }

        .logos.centered { justify-content: center; }

        .logo {
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform .2s ease, filter .2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo:hover { transform: scale(1.08); filter: brightness(1.15); }

        .logo img {
          max-height: var(--logoH);
          width: auto;
          object-fit: contain;
          mix-blend-mode: multiply;
          background: transparent;
        }

        @media (max-width: 1024px) {
          .logos { justify-content: center; }
          .media img { object-fit: contain; }
        }

        @media (max-width: 768px) {
          :root { --logoH: var(--logoH-sm); }
        }
      `}</style>

      {SERVICES.map((s, i) => {
        const hasMultiple = s.logos.length > 1;
        return (
          <div className="slice" key={s.title}>
            <div className="container">
              <div className="row" ref={(el) => (sectionRefs.current[i] = el)}>
                {/* IMAGE SECTION */}
                <figure className="media">
                  <img src={s.cover} alt={`${s.title} cover`} loading="lazy" />
                </figure>

                {/* LOGOS SECTION */}
                <div className={`logos ${hasMultiple ? "centered" : ""}`}>
                  {s.logos.map((L, idx) => (
                    <button key={idx} className="logo" onClick={() => openLink(L.link)}>
                      <img src={L.img} alt={L.alt} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
