import axios from "axios";

let count = 0;
let refresh = false;

count = count + 1;
console.log('GETTING CALLED...');
//const url = "https://wchandler60610.pythonanywhere.com/api/token/refresh/";
const url = "http://localhost:8000/api/token/refresh/";
const getUniqueId = () =>{
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

axios.defaults.headers.common['unique-id'] = getUniqueId()

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log(localStorage.getItem("refresh_token"));

      try {
        const response = await axios.post(
          url,
          {
            refresh: localStorage.getItem("refresh_token"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          // Set Authorization header for this specific request
          error.config.headers["Authorization"] = `Bearer ${response.data["access"]}`;
          localStorage.setItem("access_token", response.data.access);
          localStorage.setItem("refresh_token", response.data.refresh);
          return axios(error.config);
        }
      } catch (refreshError) {
        console.log("Error refreshing token:", refreshError);
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        window.location.reload()

      }
    }
    refresh = false;
    return Promise.reject(error);
  }
);

