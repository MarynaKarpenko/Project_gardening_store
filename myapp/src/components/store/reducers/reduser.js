const initialState = {
  data: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, data: null, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
