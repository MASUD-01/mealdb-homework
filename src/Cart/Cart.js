import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { get } = props
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h4>NAME:{get}</h4>
        </div>
    );
};

export default Cart;