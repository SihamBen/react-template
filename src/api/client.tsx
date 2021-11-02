import axios from 'axios';
//import { BASE_URL } from 'config';
export const client = axios.create({
  baseURL: 'https://api.github.com/',
});
