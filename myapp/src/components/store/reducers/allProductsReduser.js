const ActionTypes = {
  LOAD_ALL_PRODUCTS: "[ALL_PRODUCTS_PAGE] LOAD_ALL_PRODUCTS",
  TOGGLE_DISCOUNT: "[ALL_PRODUCTS_PAGE] TOGGLE_DISCOUNT",
  FILTER_BY_PRICE: "[ALL_PRODUCTS_PAGE] FILTER_BY_PRICE",
  SORT_PRODUCTS: "[ALL_PRODUCTS_PAGE] SORT_PRODUCTS",
};

export const loadAllProductsAction = (payload) => ({
  type: ActionTypes.LOAD_ALL_PRODUCTS,
  payload,
});

export const toggleDiscountAction = (payload) => ({
  type: ActionTypes.TOGGLE_DISCOUNT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: ActionTypes.FILTER_BY_PRICE,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: ActionTypes.SORT_PRODUCTS,
  payload,
});

const calculateRealPrice = ({ price, discount_price }) =>
  discount_price === null ? price : discount_price;

const toggleDiscount = (state, payload) =>
  state.map((el) => ({
    ...el,
    show_by_discount: payload ? el.discount_price !== null : true,
  }));

const filterByPrice = (state, payload) =>
  state.map((el) => ({
    ...el,
    show_by_price:
      el.price >= payload.min_value && el.price <= payload.max_value,
  }));

const sortProducts = (state, payload) => {
  const copy = [...state];
  switch (+payload) {
    case 1:
      return copy.sort((a, b) => calculateRealPrice(a) - calculateRealPrice(b));
    case 2:
      return copy.sort((a, b) => calculateRealPrice(b) - calculateRealPrice(a));
    case 3:
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return copy;
  }
};

export const allProductsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_ALL_PRODUCTS:
      return action.payload || state; 
    case ActionTypes.TOGGLE_DISCOUNT:
      return toggleDiscount(state, action.payload);
    case ActionTypes.FILTER_BY_PRICE:
      return filterByPrice(state, action.payload);
    case ActionTypes.SORT_PRODUCTS:
      return sortProducts(state, action.payload);
    default:
      return state;
  }
};
