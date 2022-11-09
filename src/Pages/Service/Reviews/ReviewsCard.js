import React from 'react';

const ReviewsCard = ({ review }) => {

    const { customer, email, ratings, reviewUser, photoURL } = review

    return (
        <div className="card w-full bg-info text-primary-content">
            <div className="card-body">
                <div className="flex items-center gap-4">
                    {
                        photoURL ?
                            <>
                                <div className="avatar flex">
                                    <div className="w-12 rounded-full">
                                        <img src={photoURL} alt='' />
                                    </div>
                                </div>
                            </> :
                            <span className='w-12 h-12 rounded-full text-white text-2xl py-2 text-center bg-black'>{customer.slice(0, 1).toUpperCase()}</span>
                    }
                    <h2 className="card-title">{customer}</h2>
                </div>

                <p className='text-xl text-black font-bold'>{reviewUser}</p>
                <span className='text-red-600 font-semibold'>Ratings: {ratings}</span>
            </div>
        </div>
    );
};

export default ReviewsCard;