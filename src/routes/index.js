import Home from "../pages/Home";
import BookDriver from "../pages/BookDriver";
import Login from "../pages/Login";
import HomeLayout from "../components/Layouts/CallCenter/HomeLayout";

export const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/book", component: BookDriver, layout: HomeLayout },
];

export const publicCallCenterRoutes = [];

export const publicAdminRoutes = [
  { path: "/admin/book", component: BookDriver, layout: HomeLayout },
];
