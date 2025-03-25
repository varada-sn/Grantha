import axios from 'axios';

// Base API configuration
const API = axios.create({
  baseURL: 'http://localhost:8085', // Adjust based on your backend
});

// Attach JWT to requests if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;