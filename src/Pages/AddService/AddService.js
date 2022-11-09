import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/UseTitle';

const AddService = () => {

    useTitle('New Service');
    const navigate = useNavigate();

    const handleNewService = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const image = form.image.value;
        const details = form.details.value;
        const service = {
            name,
            price,
            details,
            image,
            ratings,
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'You Successfully Create New Service',
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
            <h1 className='text-center text-4xl font-bold my-12'>Create A New Service</h1>
            <form onSubmit={handleNewService} className='bg-base-500 p-24 mb-32 rounded-lg'>
                <h2 className='text-4xl text-blue-500 font-bold'>You Are Going To Add A New Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                    <input name="name" required type="text" placeholder="Service Name" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="price" required type="text" placeholder="Enter Price" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="ratings" required type="text" placeholder="service ratings" className="input input-bordered input-info w-full rounded-lg" />
                    <input name="image" required type="file" placeholder="choose an image" className="file-input file-input-bordered file-input-warning w-full rounded-lg font-bold" readOnly />
                </div>
                <div>
                    <textarea name="details" className="textarea textarea-success w-full rounded-lg" placeholder="service details"></textarea>
                </div>
                <input type="submit" value="Add Service" className='btn w-full bg-orange-600 text-white font-bold rounded-lg my-5' />
            </form>
        </div>
    );
};

export default AddService;