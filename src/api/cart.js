import { API } from ".";

import {
  getCartUrl,
  getCartTotalUrl,
  createCartUrl,
  updateCartUrl,
  deleteCartUrl,
} from "./constants/url";

export const getCart = () => {
  return API.get(getCartUrl);
};

export const getCartTotal = (products) => {
  return API.post(getCartTotalUrl, { cart: products });
};

export const createCart = (products) => {
  return API.post(createCartUrl, { products: products });
};

export const updateCart = (products) => {
  return API.put(updateCartUrl, { products: products });
};

export const deleteCart = () => {
  return API.delete(deleteCartUrl);
};
