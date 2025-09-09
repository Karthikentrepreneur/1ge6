import React from 'react';
import Heroanner1 from '../Components/HeroBanner/Heroanner1';
import Feature1 from '../Components/Feature/Feature1';
import Category1 from '../Components/Category/Category1';
import About1 from '../Components/About/About1';
import Cta1 from '../Components/Cta/Cta1';
import Destination1 from '../Components/Destination/Destination1';
import DealOffers1 from '../Components/DealOffers/DealOffers1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Choose1 from '../Components/Choose/Choose1';
import Team1 from '../Components/Team/Team1';
import Cta2 from '../Components/Cta/Cta2';
import Blog1 from '../Components/Blog/Blog1';
import Brand1 from '../Components/Brand/Brand1';

const Home3 = () => {
    return (
        <div>
                <Heroanner1></Heroanner1>
            <div className="cs_site_header_spacing_140"></div>
            <div style={{ marginTop: '-146px', paddingTop: '146px' }}>
                <About1></About1>
                <Category1></Category1>
                <Blog1></Blog1>
                <Brand1></Brand1>
            </div>
        </div>
    );
};

export default Home3;
