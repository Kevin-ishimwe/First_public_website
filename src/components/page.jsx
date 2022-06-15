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
          <center>jr.dev ISHIMWE Kevin</center>
        </h1>

        <center>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias
            temporibus beatae commodi fugit, nesciunt voluptas minima<br></br>
            impedit quod adipisci? Rerum, perspiciatis earum error in accusamus
            aspernatur quibusdam amet quas.
            <span id="last_line">
              for more information on click on any of the buttons below
            </span>
          </p>
        </center>
        <div className="buttons_container">
          <button className="first_btn">MY SKILLS ^</button>
          <a href="www.work.com" className="a_btn" target="_blank">
            <button className="second_btn"> HIRE ME </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Page;
