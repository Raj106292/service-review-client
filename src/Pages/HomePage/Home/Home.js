import React from 'react';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import LimitedService from '../LimitedService/LimitedService';
import PhotoGrapher from '../PhotoGrapher/PhotoGrapher';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitedService></LimitedService>
            <AboutPhotography></AboutPhotography>
            <PhotoGrapher></PhotoGrapher>
        </div>
    );
};

export default Home;