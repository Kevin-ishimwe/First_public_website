import React, { Component } from "react";
class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="log_container">
          <h1 className="login_head">Member Login</h1>
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
          <a href="#holy_molly" className="log_tags">
            forgot password
          </a>
          <h3 className="h3_login">
            <a href="#holy_molly" className="log_tags">
              SIGN UP
            </a>
          </h3>
          <br></br>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
