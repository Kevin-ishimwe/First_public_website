import React from "react";
import { Link } from "react-scroll";
import Portfolio from "./portfolio";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-animated-slider/build/horizontal.css";
import { useEffect } from "react";

function Page() {
  const slides = ["ITS EASY", "ITS  CHEAP", "REACH OUT"];
  const [first, setfirst] = useState("ITS EASY");
  /*custom made text box slider */
  useEffect(() => {
    setTimeout(() => {
      setfirst(slides[1]);
      console.log(slides[1]);
    }, 5000);
    setTimeout(() => {
      setfirst(slides[2]);
      console.log(slides[2]);
    }, 10000);
  }, []);

  return (
    <React.Fragment>
      <div className="landing">
        <div className="intro_main">
          <center>
            <h1 className="head_main">
              <center>
                <span id="head_top"> jr.dev ISHIMWE Kevin</span>
              </center>
              <br></br>
              "HIRE A FRONT END WEB DEVELOPER"
              <br></br>
              <span id="slide_text">{first}</span>
            </h1>
          </center>

          <center>
            <p className="paragraph_page">
              Lorem ipsum dolor sit amet adipisicing elit. Eius alias temporibus
              beatae commodi fugit, nesciunt voluptas minima
              <br></br>
              impedit quod adipisci? Rerum, perspiciatis earum error in
              accusamus aspernatur quibusdam amet quas.
              <span id="last_line">
                for more information on click on any of the buttons below
              </span>
            </p>
          </center>
          <div className="buttons_container">
            <button className="first_btn">MY SKILLS</button>
            <a href="www.work.com" className="a_btn" target="_blank">
              <button className="second_btn"> HIRE ME </button>
            </a>
          </div>
          <br></br>

          <center>
            <button className="fa_down_btn ">
              <Link to="click" spy={true} smooth={true}>
                <i className="fa fa-angle-down " id="i_btn"></i>
              </Link>
            </button>
          </center>
        </div>
      </div>
      <Portfolio />
    </React.Fragment>
  );
}

export default Page;
