const LOAD_CATEGORIES = "[CATALOG_CONTEINER] LOAD_CATEGORIES";

export const loadCategoriesAction = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});
export const categoriesReducer = (state = [], action) => {
  if (action.type === LOAD_CATEGORIES) {
    return action.payload;
  } else {
    return state;
  }
};
