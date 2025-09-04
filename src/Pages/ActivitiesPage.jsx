import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Activities from '../Components/Activities/Activities';

const ActivitiesPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/activities.png"
                Title="Activities"
            ></BreadCumb>    
            <Activities></Activities>         
        </div>
    );
};

export default ActivitiesPage;
