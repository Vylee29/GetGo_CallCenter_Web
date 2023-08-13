import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faHome,
  faHotel,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import AuthContext from "../../../../contexts/auth-context";
const Header = () => {
  const [show, setShow] = useState(false);
  const Nav = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || null
  const auth = useContext(AuthContext)
  //const { LogoutHandler } = useContext(DataContext)
  const handleLogout = () => {
    //LogoutHandler();
    Nav("/login");
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Link to="/">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTg6tm5gEwUClI_kw-ACMLo3TVND3LYc8hPDk2FSzqbirhtZPTm"
            alt=""
          />
          <span>GetGo Call Center</span>
        </Link>
      </div>
      <div className={classes.right}>
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to="/manage/customer">
          <span>MANAGE</span>
        </Link>
        {user?.type === "CallCenterS1" ? <Link to="/book/s1">
          <span>BOOK</span>
        </Link> : user?.type === "CallCenterS2" ? <Link to="/book/s2">
          <span>LOCATION</span>
        </Link> : user?.type === "CallCenterS3" ? <Link to="/book/s3">
          <span>COORDINATOR</span>
        </Link> : <Link to="/login">
          <span>BOOK</span>
        </Link>}
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
      </div>
      {user !== null ? <div className={`${classes.rightAva} `} onClick={() => setShow(!show)}>
        <img src="https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png" />
        <span>Hello, Call Center</span>
        <FontAwesomeIcon icon={faAngleDown} className={classes.icon} />

        {show && (
          <div className={classes.menu}>
            <Link to={"/"} className={classes.menuItem}>
              <FontAwesomeIcon icon={faHome} className={classes.icon} />
              <span>Trang chủ</span>
            </Link>
            <div onClick={auth.onLogout} className={classes.menuItem}>
              <FontAwesomeIcon icon={faSignOut} className={classes.icon} />
              <span>Đăng xuất</span>
            </div>
          </div>
        )}
      </div> : <div className={`${classes.rightAva} `}>
        <Link to="/login">
          <button className="btn-1">Đăng nhập</button>
        </Link>
      </div>}
      {/* <div className={`${classes.rightAva} `}>
        <Link to="/login">
          <button className="btn-1">Đăng nhập</button>
        </Link>
      </div> */}
    </div>
  );
};
export default Header;
