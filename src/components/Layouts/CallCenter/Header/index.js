import React from "react";
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
        <span>ABOUT</span>
        <span>BOOK</span>
        <span>MANAGE</span>
        <span>HOME</span>
      </div>
    </div>
  );
};
export default Header;
