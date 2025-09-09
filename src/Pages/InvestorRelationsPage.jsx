import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const InvestorRelationsPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Investor Relations" />
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Latest information for interested parties of BlackRock stock (NYSE: BLK)</h2>
          <p><strong>NYSE: BLK</strong></p>
          <p>Link to stock page</p>
          <p>1,104.92<br />+5.77 (0.53%)</p>
          <p><strong>Market Cap:</strong><br />$171.10B</p>
          <p>20 minutes min. delay | September 8, 2025 4:00 PM ET</p>
          <ul>
            <li>See our latest quarterly results</li>
            <li>See our latest press releases</li>
          </ul>
          <h3 className="mt-4">Annual Report and Proxy</h3>
          <ul>
            <li>2024 Annual Report</li>
            <li>2025 Proxy</li>
          </ul>
          <h3 className="mt-4">2025 Investor Day</h3>
          <ul>
            <li>Full presentation</li>
            <li>Agenda</li>
          </ul>
          <h3 className="mt-4">Who we are</h3>
          <p>BlackRock is a global investment manager and our purpose is to help more and more people experience financial well-being. As a fiduciary to investors and a leading provider of financial technology, our clients turn to us for the solutions they need when planning for their most important goals.</p>
          <p>Learn More</p>
          <h3 className="mt-4">Quarterly results</h3>
          <p>Q22025</p>
          <ul>
            <li>Earnings Release (opens in new window)</li>
            <li>Earnings Supplement (opens in new window)</li>
            <li>Webcast (opens in new window)</li>
          </ul>
          <p>All quarters</p>
          <h3 className="mt-4">Press releases</h3>
          <p>All Releases</p>
          <h4 className="mt-4">BlackRock, Inc. 2025 Investor Day</h4>
          <p>Jun 12, 2025</p>
          <ul>
            <li>Shareholder Value Presentation (opens in new window)</li>
            <li>Agenda</li>
            <li>Full Presentation</li>
          </ul>
          <h3 className="mt-4">Events</h3>
          <p>All events</p>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelationsPage;
