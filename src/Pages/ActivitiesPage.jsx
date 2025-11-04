import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Activities from '../Components/Activities/Activities';

const ActivitiesPage = () => {
  return (
    <main>
      {/* ✅ Breadcrumb Section */}
      <BreadCumb
        bgimg="/activities.png"
        Title="Our Business Verticals"
        logo="/logosss05.png" // optional — remove this line if you don't want a logo in breadcrumb
      />

      {/* ✅ Activities Section */}
      <Activities />
    </main>
  );
};

export default ActivitiesPage;
