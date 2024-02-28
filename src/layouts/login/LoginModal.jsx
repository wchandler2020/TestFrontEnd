import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import modal_login_bg_image from "../../assets/photos/ai_bg.jpeg";
import modal_login_bg_image from "../../assets/img/jorie_ai.png";
import axios from "axios";
// import {useNavigate} from 'react-router-dom'

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Afternoon";
else if (hours >= 17 && hours <= 24) greet = "Evening";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const submit = async (e) => {
    const url = "https://wchandler60610.pythonanywhere.com/api/token/";
    try {
      e.preventDefault();
      const user = {
        email: email,
        password: password,
      };

      // Create the post request
      const { data } = await axios.post(url, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      // Initialize the access & refresh token in localstorage.
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      // Set the Authorization header for subsequent requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;

      // Redirect to the home page
      window.location.href = "/";

      // Clear the email and password fields after submission
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle errors gracefully
      console.error(error);
      // You might want to show a user-friendly error message to the user
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="bg_modal"
    >
      <Modal.Body className=" modal-content">
        <div className="w-full h-screen flex items-start bg_modal">
          <div className="relative w-1/2 h-full flex flex-col content-container">
            <img
              src={modal_login_bg_image}
              alt=""
              className="w-full h-full object-cover modal-img leftside_img"
            />
          </div>
          {/* bg-[#4cb5f5] */}
          <div className="w-1/2 h-full bg-white  flex flex-col form-container">
            {/* <div className="w-full flex flex-col max-w-[450px]">
              <div className="w-full flex flex-col">
                <h3 className="text-2xl font-semibold">Jorie Client Portal</h3>
                <p className="text-sm mb-2">Good {greet}, Please Log In</p>
              </div>

              <div className="w-full flex flex-col">
                <form onSubmit={submit}>
                  <input
                    type="email"
                    className="w-full text-black outline-none border-b border-black focus:outline-none py-2 bg-transparent my-4 "
                    placeholder="Enter Your Email"
                    name="username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="w-full text-black  border-b outline-none border-black focus:outline-none py-2 bg-transparent"
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="w-full flex items-center justify-between">
                    <div className="w-full flex flex-co my-4">
                      <button
                        className="w-full bg-[#060606] text-white rounded-md p-2 text-center flex items-center justify-center"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full flex items-center justify-center py-2 mt-10 ">
                <p className="text-sm font-normal  text-[#444444] contact-text ">
                  Issues with your account? Contact your administrator
                </p>
              </div>
            </div> */}
            <div class="login_alt">
              <form class="login__form" onSubmit={submit}>
                <h1 class="login__title">Jorie Login Portal</h1>

                <div class="login__content">
                  <div class="login__box">
                    <i class="ri-user-3-line login__icon"></i>

                    <div class="login__box-input">
                      <input
                        type="email"
                        required
                        class="login__input"
                        id="login-email"
                        placeholder=" "
                        name="username"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="login-email" class="login__label">
                        Email
                      </label>
                    </div>
                  </div>

                  <div class="login__box">
                    <i class="ri-lock-2-line login__icon"></i>

                    <div class="login__box-input">
                      <input
                        type="password"
                        required
                        class="login__input"
                        id="login-pass"
                        placeholder=" "
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label for="login-pass" class="login__label">
                        Password
                      </label>
                      <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                    </div>
                  </div>
                </div>

                <div class="login__check">
                  <div class="login__check-group">
                    <input
                      type="checkbox"
                      class="login__check-input"
                      id="login-check"
                    />
                    <label for="login-check" class="login__check-label">
                      Remember me
                    </label>
                  </div>

                  <a href="#" class="login__forgot">
                    Forgot Password?
                  </a>
                </div>

                <button type="submit" class="login__button">
                  Login
                </button>

                <p class="login__register">
                  Please contact you administrator for account issues.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
