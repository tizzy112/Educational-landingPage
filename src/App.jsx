import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Courses from "./component/Courses";
import Reveiws from "./component/Reveiws";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="reviews">
          <Reveiws />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
