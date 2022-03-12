import * as label from "../constants/cartActionType";

const reducer = (
  cart = {
    isUpdating: false,
    isAvailableOnServer: false,
    isFetchedFromServer: false,
    products: [],
  },
  action
) => {
  /**
     * The array element format:
        {
            productId: '_id666xxx',
            quantity: 2,
            size: 'xl',
            color: 'green'
        }
     */

  switch (action.type) {
    case label.FETCH:
      return {
        ...cart,
        isFetchedFromServer: true,
        products: action.payload.products,
      };
    case label.ADD:
      return { ...cart, products: [...cart.products, action.payload] };
    case label.DELETE_ITEM: {
      const updatedProducts = cart.products.filter(
        (item) => item.productId !== action.payload.productId
      );
      return { ...cart, products: updatedProducts };
    }
    case label.DELETE_CART:
      return { ...cart, products: [] };
    case label.UPDATE: {
      // Update the quantity of the passed product
      const updatedProducts = cart.products.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...cart, products: updatedProducts };
    }
    case label.SET_IS_UPDATING:
      return { ...cart, isUpdating: action.payload };
    case label.SET_IS_AVAILABLE_ON_SERVER:
      return { ...cart, isAvailableOnServer: action.payload };
    case label.SET_IS_FETCHED_FROM_SERVER:
      return { ...cart, isFetchedFromServer: action.payload };
    default:
      return cart;
  }
};

export default reducer;
