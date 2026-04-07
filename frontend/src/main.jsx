import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import UserDirectoryProvider from "./context/UserDirectoryContext/UserDirectoryProvider";
import CartProvider from "./context/CartContext/CartProvider";
import ProductProvider from "./context/ProductContext/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserDirectoryProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </UserDirectoryProvider>
  </StrictMode>
);
