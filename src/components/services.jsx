import React from "react";

function Services() {
  return (
    <div className="services_page" id="services">
      <div className="services_inner">
        <h1 className="services_head">Services</h1>
        <p className="services_paragraph">
          we provide quality services at an afforadable price, so joiin the many
          enterprenuers who are currently improving theirs businesse's
          reputation and performance through stunning,functional,responsive and
          highly esthetic websites.
        </p>
        <div className="services_cont">
          <div className="service1">
            <i className="fa-solid fa-diagram-project" id="services_icons"></i>
            <div className="services_info">
              <h2 className="services_head2">Prototype UI Devlopment</h2>

              <p className="services_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                tenetur odio cumque qui excepturi laborum quos dolores vel,
                voluptas
              </p>
            </div>
          </div>
          <div className="service2">
            <i className="fa-solid fa-code-merge" id="services_icons"></i>
            <div className="services_info">
              <h2 className="services_head2">Prototype UI Integration</h2>
              <p className="services_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                tenetur odio cumque qui excepturi laborum quos dolores vel,
                voluptas
              </p>
            </div>
          </div>
          <div className="service3">
            <i className="fa fa-desktop" id="services_icons"></i>
            <div className="services_info">
              <h2 className="services_head2">UI building and scripting</h2>
              <p className="services_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                tenetur odio cumque qui excepturi laborum quos dolores vel,
                voluptas
              </p>
            </div>
          </div>
          <div className="service4">
            <i className="fa-solid fa-sitemap" id="services_icons"></i>
            <div className="services_info">
              <h2 className="services_head2">
                freelance component/page building
              </h2>
              <p className="services_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                tenetur odio cumque qui excepturi laborum quos dolores vel,
                voluptas
              </p>
            </div>
          </div>
          <div className="service5">
            <i className="fa-solid fa-bug-slash" id="services_icons"></i>
            <div className="services_info">
              <h2 className="services_head2">Testing/Debugging</h2>
              <p className="services_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                tenetur odio cumque qui excepturi laborum quos dolores vel,
                voluptas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
