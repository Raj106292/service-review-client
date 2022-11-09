import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Utilities/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UserReview = () => {

    const { _id, name, price, image } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleReviewSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const userName = `${form.firstName.value} ${form.lastName.value}`;
        const ratings = form.ratings.value;
        const photoURL = form.photoURL.value;
        const email = user?.email || 'Unregistered';
        const reviewUser = form.review.value;

        const userReview = {
            serviceId: _id,
            serviceName: name,
            price,
            customer: userName,
            email,
            ratings,
            reviewUser,
            photoURL,
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('rdsToken')}`
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'You Successfully Placed a Review',
                    )
                    form.reset();
                    navigate('/services');
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className='relative mt-12 mb-32'>
                <img src={image} alt="" className='w-full h-72 rounded-lg' />
                <div>
                    <h2 className='text-4xl font-bold absolute bottom-1/2 left-20 text-black'>Review</h2>
                </div>
            </div>
            <form onSubmit={handleReviewSubmit} className='bg-base-300 p-24 mb-32 rounded-lg'>
                <h2 className='text-4xl text-blue-500 font-bold'>You are going to review for: {name}</h2>
                <h4 className='text-3xl text-red-600 font-semibold'>Price: ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                    <input name="firstName" required type="text" placeholder="First Name" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="lastName" required type="text" placeholder="Last Name" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="ratings" required type="text" placeholder="service ratings" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="email" required type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-info w-full rounded-lg font-bold" readOnly />
                </div>
                <div>
                    <input name="photoURL" type="text" placeholder="your phot url" defaultValue={user?.photoURL} className="input input-bordered input-info w-full rounded-lg font-bold mb-5" />
                    <textarea name="review" className="textarea textarea-success w-full rounded-lg" placeholder="Your Review"></textarea>
                </div>
                <input type="submit" value="submit your review" className='btn w-full bg-orange-600 text-white font-bold rounded-lg my-5' />
            </form>
        </div>
    );
};

export default UserReview;