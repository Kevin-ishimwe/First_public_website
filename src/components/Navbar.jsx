import React from "react";
import { Component } from "react";

class Navbar extends Component {
  state = {
    bars: "ulnav",
    counter: 1,
    obJ: document.querySelector(".bars"),
    bars_rotate: "fas fa-bars",
  };

  threeBars = () => {
    if (this.state.counter % 2 !== 0) {
      this.setState({ bars: "show_nav" });
      this.setState({ bars_rotate: "fa-solid fa-xmark" });
    } else {
      this.setState({ bars: "ulnav" });
      this.setState({ bars_rotate: "fas fa-bars" });
    }
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };
  render() {
    return (
      <div className="navdiv">
        <h1 className="navhead">PORTFOLIO</h1>
        <ul className={this.state.bars}>
          <li className="navli">
            <a className="headtags" href="/">
              HOME
            </a>
          </li>
          <li className="navli">
            <a className="headtags" href="/Login">
              LOGIN
            </a>
          </li>
          <li className="navli">
            <a className="headtags" href="/home">
              PROJECTS
            </a>
          </li>
          <li className="navli">
            <a className="headtags" href="id">
              SERVICES
            </a>
          </li>
          <li className="navli">
            <a className="headtags" href="/footer">
              ABOUT
            </a>
          </li>

          <div className="icons" id="nav_icons">
            <a href="#socials">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#socials">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#socials">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </ul>
        <div className="btn-container">
          <button className="bars" onClick={this.threeBars}>
            <i class={this.state.bars_rotate} id="btn_bars"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
