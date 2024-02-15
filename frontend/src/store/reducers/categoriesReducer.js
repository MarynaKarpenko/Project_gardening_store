import { LOAD_CATEGORIES, LOAD_NAME } from "../actions/actions";

export const categoriesReducer = (state = [], action) => {
  return action.type === LOAD_CATEGORIES ? action.payload : state;
};

export const categoryReducer = (state = [], action) =>
  action.type === LOAD_NAME ? action.payload : state;
