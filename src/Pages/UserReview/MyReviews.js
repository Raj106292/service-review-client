import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import ReviewInCard from './ReviewInCard';

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
        const proceed = window.confirm('Are you sure to remove the review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('rdsToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const existsReviews = reviews.filter(review => review._id !== id);
                        setReviews(existsReviews);
                        alert('review removed successfully');
                    }
                })
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const reviewUser = form.reviewUser.value;
        handleUpdateReview(id, reviewUser)
    }

    const handleUpdateReview = (id, review) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('rdsToken')}`
            },
            body: JSON.stringify({ review })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const updating = reviews.find(review => review._id === id);
                    updating.reviewUser = review;
                    const newReview = [updating, ...remaining];
                    setReviews(newReview);
                }
            })
    }

    return (
        <div>
            {
                reviews.length === 0 ?
                    <h2 className="text-5xl text-center mt-20"> You didn't review any services yet</h2> :
                    <>
                        <h2 className="text-5xl mt-5 mb-12"> Your Reviews :</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                reviews.map(review => <ReviewInCard
                                    key={review._id}
                                    review={review}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}></ReviewInCard>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default MyReviews;