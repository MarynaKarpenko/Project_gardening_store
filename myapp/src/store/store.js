import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { productsByCategoryReducer } from "./reducers/productsByCategoryReducer";
import { allProductsReducer } from "./reducers/allProductsReducer";
import { productsWithDiscountReducer } from "./reducers/productsWithDiscountReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { cartReducer } from "./reducers/cartReducer";
import { categoryReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  catalog: categoriesReducer,
  productsByCategory: productsByCategoryReducer,
  allProducts: allProductsReducer,
  productsWithdiscount: productsWithDiscountReducer,
  nameOfCategory: categoryReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
