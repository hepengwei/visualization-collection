import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { GlobalProvider } from "@/hooks/useGlobalContext";
import App from "./App";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <GlobalProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </GlobalProvider>
  );
}
