import "../App.css";
import "./About.css";
import React from "react";
import { GiCook } from 'react-icons/gi';
import { MdMenuBook } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

function About() {

    return (
        <div>
            <div className="head-topic">
                <p>- About Us -</p>
            </div>
            <div className="about-con">
                <div className="about-text">
                    <GiCook size={30} color="#C4C4C4" />
                    <p>CookCook is a website that offers Thai recipes from all regions of Thailand with illustrations for every menu</p>
                </div>
                <div className="about-text">
                    <MdMenuBook size={30} color="#C4C4C4" />
                    <p>Every menus is according to the recipe from the real Thai people. Aetails of ingredients. And how to do it completely.</p>
                </div>
                <div className="about-text">
                    <CgWebsite size={30} color="#C4C4C4" />
                    <p>When you visit our website You will find a friendly website with a beautiful and modern user interface.</p>
                </div>
            </div>
        </div>
    )
}

export default About;