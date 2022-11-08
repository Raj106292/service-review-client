import React from 'react';
import img from '../../../assets/about.jpg';

const AboutPhotography = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-4xl font-semibold text-center text-orange-500 mb-5'>❯❯❯ About Photography ❮❮❮</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} style={{ width: '400px' }} className='rounded-md' alt="Album" /></figure>
                <div className="card-body w-full lg:w-1/2">
                    <h2 className="card-title">A photo has lot of meanings</h2>
                    <p>
                        Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication.
                    </p>
                    <div className="card-actions justify-end">
                        <a href="https://en.wikipedia.org/wiki/Photography" target='blank'><button className="btn btn-ghost">more about photography</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPhotography;