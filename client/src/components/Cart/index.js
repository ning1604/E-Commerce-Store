import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe(`${process.env.REACT_APP_CLIENT_SECRET_KEY}`);

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { error, data }] = useLazyQuery(QUERY_CHECKOUT);
    console.log(`Error! ${error}`);
    

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                console.log('redirect to checkout')
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];
        console.log('checkout')
        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });
        console.log(productIds)
        getCheckout({
            variables: { products: productIds },
        });
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <span>
                    Cart
                </span>
            </div>
        );
    }

    return (
        <>
            <div className="cart-closed">
                <span>
                    Cart
                </span>
            </div>
            <div className="cart">
                <div className="close" onClick={toggleCart}>
                    X
                </div>
                <h2>Shopping Cart</h2>
                {state.cart.length ? (
                    <div>
                        {state.cart.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))}

                        <div className="cart-total">
                            <p>Total: <span>${calculateTotal()}</span></p>

                            {Auth.loggedIn() ? (
                                <button className='checkout-btn' onClick={submitCheckout}>Checkout</button>
                            ) : (
                                <span className='inform-login'>(log in to check out)</span>
                            )}
                        </div>
                    </div>
                ) : (
                    <h3>
                        You haven't added anything to your cart yet!
                    </h3>
                )}
            </div>
        </>

    );
};

export default Cart;
