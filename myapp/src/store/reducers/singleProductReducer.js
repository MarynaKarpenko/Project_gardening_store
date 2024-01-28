const LOAD_SINGLE_PRODUCT = "[PRODUCT_PAGE] LOAD_SINGLE_PRODUCT";

export const loadSingleProductAction = (payload) => ({
  type: LOAD_SINGLE_PRODUCT,
  payload,
});

export const singleProductReducer = (state = [], action) =>
  action.type === LOAD_SINGLE_PRODUCT ? action.payload : state;
