import Axios, { AxiosInstance } from 'axios';
// const baseURL = 'https://api.github.com'
const baseURL = 'http://10.239.115.18:3002/';

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
});

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      console.error(`Code: ${code}, Message: ${msg}`);
      console.error('[Axios Error]', error.response);
    } else {
      console.error(`${error}`);
    }
    return Promise.reject(error);
  },
);

export default axios;
