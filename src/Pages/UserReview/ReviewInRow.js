import React, { useEffect, useState } from 'react';

const ReviewInRow = ({review, handleDelete}) => {
    const { _id, serviceName, price, customer, serviceId, ratings, reviewUser } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviewService(data);
            })
    }, [serviceId])

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-circle h-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-24 h-24">
                            {
                                reviewService?.image &&
                                <img src={reviewService.image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{ratings}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{reviewUser}</td>
        </tr>
    );
};

export default ReviewInRow;