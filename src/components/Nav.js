import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/img_2/logo.png";
import LogOut from "./LogOut";
import MenuIcon from "@mui/icons-material/Menu";
//, setShowSignUp
const Nav = ({
  setShowIntro,
  setShowSignUp,
  setShowLogIn,
  showLogOut,
  showUpandIn,
  setShowUpandIn,
  setShowLogOut,
  setAuth,
  // setShowHome,
}) => {
  const handleIntroToAccessPremium = () => {
    setShowIntro(false);
    setShowLogIn(false);
    setShowSignUp(false);
  };
  const handleLogoClick = () => {
    setShowIntro(true);
    setShowSignUp(false);
    setShowLogIn(false);
  };
  const logInHandler = () => {
    setShowLogIn(true);
     setShowSignUp(false);
  };
  const signUpHandler = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  };

  const logOutHandler = () => {
     setShowIntro(false);
    setShowLogOut(false);
    setShowUpandIn(true);
    // setShowIntro(true);
    setAuth(false);
  };
  const homeHandler = () => {
    setShowLogIn(false);
    setShowIntro(false);
    
    // setShowHome(true);
  };

  return (
    <div>
      <header className="header_navigation">
        <button className="hamburger" id="hamburger">
          <MenuIcon />
        </button>
        <nav className="header_nav1">
          <Link to="/" onClick={handleLogoClick}>
            <img src={logo} alt="star wars logo" className="logo" />
          </Link>

          <div className="header_nav1_btn">
            {showUpandIn && (
              <>
                <button type="button" className="btn-1" onClick={logInHandler}>
                  LOG IN
                </button>
                <p>{"//"}</p>
                <button type="button" className="btn-2" onClick={signUpHandler}>
                  SIGN UP
                </button>
              </>
            )}
            {showLogOut && (
              <Link to="/home" onClick={logOutHandler}>
                <LogOut
                  setShowIntro={setShowIntro}
                  setShowUpandIn={setShowUpandIn}
                  setShowLogOut={setShowLogOut}
                  setAuth={setAuth}
                />
              </Link>
            )}
            {/* <Link to="/home" onClick={logOutHandler}>
              <li></li>
            </Link> */}
          </div>
        </nav>
        <nav className="header_nav2">
          <ul>
            <Link to="/home" onClick={homeHandler}>
              <li>HOME</li>
            </Link>
            {/*  this leads to Shipcards */}
            <Link to="/shipcards" onClick={handleIntroToAccessPremium}>
              <li>STARSHIPS</li>
            </Link>
            <Link to="/films" onClick={handleIntroToAccessPremium}>
              <li>Films</li>
            </Link>
            <Link to="/characters" onClick={handleIntroToAccessPremium}>
              <li>Characters</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
