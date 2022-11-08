import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {

    const service = useLoaderData();
    const { name, image, details } = service;
    // console.log(name);

    return (
        <div className='mt-12'>
            <div className="hero bg-base-200 p-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold"> ---[ {name} ]--- </h1>
                        <p className="py-6">{details}</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;