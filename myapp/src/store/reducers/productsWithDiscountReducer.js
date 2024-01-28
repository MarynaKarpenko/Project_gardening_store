const LOAD_PRODUCTS = "[DISCOUNTS_PAGE] LOAD_PRODUCTS";
const FILTER_BY_PRICE = "[DISCOUNTS_PAGE] FILTER_BY_PRICE";
const PRODUCTS_SORT = "[DISCOUNTS_PAGE] PRODUCTS_SORT";

export const loadProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: PRODUCTS_SORT,
  payload,
});

const realDiscountPrice = ({ discont_price }) => discont_price;

export const productsWithDiscountReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.payload;

    case FILTER_BY_PRICE:
      const { min_value, max_value } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price:
          el.discont_price >= min_value && el.discont_price <= max_value,
      }));

    case PRODUCTS_SORT:
      return [...state].sort((a, b) => {
        if (+action.payload === 1)
          return realDiscountPrice(a) - realDiscountPrice(b);
        if (+action.payload === 2)
          return realDiscountPrice(b) - realDiscountPrice(a);
        if (+action.payload === 3) return a.title.localeCompare(b.title);
        return 0;
      });

    default:
      return state;
  }
};
