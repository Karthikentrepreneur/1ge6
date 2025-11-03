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
const Activities = () => {
  const rowRefs = useRef([]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        }),
      { threshold: 0.2 }
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="activities-section">
      <style>{`
        :root {
          --ink: #0f172a;
          --muted: #475569;
          --accent: #0ea5e9;
          --accent2: #2563eb;
        }

        .activities-section {
          background: #fff;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin: 60px 0 30px;
        }

        .section-header small {
          display: block;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 8px;
          letter-spacing: 1.5px;
        }

        .section-header h2 {
          font-size: clamp(26px, 4vw, 38px);
          color: var(--ink);
          font-weight: 900;
          margin: 0;
        }

        /* Zigzag rows */
        .activity-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          gap: 48px;
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .activity-row.show {
          opacity: 1;
          transform: translateY(0);
        }

        .activity-row.reverse {
          grid-template-columns: 1fr 1.1fr;
        }

        /* Image */
        .activity-image {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(2, 8, 23, 0.15);
          position: relative;
        }

        .activity-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .activity-image:hover img {
          transform: scale(1.05);
        }

        /* Content */
        .activity-content {
          padding: 10px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .title-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
        }

        .title-row h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--ink);
          margin: 0;
        }

        .activity-description {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 20px;
          max-width: 640px;
        }

        .logos-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
        }

        .logo-item {
          background: #fff;
          padding: 10px 14px;
          border-radius: 12px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .logo-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.15);
        }

        .logo-item img {
          max-height: 60px;
          width: auto;
          object-fit: contain;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .activity-row,
          .activity-row.reverse {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .activity-image img {
            height: 300px;
            object-fit: cover;
          }

          .section-header {
            margin: 40px 0 20px;
          }
        }

        @media (max-width: 640px) {
          .activity-description {
            font-size: 0.95rem;
          }
          .logo-item img {
            max-height: 48px;
          }
        }
      `}</style>

      <div className="section-header">
        <small>Our Verticals</small>
        <h2>Driving Innovation Across Industries</h2>
      </div>

      {VERTICALS.map((v, i) => (
        <div
          className={`activity-row ${i % 2 !== 0 ? "reverse" : ""}`}
          ref={(el) => (rowRefs.current[i] = el)}
          key={v.title}
        >
          <div className="activity-image">
            <img src={v.cover} alt={v.title} loading="lazy" />
          </div>

          <div className="activity-content">
            <div className="title-row">
              <div className="title-icon">{v.icon}</div>
              <h3>{v.title}</h3>
            </div>
            <p className="activity-description">{v.description}</p>

            <div className="logos-grid">
              {v.logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="logo-item"
                  onClick={() => openLink(logo.link)}
                  title={logo.alt}
                >
                  <img src={logo.img} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Activities;
