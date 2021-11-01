import axios from 'axios';
const API_URL = 'secret';
export const client = axios.create({
  baseURL: API_URL,
});
