import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider.jsx";

import App from "./App.jsx";
import "./index.css";
// index.js

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </UserProvider>
);
