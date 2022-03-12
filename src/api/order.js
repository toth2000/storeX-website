import { API } from ".";
import { createOrderUrl, getOrdersUrl } from "./constants/url";

export const createOrder = (address, products, phone) => {
  return API.post(createOrderUrl, {
    address: address,
    products: products,
    phone: phone,
  });
};

export const getOrder = () => {
  return API.get(getOrdersUrl);
};

export const findOrderById = (id) => {
  return API.get(`${getOrdersUrl}/${id}`);
};
