import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const SoftwareDevelopmentPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Software Development" />
      <section className="py-5">
        <div className="container">
          <img
            src="/software.png"
            alt="Software Development"
            className="mb-6 w-full h-60 object-cover rounded"
          />
          <p>
            Our software development team creates innovative solutions that drive
            digital transformation. From web applications to complex enterprise
            systems, we build scalable products tailored to our clients' needs.
          </p>
          <p>
            We follow modern development practices and emphasize collaboration,
            ensuring every project meets rigorous quality standards. Our developers are
            fluent in a variety of technologies, enabling rapid prototyping and
            reliable deployment.
          </p>
          <p>
            Beyond delivery, we provide ongoing support and optimization to keep
            software running smoothly. Our goal is to empower businesses with tools
            that enhance productivity and unlock new opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
