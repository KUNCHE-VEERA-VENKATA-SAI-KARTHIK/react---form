import React from "react";
import hero from "../assets/images/hero1.png";

import certif from "../assets/images/certi.png";

function Hero() {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={hero}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 hero-text">
          <h1 class="display-5 fw-bold lh-1 mb-3">HOW'S THE MOOD TODAY </h1>
          <p class="lead ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quos
            dignissimos deleniti, exercitationem reprehenderit voluptatibus
            eligendi, mollitia similique repellat illum enim quis tempore ad?
            Quod culpa voluptas laudantium eius ullam?
          </p>
          <div>
            <img src={certif} alt="hello" />
            <p>we provide orgainc food for the world </p>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-warning btn-lg px-4 me-md-2">
              shop now
            </button>
            <button type="button" class="btn btn-white btn-lg px-4">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
