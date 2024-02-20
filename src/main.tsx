import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "srocha_skeleton_css/css/normalize.css";
import "srocha_skeleton_css/css/skeleton.css";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./routes/not_found/page.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
