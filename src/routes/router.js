import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import ErrorElements from "../components/ErrorElements/ErrorElements";
import Home from "../components/Home/Home";
import Login from "../components/LoginAndRegister/Login";
import Register from "../components/LoginAndRegister/Register";
import Project from "../components/Project/Project";
import Articles from "../components/QuotesAndArticles/Articles";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/articles",
        element: (
          <PrivateRoutes>
            <Articles></Articles>
          </PrivateRoutes>
        ),
        loader: async () => {
          return fetch(`/json/Articles.json`);
        },
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
