import React from 'react';
import Auth from '../../utils/auth';

function Navbar() {
    if (Auth.loggedIn()) {
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
                        <a href='/' onClick={() => Auth.logout()}>LOGOUT</a>
                    </li>
                    <li>
                        <a href='404'>CART (0)</a>
                    </li>
                </ul>
            </div>
        )
    } else {
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
                        <a href='/login'>LOGIN</a>
                    </li>
                    <li>
                        <a href='404'>CART (0)</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;