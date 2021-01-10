import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Style sheet
import "../styles/Login.css";

// Components
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

// Images
const gpc_loginBg = require('../public/gpc_loginBg@2x.png');
const gpc_logo = require('../public/gpc_logo@2x.png');

/*  STILL TO DO:
    - Post request to /login and /signup endpoints
*/

export default function Login() {
    // State
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState();
    const [signupSuccess, setSignupSuccess] = useState();
    const [emptyFields, setEmptyFields] = useState(false);

    // Reducer
    function reducer(state, {field, value}) {
		return {
			...state,
			[field]: value
		}
	}

    // Controlled Login Form
	const initialLoginState = {
        email: "",
        password: ""
	}
	const [loginState, dispatchLogin] = useReducer(reducer, initialLoginState);
	const handleLoginChange = (e) => {
		dispatchLogin({ field: e.target.name, value: e.target.value})
	}
    const {email: loginEmail, password: loginPassword} = loginState;

    // Controlled Signup Form
	const initialSignupState = {
        username: "",
        email: "",
        password: ""
	}
	const [signupState, dispatchSignup] = useReducer(reducer, initialSignupState);
	const handleSignupChange = (e) => {
		dispatchSignup({ field: e.target.name, value: e.target.value})
	}
    const {username, email: signupEmail, password: signupPassword} = signupState;
    
    // Event Handlers
    const handleLogin = (e) => {
        e.preventDefault();

        if (loginEmail === "") {
            return setEmptyFields(true);
        } else if (loginPassword === "") {
            return setEmptyFields(true);
        }

        axios.post("", {
            email: "test@rapptrlabs.com",
            password: "Test123"
        })
        .then(res => {
            console.log(res);
            setEmptyFields(false);
            setSignupSuccess();
            setLoginSuccess(true);
        })
        .catch(err => {
            console.log(err);
            setEmptyFields(false);
            setSignupSuccess();
            setLoginSuccess(false);
        });
    }

    const handleSignup = (e) => {
        e.preventDefault();

        if (username === "") {
            return setEmptyFields(true);
        } else if (signupEmail === "") {
            return setEmptyFields(true);
        } else if (signupPassword === "") {
            return setEmptyFields(true);
        }

        axios.post("http://dev.rapptrlabs.com/Tests/scripts/user-signup.php", {
            username: "testuser",
            email: "test@rapptrlabs.com",
            password: "Test123"
        })
        .then(res => {
            console.log(res);
            setEmptyFields(false);
            setLoginSuccess();
            setSignupSuccess(true);
            setTimeout(() => {
                setIsSignUp(false);
            }, 1000);
        })
        .catch(err => {
            console.log(err);
            setEmptyFields(false);
            setLoginSuccess();
            setSignupSuccess(false);
            setTimeout(() => {
                setIsSignUp(false);
            }, 1000);
        });
    }

    return (
        <div className="login-page">
            <img
                className="login-background-img"
                src={gpc_loginBg}
                alt="city street in new york city"
            />
            <div className="login-content-overlay">
                <Link to="/">
                    <img 
                        className="rapptr-logo"
                        src={gpc_logo}
                        alt="rapptr labs logo"
                    />
                </Link>
                <div className="signup-login-indication">
                    <h3 
                        className={!isSignUp ? "remove-decoration" : ""}
                        onClick={() => {
                            setIsSignUp(true)
                            setEmptyFields(false)
                        }}
                    >
                        Sign Up
                    </h3>
                    <h3 
                        className={isSignUp ? "remove-decoration" : ""}
                        onClick={() => {
                            setIsSignUp(false) 
                            setEmptyFields(false)
                        }}
                    >
                        Login
                    </h3>
                </div>
                {
                    isSignUp ? 
                    <SignUpForm 
                        handleSubmit={handleSignup}
                        handleChange={handleSignupChange}
                        emptyFields={emptyFields}
                    /> :
                    <LoginForm 
                        handleSubmit={handleLogin}
                        handleChange={handleLoginChange} 
                        loginSuccess={loginSuccess} 
                        signupSuccess={signupSuccess}
                        emptyFields={emptyFields}
                    />
                }
            </div>
        </div>
    )
}