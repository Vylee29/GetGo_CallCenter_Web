import Home from "../pages/Home";
import BookDriver from "../pages/BookDriver";
import Login from "../pages/Login";
import About from "../pages/About";
import ManageCustomer from "../pages/Manage/Customer";
import HomeLayout from "../components/Layouts/CallCenter/HomeLayout";
import s1Booking from "../pages/s1Booking";
import s2Booking from "../pages/s2Booking";

export const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home, layout: HomeLayout },
  { path: "/book/s1", component: s1Booking, layout: HomeLayout },
  { path: "/book/s2", component: s2Booking, layout: HomeLayout },
  { path: "/about", component: About, layout: HomeLayout },
  { path: "/manage/customer", component: ManageCustomer, layout: HomeLayout },
];
