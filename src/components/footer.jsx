import React, { Component } from "react";

class Footer extends Component {
  state = {
    ADRESS: ["RWANDA", "KIGALI", "NYARUGENGE", "P.O Box 765"],
    pers: [
      "ISHIMWE KEVIN",
      "MBA in ETE",
      "E-mail:",
      "ishimwekevin45@gmail.com",
      "tel:+250787882105",
    ],
    community: ["Support", "Help"],
  };
  render() {
    return (
      <div className="footer">
        <div className="divul">
          <ul className="ulfooter">
            <h3 className="h3footer">ADDRESS</h3>
            {this.state.ADRESS.map((over) => (
              <li className="footli" key={over}>
                {over}
              </li>
            ))}
          </ul>
          <ul className="ulfooter">
            <h3 className="h3footer">PERSONAL INFO</h3>
            <br></br>
            {this.state.pers.map((newli) => (
              <li className="footli" key={newli}>
                {newli}
              </li>
            ))}
          </ul>
          <ul className="ulfooter">
            <h3 className="h3footer">COMMUNITY</h3>
            <br></br>
            {this.state.community.map((comm) => (
              <li className="footli" key={comm}>
                {comm}
              </li>
            ))}
          </ul>
          <ul className="ulfooter">
            <h3 className="h3footer">FOLLOW US</h3>
            <div className="icons">
              <a href="#socials" className="a_footer">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#socials" className="a_footer">
                <i class="fab fa-android"></i>
              </a>
              <a href="#socials" className="a_footer">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#socials" className="a_footer">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="#socials" className="a_footer">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
