// file ka name same component jaisa rkhenge
// data aur link hardcore links jo fiexdn link hai unhe rkhnege utils.jsmein

import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="nav-items">
        <img className="logo-img" src={LOGO_URL} alt="Logo" />

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
// export default Header; direct bhi export kar skte hai
// export Header wah import krenege import  curly bracket fir Header jaise-->import {Header}
