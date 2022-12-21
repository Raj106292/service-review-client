import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../Components/Loader';
import { AuthContext } from '../../../Utilities/AuthProvider/AuthProvider';
import LimitedServiceCard from './LimitedServiceCard';

const LimitedService = () => {

    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        fetch('https://service-review-server-side-pi.vercel.app/limited/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [setLoading]);

    return (
        <div className='mt-20'>
            <h2 className='text-center text-blue-500 text-4xl mb-6 font-bold'>❯❯❯ Services ❮❮❮</h2>
            {
                loading ? <Loader /> :
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                services.map(service => <LimitedServiceCard key={service._id} service={service}></LimitedServiceCard>)
                            }
                        </div>
                        <div className='my-4 text-center'>
                            <Link to='/services'><button className='btn btn-outline btn-primary'>more services</button></Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default LimitedService;