import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import ErrorElements from "../components/ErrorElements/ErrorElements";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Project from "../components/Project/Project";
import Articles from "../components/QuotesAndArticles/Articles";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
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
        element: <Articles></Articles>,
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
        element: <Login></Login>
      },
    ],
  },
]);

export default router;
