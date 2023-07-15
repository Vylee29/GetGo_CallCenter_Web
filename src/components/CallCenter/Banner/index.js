import React from "react";
import classes from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <div className={classes.firstLine}>Discover the Colorful World</div>
        <div className={classes.secondLine}>Efficiency Booster</div>
        <div className={classes.thirdLine}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim.
        </div>
        <div className={classes.btn}>DISCOVER NOW</div>
      </div>
    </div>
  );
};
export default Banner;
