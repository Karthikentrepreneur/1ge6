import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";

const InvestorRelationsPage: React.FC = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Investor Relations" />

      <section className="py-5">
        <div className="container">
          {/* Intro */}
          <div className="row align-items-center g-4 mb-5">
            <div className="col-lg-6">
              <h2 className="mb-3">1 Global Enterprises — Investor Relations</h2>
              <p className="lead">
                1 Global Enterprises Pte Ltd is a Singapore-headquartered group with
                interests in Shipping, Logistics/Supply Chain, Product Distribution,
                Software/IT, and Renewable/Clean Energy trading. Our Investor Relations
                section provides transparent access to our strategy, governance,
                performance highlights, and updates for stakeholders.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/ir/ir-hero.jpg"
                alt="1 Global Enterprises – Investor overview"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          {/* Investment Highlights */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h3 className="mb-3">Investment Highlights</h3>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="mb-2">Diversified Portfolio</h5>
                <p className="mb-3">
                  Multiple operating verticals across logistics, distribution, IT
                  solutions, and clean-energy supply reduce cyclicality and enhance
                  resilience.
                </p>
                <img
                  src="/ir/highlights-diversified.jpg"
                  alt="Diversified portfolio"
                  className="img-fluid rounded-2"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="mb-2">Sustainable Growth</h5>
                <p className="mb-3">
                  Focus on renewable/clean-energy trading and green logistics to align
                  with long-term demand and global sustainability goals.
                </p>
                <img
                  src="/ir/highlights-sustainability.jpg"
                  alt="Sustainable growth"
                  className="img-fluid rounded-2"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="mb-2">Regional Footprint</h5>
                <p className="mb-3">
                  Singapore HQ with an expanding network across Asia enables efficient
                  supply chain execution and client reach.
                </p>
                <img
                  src="/ir/highlights-footprint.jpg"
                  alt="Regional footprint"
                  className="img-fluid rounded-2"
                />
              </div>
            </div>
          </div>

          {/* Performance Snapshot (non-GAAP placeholders) */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <h3 className="mb-3">Performance Snapshot</h3>
              <ul className="mb-4">
                <li>Revenue growth driven by logistics & renewable supplies</li>
                <li>Diversified margin profile across operating segments</li>
                <li>Disciplined capital allocation and risk management</li>
              </ul>
              <p className="text-muted small">
                *Figures and charts are illustrative placeholders. Replace with your
                latest audited or management numbers as appropriate.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/ir/performance-chart.png"
                alt="Performance snapshot chart"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          {/* Reports & Downloads */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h3 className="mb-3">Reports & Downloads</h3>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="mb-2">Annual Report</h5>
                <p className="mb-3">
                  Our annual overview of strategy, operations, governance, and
                  financial performance.
                </p>
                <a className="btn btn-primary btn-sm" href="/ir/annual-report.pdf" target="_blank" rel="noreferrer">
                  View Annual Report
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded-3 h-100">
                <h5 className="mb-2">Investor Presentation</h5>
                <p className="mb-3">
                  High-level summary for prospective investors and partners.
                </p>
                <a className="btn btn-primary btn-sm" href="/ir/investor-presentation.pdf" target="_blank" rel="noreferrer">
                  View Presentation
                </a>
              </div>
            </div>
          </div>

          {/* News & Press */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h3 className="mb-3">News & Press</h3>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <img
                  src="/ir/news-1.jpg"
                  alt="Press item 1"
                  className="img-fluid rounded-2 mb-3"
                />
                <h6 className="mb-1">1GE expands clean-energy trading</h6>
                <p className="text-muted small mb-2">Date: Aug 2025</p>
                <a href="/press/1ge-expands-clean-energy" className="link-primary">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <img
                  src="/ir/news-2.jpg"
                  alt="Press item 2"
                  className="img-fluid rounded-2 mb-3"
                />
                <h6 className="mb-1">New logistics hub announcement</h6>
                <p className="text-muted small mb-2">Date: Jul 2025</p>
                <a href="/press/new-logistics-hub" className="link-primary">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 border rounded-3 h-100">
                <img
                  src="/ir/news-3.jpg"
                  alt="Press item 3"
                  className="img-fluid rounded-2 mb-3"
                />
                <h6 className="mb-1">Partnership with regional distributor</h6>
                <p className="text-muted small mb-2">Date: Jun 2025</p>
                <a href="/press/regional-partnership" className="link-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <h3 className="mb-3">Corporate Governance</h3>
              <ul className="mb-3">
                <li>Board-level oversight of risk, compliance, and ESG</li>
                <li>Code of Conduct and anti-bribery/anti-corruption policies</li>
                <li>Supplier standards aligned with responsible practices</li>
              </ul>
              <a className="btn btn-outline-primary btn-sm me-2" href="/ir/code-of-conduct.pdf" target="_blank" rel="noreferrer">
                Code of Conduct
              </a>
              <a className="btn btn-outline-primary btn-sm" href="/ir/esg-overview.pdf" target="_blank" rel="noreferrer">
                ESG Overview
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="/ir/governance.jpg"
                alt="Corporate governance"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          {/* Events & IR Contact */}
          <div className="row g-4">
            <div className="col-lg-6">
              <h3 className="mb-3">Events</h3>
              <ul>
                <li>Q4 Business Update (Webinar) — TBA</li>
                <li>Annual Investor Meet — TBA</li>
              </ul>
              <a className="btn btn-outline-primary btn-sm" href="/ir/events" >
                View all events
              </a>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-3">Contact Investor Relations</h3>
              <p className="mb-1"><strong>Email:</strong> <a href="mailto:ir@1ge.sg">ir@1ge.sg</a></p>
              <p className="mb-3"><strong>Address:</strong> #03-01, Keppel Distripark, 511 Kampong Bahru Road, Singapore 099447</p>
              <img
                src="/ir/contact.jpg"
                alt="Investor relations contact"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelationsPage;
