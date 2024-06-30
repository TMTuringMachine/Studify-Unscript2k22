import axios from "axios";

const serverUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://studify.onrender.com";
const axiosInstance = axios.create({
  baseURL: serverUrl,
});

export default axiosInstance;
