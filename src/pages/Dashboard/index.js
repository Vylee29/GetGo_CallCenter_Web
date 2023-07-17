import React from "react";
import classes from "./Dashboard.module.scss";
const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.container} ${classes.containerCustomer}`}>
        <div className={classes.text}>
          <div>Manage</div>
          <div>Customer</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M28 23.724C33.1546 23.724 37.3333 19.6432 37.3333 14.6094C37.3333 9.57555 33.1546 5.49481 28 5.49481C22.8453 5.49481 18.6667 9.57555 18.6667 14.6094C18.6667 19.6432 22.8453 23.724 28 23.724Z"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M46.6608 41.9531C46.6667 41.579 46.6667 41.1989 46.6667 40.8138C46.6667 35.1507 38.3094 30.5599 28 30.5599C17.6907 30.5599 9.33334 35.1507 9.33334 40.8138C9.33334 46.4769 9.33334 51.0677 28 51.0677C33.2057 51.0677 36.9595 50.7106 39.6667 50.0728"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className={`${classes.container} ${classes.containerDriver}`}>
        <div className={classes.text}>
          <div>Manage</div>
          <div>Driver</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5641 45.5H26.8333V36.2307C21.9665 36.7688 18.1021 40.6331 17.5641 45.5ZM29.1667 36.2307V45.5H38.4359C37.8979 40.6331 34.0335 36.7688 29.1667 36.2307ZM38.4361 47.8333C38.2731 49.3088 37.8048 50.6906 37.096 51.9158L39.1158 53.0841C40.2084 51.1954 40.8333 49.0022 40.8333 46.6666C40.8333 39.579 35.0876 33.8333 28 33.8333C20.9124 33.8333 15.1667 39.579 15.1667 46.6666C15.1667 49.0022 15.7917 51.1954 16.8842 53.0841L18.904 51.9158C18.1952 50.6906 17.7269 49.3088 17.5639 47.8333H38.4361Z"
            fill="white"
          />
          <path
            d="M31.5 46.6667C31.5 48.5997 29.933 50.1667 28 50.1667C26.0669 50.1667 24.5 48.5997 24.5 46.6667C24.5 44.7336 26.0669 43.1667 28 43.1667C29.933 43.1667 31.5 44.7336 31.5 46.6667Z"
            fill="white"
          />
          <path
            d="M36.8487 42.9857C36.5152 41.741 37.2539 40.4615 38.4986 40.128L40.7525 39.5241C41.9972 39.1906 43.2767 39.9293 43.6101 41.174L44.818 45.6817C45.1515 46.9265 44.4128 48.2059 43.1681 48.5394L40.9143 49.1434C39.6695 49.4768 38.3901 48.7382 38.0566 47.4934L36.8487 42.9857Z"
            fill="white"
          />
          <path
            d="M12.3899 41.173C12.7234 39.9283 14.0028 39.1896 15.2476 39.5231L17.5014 40.1271C18.7461 40.4606 19.4848 41.74 19.1513 42.9848L17.9436 47.4924C17.61 48.7372 16.3305 49.4759 15.0858 49.1424L12.8319 48.5384C11.5872 48.2049 10.8485 46.9255 11.182 45.6807L12.3899 41.173Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5 19.8333V16.3333H19.8333V19.8333C19.8333 24.3436 23.4897 28 28 28C32.5103 28 36.1667 24.3436 36.1667 19.8333V16.3333H38.5V19.8333C38.5 25.6323 33.799 30.3333 28 30.3333C22.201 30.3333 17.5 25.6323 17.5 19.8333Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0934 12.8334H39.9576C40.0415 12.6193 40.1321 12.3669 40.2222 12.0781L40.2364 12.0329C40.551 11.0257 40.8333 10.122 40.8333 8.27958C40.8333 7.34532 40.2263 6.55862 39.4228 5.93658C38.6087 5.30636 37.4969 4.76678 36.2585 4.32695C33.7784 3.44616 30.6506 2.91669 28 2.91669C25.3495 2.91669 22.2216 3.44616 19.7415 4.32695C18.5031 4.76678 17.3913 5.30636 16.5772 5.93658C15.7737 6.55862 15.1667 7.34532 15.1667 8.27958C15.1667 9.98999 15.4527 10.8914 15.7466 11.8178C15.774 11.9041 15.8015 11.9906 15.8288 12.0779C15.9189 12.3668 16.0095 12.6192 16.0934 12.8334ZM23.3333 9.33335C23.3333 8.68903 23.8557 8.16669 24.5 8.16669H31.5C32.1444 8.16669 32.6667 8.68903 32.6667 9.33335C32.6667 9.97768 32.1444 10.5 31.5 10.5H24.5C23.8557 10.5 23.3333 9.97768 23.3333 9.33335Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3583 15.6457C16.4113 15.3683 16.6653 15.1667 16.9617 15.1667H39.0383C39.3347 15.1667 39.5887 15.3683 39.6417 15.6457L39.6419 15.6471L39.6423 15.6485L39.6429 15.6519L39.6443 15.6598L39.6476 15.6811C39.6501 15.6975 39.6529 15.7186 39.6556 15.744C39.661 15.7947 39.6659 15.8628 39.6666 15.9458C39.668 16.1118 39.6527 16.339 39.5898 16.6065C39.4626 17.1472 39.1455 17.8346 38.4193 18.5027C36.9795 19.8271 34.0214 21 28 21C21.9786 21 19.0205 19.8271 17.5807 18.5027C16.8545 17.8346 16.5374 17.1472 16.4102 16.6065C16.3473 16.339 16.3321 16.1118 16.3335 15.9458C16.3342 15.8628 16.339 15.7947 16.3444 15.744C16.3471 15.7186 16.3499 15.6975 16.3524 15.6811L16.3557 15.6598L16.3571 15.6519L16.3577 15.6485L16.3581 15.6471L16.3583 15.6457Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={`${classes.container} ${classes.containerHistory}`}>
        <div className={classes.text}>
          <div>Manage</div>
          <div>History</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.8503 11.405C20.706 2.87759 35.102 2.96827 44.0118 11.56C52.9256 20.1554 53.0159 34.0454 44.1611 42.584C35.3061 51.1225 20.9018 51.0354 11.9881 42.4399C6.70574 37.3464 4.52443 30.3973 5.4611 23.8077C5.59235 22.8843 6.475 22.2385 7.43253 22.365C8.39008 22.4916 9.05991 23.3426 8.92868 24.266C8.1354 29.8467 9.98158 35.7322 14.4629 40.0536C22.0334 47.3537 34.2216 47.3953 41.6862 40.1974C49.1507 32.9994 49.1073 21.2466 41.5368 13.9465C33.9703 6.65012 21.7907 6.60463 14.3251 13.7915L16.0698 13.8C17.0363 13.8047 17.8158 14.564 17.811 15.496C17.8061 16.4279 17.0187 17.1796 16.0522 17.1749L10.1126 17.1462C9.15294 17.1415 8.37622 16.3925 8.37139 15.4672L8.34155 9.73967C8.33667 8.80772 9.11624 8.04841 10.0827 8.04371C11.0492 8.03903 11.8366 8.79075 11.8415 9.72272L11.8503 11.405ZM27.9998 16.3123C28.9662 16.3123 29.7498 17.0678 29.7498 17.9998V26.3009L35.0705 31.4316C35.7539 32.0906 35.7539 33.1591 35.0705 33.818C34.387 34.477 33.2789 34.477 32.5957 33.818L26.2498 27.6989V17.9998C26.2498 17.0678 27.0333 16.3123 27.9998 16.3123Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
export default Dashboard;