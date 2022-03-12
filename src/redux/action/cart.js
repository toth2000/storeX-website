import * as label from "../constants/cartActionType";

export const setCartItemFromServer = (products) => {
  return {
    type: label.FETCH,
    payload: {
      products: products,
    },
  };
};

export const deleteCart = () => {
  return { type: label.DELETE_CART };
};

export const addItem = ({ productId, quantity, size, color }) => {
  return {
    type: label.ADD,
    payload: {
      productId: productId,
      quantity: quantity,
      size: size,
      color: color,
    },
  };
};

export const updateItem = ({ productId, quantity }) => {
  return {
    type: label.UPDATE,
    payload: { productId: productId, quantity: quantity },
  };
};

export const removeItem = (id) => {
  return { type: label.DELETE_ITEM, payload: { productId: id } };
};

export const setIsUpdating = (value) => {
  if (value === true || value === false)
    return { type: label.SET_IS_UPDATING, payload: value };
};

export const setIsAvailableOnServer = (value) => {
  if (value === true || value === false)
    return { type: label.SET_IS_UPDATING, payload: value };
};

export const setIsFetchedFromServer = (value) => {
  if (value === true || value === false)
    return { type: label.SET_IS_FETCHED_FROM_SERVER, payload: value };
};
