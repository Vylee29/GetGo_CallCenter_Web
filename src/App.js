import { Fragment } from "react";
import React from "react";
import Home from "../src/pages/Home";

import HomeLayout from "./components/Layouts/CallCenter/HomeLayout";
import BookDriver from "./pages/BookDriver";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = HomeLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
