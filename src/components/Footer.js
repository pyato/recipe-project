import "../App.css";
import "./Footer.css";
import React from "react";

function Footer() {

    return (
        <div className="footer-img">
            <div className="footer-bg">
                <div className="footer-text-con footer-topic">
                    <div className="footer-logo">
                        <p>CookCook</p>
                    </div>
                    <div>
                        <p>Our Services</p>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Popular</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p>Contact Us</p>
                        <ul>
                            <li>cookcook.com</li>
                            <li>cookcook</li>
                            <li>cookcook@gmail.com</li>
                            <li>+91 9999 999 999</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;