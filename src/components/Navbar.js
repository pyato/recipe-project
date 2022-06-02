import "./Navbar.css"
import React, { useState } from "react";
import { CgMenu } from 'react-icons/cg';

function Navbar() {
    const [menuMobile, setMenuMobile] = useState(false);

    return (
        <div className="Navbar-con" >
            <div className="logo">
                <a href="#">CookCook</a>
            </div>
            <ul className={menuMobile? "menu activate" : "menu" }>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Contact</a></li>   
            </ul>
            <div className="mobile-menu" onClick={() => setMenuMobile(!menuMobile)}>
                <CgMenu />
            </div>
        </div>
    )
}

export default Navbar;