import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsReducer } from "./reducers/productsReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { cartReducer } from "./reducers/cartReducer";
import { categoryReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  productsByCategory: productsReducer,
  allProducts: productsReducer,
  productsWithdiscount: productsReducer,
  categories: categoriesReducer,
  nameOfCategory: categoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
