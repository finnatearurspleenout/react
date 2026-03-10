import React, { Component, useContext } from 'react';
import { CardContent } from './CardContent';

const CartModel = () => {
    const {cart, isCartOpen, toggleCart, removeFromCart} = useContext(CardContent);
    if(!isCartOpen) return null;
    return (
        <div className="d-flex flex-column position-fixed top-0 end-0 h-50 bg-white border-start shadow p-3"
        style={{width: '320px'}}
        >
            <div className='d-flex justify-content-between align-items-center w-100 mb-3'>
                <h4 className="mb-0">
                    Кошик
                </h4>
                <button className="btn-close" onClick={toggleCart}></button>
            </div>
            <div className="overflow-auto flex-grow-1">
                {cart.length === 0 ? (
                    <p className="text-muted">Кошик порожній</p>
                ):(
                    <ul className="list-group list-group-flush">
                        {cart.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                Тариф {item.name}
                                <span className="fw-bold">{item.price}$/mo</span>
                                <button className='btn btn-outline-danger btn-sm'
                                onClick={() => removeFromCart(index)}
                                >x</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {cart.length > 0 && (
                <div className="mt-3 border-top pt-3">
                    <button className="btn btn-primary w-100">
                        Оплатити
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartModel;