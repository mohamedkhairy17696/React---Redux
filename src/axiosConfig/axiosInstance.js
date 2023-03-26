import axios from "axios";
import store from "../store/store";
import { changeLoader } from "./../store/actions/loader";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  // params: {
  //   api_key: "29c7fe441820e96b87a9e582ba8f1cf7",
  // },
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(changeLoader(true));

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//response interceptor
axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    store.dispatch(changeLoader(false));
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
