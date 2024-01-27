const LOAD_SINGLE_PRODUCT = "[SINGLE_PRODUCT_PAGE] LOAD_SINGLE_PRODUCT";

export const loadSingleProductAction = (payload) => ({
  type: LOAD_SINGLE_PRODUCT,
  payload,
});

export const singleProductReducer = (state = [], action) => {
  if (action.type === LOAD_SINGLE_PRODUCT) {
    return action.payload;
  } else {
    return state;
  }
};
