import { useContext, useEffect } from "react";
import { GET_PRODUCTS } from "./action/action";
import "./App.css";
import Cart from "./assets/components/Cart";
import Navbar from "./assets/components/Navbar";
import Products from "./assets/components/Products";
import SignUpBar from "./assets/components/SignUpBar";
import Subscription from "./assets/components/Subscription";
import { ProductContext } from "./context/productContext";

function App() {
  const { dispatch } = useContext(ProductContext);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        return dispatch({
          type: GET_PRODUCTS,
          payload: data.products,
        });
      });
  }, []);

  return (
    <>
      <SignUpBar />
      <Navbar />

      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Products />
          <Cart />
        </div>
      </main>
      <Subscription />
    </>
  );
}

export default App;
