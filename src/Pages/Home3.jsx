import React from 'react';
import Heroanner1 from '../Components/HeroBanner/Heroanner1';
import Category1 from '../Components/Category/Category1';
import About1 from '../Components/About/About1';
import Blog1 from '../Components/Blog/Blog1';
import Brand1 from '../Components/Brand/Brand1';

const Home3 = () => {
    return (
        <div>
            <Heroanner1></Heroanner1>
            <div id="hero-sentinel" className="after-hero-offset">
                <About1></About1>
                <Category1></Category1>
                <Blog1></Blog1>
                <Brand1></Brand1>
            </div>
        </div>
    );
};

export default Home3;
