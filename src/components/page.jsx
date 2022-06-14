import React, { Component } from "react";
import kelly from "./kelly.jpg";
class Page extends Component {
  state = {
    imageurl:
      "file:///C://Users//kev//Pictures//Screenshots//IMG_20220401_121210.jpg",
  };
  render() {
    return (
      <div className="intro_main">
        <h1 className="head_main">
          HIRE FRONT-END WEB DEVELOPER
          <center>
            {" "}
            <img src={kelly} alt=" cant be displayed"></img>
          </center>
          <br></br>
          <span id="last_line">beginner developer ISHIMWE KEVIN</span>
        </h1>

        <p>
          get your moneys worth,hire me as your front end guy and you wont have
          to worry about your website<br></br>
          <span id="last_line">
            for more information on click on any of the buttons below
          </span>
        </p>
        <div className="buttons_container">
          <button className="first_btn">Learn More</button>
          <a href="/portfolio" className="a_btn">
            <button className="second_btn"> Get Started</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Page;
