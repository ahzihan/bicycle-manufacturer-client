import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ( { order, index } ) => {
    const { name, description, image } = order;
    const qty = order.qty;
    const price = order.price;
    const subTotal = parseInt( qty * price );
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={image} alt="Product" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td>${subTotal}</td>
            <td>{( subTotal && !order.paid ) && <Link to={`/dashboard/payment/${ order._id }`}>
                <button className='btn btn-xs btn-success'>Pay</button></Link>}
                {( subTotal && order.paid ) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>TransactionId: <span className='text-success'>{order._id}</span></p>
                </div>}
            </td>
        </tr>
    );
};

export default MyOrderTable;