import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import Reviews from './Reviews/Reviews';

const Service = () => {

    useTitle('services');
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, image, details, price, ratings, _id } = service;
    // console.log(name);

    return (
        <div className='mt-12'>
            <div className="hero bg-base-200 p-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold"> ---[ {name} ]--- </h1>
                        <p className="py-6">{details}</p>
                        <div className='flex justify-between'>
                            <p className='text-xl text-yellow-500'>Price: {price}</p>
                            <p className='text-xl text-blue-500'>Ratings: {ratings}</p>
                        </div>
                        <div className='flex justify-between'>
                            <button className="btn btn-primary mt-5">Book Now</button>
                            {
                                user?.email ?
                                <Link to={`/review/${_id}`}><button className="btn btn-info mt-5">Review the service</button></Link> :
                                <Link to='/login'><button className="btn btn-ghost mt-5">Please Login</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Reviews name={name}></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Service;