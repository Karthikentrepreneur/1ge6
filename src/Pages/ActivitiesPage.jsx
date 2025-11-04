import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import ActivitiesIntro from '../Components/Activities/ActivitiesIntro';
import Activities from '../Components/Activities/Activities';

const ActivitiesPage = () => {
  return (
    <div className="activities-page">
      <BreadCumb bgimg="/activities.png" Title="Our Business Verticals" />
      <main>
        <Activities />
      </main>
    </div>
  );
};

export default ActivitiesPage;
