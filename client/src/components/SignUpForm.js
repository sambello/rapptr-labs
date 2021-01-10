import React from "react";

// Images
const ic_username = require('../public/ic_username@2x.png');
const ic_password = require('../public/ic_password@2x.png');
const ic_email = require('../public/ic_email@2x.png');

export default function SignUpForm({handleSubmit, handleChange, emptyFields}) {
    return (
        <form 
            className="signup-form"
            onSubmit={handleSubmit}
        >
            <div className="input-element">
                <img src={ic_username} alt="person logo"/>
                <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange}/>
            </div>
            {emptyFields && <p style={{color:"red", textAlign: "center"}}>Please create a username.</p>}

            <div className="input-element">
                <img src={ic_email} alt="email logo"/>
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}/>
            </div>
            {emptyFields && <p style={{color:"red", textAlign: "center"}}>Please enter a valid email.</p>}

            <div className="input-element">
                <img src={ic_password} alt="lock logo"/>
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange}/>
            </div>
            {emptyFields && <p style={{color:"red", textAlign: "center"}}>Please create a password.</p>}

            <button>SIGN UP</button>
        </form>
    )
}
