const LOAD_PRODUCTS_BY_CATEGORY = "[CATEGORIES_PAGE] LOAD_PRODUCTS_BY_CATEGORY";
const PRODUCTS_WITH_DISCOUNT = "[CATEGORIES_PAGE] PRODUCTS_WITH_DISCOUNT";
const PRODUCTS_SORT = "[CATEGORIES_PAGE] PRODUCTS_SORT";
const FILTER_BY_PRICE = "[CATEGORIES_PAGE] FILTER_BY_PRICE";

const realPrice = ({ price, discont_price }) => {
  if (discont_price === null) {
    return price;
  } else {
    return discont_price;
  }
};

export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});

export const productsWithDiscountAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: PRODUCTS_SORT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const productsByCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_BY_CATEGORY:
      return action.payload;

    case PRODUCTS_WITH_DISCOUNT:
      return state.map((el) => ({
        ...el,
        show_by_discount: action.payload ? el.discont_price !== null : true,
      }));

    case PRODUCTS_SORT:
      return [...state].sort((a, b) => {
        if (+action.payload === 1) return realPrice(a) - realPrice(b);
        if (+action.payload === 2) return realPrice(b) - realPrice(a);
        if (+action.payload === 3) return a.title.localeCompare(b.title);
        return 0;
      });

    case FILTER_BY_PRICE:
      const { min_value, max_value } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price: el.price >= min_value && el.price <= max_value,
      }));

    default:
      return state;
  }
};
