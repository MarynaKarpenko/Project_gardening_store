import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { allProductsReducer } from "./reducers/allProductsReduser";
import { categoryReducer } from "./reducers/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  allProducts: allProductsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
