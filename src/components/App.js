import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";
import Links from "./Links";


function App(username) {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Links />
    </div>
  );
}

export default App;
