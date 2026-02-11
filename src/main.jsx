import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from "./utils/Routes";
import { ThemeProvider } from "./Components/ThemeProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
)