
import React, { useState,useContext, useEffect } from "react";
import modal_login_bg_image from "../../assets/img/jorie_ai.png";
import logo from "../../assets/img/logo.webp";
import axios from "axios";
import { UserContext } from "contexts/UserContext";
import MfaActive from "./Mfa"
import NewMfa from "./NewMFA"
import {hasOtp} from './api'

let myDate = new Date();
let hours = myDate.getHours();
let greet;

if (hours < 12) greet = "Morning";
else if (hours >= 12 && hours <= 17) greet = "Good Afternoon!";
else if (hours >= 17 && hours <= 24) greet = "Good Evening!";

function Mfa() {
    const [loading,setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const accessToken = localStorage.getItem("access_token");

    useEffect(() => {
  
        if (accessToken === null) {
          window.location.href = "/login";
        } else {
          (async () => {
              
              setVerified(await hasOtp())
              setLoading(false)
          })();
        }
      }, []);
    
      if(loading){
        return <p>Loading...</p> 
      }

      return <>
      {verified && <MfaActive/>}
      {!verified && <NewMfa/>}
      </>
}


export default Mfa;