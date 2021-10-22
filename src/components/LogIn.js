import React, { useState } from "react";
import logo from "../assets/img_2/logo.png";
import "./LogIn.css";

const LogIn = ({ setAuth, setShowLogIn }) => {
  const [email, setEmail] = useState("");
  const [passWordValue, setPassWordValue] = useState("");
  const [showErrorEmail, setShowErrorEmail] = useState("");
  const [showErrorPassWord] = useState("");

  const handleLogin = (data) => {
    data.preventDefault();
    //check if the email is valid
    const checkEmail = () => {
      let valid = false;
      const emailL = email.trim();
      if (!isRequired(emailL)) {
        setShowErrorEmail("Email cannot be blank.");
      } else if (!isEmailValid(email)) {
        setShowErrorEmail("Email is not valid.");
      } else {
        setShowErrorEmail(email);
        valid = true;
      }
      return valid;
    };
    const isEmailValid = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const isRequired = (value) => (value === "" ? false : true);

    const isThisEmailValid = checkEmail();
    // if email is valid we check if email and pssword match we it s storaged in local storage
    if (isThisEmailValid) {
      const dataX = JSON.parse(localStorage.getItem("signups"));
      const getArray = dataX.filter(
        (ele) =>
          ele["pass-word"].passWord === passWordValue && ele["e-mail"] === email
      );
      // if password and email match we will get one object in our array the we unlock the auth and the logging dissapear
      if (isThisEmailValid && getArray.length === 1) {
        console.log("success");
        setAuth(true);
        setShowLogIn(false);
      }
    }

    console.log("failed ....");
  };

  return (
    <div className="signup_container">
      <form onSubmit={handleLogin}>
        <img
          style={{ width: " 100px", height: "60px", padding: "10px" }}
          src={logo}
          alt=""
        />
        <h1>SIGN IN</h1>
        <div className="signUp_inputs">
          <dir>
            <input
              label="Email"
              name="email"
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <dir>{showErrorEmail}</dir>
          </dir>
          <div>
            <input
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassWordValue(e.target.value)}
            />
            <dir>{showErrorPassWord}</dir>
          </div>
        </div>

        <button>Log In</button>
        <p>Already have an account? Sign In</p>
      </form>
    </div>
  );
};
export default LogIn;

// &&
//       email in localStorage &&
//       passWordValue in localStorage
