import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = (name) => {

    const serviceName = name.name;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://service-review-server-side-pi.vercel.app/reviews?serviceName=${serviceName}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [serviceName]);

    // console.log(reviews);

    return (
        <div className='mt-12'>
            <div className='grid grid-cols-1 gap-5'>
                {
                    reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;