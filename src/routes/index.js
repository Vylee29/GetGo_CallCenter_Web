import Home from "../pages/Home";
import BookDriver from "../pages/BookDriver";
import Login from "../pages/Login";
import About from "../pages/About";
import ManageCustomer from "../pages/Manage/Customer";
import HomeLayout from "../components/Layouts/CallCenter/HomeLayout";
import S1Booking from "../pages/s1Booking";
import s2Booking from "../pages/s2Booking";
import s3Booking from "../pages/s3Booking";

export const publicRoutes = [
  { path: "/login", component: Login, layout: null },
  { path: "/", component: Home, layout: HomeLayout },
  // { path: "/book/s1", component: S1Booking, layout: HomeLayout },
  // { path: "/book/s2", component: s2Booking, layout: HomeLayout },
  // { path: "/book/s3", component: s3Booking, layout: HomeLayout },
  { path: "/about", component: About, layout: HomeLayout },
  { path: "/manage/customer", component: ManageCustomer, layout: HomeLayout },
];
export const publicRoutesS1 = [
  { path: "/book/s1", component: S1Booking, layout: HomeLayout },
];
export const publicRoutesS2 = [
  { path: "/book/s2", component: s2Booking, layout: HomeLayout },

];
export const publicRoutesS3 = [
  { path: "/book/s3", component: s3Booking, layout: HomeLayout },
];