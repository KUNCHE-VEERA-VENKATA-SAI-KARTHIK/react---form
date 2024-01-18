import React from "react";
import process1 from "../assets/images/process1.png";
import process2 from "../assets/images/process2.png";
import process3 from "../assets/images/process3.png";

export default function Delivery() {
  return (
    <div>
      <div
        className="container - fluid px-4 py-5 hero-container"
        id="featured-3"
      >
        <h2 className="display-5 fw-bold lh-1 mb-3 hero-text d-text">
          HOW WEBSITE WORKS{" "}
        </h2>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div>
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#collection" />
              </svg>
            </div>
            <img className="del-img" src={process1} alt="i" />

            <p className="hero-text">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div>
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#people-circle" />
              </svg>
            </div>
            <img className="del-img" src={process2} alt="i" />
            <p className="hero-text">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
          <div className="feature col">
            <div>
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#toggles2" />
              </svg>
            </div>
            <img className="del-img" src={process3} alt="i" />
            <p className="hero-text">
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi" width="1em" height="1em">
                <use xlinkHref="#chevron-right" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
