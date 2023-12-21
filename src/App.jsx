import React from "react";
import { useState, useEffect } from "react";
import Hero from "./components/Hero.jsx";

import Navigation from "./components/navigation";
import Delivery from "./components/delivery.jsx";

import "./components/style.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Delivery />
    </>
  );
}
