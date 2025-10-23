import React from 'react';
import Services from '../pages/Services'
import Header from '../components/header/Header';
import Tips from '../components/Tips';
import Experts from '../components/Experts';

const Home = () => {
    return (
        <div className=''>
            {/* <Header></Header> */}
            <Services></Services>
            <Tips></Tips>
            <Experts></Experts>
        </div>
    );
};

export default Home;