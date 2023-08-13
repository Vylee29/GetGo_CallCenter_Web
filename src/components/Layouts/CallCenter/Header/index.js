import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
const Header = () => {
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
        <Link to="/book/s3">
          <span>BOOK</span>
        </Link>
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
