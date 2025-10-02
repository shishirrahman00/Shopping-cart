import { ADD_TO_CART, GET_PRODUCTS } from "../action/action";

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

    default:
      return state;
  }
};
