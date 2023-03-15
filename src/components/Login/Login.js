import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <form className="login-form">
                <h1 className="title">VRcafe Portal</h1>
                <input type="email" placeholder="Email" />
                <input type="password" id="password" name="password" placeholder="password" />
                <Link to="/welcome">
                    <button type="submit">Login</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
