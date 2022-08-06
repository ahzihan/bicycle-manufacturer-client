import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="">
                    <h1 class="text-8xl text-orange-500 font-bold">404</h1>
                    <h2 className='text-5xl font-bold py-3'>OPPS! PAGE NOT BE FOUND</h2>
                    <p class="py-6 text-3xl max-w-xxl">Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable.</p>
                    <Link to="/" class="btn uppercase btn-primary">Back to Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;