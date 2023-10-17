import React from "react";
// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Certi from "./components/Certi";
import Projs from "./components/Projs";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden text-black">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      {/* <Certi /> */}
      <Projs />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
