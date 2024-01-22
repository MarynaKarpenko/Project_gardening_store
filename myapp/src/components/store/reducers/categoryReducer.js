import thunk from "redux-thunk";

const initialState = {
  data: null,
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, data: null, error: action.payload };
    default:
      return state;
  }
};
