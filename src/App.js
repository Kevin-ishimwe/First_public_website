import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/page";
import Services from "./components/services";
const pageNotFound = () => {
  <div>
    <h1>THIS PAGE DOES NOT EXIST HERE</h1>
  </div>;
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br></br>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
