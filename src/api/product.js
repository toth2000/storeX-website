import { API } from ".";
import { fetchProductUrl } from "./constants/url";

export const findProductById = (productId) => {
  return API.get(`${fetchProductUrl}/${productId}`);
};

export const fetchProducts = (query) => {
  console.log("query", query);
  return API.get(`${fetchProductUrl}?${query}`);
};
