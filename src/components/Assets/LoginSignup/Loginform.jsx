import React from "react";
import "./LoginSignup.css";
import { GoX } from "react-icons/go";
import { BiLogoGmail } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Loginform = () => {
  return (
    <>
      <div className="wrapper">
        <span className="icon-close">
          <Link to="/">
            {" "}
            <i>
              <GoX />
            </i>{" "}
          </Link>
        </span>
        <div className="logreg-box">
          <div className="form-box login">
            <div className="logreg-title">
              <h2>Login</h2>
              <p>Please log in to use the platform</p>
            </div>

            <div className="select">
              <div className="selectStudent">
                <input type="radio" name="student" id="select" />
                Student
              </div>

              <div className="selectFood">
                <input type="radio" name="student" id="select" />
                Foodcourt
              </div>
            </div>

            <form action="#">
              <div className="input-box">
                <span className="icon">
                  <BiLogoGmail />
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-box">
                <span className="icon">
                  <FaLock />
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forget">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <Link>Forgot password</Link>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="logreg-link">
                <p>
                  Don't have an account?
                  <Link className="register-link" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginform;
