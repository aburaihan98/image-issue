import "./App.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <HeroSection />
      <Accordion />
    </>
  );
}

export default App;
