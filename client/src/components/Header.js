import React from 'react';

function Header() {
    return (
        <div className='header'>
            <ul className='nav'>
                <li>SHOP</li>
                <li>ABOUT</li>
            </ul>
            <div className='logo'>ⴲ</div>
            <ul className='nav'>
                <li>LOGIN</li>
                <li>CART (0)</li>
            </ul>
        </div>
    )
}

export default Header;