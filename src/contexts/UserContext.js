import { createContext, useEffect, useState, useMemo} from "react";
import axios from "axios";
import "interceptors/axios"

export const UserContext = createContext();

export const getUniqueId = () =>{
  if(localStorage.getItem("uniqueId")){
    return localStorage.getItem("uniqueId")
  }
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const randomString = Math.random().toString(20).substring(2, 14) + Math.random().toString(20).substring(2, 14);

  const deviceID = `${userAgent}-${platform}-${randomString}`;
  localStorage.setItem("uniqueId", deviceID)
  return deviceID
}



const UserProvider = ( {children}) =>{
    const [isVerified, setVerified] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [loading,setLoading] = useState(true)
    const [isAuth, setAuth] = useState(false)

    const login = async (email, password) => {
      setLoginError(false)
      try{
        const url = 'http://localhost:8000/api/token/'
        // const url = "https://wchandler60610.pythonanywhere.com/api/token/";

              // Create the post request
        const { data } = await axios.post(url, {email, password}, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }); 
        // Initialize the access & refresh token in localstorage.
        getUniqueId()
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        // Set the Authorization header for subsequent requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        
        setAuth(true)
        return true
      }catch (e){
        console.log(e.response.data.detail)
        setLoginError(e.response.data.detail)
        console.error(loginError);
      }
      return false
    }

    window.addEventListener('storage', () => {
      if(!localStorage.getItem("access_token")){
        setAuth(false)
        setVerified(false)
      }
    })
    const verifyToken = async (token) =>{
      setLoginError(false)
        const accessToken = localStorage.getItem("access_token");
        
        if(!accessToken){
            return false
        }
        console.log("access_token", accessToken )
        try{
          const { data } = await axios.post(`http://localhost:8000/api/otp/${token}/`, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
            },
            withCredentials: true,
          });
         return true
        }catch(e){
          
          setLoginError('Invalid Token')
            console.log(e)
        }
        return false
      }
    const VerifyUser = async (token) => {
       const is_verified = await verifyToken(token);
       setVerified(is_verified);
    }
    
    const IsAlreadyVerified = async () =>{

      const accessToken = localStorage.getItem("access_token");
        
      if(!accessToken){
          return false
      }
      console.log("access_token", accessToken )
      try{
        const { data } = await axios.get(`http://localhost:8000/api/verified/`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });
       return true
      }catch(e){
        
          return false
          console.log(e)
      }
    }

    useEffect(() =>{

       const start = async () =>{
          console.log("state:",{
            isAuth,
            isVerified
          })
          const accessToken = localStorage.getItem("access_token");
          if(accessToken){
            setAuth(true)
            if(!isVerified){
              setVerified(await IsAlreadyVerified())
            }
          }
          setLoading(false)
       }
       start();
    }, [])
    return <UserContext.Provider value={{
        verifyToken,
        VerifyUser,
        loginError,
        isVerified,
        isAuth,
        setAuth,
        login

    }} >
        {loading && 'loading'}
        {!loading && children}
   
    </UserContext.Provider>
}

export default UserProvider