import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Project from "../components/Project/Project";
import Main from "../layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
