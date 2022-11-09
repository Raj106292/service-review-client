import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import Footer from '../../../Shared/Footer/Footer';
import AboutPhotography from '../AboutPhotography/AboutPhotography';
import Banner from '../Banner/Banner';
import LimitedService from '../LimitedService/LimitedService';
import PhotoGrapher from '../PhotoGrapher/PhotoGrapher';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <LimitedService></LimitedService>
            <AboutPhotography></AboutPhotography>
            <PhotoGrapher></PhotoGrapher>
            <Footer></Footer>
        </div>
    );
};

export default Home;