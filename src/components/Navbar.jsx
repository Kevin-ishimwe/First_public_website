import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
class Navbar extends Component {
  state = {
    bars: "ulnav",
    counter: 1,
    obJ: document.querySelector(".bars"),
    bars_rotate: "fas fa-bars",
    scrolling: "false",
    divnav: "navdiv",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = (event) => {
    if (window.scrollY !== 0) {
      this.setState({ divnav: "div_color" });
      console.log("scrooled");
    } else if (window.scrollY === 0) {
      this.setState({ divnav: "navdiv" });
    }
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
        <h1 className="navhead">
          KVN <i className="fab fa-centercode"></i>
        </h1>
        <ul className={this.state.bars}>
          <li className="navli">
            <a className="headtags" href="/">
              HOME
            </a>
          </li>
          <li className="navli">
            <NavLink to={"/login"} spy={true} smooth={true}>
              LOGIN
            </NavLink>
          </li>
          <li className="navli">
            <a className="headtags" href="/home">
              PROJECTS
            </a>
          </li>
          <li className="navli">
            <NavLink to={"/services"} spy={true} smooth={true}>
              SERVICES
            </NavLink>
          </li>
          <li className="navli">
            <a className="headtags" href="/footer">
              ABOUT
            </a>
          </li>
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
