import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const ShippingPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Shipping" />
      <section className="py-5">
        <div className="container">
          <img
            src="/shipping.png"
            alt="Shipping"
            className="mb-6 w-full h-80 object-cover rounded"
          />
          <p>
            Shipping is the backbone of global trade, moving goods across oceans and
            connecting markets on every continent. Our shipping services are built on
            reliability and efficiency, ensuring products reach their destinations on
            time and in perfect condition.
          </p>
          <p>
            From cargo management to route optimization, we leverage industry-leading
            technology to provide end-to-end solutions. Our fleet operates under the
            highest safety standards, and our experienced crews navigate the world's
            busiest ports with precision.
          </p>
          <p>
            We are committed to sustainability, investing in cleaner fuels and modern
            vessels that reduce emissions. As global demand continues to grow, our
            shipping division remains dedicated to delivering exceptional service
            while minimizing environmental impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
