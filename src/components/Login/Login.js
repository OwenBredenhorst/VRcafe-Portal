import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Login.css';
import '../../Styling/Globalstyling.css';
import {getLoginInfo} from "../../services/UserService.tsx";

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import toast, {Toaster} from "react-hot-toast";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogins = (event) => {
        if (email && password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;


                toast.success('Welcome : ' + user.email , {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        backgroundColor: '#2D2A2F',
                        color: 'white',
                    },
                    iconTheme: {
                        primary: '#FD3E81',
                        secondary: 'white',
                    },
                });

                setTimeout(() => {
                    sessionStorage.setItem('userInfo', JSON.stringify(user));
                    window.location.href = "/welcome";
                    }, 1000);



            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError("Invalid email or password. Please try again.");
            });
        } else {
            setError("Please enter email and password.");
        }
    };



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
            <Toaster />
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
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault(); // Prevent form submission
                                    handleLogins(); // Call the login function
                                }
                            }}
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
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault(); // Prevent form submission
                                    handleLogins(); // Call the login function
                                }
                            }}
                        />
                    </div>
                    {error && (
                        <p
                            style={{
                                color: "red",
                                textAlign: "center",
                                marginBottom: "10px",
                            }}
                        >
                            {error}
                        </p>
                    )}
                    <div className="button-container">
                        <button type="submit" onClick={handleLogins} className="button">
                            Login Werknemer
                        </button>
                    </div>




                    <Link to="/welcomeBedrijf">
                    <p className={"login-p"}>
                        Login Werknemer
                    </p>
                    </Link>
            </div>
        </div>

    );
};

export default Login;
