import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import App from './App.jsx'
import { Login } from "./pages/Login";
import { Notes } from "./pages/Notes";
import { AuthProvider } from "./context/authContext/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/notes"></Navigate>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
