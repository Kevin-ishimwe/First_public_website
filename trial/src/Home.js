import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/page";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Page />
      </div>
    );
  }
}

export default Home;
