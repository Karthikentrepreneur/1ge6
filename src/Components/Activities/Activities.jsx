import React from 'react';

const VERTICALS = [
  {
    title: 'Supply Chain Solutions',
    description:
      '1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.',
    logos: [
      { img: '/brand-logos/ggl.svg', alt: 'Global Gateway Logistics logo' },
      { img: '/brand-logos/oecl.svg', alt: 'OECL Supply Chain logo' },
      { img: '/brand-logos/global-consol.svg', alt: 'Global Consol logo' },
      { img: '/brand-logos/hai-xun.svg', alt: 'Hai Xun Logistics logo' },
      { img: '/brand-logos/one-global-logistics.svg', alt: 'ONE Global Logistics logo' },
    ],
  },
  {
    title: 'Renewable Energy',
    description:
      'As part of its commitment to sustainable growth, 1 Global Enterprises strategically invests in the renewable energy value chain, focusing on feedstock origination, processing, and technology enablement. Our portfolio supports the global shift toward renewable diesel and sustainable aviation fuel (SAF) by securing and optimising the supply of advanced feedstocks. We work across multiple regions to build ethical and traceable sourcing networks, ensuring transparency from collection to conversion. Through investments in IoT-driven monitoring systems, digital traceability, and pre-treatment infrastructure, we strengthen both environmental integrity and operational efficiency. By combining responsible sourcing practices with long-term investment vision, 1 Global Enterprises is helping accelerate the world’s transition to cleaner energy.',
    logos: [
      { img: '/brand-logos/moltech.svg', alt: 'Moltech logo' },
      { img: '/brand-logos/moltechgen.svg', alt: 'MoltechGen logo' },
      { img: '/brand-logos/superenergy.svg', alt: 'Superenergy logo' },
    ],
  },
  {
    title: 'Product Distribution',
    description:
      '1 Global Enterprises invests in high-performing distribution platforms that bring world-class products to regional markets. Through strategic partnerships and on-ground execution, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.',
    logos: [
      { img: '/brand-logos/citygn.svg', alt: 'CityGn logo' },
    ],
  },
];

const Activities = () => {
  return (
    <section className="activities-section fix section-padding">
      <style>{`
        .verticals-wrapper {
          display: grid;
          gap: 40px;
        }

        .vertical-card {
          border-radius: 24px;
          padding: 32px;
          background: #ffffff;
          box-shadow: 0 24px 48px rgba(15, 33, 55, 0.08);
          border: 1px solid rgba(38, 182, 224, 0.18);
        }

        .vertical-card__title {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .vertical-card__title h3 {
          margin: 0;
          font-size: clamp(1.5rem, 1.2rem + 1vw, 1.9rem);
          color: #0b1a33;
          font-weight: 700;
        }

        .vertical-card__logos {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .vertical-card__logos img {
          width: clamp(140px, 22vw, 200px);
          height: auto;
          border-radius: 18px;
          background: #f4fbfe;
          padding: 8px 12px;
          border: 1px solid rgba(15, 33, 55, 0.08);
        }

        .vertical-card__description {
          margin: 0;
          color: #2d3b50;
          font-size: 1rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .vertical-card {
            padding: 24px;
          }

          .vertical-card__logos {
            gap: 12px;
          }

          .vertical-card__logos img {
            width: 48%;
          }
        }

        @media (max-width: 576px) {
          .vertical-card__logos img {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp"></span>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Business Verticals
          </h2>
        </div>

        <div className="verticals-wrapper">
          {VERTICALS.map((vertical) => (
            <article key={vertical.title} className="vertical-card wow fadeInUp" data-wow-delay=".2s">
              <div className="vertical-card__title">
                <h3>{vertical.title}</h3>
              </div>
              <div className="vertical-card__logos">
                {vertical.logos.map((logo) => (
                  <img key={logo.alt} src={logo.img} alt={logo.alt} loading="lazy" />
                ))}
              </div>
              <p className="vertical-card__description">{vertical.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
