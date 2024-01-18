import React from "react";
import logo from "../assets/images/Sabzi.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Signin from "./Signin.jsx";
import App from "../App.jsx";
import Products from "./Products.jsx";
import FAQs from "./FAQs.jsx";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div>
        <div className="b-example-divider"></div>

        <div className="container-fluid px-5 header sticky-top ">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
              <img src={logo} className="w-25 h-25" alt="no image " />
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 menu-color">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2  menu-color">
                  <Link to="/products"Products />
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2  menu-color">
                  <Link to="/ FAQs"> FAQs</Link>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2  menu-color">
                  <Link to="/ About"> About</Link>
                </a>
              </li>
            </ul>

            <div className="col-md-3 text-end">
              <i className="bi bi-search px-5 i "></i>
              <i className="bi bi-cart px-5 i"></i>
              <Link to="/login">
                <i className="bi bi-door-open i"></i>
              </Link>
            </div>
          </header>
        </div>
      </div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
