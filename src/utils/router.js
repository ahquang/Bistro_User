import { createBrowserRouter } from "react-router-dom";
import Home from "../container/Home";
import Menu from "../container/Menu"; 
import Booking from "../container/Booking";
import Contact from "../container/Contact";
import About from "../container/About";
import Order from "../container/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/home/booking",
    element: <Booking />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/order",
    element: <Order />,
  }
]);
