import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner";
import "./styles/globals.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detailservice from "./pages/services/index.tsx";
import ChairsTables from "./pages/services/chairsTables.tsx";
import Chaffingdishes from "./pages/services/chaffingdishes.tsx";
import Chargerplates from "./pages/services/chargerplates.tsx";
import Flowerseventdecor from "./pages/services/flowerseventdecor.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/detail", element: <Detailservice /> },
  { path: "/chairsTables", element: <ChairsTables /> },
  { path: "/chaffingdishes", element: <Chaffingdishes /> },
  { path: "/chargerplates", element: <Chargerplates /> },
  { path: "/flowerseventdecor", element: <Flowerseventdecor /> },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors />
  </React.StrictMode>
);
