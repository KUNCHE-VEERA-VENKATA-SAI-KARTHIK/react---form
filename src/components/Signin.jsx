import React from "react";

function Signin() {
  return (
    <div className="nform ">
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="  p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <hr className="my-4" />
          <small className="text-muted">
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
      </div>
    </div>
  );
}

export default Signin;
