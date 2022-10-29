import React from 'react';
import Auth from '../../utils/auth';
import Cart from '../Cart';
import { Link } from 'react-router-dom';

function Navbar() {
    if (Auth.loggedIn()) {
        return (
            <div className='header'>
                <ul className='nav'>
                    <li>
                        <Link to='/shop'>SHOP</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
                <Link to='/' className='logo'>ⴲ</Link>
                <ul className='nav'>
                    <li>
                        <Link to='/' onClick={() => Auth.logout()}>LOGOUT</Link>
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
                        <Link to='/shop'>SHOP</Link>
                    </li>
                    <li>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
                <Link to='/' className='logo'>ⴲ</Link>
                <ul className='nav'>
                    <li>
                        <Link to='/login'>LOGIN</Link>
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