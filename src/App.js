import React from "react";
import Page from "./components/page";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/footer" element={<empty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
