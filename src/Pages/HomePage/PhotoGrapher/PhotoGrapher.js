import React from 'react';
import img1 from '../../../assets/photographer1.jpg';
import img2 from '../../../assets/photographer2.jpg';

const PhotoGrapher = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-4xl text-center text-red-600 font-medium'> --( About A Photographer )-- </h2>
            <div className='md:flex lg:flex justify-between items-center gap-5'>
                <div>
                    <img src={img1} style={{ height: '250px', width: '250px' }} className='rounded-md' alt="" />
                </div>
                <div className='w-1/2'>
                    <p>
                        A professional wedding photographer is not just an individual you pay ridiculous sums to just flash a camera in your face and eat free kacchi. He/she is a well-seasoned professional, equipped with the best gear to immortalise your memories of how you felt during your wedding versus how it shows in pictures in years to come.
                    </p>
                </div>
                <div>
                    <img src={img2} style={{ height: '250px', width: '250px' }} className='rounded-md' alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGrapher;