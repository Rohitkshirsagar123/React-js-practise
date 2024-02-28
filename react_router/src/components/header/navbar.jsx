import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">Your Logo</Link>
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default navbar;
