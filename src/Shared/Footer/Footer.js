import React from 'react';
import img from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <div className='mt-20 mb-4'>
            <footer className="footer p-10 bg-neutral text-neutral-content rounded-md">
                <div>
                    <img src={img} style={{height: '80px', width: '80px'}} className='rounded-md' alt="" />
                    <p>RD's Photography<br />Providing Reliable Photo Since 2008</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <div className="grid grid-cols-2 gap-6">
                        <p>Wedding</p>
                        <p>Portrait</p>
                        <p>Engagement</p>
                        <p>Editorial</p>
                        <p>Outdoor Shooting</p>
                        <p>Drone Shooting</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;