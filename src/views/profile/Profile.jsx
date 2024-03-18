import React, {useEffect, useState,} from 'react'
import axios from 'axios'
import QRCode from "react-qr-code";
import { Box, Grid, Input, Button } from "@chakra-ui/react";



const Profile = () => {
  const [OtpURL, setOtpURL] = useState()
  const [otpCode, setOtpCode] = useState()
  const [verified, setVerified] = useState(false)
  const [invalid, setInvalid] = useState(false)
  
  const url = "http://localhost:8000/api/otp/";
  const accessToken = localStorage.getItem("access_token");


  useEffect(() => {
  
    if (accessToken === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/hasotp/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if(response.data){
            setVerified(true)
            return
          }
          const { data } = await axios.get(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setOtpURL(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const verifyToken = async (token) =>{
    try{
      const { data } = await axios.post(url+token+'/', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setVerified(true)
    }catch(e){
      setInvalid(true)
    }

  }
  const onSubmitEvent = async (e) =>{
    e.preventDefault();
    setInvalid(false)
    await verifyToken(otpCode)

  }

  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
    <div>Setting Up Your Two Factor Authentication</div>
    
    {OtpURL && <QRCode value={OtpURL} />}

    {verified && <span> Already  Two Factor Authentication</span>} 

    {OtpURL && !verified && <form onSubmit={onSubmitEvent}>
      <Input type="text" onChange={(e) => setOtpCode(e.target.value)}/>
      {invalid && <span>Invalid Code</span>}
      <Button type='submit'>Submit </Button>
    </form>}

    
    </Box>
  )
}

export default Profile