import React from "react";
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
        architecto odio hic placeat quisquam pariatur eum distinctio molliti
        itaque, reprehenderit corporis assumenda voluptatibus veniam cumque
        deleniti unde inventore enim maiores? login
      </p>
      <div></div>
      <h2 className="head_port2">LANGUAGES</h2>
      <div className="main_port">
        <div className="port_skills">
          <div className="port_cont">
            <div className="skil_container">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background_color: "red",
                }}
              >
                <CircularProgressbar value={95} maxValue={100} text={"95%"} />;
              </div>
              <p className="para_skils">
                HTML5 <br></br>
                LEVEL: ADVANCED
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: "100%", height: "100%" }}>
                <CircularProgressbar value={66} maxValue={100} text={"87%"} />;
              </div>
              <p className="para_skils">
                CSS<br></br>
                LEVEL : ADVANCED
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: "100%", height: "100%" }}>
                <CircularProgressbar value={66} maxValue={100} text={"75%"} />;
              </div>
              <p className="para_skils">
                JAVASCRIPT <br></br>
                LEVEL: ADVANCED
              </p>
            </div>
          </div>
          <h2 className="head_port2">LIBRARIES</h2>
          <div className="port_cont">
            <div className="skil_container">
              <div style={{ width: "100%", height: "100%" }}>
                <CircularProgressbar value={66} maxValue={100} text={"65%"} />;
              </div>
              <p className="para_skils">
                REACT JS <br></br>
                LEVEL : INTERMEDIATE
              </p>
            </div>
            <div className="skil_container">
              <div style={{ width: "100%", height: "100%" }}>
                <CircularProgressbar value={66} maxValue={100} text={"80%"} />;
              </div>
              <p className="para_skils">
                BOOTSTRAP <br></br>
                LEVEL : ADVANCED
              </p>
            </div>
          </div>
        </div>
        <div className="side_port">
          <p className="para2_port">for more info?</p>
          <ul>
            <li className="li_port">
              <a
                href="https://www.kindacode.com"
                rel="noreferrer"
                target="_blank"
                className="tag_port"
              >
                HTML5
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank" className="tag_port">
                CSS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank" className="tag_port">
                JS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank" className="tag_port">
                REACT JS
              </a>
            </li>
            <li className="li_port">
              <a href="jfkfjnn" target="_blank" className="tag_port">
                BOOTSTRAP
              </a>
            </li>
          </ul>
          <p className="para2_port">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br></br>Fuga autemipsam quos. Odit,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
