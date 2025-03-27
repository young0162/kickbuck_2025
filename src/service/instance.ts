import axios from "axios";

export const kickbuckInstance = axios.create({
  baseURL: "http://localhost:4010",
});

kickbuckInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
