import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Information from "./components/Information";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Information />
    </BrowserRouter>
  );
}

export default App;
