import React from 'react';

const OrderTable = ( { order, index } ) => {
    console.log( order );
    const { name, description, image } = order;
    const qty = order.qty;
    const price = order.price;
    const total = parseInt( qty * price );
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={image} alt="Product" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td>${total}</td>
            <td>
                <label for="delete-confirm-modal" class="btn btn-xs btn-success modal-button">approve</label>
            </td>
        </tr>
    );
};

export default OrderTable;