const ActionTypes = {
  LOAD_TOOL_EQUIMENT: "[TOOL_EQUIMENT_PAGE] LOAD_TOOL_EQUIMENT",
  TOGGLE_DISCOUNT: "[TOOL_EQUIMENT_PAGE] TOGGLE_DISCOUNT",
  FILTER_BY_PRICE: "[TOOL_EQUIMENT_PAGE] FILTER_BY_PRICE",
  SORT_PRODUCTS: "[TOOL_EQUIMENT_PAGE] SORT_PRODUCTS",
};

const calculateRealPrice = ({ price, discont_price }) =>
  discont_price === null ? price : discont_price;

export const loadProductsByCategoryAction = (payload) => ({
  type: ActionTypes.LOAD_TOOL_EQUIMENT,
  payload,
});

export const productsWithDiscountAction = (payload) => ({
  type: ActionTypes.TOGGLE_DISCOUNT,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: ActionTypes.PRODUCTS_SORT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: ActionTypes.FILTER_BY_PRICE,
  payload,
});

const toggleDiscount = (state, payload) =>
  state.map((el) => ({
    ...el,
    show_by_discount: payload ? el.discont_price !== null : true,
  }));

const filterByPrice = (state, payload) =>
  state.map((el) => ({
    ...el,
    show_by_price:
      el.price >= payload.min_value && el.price <= payload.max_value,
  }));

const sortProducts = (state, payload) => {
  switch (+payload) {
    case 1:
      state.sort((a, b) => calculateRealPrice(a) - calculateRealPrice(b));
      break;
    case 2:
      state.sort((a, b) => calculateRealPrice(b) - calculateRealPrice(a));
      break;
    case 3:
      state.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }
  return [...state];
};

export const productsByCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TOOL_EQUIMENT:
        console.log("Data loaded:", action.payload);
      return action.payload;
    case ActionTypes.TOGGLE_DISCOUNT:
      return toggleDiscount(state, action.payload);
    case ActionTypes.SORT_PRODUCTS:
      return sortProducts(state, action.payload);
    case ActionTypes.FILTER_BY_PRICE:
      return filterByPrice(state, action.payload);
    default:
      return state;
  }
};