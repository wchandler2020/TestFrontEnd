import axios from "axios";

let count = 0;
let refresh = false;

count = count + 1;
console.log('GETTING CALLED...');

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      console.log(localStorage.getItem("refresh_token"));

      try {
        const response = await axios.post(
          "https://wchandler60610.pythonanywhere.com/api/token/refresh/",
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
      }
    }

    refresh = false;
    return Promise.reject(error);
  }
);

