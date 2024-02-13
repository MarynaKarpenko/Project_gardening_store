const LOAD_NAME = "[TOOL_EQUIMENT_PAGE] LOAD_NAME";

export const loadNameOfCategoryAction = (payload) => ({
  type: LOAD_NAME,
  payload,
});

export const categoryReducer = (state = [], action) =>
  action.type === LOAD_NAME ? action.payload : state;
