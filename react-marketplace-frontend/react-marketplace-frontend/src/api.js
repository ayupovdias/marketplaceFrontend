import axios from "axios";

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API,
});

export const marketplaceApi = axios.create({
  baseURL: import.meta.env.VITE_MARKETPLACE_API,
});

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

marketplaceApi.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});