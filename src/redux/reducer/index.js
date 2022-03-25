import { combineReducers } from "redux";

import cart from "./cart";
import auth from "./auth";
import progress from "./progress";

export default combineReducers({
  cart: cart,
  auth: auth,
  progress: progress,
});
