import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='hrader-div'>
            <header className='header'>
                <h1>TheMealDb</h1>
                <div className='header-info'>
                    <a href="/home">Home</a>
                    <a href="/aPI">API</a>
                    <a href="/forum">Forum</a>
                </div>
            </header>
        </div>
    );
};

export default Header;