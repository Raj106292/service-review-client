import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import ServicesCard from './ServicesCard';

const Services = () => {

    const services = useLoaderData();
    // console.log(services);

    return (
        <div className='mt-12'>
            <h1 className='text-4xl text-center text-blue-700 font-bold'><u>Services of RD's Photography</u></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;