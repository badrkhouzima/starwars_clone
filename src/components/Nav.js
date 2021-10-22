import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/img_2/logo.png";

//, setShowSignUp
const Nav = ({ setShowIntro, setShowSignUp, setShowLogIn }) => {
  const handleClickOff = () => {
    setShowIntro(false);
  };
  const handleLogoClick = () => {
    setShowIntro(true);
    setShowSignUp(false);
    setShowLogIn(false);
  };
  const logInHandler = () => {
    setShowLogIn(true);
  };
  const signUpHandler = () => {
    setShowSignUp(true);
  };

  return (
    <div>
      <header className="header_navigation">
        <nav className="header_nav1">
          <Link to="/" onClick={handleLogoClick}>
            <img src={logo} alt="star wars logo" className="logo" />
          </Link>
          <div className="header_nav1_btn">
            <button type="button" className="btn-1" onClick={logInHandler}>
              LOG IN
            </button>
            <p>{"//"}</p>
            <button type="button" className="btn-2" onClick={signUpHandler}>
              SIGN UP
            </button>
          </div>
        </nav>
        <nav className="header_nav2">
          <ul>
            <Link to="/home">
              <li>HOME</li>
            </Link>
            {/*  this leads to Shipcards */}
            <Link to="/starships?=page" Click={handleClickOff}>
              <li>STARSHIPS</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
