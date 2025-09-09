import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const CorporateSustainabilityPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Corporate Sustainability" />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img src="/renewable.png" alt="Wind turbines and solar panels" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2>Building a Greener Future</h2>
              <p>
                At 1 Global Enterprises, sustainability is woven into every aspect of our business. We invest in renewable
                energy, reduce waste across our operations, and collaborate with partners who share our vision for a cleaner
                planet.
              </p>
              <p>
                Our initiatives include energy-efficient logistics, responsible sourcing, and support for community
                environmental programs. Together, these efforts help us minimize our footprint and create lasting value for
                future generations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img src="/about4.png" alt="Team planting trees" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 order-md-1">
              <h3>People and Planet</h3>
              <p>
                We believe that thriving communities and a healthy environment go hand in hand. Our corporate sustainability
                program empowers employees to volunteer, promotes diversity and inclusion, and ensures that growth never comes
                at the expense of the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateSustainabilityPage;
