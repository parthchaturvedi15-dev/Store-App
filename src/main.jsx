import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Routes";
import { ThemeProvider } from "./Components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
