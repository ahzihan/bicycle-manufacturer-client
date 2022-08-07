import React from 'react';
import { Link } from "react-router-dom";

const CustomerReview = () => {
    return (
        <section className='py-6'>
            <h2 className='text-center text-4xl uppercase'>Product Review</h2>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src='' alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Title</h2>
                    <p>Message</p>
                </div>
                <div className="card-actions justify-center mb-5">
                    <Link to="/services" className="btn uppercase btn-primary">Details</Link>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;