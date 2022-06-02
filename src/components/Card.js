import "./Card.css";
import React from "react";

function Card({ region, regionIMG }) {

    return (
        <div className="card-con">
            <div>
                <img src={regionIMG}/>
                <div>{region}</div>
            </div>
        </div>
    )
}

export default Card;