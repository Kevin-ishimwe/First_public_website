import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Portfolio() {
  return (
    <div className="port_page" id="click">
      <h2 className="head_port">SKILLS</h2>
      <br></br>
      <p className="para_port">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi
        odio voluptatibus voluptatum at cum laboriosam? Quo eaqdue, placeat ea
        dolor, repellat corporis officia minus aliquam voluptatum saepe deserunt
        iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        architecto odio hic placeat quisquam pariatur eum distinctio mollitia
        itaque, reprehenderit corporis assumenda voluptatibus veniam cumque
        deleniti unde inventore enim maiores?
      </p>
      <br></br>
      <h2 className="head_port2">LANGUAGES</h2>
      <div className="main_port">
        <div className="port_skills">
          <div className="port_cont">
            <div className="skil_container">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={95} maxValue={100} text={"95%"} />;
              </div>
              <p className="para_skils">
                HTML5 <br></br>
                LEVEL: ADVANCED
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} maxValue={100} text={"87%"} />;
              </div>
              <p className="para_skils">
                CSS<br></br>
                LEVEL : ADVANCED
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} maxValue={100} text={"75%"} />;
              </div>
              <p className="para_skils">
                JAVASCRIPT <br></br>
                LEVEL: ADVANCED
              </p>
            </div>
          </div>
          <br></br>
          <h2 className="head_port2">LIBRARIES</h2>
          <br></br>
          <div className="port_cont">
            <div className="skil_container">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} maxValue={100} text={"65%"} />;
              </div>
              <p className="para_skils">
                REACT JS <br></br>
                LEVEL : INTERMEDIATE
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={66} maxValue={100} text={"80%"} />;
              </div>
              <p className="para_skils">
                BOOTSTRAP <br></br>
                LEVEL : ADVANCED
              </p>
            </div>
          </div>
          <br></br>
        </div>
        <div className="side_port">
          <p className="para2_port">for more info on what they are and do?</p>
          <ul>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank">
                HTML5
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank">
                CSS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank">
                JS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank">
                REACT JS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank">
                BOOTSTRAP
              </a>
            </li>
          </ul>
          <p className="para2_port">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            repellat odit nihil perferendis, hic obcaecati nostrum autem ipsam
            quos. Odit,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
