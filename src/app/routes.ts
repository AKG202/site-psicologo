import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Neurociencia from "./pages/Neurociencia";
import Psicologia from "./pages/Psicologia";
import Terapia from "./pages/Terapia";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "neurociencia", Component: Neurociencia },
      { path: "psicologia", Component: Psicologia },
      { path: "terapia", Component: Terapia },
    ],
  },
]);
