import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner";
import "./styles/globals.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" richColors />
  </React.StrictMode>
);
