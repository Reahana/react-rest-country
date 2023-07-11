import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to my React </h1>
            <nav>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
            </nav>
        </div>
    );
};

export default Header;