import "./App.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import Accordion from "./components/Accordion";
import Landing from "./components/Landing";
import Test from "./components/test";
import PlayButton from "./components/PlayButton";
import Border from "./components/PlayButton";

function App() {
  return (
    <>
      <HeroSection />
      <Accordion />
      <Landing />
      {/* <Test /> */}
      <Border />
    </>
  );
}

export default App;
