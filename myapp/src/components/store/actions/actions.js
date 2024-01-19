export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
};