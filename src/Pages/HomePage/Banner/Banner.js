import React from 'react';
import img1 from '../../../assets/banner1.jpg';
import img2 from '../../../assets/banner2.jpg';
import img3 from '../../../assets/banner3.jpg';
import img4 from '../../../assets/banner4.jpg';
import img5 from '../../../assets/banner5.jpg';
import img6 from '../../../assets/banner6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-3">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-ghost btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-ghost btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;