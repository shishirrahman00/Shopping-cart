import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";

const ProductContext = createContext();
const initialState = {
  products: [],
};
export function ProductContextPovider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext };
