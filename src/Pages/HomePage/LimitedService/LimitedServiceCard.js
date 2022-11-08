import React from 'react';
import { Link } from 'react-router-dom';

const LimitedServiceCard = ({ service }) => {

    const { _id, image, name, price, ratings, details } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} className='w-full' style={{ height: '200px' }} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        details.length > 100 ?
                            details.slice(0, 100) + '...' :
                            details
                    }
                </p>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-orange-600'>Price: {price}</p>
                    <p className='text-xl font-semibold text-yellow-500'>Ratings: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LimitedServiceCard;