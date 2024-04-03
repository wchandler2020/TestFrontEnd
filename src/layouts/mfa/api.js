import axios from 'axios';

const URL = "http://localhost:8000/api"



export const hasOtp = async () =>{
    try{
        const response = await axios.get(`${URL}/hasotp/`, {
            headers: {
            "Content-Type": "application/json",
            },
            withCredentials: true,
            baseUrl: URL
        });

        if(response.data){
            return true
        }
    }catch(e){

    }
    return false;
}

export const getOtpUrl = async () => {
    const { data } = await axios.get(`${URL}/otp/`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        baseUrl: URL
      });
     return data;
}

export default {hasOtp, getOtpUrl}