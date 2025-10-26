import React from 'react';

const VERTICALS = [
  {
    title: 'Supply Chain Solutions',
    description:
      '1 Global Enterprises invests in and builds high-performing logistics and technology businesses that power global trade. Our portfolio spans 16 countries, covering every major segment of the supply chain — including freight forwarding, warehousing, distribution, and digital logistics infrastructure. Through strategic ownership and operational expertise, we support our group companies in driving innovation, operational excellence, and sustainable growth. Our focus is on strengthening global connectivity and creating long-term value across the supply chain landscape.',
    logos: [
      { img: '/logosss01.png', alt: 'GGL logo' },
      { img: 'logosss03.png', alt: 'OECL logo' },
      { img: 'logosss01.png', alt: 'GC logo' },
      { img: 'Haixun_logo.svg', alt: 'HAI XUN logo' },
      { img: 'ogl-logo.png', alt: 'ONE GLOBAL LOGISTICS logo' },
    ],
  },
  {
    title: 'Renewable Energy',
    description:
      'As part of its commitment to sustainable growth, 1 Global Enterprises strategically invests in the renewable energy value chain, focusing on feedstock origination, processing, and technology enablement. Our portfolio supports the global shift toward renewable diesel and sustainable aviation fuel (SAF) by securing and optimising the supply of advanced feedstocks. We work across multiple regions to build ethical and traceable sourcing networks, ensuring transparency from collection to conversion. Through investments in IoT-driven monitoring systems, digital traceability, and pre-treatment infrastructure, we strengthen both environmental integrity and operational efficiency. By combining responsible sourcing practices with long-term investment vision, 1 Global Enterprises is helping accelerate the world\'s transition to cleaner energy.',
    logos: [
      { img: '/logosss04.png', alt: 'Moltech logo' },
      { img: '/brand-logos/moltechgen.svg', alt: 'MoltechGen logo' },
      { img: 'superenergy.png', alt: 'Superenergy logo' },
    ],
  },
  {
    title: 'Product Distribution',
    description:
      '1 Global Enterprises invests in high-performing distribution platforms that bring world-class products to regional markets. Through strategic partnerships and on-ground execution, our group company Citygn manages the distribution of ENOC lubricants and other industrial products across key territories. Our focus is on building efficient, customer-centric networks supported by strong logistics capabilities and reliable after-sales service. By combining local market expertise with the strength of global brands, we ensure consistent quality, reach, and value delivery across every channel.',
    logos: [
      { img: '/logosss05.png', alt: 'CityGn logo' },
    ],
  },
];

const Activities = () => {
  return (
    <section className="activities-section fix section-padding">
      <style>{`
        .activities-section {
          background: #f0f4f8;
          padding: 60px 0;
        }

        .verticals-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .vertical-card {
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .vertical-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .vertical-card__image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vertical-card__icon {
          width: 60px;
          height: 60px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #2563eb;
        }

        .vertical-card__content {
          padding: 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .vertical-card__title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .vertical-card__title-icon {
          width: 40px;
          height: 40px;
          background: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vertical-card__title-icon svg {
          width: 20px;
          height: 20px;
          stroke: white;
          fill: none;
          stroke-width: 2;
        }

        .vertical-card__title h3 {
          margin: 0;
          font-size: 1.4rem;
          color: #1e293b;
          font-weight: 700;
          line-height: 1.3;
        }

        .vertical-card__description {
          margin: 0 0 20px 0;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          flex: 1;
        }

        .vertical-card__logos {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
          gap: 12px;
          padding: 20px 0 0 0;
          border-top: 1px solid #e2e8f0;
        }

        .vertical-card__logos img {
          width: 100%;
          height: 50px;
          object-fit: contain;
          padding: 8px;
          background: #f8fafc;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .vertical-card__logos img:hover {
          background: #ffffff;
          border-color: #2563eb;
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .verticals-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .verticals-wrapper {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .vertical-card__content {
            padding: 24px;
          }

          .vertical-card__logos {
            grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
            gap: 10px;
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
          {VERTICALS.map((vertical, index) => (
            <article key={vertical.title} className="vertical-card wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
              <div className="vertical-card__image">
                <div className="vertical-card__icon">
                  {index === 0 && '🚢'}
                  {index === 1 && '⚡'}
                  {index === 2 && '📦'}
                </div>
              </div>
              
              <div className="vertical-card__content">
                <div className="vertical-card__title">
                  <div className="vertical-card__title-icon">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3>{vertical.title}</h3>
                </div>
                
                <p className="vertical-card__description">{vertical.description}</p>

                <div className="vertical-card__logos">
                  {vertical.logos.map((logo) => (
                    <img key={logo.alt} src={logo.img} alt={logo.alt} loading="lazy" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
