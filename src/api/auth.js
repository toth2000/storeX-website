import { API } from "./index";

import { registerUrl, signInUrl } from "./constants/url";

export const signIn = ({ username, password }) => {
  return API.post(`${signInUrl}`, { username: username, password: password });
};

export const signUp = ({ fullName, username, email, password }) => {
  return API.post(`${registerUrl}`, {
    fullName: fullName,
    email: email,
    username: username,
    password: password,
  });
};
