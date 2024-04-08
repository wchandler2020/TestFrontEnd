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
          <div className="w-1/2 h-full bg-white  flex flex-col form-container">
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
