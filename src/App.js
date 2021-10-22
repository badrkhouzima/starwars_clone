import React,{useState} from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ShipCards from "./components/ShipCards";
import ShipInfo from "./components/ShipInfo";
import ImageSlider from "./components/ImageSlider"
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import GuardedRoute from "./components/GuardedRoute";
//setShowSignUp={setShowSignUp}
const App=()=> {
 const [showIntro, setShowIntro] = useState(true);
 const [showSignUp, setShowSignUp] = useState(false);

 const [showLogIn, setShowLogIn] = useState(false);
 //const [isAutheticated, setIsAutheticated] = useState(false);
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <Nav
        setShowIntro={setShowIntro}
        setShowSignUp={setShowSignUp}
        setShowLogIn={setShowLogIn}
      />
      {showIntro && <ImageSlider />}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
      {showLogIn && <LogIn setAuth={setAuth} setShowLogIn={setShowLogIn} />}
      <div className="App">
        <Route exact path="/" />
        <Route path="/home" component={Home} />
        {/* <Route path="/" component={Home} /> */}
        <GuardedRoute
          path="/starships?=page"
          component={ShipCards}
          auth={auth}
          // loading={loading}
        />
        {/* <GuardedRoute path='/protected' component={Protected} auth= {isAutheticated} /> */}
        <Route path="/shipInfo" component={ShipInfo} />
      </div>
    </Router>
  );
}

export default App;
