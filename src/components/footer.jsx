import React, { Component } from "react";

class Footer extends Component {
  state = {
    ADRESS: ["Rwanda", "Kigali", "P.O Box 765"],
    pers: ["E-mail:", "tel:+250787882105", "ishimwekevin45@gmail.com"],
    community: ["Support", "Help", "associates"],
  };
  render() {
    return (
      <div className="footer">
        <div className="headfoot">
          <h3 className="h3footer">
            join my personal news letter to receive updates
          </h3>
          <p className="para2_port">you can subscribe at any time</p>
          <div className="subscribe">
            <input type="text" className="input_foot"></input>
            <button id="foot_btn">subscribe</button>
          </div>
        </div>

        <div className="divulfoot">
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
            {this.state.pers.map((newli) => (
              <li className="footli" key={newli}>
                {newli}
              </li>
            ))}
          </ul>
          <ul className="ulfooter">
            <h3 className="h3footer">COMMUNITY</h3>
            {this.state.community.map((comm) => (
              <li className="footli" key={comm}>
                {comm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
