 
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
import Education from './Components/Education'
import Internship from "./Components/Internship";

function App() {
  return ( 
    <>
    <div className="hello">

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skill" element={<Skill />}>
           
          </Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/Education" element={<Education />}></Route> 
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/qualification" element={<Qualification />}>
            <Route path="/qualification" element={<Education />}> </Route>
            <Route path="/qualification/internship" element={<Internship />}> </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
