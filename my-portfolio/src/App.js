import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Projects";
import About from "./components/About";
import Certi from "./components/Certi";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Certi />
      <Project />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
}

export default App;
