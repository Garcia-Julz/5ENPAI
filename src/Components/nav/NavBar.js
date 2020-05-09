import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Assets/5ENPAI_Logo_home_.png'
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="logo container">
          <div className="w3-display-topleft w3-padding-large w3-xlarge" style={{"display" : "flex", "color" : "white"}}>
            <img src={Logo} style={{"width" : "26%", "margin-left" : "3%"}}/>
            5ENPAI
          </div>
        </div>
        <ul className="w3-display-topright w3-padding-large w3-xlarg" style={{"display" : "flex", "color" : "white", "list-style" : "none"}}>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;