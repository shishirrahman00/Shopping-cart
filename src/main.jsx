import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ProductContextPovider } from "./context/productContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextPovider>
      <App />
    </ProductContextPovider>
  </StrictMode>
);
