import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = (name) => {

    const serviceName = name.name;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceName=${serviceName}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [serviceName]);

    // console.log(reviews);

    return (
        <div className='mt-12'>
            {
                reviews.length === 0 ?
                    <div>
                        <h1 className='text-xl font-semibold text-center text-orange-500'>This Service Has No Review Yet</h1>
                    </div>
                    :
                    <div className='grid grid-cols-1 gap-5'>
                        {
                            reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Reviews;