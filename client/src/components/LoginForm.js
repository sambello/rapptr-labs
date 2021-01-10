import React from "react";

// Images
const ic_email = require('../public/ic_email@2x.png');
const ic_password = require('../public/ic_password@2x.png');

export default function LoginForm({handleSubmit, handleChange, loginSuccess, signupSuccess, emptyFields}) {
    // Login validation
    var loginStatus;
    if (loginSuccess) {
        loginStatus = <p style={{color:"#2FCBFC", textAlign: "center"}}>
            Login Successful!
        </p>
    } else if (loginSuccess === false) {
        loginStatus = <p style={{color:"red", textAlign: "center"}}>
            Login Failed
        </p>
    }

    // Signup validation
    var signupStatus;
    if (signupSuccess) {
        signupStatus = <p style={{color:"#2FCBFC", textAlign: "center"}}>
            Successfully Signed Up!
        </p>
    } else if (signupSuccess === false) {
        signupStatus = <p style={{color:"red", textAlign: "center"}}>
            Sign Up Failed
        </p>
    }

    return (
        <form 
            className="signup-form"
            onSubmit={handleSubmit}
        >
            <div className="input-element">
                <img src={ic_email} alt="email logo"/>
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}/>
            </div>
            {emptyFields && <p style={{color:"red", textAlign: "center"}}>Please enter your email.</p>}
            <div className="input-element">
                <label for="username">
                    <img src={ic_password} alt="lock logo"/>
                </label>
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}/>
            </div>
            {emptyFields && <p style={{color:"red", textAlign: "center"}}>Please enter your password.</p>}
            {loginStatus}
            {signupStatus}
            <button>LOGIN</button>
        </form>
    )
}
