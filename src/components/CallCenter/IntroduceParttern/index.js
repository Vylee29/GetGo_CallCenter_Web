import React from "react";
import classes from "./IntroduceParttern.module.scss";
const IntroduceParttern = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.component}>
        <img src="https://static-00.iconduck.com/assets.00/call-center-icon-2048x2047-wn5rj4y3.png" />
        <div className={classes.title}>Online Support</div>
        <div className={classes.content}>
          Lorem ipsum dolor sit amet, consecteturadipis icing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={classes.component}>
        <img src="https://thumbs.dreamstime.com/b/open-around-clock-rgb-color-icon-hour-service-everyday-store-highly-available-industry-twenty-four-seven-hours-commerce-188763313.jpg" />
        <div className={classes.title}>24/7 Round the Clock</div>
        <div className={classes.content}>
          Lorem ipsum dolor sit amet, consecteturadipis icing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className={classes.component}>
        <img src="https://cdn-icons-png.flaticon.com/512/3591/3591681.png" />
        <div className={classes.title}>Handling All Issues</div>
        <div className={classes.content}>
          Lorem ipsum dolor sit amet, consecteturadipis icing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};
export default IntroduceParttern;
