import React from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { AiFillIdcard } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { GoX } from "react-icons/go";

const Registerform = () => {
  return (
    <>
      <div className="wrapper">
        <div className="form-box register">
          <div className="logreg-title">
            <span className="icon-close">
              <Link to="/">
                {" "}
                <i>
                  <GoX />
                </i>{" "}
              </Link>
            </span>
            <br />
            <br />
            <br />
            <h2>Registration</h2>

            <p>Please provide the following to verify your identity</p>
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
                <BsFillPeopleFill />
              </span>
              <input type="text" required />
              <label>Full Name</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <BiLogoGmail />
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <AiFillIdcard />
              </span>
              <input type="number" required />
              <label>Roll No</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <FaLock />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <GoNumber />
              </span>
              <input type="number" required />
              <label>OTP</label>
            </div>

            <div className="remember-forget">
              <label>
                <input type="checkbox" />I agree to the terms and conditions
              </label>
            </div>

            <button type="submit" className="btn2">
              Register
            </button>
            <div className="logreg-link">
              <p>
                Already have an account?
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registerform;
