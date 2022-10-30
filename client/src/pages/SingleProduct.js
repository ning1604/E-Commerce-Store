import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

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

    // const [formState, setFormState] = useState({ comment: '', name: '' });
    // const [addComment] = useMutation(UPDATE_CURRENT_PRODUCT);

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

    const handleCommentSubmit = async (event) => {
      event.preventDefault();  
    };

    // const handleCommentSubmit = async (event) => {
    //     event.preventDefault();
    //     const mutationResponse = await addComment({
    //         variables: {
    //             comment: formState.email,
    //             display: formState.password,
    //         },
    //     });
    //     const token = mutationResponse.data.addUser.token;
    //     Auth.login(token);
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    return (
        <>
            {currentProduct && cart ? (
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
                    <Link className='small-btn back-btn' to="/shop">← Back to All Products</Link>
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
                        <form className='login-form' onSubmit={handleCommentSubmit}>
                            <div className='form-input'>
                                <label htmlFor='comment'>Add a comment</label>
                                <input
                                    placeholder='comment here'
                                    name='comment'
                                    type='comment'
                                    id='comment'
                                    // onChange={handleChange}
                                />
                                <input
                                    placeholder='display name'
                                    name='name'
                                    type='name'
                                    id='name'
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
