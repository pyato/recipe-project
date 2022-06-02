import "../App.css";
import "./Search.css";
import React from "react";
import Card from "./Card";
import northern from "../images/northern.jpg";
import central from "../images/central.jpg";
import northeastern from "../images/northeastern.jpg";
import southern from "../images/southern.jpg";

function Search() {

    return (
        <div className="footer-topic">
            <div className="search-text">
                <input type="text" placeholder="Search..."></input>
            </div>
            <div className="search-bth-con">
                <div>
                    <Card region="Northern" regionIMG={northern} />
                </div>
                <div>
                    <Card region="Central" regionIMG={central} />
                </div>
                <div>
                    <Card region="Northeastern" regionIMG={northeastern} />
                </div>
                <div>
                    <Card region="Southern" regionIMG={southern} />
                </div>
            </div>
        </div>
    )
}

export default Search;