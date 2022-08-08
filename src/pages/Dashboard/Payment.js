import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe( 'pk_test_51LRsdMF5KgJvVVYzb13wfDmC04ervS9MIC3fPtO3BSIuojuUTDW9ptxWR4C9qzNFZmd7irpHiCJwkBZbnIAPOKxS00fdTB2Jv5' );
const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery( [ 'order', id ], () => fetch( `http://localhost:5000/order/${ id }`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
        }
    } ).then( res => res.json() ) );


    if ( isLoading ) {
        return <Loading></Loading>;
    }

    return (
        <div className='mt-5'>
            <div class="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {order.customerName}</p>
                    <h2 class="card-title">Please Pay for : <span className='text-orange-700'>{order.name}</span></h2>
                    <p>Your Product Quantity is: <span className='text-orange-700'>{order.qty}</span></p>
                    <p>Unit Price: <span className='text-orange-700'>{order.price}</span></p>
                    <p>Please, Pay Total: </p>
                </div>
            </div>
            <div class="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;