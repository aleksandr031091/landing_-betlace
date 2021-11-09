import { lazy } from "react";

export const headerRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePages")),
  },
  {
    name: "About Us",
    path: "/AboutUs",
    exact: true,
  },

  {
    name: "Services and Expertise",
    path: "/Services",
    exact: true,
  },
  {
    name: "Product",
    path: "/Product",
    exact: true,
  },
  {
    name: "Value Proposition",
    path: "/Proposition",
    exact: true,
  },
  {
    name: "Case Study",
    path: "/Study",
    exact: true,
  },
  {
    name: "Contact Us",
    path: "/ContactUs",
    exact: true,
  },
];
