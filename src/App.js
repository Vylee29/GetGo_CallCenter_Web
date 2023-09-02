import { Fragment, useRef, useEffect, useState } from "react";
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

import { publicRoutes, publicRoutesS1, publicRoutesS2, publicRoutesS3 } from "./routes";
import { socket } from './socket';
import { AuthContextProvider } from "./contexts/auth-context";

function renderRoutes(routes) {
  return routes.map((route, index) => {
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
  });
}
function App() {
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     // Đăng nhập thành công, thiết lập kết nối socket
  //     // const newSocket = io('http://localhost:3000'); // Thay đổi URL tới địa chỉ của server
  //     // setSocket(newSocket);

  //     // Xử lý sự kiện khi kết nối thành công
  //     socket.on('connect', () => {
  //       console.log('Connected to server socket');
  //     });

  //     // Xử lý sự kiện khi nhận được dữ liệu từ server
  //     socket.on('message', (data) => {
  //       console.log('Received data from server:', data);
  //     });

  //     // Xử lý sự kiện khi bị ngắt kết nối
  //     socket.on('disconnect', () => {
  //       console.log('Disconnected from server socket');
  //     });

  //     // Đảm bảo ngắt kết nối khi component bị hủy hoặc đăng xuất
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }
  // }, [isLoggedIn]);
  const [render, setRender] = useState(true)
  const user = JSON.parse(localStorage.getItem('user')) || {}
  console.log('in ra ròi nè')
  return (
    <AuthContextProvider render={render} setRender={setRender}>
      <Router>
        <Routes>
          {renderRoutes(publicRoutes)}

          {user?.type === "CallCenterS2" && renderRoutes(publicRoutesS2)}
          {user?.type === "CallCenterS3" && renderRoutes(publicRoutesS3)}
          {user?.type === "CallCenterS1" && renderRoutes(publicRoutesS1)}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
