import React, { useEffect, useState } from 'react';

const ReviewInCard = ({ review, handleDelete, handleUpdate }) => {

    const { _id, serviceName, price, customer, serviceId, ratings, reviewUser } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://service-review-server-side-pi.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviewService(data);
            })
    }, [serviceId])

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
                {
                    reviewService?.image &&
                    <img src={reviewService.image} className='w-full' style={{height: '250px'}} alt="" />
                }
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="card-title">Service: {serviceName}</h2>
                    </div>
                    <div>
                        <p>Price: {price}</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl'>Your Name: {customer}</h3>
                    <p>Your Review: <span className='font-semibold'>{reviewUser}</span></p>
                    <p>Ratings: {ratings}</p>
                </div>
                <div className="card-actions justify-between">
                    <label htmlFor="my-modal-6" className="btn btn-primary">Update Review</label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-slate-200">
                            <h3 className="font-bold text-lg text-black">Update your review on {serviceName}:</h3>
                            <form onSubmit={handleUpdate}>
                                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-5">
                                    <input className='text-black p-2' type="text" name='id' defaultValue={_id} readOnly/>
                                </div>
                                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-5">
                                    <textarea name="reviewUser" className="textarea textarea-success w-full rounded-lg text-black" defaultValue={reviewUser} placeholder="Your Review"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-primary" type="submit" value="Update" />
                                </div>
                            </form>
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="btn">Close</label>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-circle h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewInCard;