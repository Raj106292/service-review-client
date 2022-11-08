import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServicesCard = ({ service }) => {

    const { _id, image, name, price, ratings, details } = service;

    return (
        <div className="card w-96 glass">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} className='w-full' style={{ height: '250px' }} alt="car!" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title"> --( <u className='text-3xl text-sky-500'>{name}</u> )-- </h2>
                <p>
                    {
                        details.length > 150 ?
                            details.slice(0, 150) + '...' :
                            details
                    }
                </p>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold text-blue-600'>Price: {price}</p>
                    <p className='text-xl font-semibold text-orange-500'>Ratings: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;