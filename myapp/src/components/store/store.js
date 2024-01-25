import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; 
import {
  allProductsReducer,
  filterByPriceAction,
  loadAllProductsAction,
  sortProductsAction,
} from "./reducers/allProductsReduser";
import { categoryReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  allProducts: allProductsReducer,
  filterByPrice: filterByPriceAction,
  loadProducts: loadAllProductsAction,
  products: allProductsReducer,
  sortProducts: sortProductsAction,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
