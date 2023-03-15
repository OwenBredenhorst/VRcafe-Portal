import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/welcome">
                    <img
                        className="navbar-logo"
                        src="https://www.vrcafehaarlem.nl/wp-content/uploads/2021/05/cropped-cropped-logo.png"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="navbar-list">
                    <Link to="/welcome">
                        <li className="navbar-item">Home</li>
                    </Link>
                    <Link to="/Content">
                        <li className="navbar-item">Files</li>
                    </Link>
                    <Link to="/login">
                    <li className="navbar-item">Logout</li>
                    </Link>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
