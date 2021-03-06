import axios from "axios";

import { apiProductionUrl as apiUrl } from "./constants/url";

export const API = axios.create({ baseURL: apiUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.token = `Bearer ${
      JSON.parse(localStorage.getItem("user")).accessToken
    }`;
  }

  return req;
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (
      err?.response?.data?.message === "Refresh Token Expired" ||
      err?.response?.data?.message === "Login Required"
    ) {
      localStorage.clear();
      window.location.href = "/auth?login=true";
      return;
    } else if (err?.response?.data?.message !== "Access Token Expired") {

      if(err?.response?.data?.message !== "Authentication required")
        alert(err?.response?.data?.message);
        
      return;
    };

    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.refreshToken;

      try {
        const { data } = await API.post("/auth/refresh_token", {
          refreshToken: token,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, accessToken: data.accessToken })
        );

        return API.request(err.config);
      } catch (error) {
        console.log("Error Refreshing Token\n", error, error.response);
      }
    }
  }
);
