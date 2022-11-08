import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import ReviewInRow from './ReviewInRow';

const MyReviews = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('rdsToken')}`
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return userLogOut()
                // }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to cancel the order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('rdsToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const existsReviews = reviews.filter(review => review._id !== id);
                        setReviews(existsReviews);
                        alert('order cancelled successfully');
                    }
                })
        }
    };

    // const handleUpdate = (id) => {
    //     fetch(`https://genius-car-server-flame-eight.vercel.app/orders/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "content-type": "application/json",
    //             authorization: `Bearer ${localStorage.getItem('geniusToken')}`
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = reviews.filter(order => order._id !== id);
    //                 const approving = reviews.find(order => order._id === id);
    //                 approving.status = 'Approved';
    //                 const newOrders = [approving, ...remaining];
    //                 setReviews(newOrders);
    //             }
    //         })
    // }

    return (
        <div>
            {
                reviews.length === 0 ?
                <h2 className="text-5xl mt-5"> You didn't review any services yet</h2> :
                <h2 className="text-5xl mt-5"> Your Reviews :</h2>
            }
            <div className="overflow-x-auto w-full">
                <table className="table w-full my-24">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewInRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}></ReviewInRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;