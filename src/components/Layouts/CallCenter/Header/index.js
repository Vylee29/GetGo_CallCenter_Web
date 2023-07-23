import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTg6tm5gEwUClI_kw-ACMLo3TVND3LYc8hPDk2FSzqbirhtZPTm"
          alt=""
        />
        <span>GetGo Call Center</span>
      </div>
      <div className={classes.right}>
        <Link to="/">
          <span>HOME</span>
        </Link>
        <span>MANAGE</span>
        <Link to="/book">
          <span>BOOK</span>
        </Link>
        <span>ABOUT</span>
      </div>
    </div>
  );
};
export default Header;
