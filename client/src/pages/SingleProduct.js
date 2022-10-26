import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function SingleProduct() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentProduct, setCurrentProduct] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = state;

    useEffect(() => {
        // already in global store
        if (products.length) {
            setCurrentProduct(products.find((product) => product._id === id));
        }
        // retrieved from server
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts,
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 },
            });
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    };
    const commentsObj = {
        product: {
            comments: [
                {
                    author: 'author one',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus. Aenean sed accumsan nisi, vestibulum bibendum dui.'
                },
                {
                    author: 'author two',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales in nisi sit amet finibus.'
                }
            ]
        }
    };

    return (
        <>
            {currentProduct ? (
                <div className="main-container page-container">

                    <h2 className='sub-header'>{currentProduct.name}</h2>

                    <div className='product-detail-container'>
                        <img
                            className='single-product-image'
                            src={`/images/products/${currentProduct.image}`}
                            alt={currentProduct.name}
                        />
                        <div className='product-info-container'>
                            <p className='product-description'>{currentProduct.description}</p>
                            <ul>
                                <li className='product-specification'>{currentProduct.specification}</li>
                            </ul>
                            <p className='product-price'>${currentProduct.price}</p>

                            <button className="add-cart-btn" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                    <Link className='small-btn' to="/shop">← Back to All Products</Link>
                    <div>
                        <div className='comment-container'>
                            <h3 className='comment-heading'>Comments</h3>
                            {commentsObj.product.comments.map((comment) => {
                                return (
                                    <div className='comment-content'>
                                        <p>{comment.text}</p>
                                        <p className='comment-author'>- {comment.author}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <form className='login-form'>
                            <div className='form-input'>
                                <label htmlFor='comment'>Add a comment</label>
                                <input
                                    placeholder='comment here'
                                    name='comment'
                                    type='comment'
                                    id='comment'
                                    // onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button className='form-btn' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
            {loading ? <div className='sub-header'>Loading...</div> : null}
        </>
    );
}

export default SingleProduct;
