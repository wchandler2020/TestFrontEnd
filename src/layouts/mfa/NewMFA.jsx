

import React, { useState,useContext, useEffect } from "react";
import modal_login_bg_image from "../../assets/img/jorie_ai.png";
import logo from "../../assets/img/logo.webp";
import axios from "axios";
import QRCode from "react-qr-code";

import { UserContext } from "contexts/UserContext";
import { getOtpUrl } from './api';

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon!";
else if (hours >= 17 && hours <= 24) greet = "Good Evening!";

function Mfa() {
  const [token, setToken] = useState("");
  const {isVerified, VerifyUser,  error, loading} = useContext(UserContext)

  const submit = async (e) => {
      e.preventDefault()
      console.log('submit')
      VerifyUser(token)
  };
  const [OtpURL, setOtpURL] = useState()
  useEffect(
    () => {
        getOtpUrl().then(data => setOtpURL(data))
    }
    ,[])
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
                2 Factor Authentication(2FA)
              </p>
            </div>
            <div className="mt-4 p-4" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <form onSubmit={submit}>
              {OtpURL && <QRCode value={OtpURL} size={150}
                          style={{ height: "auto", maxWidth: "100%", width: "100%" }}/>}
                <div>
                  <label
                    htmlFor="token"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Use your phone or any QR reader to get Token
                  </label>
                  <input
                    type="number"
                    id="token"
                    placeholder="999 999"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="token"
                    onChange={(e) => setToken(e.target.value)}
                  />
                  <p>{error}</p>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="submit" disabled={loading}
                  >
                    Verify
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

export default Mfa;
