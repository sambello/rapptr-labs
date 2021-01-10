import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

// Style sheet
import "../styles/Landing.css";

// Components
import AppLink from "../components/AppLink";
import Footer from "../components/Footer";

// Images
const gpc_hero_image = require('../public/gpc_hero_image@2x.png');
const gpc_logo = require('../public/gpc_logo@2x.png');
const movo_logo = require('../public/logo_movo@2x.png');
const gotenna_logo = require('../public/logo_goTenna@2x.png');
const tapping_logo = require('../public/logo_tappingSolution@2x.png');
const conair_logo = require('../public/logo_conair@2x.png');

/*  STILL TO DO:
    - Post request to newsletter subscription endpoint 
*/

export default function Landing() {
    // State
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState(""); // For email validation

    var emailValidation;
    if (emailStatus === "success") {
        emailValidation = <p style={{color:"#2FCBFC", textAlign: "center"}}>Subscription successful!</p>;
    } else if (emailStatus === "empty") {
        emailValidation = <p style={{color:"red", textAlign: "center"}}>Please enter a valid email address.</p>
    } else if (emailStatus === "server response error"){
        emailValidation = <p style={{color:"red", textAlign: "center"}}>Server error. Subscription failed.</p>
    }

    // Event Handlers
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email === "") {
            return setEmailStatus("empty");
        }

        axios.post("", {
            email: e.target.value
        })
        .then(res => {
            console.log(res);
            setEmailStatus("success");
        })
        .catch(err => {
            console.log(err);
            setEmailStatus("server response error");
        });

        // return setEmailStatus("success");
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="landing-page">
            <div className="landing-header">
                <img
                    className="header-background-image"
                    src={gpc_hero_image}
                    alt="city buildings and street sign"
                />
                <div className="header-content-overlay">
                    <Link to="/login" className="login-button">
                        Login
                    </Link>
                    <img 
                        className="header-logo"
                        src={gpc_logo}
                        alt="Rapptr Labs logo"
                    />
                    <h2 className="agency-title">
                        APP DESIGN & DEVELOPMENT AGENCY
                    </h2>
                </div>
            </div>
            <div className="rapptr-description">
                <h2 className="who-we-are">
                    WHO WE ARE
                </h2>
                <div className="description-paragraphs">
                    <p>
                        Rapptr Labs is a Jersey City-basedapp development firm that works with Fortune 500 
                        brands, leading retailers, funded startups, and more to craft digital products and strategies
                        that solve business problems and drive measurable results.
                    </p>
                    <br />
                    <p>
                        We're part of your team. That means working together to meet the business challenges you face.
                        From iOS and Android to emerging technologies like VR, AR, and wearables, we do whatever it takes
                        to help you thrive in in today's - and tomorrow's - digital ecosystem.
                    </p>
                </div>
            </div>
            <div className="our-apps">
                <h2>OUR APPS</h2>
                <div className="app-links">
                    {/* condense these with a map */}
                    <AppLink
                        img={movo_logo}
                        appName="Movo"
                        link="https://movo.me/"
                    />
                    <AppLink
                        img={conair_logo}
                        appName="Conair WeightWatchers"
                        link="https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt="
                    />
                    <AppLink
                        img={tapping_logo}
                        appName="Tapping Solution"
                        link="https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=8"
                    />
                    <AppLink
                        img={gotenna_logo}
                        appName="goTenna"
                        link="https://www.gotenna.com"
                    />
                </div>
            </div>
            <div className="newsletter-subscription">
                <h2>
                    SUBSCRIBE TO NEWSLETTER
                </h2>
                <form 
                    className="subscription-email-input"
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={email} 
                        onChange={handleChange}
                    />
                    <button 
                        className="subscribe-button"
                    >
                        SUBSCRIBE
                    </button>
                </form>
                {emailValidation}
            </div>
            <Footer />
        </div>
    )
}