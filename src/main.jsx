import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/public-sans";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Index";
import Students from "./pages/Students";
import axios from "axios";
import CreateStudent from "./pages/CreateStudent";
axios.defaults.baseURL = "http://localhost:3000";

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
        loader: async () => (await axios.get("/students")).data,
      },
      {
        path: "students/create",
        element: <CreateStudent />,
        loader: async () => (await axios.get("/students")).data,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CssVarsProvider>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </CssVarsProvider>
);
