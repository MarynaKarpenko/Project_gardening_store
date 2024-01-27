const LOAD_NAME = "[PRODUCTS_BY_CATEGORY_PAGE] LOAD_NAME";

export const loadNameOfCategoryAction = (payload) => ({
  type: LOAD_NAME,
  payload,
});

export const categoryReducer = (state = [], action) => {
  if (action.type === LOAD_NAME) {
    return action.payload;
  } else {
    return state;
  }
};
