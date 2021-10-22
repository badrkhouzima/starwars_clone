import React, { useState } from "react";
//import useLocalStorage from "../hooks/useLocalstorage";
import logo from "../assets/img_2/logo.png";
import "./SignUp.css";
const getDatafromLS = () => {
  const data = localStorage.getItem("signups");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const SignUp = (props) => {
  const [signups] = useState(getDatafromLS());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [passWordValue, setPassWordValue] = useState({
    passWord: "",
    showPassWord: false,
  });
  const [showErrorFn, setShowErrorFn] = useState("");
  const [showErrorLn, setShowErrorLn] = useState("");
  const [showErrorEmail, setShowErrorEmail] = useState("");
  const [showErrorDn, setShowErrorDn] = useState("");
  const [showErrorPassWord, setShowErrorPassWord] = useState("");
  //  useEffect(() => {
  //  }, [signups]);
  const handleSubmit = (data) => {
    data.preventDefault();
    let signup = {
      "first-name": firstName,
      "last-name": lastName,
      "e-mail": email,
      "display-name": displayName,
      "pass-word": passWordValue.passWord,
    };
    //validate  first name
    const checkFirstname = () => {
      let valid = false;
      const min = 3,
        max = 10;
      const username = firstName.trim();
      if (!isRequired(username)) {
        setShowErrorFn("Username cannot be blank.");
      } else if (!isBetween(username.length, min, max)) {
        setShowErrorFn(
          `Username must be between ${min} and ${max} characters.`
        );
      } else {
        setShowErrorFn(firstName);
        valid = true;
      }
      return valid;
    };
    // validate last name
    const checkLastname = () => {
      let valid = false;
      const min = 3,
        max = 10;
      const username = lastName.trim();
      if (!isRequired(username)) {
        setShowErrorLn("Username cannot be blank.");
      } else if (!isBetween(username.length, min, max)) {
        setShowErrorLn(
          `Username must be between ${min} and ${max} characters.`
        );
      } else {
        setShowErrorLn(lastName);
        valid = true;
      }
      return valid;
    };
    //validate email
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
    // check display name validation
    const checkDisplayname = () => {
      let valid = false;
      const min = 3,
        max = 10;
      const username = displayName.trim();
      if (!isRequired(username)) {
        setShowErrorDn("Username cannot be blank.");
      } else if (!isBetween(username.length, min, max)) {
        setShowErrorDn(
          `Username must be between ${min} and ${max} characters.`
        );
      } else {
        setShowErrorDn(displayName);
        valid = true;
      }
      return valid;
    };
    // check password validation
    const checkPassword = () => {
      let valid = false;
      const password = passWordValue.passWord.trim();
      if (!isRequired(password)) {
        setShowErrorPassWord("Password cannot be blank.");
      } else if (!isPasswordSecure(password)) {
        setShowErrorPassWord(
          "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
        );
      } else {
        // setShowErrorPassWord(passwordEl);
        valid = true;
      }
      return valid;
    };
    //setShowErrorPassWord;
    const isEmailValid = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    const isPasswordSecure = (password) => {
      const re = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      return re.test(password);
    };
    const isRequired = (value) => (value === "" ? false : true);
    const isBetween = (length, min, max) =>
      length < min || length > max ? false : true;

    let isFisrtNameValid = checkFirstname(),
      isLastNameValid = checkLastname(),
      isThisEmailValid = checkEmail(),
      isDisplayNameValid = checkDisplayname(),
      isPassWordIsValid = checkPassword();
    let isTheFormValid =
      isFisrtNameValid &&
      isLastNameValid &&
      isThisEmailValid &&
      isDisplayNameValid &&
      isPassWordIsValid;
    if (isTheFormValid) {
      localStorage.setItem("signups", JSON.stringify([...signups, signup]));
      setFirstName("");
      setLastName("");
      setEmail("");
      setDisplayName("");
      setPassWordValue({ passWord: "", showPassWord: false });
      props.setShowSignUp(false);
    } 
   
  };

  const showPassWordHandle = () => {
    setPassWordValue({
      ...passWordValue,
      showPassWord: !passWordValue.showPassWord,
    });
  };

  return (
    <div className="signup_container">
      <form onSubmit={handleSubmit}>
        <img
          style={{ width: " 100px", height: "60px", padding: "10px" }}
          src={logo}
          alt=""
        />
        <h1>CREATE YOUR ACCOUNT</h1>
        <div className="signUp_inputs">
          <div className="form-field">
            <input
              label="First Name"
              value={firstName}
              name="firstName"
              type="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div style={{ color: "red", display: "block", fontSize: "10px" }}>
              {showErrorFn}
            </div>
          </div>
          <div className="form-field">
            <input
              label="Last Name"
              name="lastName"
              value={lastName}
              type="text"
              placeholder="First Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div style={{ color: "red", display: "block", fontSize: "10px" }}>
              {showErrorLn}
            </div>
          </div>
          <div className="form-field">
            <input
              label="Email"
              name="email"
              value={email}
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ color: "red", display: "block", fontSize: "10px" }}>
              {showErrorEmail}
            </div>
          </div>
          <div className="form-field">
            <input
              label="Display Name"
              name="displayName"
              value={displayName}
              type="text"
              placeholder="Display Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <div style={{ color: "red", display: "block", fontSize: "10px" }}>
              {showErrorDn}
            </div>
          </div>
          <p className="display_info">
            New display names need to be approved. Until then, you'll see a
            temporary display name.
          </p>
          <div className="form-field">
            <input
              label="Password"
              name="password"
              type={passWordValue.showPassWord ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setPassWordValue({ ...passWordValue, passWord: e.target.value })
              }
            />
            <div style={{ color: "red", display: "block", fontSize: "10px" }}>
              {showErrorPassWord}
            </div>
          </div>
        </div>
        <div className="checkbox_div">
          <input
            className="checkbox"
            type="checkbox"
            id="p1"
            onClick={showPassWordHandle}
          />
          <label htmlFor="p1">Show password</label>
        </div>
        <div className="checkbox_emailAproval">
          <input type="checkbox" id="p2" />
          <label htmlFor="p2">
            Yes! I would like to receive by email special offers and updates
            about Lucasfilm Ltd. and other products and services from The Walt
            Disney Family of Companies.
          </label>
        </div>
        <p>
          By creating an account, you agree to our Terms of Use and acknowledge
          that you have read our Privacy Policy, Cookies Policy and EU Privacy
          Rights. More...
        </p>
        <p>My home country/region: Spain. Change.</p>
        <button>Create Account</button>
        <p>Already have an account? Sign In</p>
      </form>
    </div>
  );
};
export default SignUp;

// component={CustomInput}
// validator={[requiredValidator, emailValidator]}
