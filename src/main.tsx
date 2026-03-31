import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { registerServiceWorker } from "./lib/caching";

// Register service worker for offline support and caching
registerServiceWorker();

// Keep the site in light mode only
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("light");
localStorage.removeItem("vite-ui-theme");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
