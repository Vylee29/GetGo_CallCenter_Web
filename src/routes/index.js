import Home from "../pages/Home";
import BookDriver from "../pages/BookDriver";
import Login from "../pages/Login";
import About from "../pages/About";
import HomeLayout from "../components/Layouts/CallCenter/HomeLayout";

export const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/book", component: BookDriver, layout: HomeLayout },
  { path: "/about", component: About, layout: HomeLayout },
];
