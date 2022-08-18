import React from "react";
import {Link} from "react-router-dom"
import { navItems } from "./NavItems";
import Button  from "./Button";

function Navbar() {
    return(
        <>
            <nav className="navbar">
                <Link to ="/" className="navbar-logo">
                <img src='https://www.portnet.ma/sites/all/themes/portnet/images/new-logo2_fr.png' alt='logo' width="300"  margin-right="500px"/>
                </Link>
                <ul className="nav-items">
                    {navItems.map(item => {
                        return(
                        <li key={item.id} className={item.cName}>
                            <a href={item.path}>{item.title}</a>
                        </li>
                    );
                })}
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default Navbar;













/*
import React, { Component } from "react";
import {Link} from "react-router-dom"
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

class Header extends Component {
    render(){
    return(
        <div className="navbar rounded">
            <img src='https://gu.portnet.ma/portnet/imagenes/due/portnet_login.jpg' alt='logo' width="300"  margin-right="500px"/>
            <div className="links">
                <Link to="/"  style={{ color: 'inherit', textDecoration: 'inherit' }} >
                    <h1>The Team</h1>
                </Link>
            </div>
        </div>
    )
}
}
export default Header;
*/