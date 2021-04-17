import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

console.log(axiosInstance.baseURL);

export default axiosInstance;
