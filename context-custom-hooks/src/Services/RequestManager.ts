import Axios from 'axios';

// DOC: https://www.weatherapi.com/api-explorer.aspx

const API_KEY = '722b66c7bec741458f2185445260306';

const RequestManager = Axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});

RequestManager.interceptors.request.use(config => {
  config.params = {
    key: API_KEY,
    ...config.params,
  };
  return config;
});

RequestManager.interceptors.response.use(response => response.data);

export default RequestManager;
