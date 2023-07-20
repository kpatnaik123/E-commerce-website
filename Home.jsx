import React from 'react';
import Navbar from './Navbar';
import Announcements from './Announcements';
import Slider from './Slider';
import Categories from './Categories';
import Products from './Products';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;
