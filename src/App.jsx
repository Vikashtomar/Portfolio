/** @format */

import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Portfolio from "./Components/Portfolio";
import Qualification from "./Components/Qualification";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}>
            {" "}
          </Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/qualification" element={<Qualification />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
