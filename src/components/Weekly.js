import "../App.css";
import "./Weekly.css";
import React from "react";
import weekly from "../images/weekly.jpg";

function Weekly() {

    return (
        <div className="footer-topic">
            <div className="head-topic">
                <p>- Weekly Menu -</p>
            </div>
            <div className="weekly-con">
                <img src={weekly} />
                <div className="weekly-text">
                    <p>KHAO SOI</p>
                    <p>Rich, creamy, and packed with uncompromising flavor from a slew of aromatics and shrimp paste, this classic Northern Thai soup combines tender braised chicken in a coconut-y curry broth with boiled and fried noodles. Our version is the real deal, straight from the streets of Chiang Mai.</p>
                </div>
            </div>
        </div>
    )
}

export default Weekly;