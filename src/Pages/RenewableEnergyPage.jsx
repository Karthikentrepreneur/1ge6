import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';

const RenewableEnergyPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/aboutbg.png" Title="Renewable Energy" />
      <section className="py-5">
        <div className="container">
          <img src="/renewable.png" alt="Renewable Energy" className="mb-4 w-100" />
          <p>
            Renewable energy is central to a sustainable future. Our projects harness
            the power of wind, sun, and water to generate clean electricity and reduce
            dependence on fossil fuels.
          </p>
          <p>
            We collaborate with communities and governments to develop energy
            solutions that are both economically and environmentally sound. Each
            installation is designed to maximize efficiency and minimize ecological
            impact.
          </p>
          <p>
            Through continued research and investment, we aim to expand the reach of
            renewable technologies. Our commitment to green energy is helping to build
            a more resilient and responsible world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RenewableEnergyPage;
