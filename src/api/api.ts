import axios from 'axios';

// TODO: add to .env and tests
const baseURL = 'https://circle-frontend-server-dd8f695c0574.herokuapp.com';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiService;