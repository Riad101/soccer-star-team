import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total,pl)=>(total+pl.salary),0);
    const pName =  cart.map(pl => <li>{pl.full_name} -${pl.salary}</li> );
    
    return (
        <div className="invoice">
            <h2 className="card-title font-weight-bolder p-3 mb-2 bg-warning text-dark">Buy Your STAR Players</h2>
            <h4>Total Players Added:</h4> <h5 className="text-warning">{cart.length}</h5> 
            <h4>Player Selected:</h4> <h5 className="text-warning">{pName}</h5>
            <h4>Total Budget:</h4> <h5 className="text-warning">${total}</h5>
            <button   type="button" 
                className="btn btn-warning btn-md btn-block font-weight-bold">
                <FontAwesomeIcon icon={faFutbol}/> Confirm Purchase
            </button>

        </div>
    );
};

export default Cart;