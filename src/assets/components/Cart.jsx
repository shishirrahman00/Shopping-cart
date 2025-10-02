import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import OrderSummary from "./OrderSummary";
export default function Cart() {
  const { state } = useContext(ProductContext);
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 ">YOUR CART</h2>
        {state.productCart.length === 0 ? (
          <p className="text-[20px] text-[#333] font-semibold">
            Your Cart is empty
          </p>
        ) : (
          state.productCart.map((product) => {
            return (
              <div
                key={product.id}
                className="flex items-center space-x-4 pb-4 border-b border-gray-200 mb-4"
              >
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div className="flex-grow ">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{product.tile}</h3>
                    <span className="text-red-500 text-sm">×</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Brand: {product.brand}
                  </p>
                  <p className="text-sm text-gray-500">
                    Catagory: {product.category}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">
                      ${(product.price * product.quantity).toFixed(3)}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        −
                      </button>
                      <span className="text-sm">{product.quantity}</span>
                      <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}

        <OrderSummary />
      </div>
    </div>
  );
}
