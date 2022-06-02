import "../App.css";
import "./Popular.css";
import React, { useEffect, useState } from "react";
import popular1 from "../images/popular1.jpg";
import popular2 from "../images/popular2.jpg";
import popular3 from "../images/popular3.jpg";
import popular4 from "../images/popular4.jpg";

function Popular() {
    const [radioActive, setRadioActive] = useState(0);

    useEffect(() => {
        const intervalRadio = setInterval(() => {
            setRadioActive((e) => ++e % 5);
        }, 4000)

        return () => clearInterval(intervalRadio)
    }, [])

    return (
        <div>
            <div className="head-topic">
                <p>- Popular Menu -</p>
            </div>
            <div className="popular-con">
                <div className="popular-slide">

                    <input type="radio" value={1} checked={radioActive == 1} onChange={(e) => { setRadioActive(e.target.value) }} id="radio1" />
                    <input type="radio" value={2} checked={radioActive == 2} onChange={(e) => { setRadioActive(e.target.value) }} id="radio2" />
                    <input type="radio" value={3} checked={radioActive == 3} onChange={(e) => { setRadioActive(e.target.value) }} id="radio3" />
                    <input type="radio" value={4} checked={radioActive == 4} onChange={(e) => { setRadioActive(e.target.value) }} id="radio4" />

                    <img src={popular1} className="first" />
                    <img src={popular2} />
                    <img src={popular3} />
                    <img src={popular4} />

                    <div className="radio-menus">
                        <label for="radio1" className="radio-bth"></label>
                        <label for="radio2" className="radio-bth"></label>
                        <label for="radio3" className="radio-bth"></label>
                        <label for="radio4" className="radio-bth"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;