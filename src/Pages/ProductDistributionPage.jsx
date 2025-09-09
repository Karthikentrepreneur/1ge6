import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const ProductDistributionPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Product Distribution" />
      <section className="py-5">
        <div className="container">
          <img
            src="/product.png"
            alt="Product Distribution"
            className="mb-4 max-w-md w-full mx-auto"
          />
          <p>
            Our product distribution services bridge the gap between manufacturers and
            consumers. We manage every stage of the distribution process, ensuring that
            products arrive in stores and homes exactly when they are needed.
          </p>
          <p>
            Utilizing strategic partnerships and advanced inventory systems, we are
            able to handle high volumes without sacrificing accuracy. Our teams monitor
            performance metrics closely to maintain the highest levels of service.
          </p>
          <p>
            From regional deliveries to international fulfillment, our distribution
            network is built for scalability. We adapt quickly to market changes,
            helping our clients expand their reach with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDistributionPage;
