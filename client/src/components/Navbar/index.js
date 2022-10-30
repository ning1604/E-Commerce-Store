import React, { useState } from 'react';
import Auth from '../../utils/auth';
import Cart from '../Cart';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    if (Auth.loggedIn()) {
        return (
            <div className='header'>
                <ul className='nav'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                    <div className={(isOpen ? 'flex' : 'hidden') + ' nav-menu'}>
                    <Link to='/shop'>SHOP</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/' onClick={() => Auth.logout()}>LOGOUT</Link>
                    </div>
                    <li className='hide-link'>
                        <Link to='/shop'>SHOP</Link>
                    </li>
                    <li className='hide-link'>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
                <Link to='/' className='logo'>ⴲ</Link>
                <ul className='nav'>
                    <li className='hide-link'>
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
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <div className={(isOpen ? 'flex' : 'hidden') + ' nav-menu'}>
                    <Link to='/shop'>SHOP</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/login'>LOGIN</Link>
                    </div>
                    <li className='hide-link'>
                        <Link to='/shop'>SHOP</Link>
                    </li>
                    <li className='hide-link'>
                        <Link to='/about'>ABOUT</Link>
                    </li>
                </ul>
                <Link to='/' className='logo'>ⴲ</Link>
                <ul className='nav'>
                    <li className='hide-link'>
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