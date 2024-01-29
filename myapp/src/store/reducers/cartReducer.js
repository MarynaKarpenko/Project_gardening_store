const ADD_TO_CART = "[PRODUCT_ITEM] ADD_TO_CART";
const REMOVE_CART = "[CART_ITEM] REMOVE_CART";
const CART_INCREMENT = "[CART_ITEM] INKREMENT";
const CART_DECREMENT = "[CART_ITEM] CART_DECREMENT";
const SEND_ORDER = "[CART_CALCULATION] SEND_ORDER ";

export const addToCartAction = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeCartAction = (payload) => ({
  type: REMOVE_CART,
  payload,
});

export const cartIncrAction = (payload) => ({ type: CART_INCREMENT, payload });

export const cartDecrAction = (payload) => ({ type: CART_DECREMENT, payload });

export const sendOrderAction = (payload) => ({
  type: SEND_ORDER,
  payload,
});

const checkProduct = (state, payload) => {
  const target_product = state.find((el) => el.id === payload.id);
  if (target_product) {
    target_product.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

export const cartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === REMOVE_CART) {
    return state.filter(({ id }) => id !== action.payload);
  } else if (action.type === CART_INCREMENT) {
    const updatedState = state.map((item) =>
      item.id === action.payload && item.count !== undefined
        ? { ...item, count: (item.count || 0) + 1 }
        : item
    );
    return updatedState;
  } else if (action.type === CART_DECREMENT) {
    const product = state.find(({ id }) => id === action.payload);
    if (product && product.count === 1) {
      return state.filter((item) => item !== product);
    } else if (product) {
      product.count--;
      return [...state];
    } else {
      return state;
    }
  } else if (action.type === SEND_ORDER) {
    console.log(action.payload);
    return [];
  } else {
    return state;
  }
};