import {
  ADD_TO_CART,
  GET_PRODUCTS,
  PRODUCT_DECREASE,
  PRODUCT_DELETE,
  PRODUCT_INCREASE,
} from "../action/action";

export const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      if (
        state.productCart.find((item) => {
          return item.id === action.payload.id;
        })
      ) {
        return {
          ...state,
          productCart: state.productCart.map((item) => {
            return item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          productCart: [...state.productCart, action.payload],
        };
      }
    case PRODUCT_DECREASE:
      return {
        ...state,
        productCart: state.productCart
          .map((item) => {
            return item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          })
          .filter((item) => {
            return item.quantity !== 0;
          }),
      };

    case PRODUCT_INCREASE:
      return {
        ...state,
        productCart: state.productCart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case PRODUCT_DELETE:
      return {
        ...state,
        productCart: state.productCart.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
