import axios from "axios";
import decode from "jwt-decode";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!token && !refreshToken) return request;
  request.headers.Authorization = `Bearer ${token}`;
  const expirationData = decode(token).exp;
  const isTokenExpired = expirationData * 1000 < new Date().getTime();
  if (!isTokenExpired) return request;
  const { data } = await axios.post("http://localhost:3001/users/refresh", {
    refresh_token: refreshToken,
  });
  const { token: newAccessToken } = data;
  localStorage.setItem("token", newAccessToken);
  request.headers.Authorization = `Bearer ${newAccessToken}`;

  return request;
});
