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
/>


      {/* ✅ Activities Section */}
      <Activities />
    </main>

            <div>
            <BreadCumb
                bgimg="/activities.png"
                Title="Our Business Verticals"
            ></BreadCumb>
            <Activities></Activities>
        </div>

  );
};

export default ActivitiesPage;
