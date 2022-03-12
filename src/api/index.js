import axios from "axios";

import { apiProductionUrl as apiUrl } from "./constants/url";

export const API = axios.create({ baseURL: apiUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.token = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});
