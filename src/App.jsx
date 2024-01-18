import React from "react";
import { useState, useEffect } from "react";
import Hero from "./components/Hero.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Navigation from "./components/navigation";
import Delivery from "./components/delivery.jsx";
// import Login from "./components/Login.jsx";

import "./components/style.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Delivery />
      {/* <Login /> */}
    </>
  );
}
