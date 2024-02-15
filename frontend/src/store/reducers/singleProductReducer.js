import {LOAD_SINGLE_PRODUCT} from "../actions/actions";

export const singleProductReducer = (state = [], action) =>
  action.type === LOAD_SINGLE_PRODUCT ? action.payload : state;
