import { createContext, useEffect, useState, useMemo} from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ( {children}) =>{
    const [isVerified, setVerified] = useState(localStorage.getItem("is_verified"))
    const [error, setError] = useState(false)
    const [loading,setLoading] = useState(true)
    const [isAuth, setAuth] = useState(false)

    const login = async (email, password) => {
      try{
        const url = 'http://localhost:8000/api/token/'
        // const url = "https://wchandler60610.pythonanywhere.com/api/token/";

              // Create the post request
        const { data } = await axios.post(url, {email, password}, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }); 
        // Initialize the access & refresh token in localstorage.
        localStorage.clear();
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        // Set the Authorization header for subsequent requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        setAuth(true)
        return true
      }catch (e){
        console.error(error);
      }
      return false
    }

 
    const verifyToken = async (token) =>{
        setError(false)
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
          localStorage.setItem("is_verified", 'true');
         return true
        }catch(e){
          
            setError('Invalid Token')
            console.log(e)
        }
        return false
      }
    const VerifyUser = async (token) => {
       setVerified(!isVerified? (await verifyToken(token)): true);
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
          }
          setLoading(false)
       }
       start();
    }, [])
    return <UserContext.Provider value={{
        verifyToken,
        VerifyUser,
        error,
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