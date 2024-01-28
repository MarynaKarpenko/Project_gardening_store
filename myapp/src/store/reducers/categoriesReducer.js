const LOAD_CATEGORIES = "[CATEGORIES_CONTAINER] LOAD_CATEGORIES";

export const loadCategoriesAction = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});

export const categoriesReducer = (state = [], action) => {
  return action.type === LOAD_CATEGORIES ? action.payload : state;
};