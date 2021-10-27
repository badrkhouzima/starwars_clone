import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ShipCards from "./components/ShipCards";
import ShipInfo from "./components/ShipInfo";
import ImageSlider from "./components/ImageSlider";
import HomeBody from "./components/HomeBody";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import GuardedRoute from "./components/GuardedRoute";
import PilotInfo from "./components/Pilots";
import LockedContent from "./components/LockedContent"
import Films from "./components/Films"
import Members from "./components/Members";
import Characters from "./components/Characters.js"

import styled from "styled-components"
const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showUpandIn, setShowUpandIn] = useState(true);
  //const [showHome, setShowHome] = useState(false);
  //const [isAutheticated, setIsAutheticated] = useState(false);
  const [auth, setAuth] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  //const [pilotName, setPilotName] = useState("");
  return (
    <Router>
      <Nav
        setShowUpandIn={setShowUpandIn}
        showUpandIn={showUpandIn}
        setShowIntro={setShowIntro}
        setShowSignUp={setShowSignUp}
        setShowLogIn={setShowLogIn}
        pageNum={pageNum}
        showLogOut={showLogOut}
        setShowLogOut={setShowLogOut}
        setAuth={setAuth}
      />
      {showIntro && (
        <Wrapper>
          <ImageSlider />
          <HomeBody />
        </Wrapper>
      )}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
      {showLogIn && (
        <LogIn
          setAuth={setAuth}
          setShowLogIn={setShowLogIn}
          setShowUpandIn={setShowUpandIn}
          setShowLogOut={setShowLogOut}
          setShowIntro={setShowIntro}
        />
      )}
      {/* {showLogOut && <LogOut setShowLogOut={setShowLogOut} />} */}
      <div className="App">
        <Route exact path="/" />
        <GuardedRoute
          path="/shipcards"
          auth={auth}
          setPageNum={setPageNum}
          pageNum={pageNum}
          component={ShipCards}
        />
        <GuardedRoute path="/films" auth={auth} component={Films} />
        <GuardedRoute
          path="/characters"
          auth={auth}
          component={Characters}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
        <Route path="/home" component={Home} />
        <Route path="/members" component={Members} />
        <Route
          path="/lockedcontent"
          render={() => <LockedContent setShowIntro={setShowIntro} />}
        />
        <Route path="/shipInfo" component={ShipInfo} />
        <Route path="/pilots" component={PilotInfo} />
      </div>
    </Router>
  );
};
export default App;

const Wrapper = styled.div`
  width: 100vw;
`