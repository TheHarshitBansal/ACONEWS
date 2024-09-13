import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aconews-3o6z.onrender.com',
});

export default api;