import React from "react";
import "./LoginSignup.css";
import { FaLock } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillIdcard } from "react-icons/ai";
import { GoNumber } from "react-icons/go";
import { GoX } from "react-icons/go";

// const wrapper = document.querySelector(".wrapper");
// const registerLink = document.querySelector(".register-link");
// const loginLink = document.querySelector(".login-link");
// const btnPopup = document.querySelector(".btnLogin-popup");
// const iconClose = document.querySelector(".icon-close");

// registerLink.onclick = () => {
//   wrapper.classList.add("active");
// };

// loginLink.onclick = () => {
//   wrapper.classList.remove("active");
// };

// btnPopup.onclick = () => {
//   wrapper.classList.add("active-popup");
// };

// iconClose.onclick = () => {
//   wrapper.classList.remove("active-popup");
// };

const LoginSignup = () => {
  return (
    <div>
      <section className="section">
        <div className="wrapper">
          <span className="icon-close">
            <i>
              <GoX />
            </i>
          </span>

          <div className="logreg-box">
            {/* log in form  */}

            <div className="form-box login">
              {" "}
              <div className="logreg-title">
                <h2>Login</h2>
                <p>Please login to use the platform</p>
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
                  <a href="#">Forgot Password</a>
                </div>

                <button type="submit" className="btn">
                  Login
                </button>
                <div className="logreg-link">
                  <p>
                    Don't have an account?{" "}
                    <a href="#" className="register-link">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* register form  */}

            <div className="form-box register">
              {" "}
              <div className="logreg-title">
                <h2>Registration</h2>
                <p>Please provide the following to verify your identity</p>
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

                <button type="submit" className="btn">
                  Register
                </button>
                <div className="logreg-link">
                  <p>
                    Already have an account?{" "}
                    <a href="#" className="login-link">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignup;
