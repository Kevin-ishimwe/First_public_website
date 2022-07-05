import React from "react";
import { useState } from "react";

function Login() {
  const [divlogin, setdivlogin] = useState("login_option1");
  const [createpage, setcreatepage] = useState("create_account1");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [num_cred, setnum_cred] = useState(0);
  //helper functions
  let toCreatePage = () => {
    setdivlogin("login_option2");
    setcreatepage("create_account2");
  };
  let toLoginPage = () => {
    setdivlogin("login_option1");
    setcreatepage("create_account1");
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  let users = [
    {
      email: email,
      password: password,
    },
  ];

  const storeCredentials = () => {
    localStorage.setItem("users", JSON.stringify(users));
    setnum_cred(num_cred + 1);
  };
  const pastCredentials = JSON.parse(localStorage.getItem("users"));
  users.push(pastCredentials);

  return (
    <div className="landing">
      <div className="log_page" id="log_click">
        <div className="log_container">
          <div className={divlogin}>
            <h1 className="login_head">Member Login</h1>
            <div className="icon-profile">
              <i className="fas fa-user-circle" id="prof_icon"></i>
            </div>

            <div className="div_inputs">
              <i className="fa fa-envelope icon" id="icon_login"></i>
              <input type="text" placeholder=" E-mail"></input>
              <br></br>
              <i className="fa fa-key icon" id="icon_login"></i>
              <input type="password" placeholder="Password"></input>
            </div>
            <br></br>
            <button type="button" className="log_btn">
              Login
            </button>
            <a href="#holy_molly" className="log_tag_forgot_password">
              forgot password
            </a>

            <p className="para_create1">
              don't have an account?
              <a href="#holy_molly" className="log_tags" onClick={toCreatePage}>
                SIGN UP
              </a>
            </p>

            <br></br>
            <br></br>
          </div>
          {/* create account page
after div change */}
          <div className={createpage}>
            <h1 className="login_head">CREATE ACCOUNT</h1>
            <div className="icon-profile">
              <i className="fa fa-users" id="prof_icon"></i>
            </div>
            <div className="div_inputs">
              <label>Enter Your email</label>
              <input
                type="text"
                placeholder="example@gmail"
                onChange={emailHandler}
              ></input>
              <label>Enter Username</label>
              <input type="text" placeholder="username"></input>
              <label> Enter Password</label>
              <input
                type="password"
                placeholder="password"
                onChange={passwordHandler}
              ></input>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confim Password"></input>
            </div>
            <div className="terms">
              <input type="checkbox" id="check_terms"></input>
              <p className="para_create">
                by clicking the sign up button you agree to our
                <a href="hjfhuf" className="terms_tag">
                  terms of service
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="log_btn"
              onClick={storeCredentials}
            >
              Sign up
            </button>
            <p className="para_create1">
              have an account?
              <a href="#holy_molly" className="log_tags" onClick={toLoginPage}>
                Login
              </a>
            </p>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
