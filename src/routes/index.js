import Home from "../pages/Home";
import BookDriver from "../pages/BookDriver";
import Login from "../pages/Login";
import HomeLayout from "../components/Layouts/CallCenter/HomeLayout";

export const publicRoutes = [
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/book", component: BookDriver, layout: HomeLayout },
  { path: "/login", component: Login, layout: null },
];
