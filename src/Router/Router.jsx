import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";

import AboutUs from "../components/pages/AboutUs/AboutUs";
import ErrorPage from "../components/pages/ErrorPage";
import AllEvents from "./../components/pages/Events/AllEvents";
import ContactUs from "../components/pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/events-data.json"),
      },

      {
        path: "/services",
        element: <AllEvents />,
        loader: () => fetch("/events-data.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
