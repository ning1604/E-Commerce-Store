import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='header'>
            <ul className='nav'>
                <li>
                    <a href='/shop'>SHOP</a>
                </li>
                <li>
                    <a href='/about'>ABOUT</a>
                </li>
            </ul>
            <a href='/' className='logo'>ⴲ</a>
            <ul className='nav'>
                <li>
                    <a href='404'>LOGIN</a>
                </li>
                <li>
                    <a href='404'>CART (0)</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;