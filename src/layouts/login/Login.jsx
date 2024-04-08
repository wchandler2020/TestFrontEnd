

import React, { useState, useContext} from "react";
import modal_login_bg_image from "../../assets/img/jorie_ai.png";
import logo from "../../assets/img/logo.png";
import axios from "axios";
import { UserContext } from "contexts/UserContext";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Good Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon!";
else if (hours >= 17 && hours <= 24) greet = "Good Evening!";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, loginError} = useContext(UserContext)
  const history = useHistory();
  const notify = () => toast(loginError);
  const submit = async (e) => {
    e.preventDefault();
    const loginSuccess = await login(email, password);
    if (loginSuccess) {
      setEmail("");
      setPassword("");
      history.push("/");
    } else {
      notify(); // Display toast message for login failure
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
                Jorie AI
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
                  width="60px"
                  height="60px"
                  className="p-0 m-0"
                />
                <h2 className="text-4xl font-bold text-center text-blue-500 dark:text-white ml-2"> 
                    Jorie AI
                </h2>
              </div>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                {`${greet}`}, sign in to access your dashboard
              </p>
              <Toaster position="top-center" toastOptions={{
                className: '',
                duration: 3000,
                style: {
                  background: '#d8412f',
                  color: '#fff',
                }
              }}/>
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
                  {/* {loginError && <Toaster />} */}
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