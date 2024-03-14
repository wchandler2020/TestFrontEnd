

import React, { useState } from "react";
import modal_login_bg_image from "../../assets/img/jorie_ai.png";
import logo from "../../assets/img/logo.webp";
import axios from "axios";

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon!";
else if (hours >= 17 && hours <= 24) greet = "Good Evening!";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: `url(${modal_login_bg_image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            '&::before': {
                content: "",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: "rgba(255,255,255,.5)",
              }
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-6xl font-medium text-white">
                Jorie Healthcare Partners
              </h2>
              <p className="max-w-xl mt-1 text-white text-xl font-light">
                Next Generation of Medical Automation is Here
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt=""
                  width="120px"
                  height="120px"
                  className="p-0 m-0"
                />
                <h2 className="text-4xl font-bold text-center text-blue-500 dark:text-white"> 
                    Jorie 
                </h2>
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                {`${greet}`} Sign in to access your dashboard
              </p>
            </div>
            <div className="mt-8">
              <form onSubmit={submit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                For issues signing in please contact your adminstrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
