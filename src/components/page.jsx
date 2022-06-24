import React from "react";
import { Link } from "react-scroll";
import Portfolio from "./portfolio";
import { useState } from "react";
import { useEffect } from "react";
import Services from "./services";

function Page() {
  const [first, setfirst] = useState("ITS EASY");
  /*custom made text box slider */
  useEffect(() => {
    const slides = ["ITS EASY", "ITS  CHEAP", "REACH OUT"];

    setTimeout(() => {
      setfirst(slides[1]);
    }, 5000);
    setTimeout(() => {
      setfirst(slides[2]);
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
          <div className="icons" id="nav_icons">
            <a href="#socials">
              <i class="fab fa-instagram" id="social_icons"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-linkedin" id="social_icons"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-facebook" id="social_icons"></i>
            </a>
            <a href="#socials">
              <i class="fa-brands fa-youtube" id="social_icons"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-twitter" id="social_icons"></i>
            </a>
          </div>
          <center>
            <p className="paragraph_page">
              A Front-End Developer is someone who creates website and web
              applications for businesses and individuals.
              <br></br>
              The Front-End Developer creates things that the user sees and
              interacts with,using programming languages,libaries and different
              devtools.
              <span id="last_line">
                for more information on click on any of the buttons below
              </span>
            </p>
          </center>
          <div className="buttons_container">
            <button className="first_btn">
              <Link to="click" spy={true} smooth={true}>
                <a className="a_btn">MY SKILLS</a>
              </Link>
            </button>
            <a href="www.work.com" className="a_btn" target="_blank">
              <button className="second_btn"> HIRE ME </button>
            </a>
          </div>
          <br></br>

          <center>
            <button className="fa_down_btn ">
              <Link to="services" spy={true} smooth={true}>
                <i className="fa fa-angle-down " id="i_btn"></i>
              </Link>
            </button>
          </center>
        </div>
      </div>
      <Services />
      <Portfolio />
    </React.Fragment>
  );
}

export default Page;
