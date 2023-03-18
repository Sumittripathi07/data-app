import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/public-sans";
import { CssVarsProvider } from "@mui/joy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Index";
import Students from "./pages/Students";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "students",
        element: <Students />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CssVarsProvider>
    <RouterProvider router={router} />
  </CssVarsProvider>
);
