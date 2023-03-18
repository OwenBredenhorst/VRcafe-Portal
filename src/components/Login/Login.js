import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Login.css';
import '../../Styling/Globalstyling.css';
import {getLoginInfo} from "../../services/UserService.tsx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (email && password) {
            getLoginInfo(email, password)
                .then((response) => {

                    if (response.error !== "Not Found") {
                        sessionStorage.setItem('userInfo', JSON.stringify(response));

                        window.location.href = "/welcome";


                    } else {
                        // login failed
                        setError("Invalid email or password. Please try again.");
                    }
                })
                .catch((error) => {
                    // handle the server error case
                    setError("Server error. Please try again later.");
                });
        } else {
            setError("Please enter email and password.");
        }
    };

    return (
        <div className="login-container">
            

                <div className="login-form">
                    <div className="logo-container">
                        <img
                            src="https://i0.wp.com/www.vrcafehaarlem.nl/wp-content/uploads/2021/02/VRcafe-logo-gifje-1.gif?fit=986%2C555&ssl=1"
                            alt="Logo"
                            className="logo"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            id="email-input"
                            type="text"
                            placeholder="Username"
                            className="input"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            id="password-input"
                            type="password"
                            placeholder="Password"
                            className="input"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {error && <p style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>{error}</p>}

                    <div className="button-container">

                        <button className="button" onClick={handleLogin}>
                            Login Werknemer
                        </button>
                    </div>
                    <Link to="/welcomeBedrijf">
                        <div className="text-container">
                            <p className="text">Bedrijf Login</p>
                        </div>
                    </Link>
                </div>

        </div>
    );
};

export default Login;
