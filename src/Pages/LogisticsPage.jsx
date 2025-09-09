import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const LogisticsPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Logistics" />
      <section className="py-5">
        <div className="container">
          <img src="/logistics.png" alt="Logistics" className="mb-4 w-100" />
          <p>
            Efficient logistics are essential for keeping supply chains running
            smoothly. Our logistics team coordinates transportation, warehousing, and
            distribution to provide a seamless experience from origin to destination.
          </p>
          <p>
            With a network that spans the globe, we offer customized solutions for
            businesses of all sizes. Advanced tracking systems give our clients
            real-time visibility, ensuring every shipment is accounted for at every
            step.
          </p>
          <p>
            Whether by land, sea, or air, our logistics services are designed to
            maximize speed and minimize cost. We continually refine our operations to
            meet the evolving needs of modern commerce.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;
