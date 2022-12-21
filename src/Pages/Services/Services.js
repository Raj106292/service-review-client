import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Components/Loader';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import ServicesCard from './ServicesCard';

const Services = () => {

    useTitle('Services');
    const { loading } = useContext(AuthContext)
    const services = useLoaderData();
    // console.log(services);

    return (
        <div className='mt-12'>
            <h1 className='text-4xl text-center text-blue-700 font-bold'><u>Services of RD's Photography</u></h1>
            {loading ? <Loader /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6'>
                    {
                        services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Services;