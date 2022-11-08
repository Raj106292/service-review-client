import React from 'react';

const ServicesCard = ({ service }) => {

    const { image, name, price, ratings, details } = service;

    return (
        <div className="card w-96 glass">
            <figure><img src={image} className='w-full' style={{ height: '250px' }} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>
                    {
                        details.length > 150 ?
                            details.slice(0, 150) + '...' :
                            details
                    }
                </p>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-cyan-600'>Price: {price}</p>
                    <p className='text-xl font-semibold text-orange-500'>Ratings: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;