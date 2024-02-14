const LOAD_SINGLE_PRODUCT = "LOAD_SINGLE_PRODUCT";

export const singleProductReducer = (state = [], action) =>
  action.type === LOAD_SINGLE_PRODUCT ? action.payload : state;

export const loadSingleProductAction = (payload) => ({
  type: LOAD_SINGLE_PRODUCT,
  payload,
});