import React from 'react';
import { Link } from "react-router-dom";
import bg from '../../assets/image/banner.jpg';

const HomePageBanner = () => {
    return (
        <div style={{ background: `url(${ bg })`, backgroundSize: 'cover' }} class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="">
                    <h1 class="text-4xl lg:text-6xl text-orange-400 font-bold">Welcome To Our Website</h1>
                    <p class="py-6 text-2xl lg:text-3xl max-w-xxl text-white">Our cordial welcome goes to you! Thank you for trusting us and appreciating our venture! We are nothing without customers!</p>
                    <Link to="/services" class="btn uppercase btn-primary">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;