import React from 'react';

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
            <td>
                <label for="delete-confirm-modal" className="btn btn-xs btn-primary modal-button">pending</label>
            </td>
        </tr>
    );
};

export default MyOrderTable;