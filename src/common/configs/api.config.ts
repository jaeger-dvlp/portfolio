import axios, { Axios } from 'axios';

const apiURL: string = 'https://api.github.com/';

const API = axios.create({
  baseURL: apiURL,
}) as Axios;

export default API;
