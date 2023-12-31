import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import {
  faAngleDown,
  faHome,
  faHotel,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "~/contexts/DataContext";
const Header = () => {
  const [show, setShow] = useState(false);
  // const { LogoutHandler } = useContext(DataContext)
  // const Nav = useNavigate()
  // const handleLogout = () => {
  //     LogoutHandler()
  //     Nav('/login')
  // }
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {/* <FontAwesomeIcon icon={faBars} onClick={onClick} className={styles.menu} /> */}

        <Link to={"/admin"} className={styles.link}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMgiTOs33abnEsiYTsqGrPaj5JsZJOjS-gQ&usqp=CAU" />
          <span>GetGo Admin</span>
        </Link>
      </div>

      <div className={styles.right}>
        <img src="https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png" />
        <span>Hello, Admin</span>
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />

        {show && (
          <div className={styles.menu}>
            <Link to={"/admin"} className={styles.menuItem}>
              <FontAwesomeIcon icon={faHome} />
              <span>Trang chủ</span>
            </Link>
            <Link to={"/admin/hotel"} className={styles.menuItem}>
              <FontAwesomeIcon icon={faHotel} />
              <span>Quản lý khách sạn</span>
            </Link>
            <Link to={"/admin/account"} className={styles.menuItem}>
              <FontAwesomeIcon icon={faUser} />
              <span>Quản lý người dùng</span>
            </Link>
            <div className={styles.menuItem}>
              <FontAwesomeIcon icon={faSignOut} />
              <span>Đăng xuất</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
