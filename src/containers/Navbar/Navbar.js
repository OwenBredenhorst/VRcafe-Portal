import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import sessionClear from "../../functions/ClearSession";
import isLoggedIn from "../../functions/Session";

const loggedIn = isLoggedIn();
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
                        {loggedIn &&  <li className="navbar-item">Home</li>}
                    </Link>
                    <Link to="/FilteredContent#isomerty">
                        <li className="navbar-item">Files</li>
                    </Link>
                    <li onClick={sessionClear} className="navbar-item">Logout</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
