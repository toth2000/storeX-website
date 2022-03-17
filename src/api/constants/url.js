// export const apiProductionUrl = "http://localhost:5000";
export const apiProductionUrl = "https://store-x-backend.onrender.com";
// export const apiProductionUrl = "https://store-x-server.vercel.app";

/** Product Route */

//Return list of all products or if id is provided return particular product
// i.e /find/:id for particular product and /find for all product
export const fetchProductUrl = "/product/find";

/** Auth Route */

export const signInUrl = "/auth/login";
export const registerUrl = "/auth/register";

/** Cart Route */

export const getCartUrl = "/cart/";
export const getCartTotalUrl = "/cart/total";
export const createCartUrl = "/cart/";
export const updateCartUrl = "/cart/";
export const deleteCartUrl = "/cart/";

/** Order Route */
export const createOrderUrl = "/order/";
export const getOrdersUrl = "/order/";

/** Payment Route */
export const verifyPaymentUrl = "/payment/verify";
