import React from 'react';
import Auth from '../../utils/auth';
import Cart from '../Cart';

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
                        <Cart />
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
                        <Cart />
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;