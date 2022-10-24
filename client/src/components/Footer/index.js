import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/ning1604/E-Commerce-Store' target='_blank' rel='noopener noreferrer' className='email-link'>deterre@deterre.com</a>
            <div className='sec-contacts'>
                <div className='icon-group'>
                    <a href='https://github.com/ning1604/E-Commerce-Store' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-instagram fa-4x'></i></a>
                    <a href='https://github.com/ning1604/E-Commerce-Store' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-square-facebook fa-4x'></i></a>
                    <a href='https://github.com/ning1604/E-Commerce-Store' target='_blank' rel='noopener noreferrer'><i className='fa-brands fa-youtube fa-4x'></i></a>
                </div>
                <div>
                   <p>+61 491 570 156</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;