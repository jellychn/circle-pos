import axios from 'axios';

const baseURL = 'http://localhost:8000';

const apiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiService;