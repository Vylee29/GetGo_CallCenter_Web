import { useState } from "react";
import styles from "./BookDriver.module.scss";
import SearchBar from "../../components/SearchBar";
import SaveInfoCard from "./SaveInfoCard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const BookDriver = () => {
  const [data, setData] = useState(() => {
    return { name: "", phoneNum: "" };
  });
  const handleClick = () => {
    MySwal.fire({
      // title: "Saving Detail",
      html: <SaveInfoCard data={data} setData={setData} />,
      showCloseButton: true,
      showConfirmButton: false,
      width: "347px",
      height: "530px",
      backdrop: "#fffff",
    });
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <SearchBar />
        <div className={styles.subContainer} onClick={handleClick}>
          <img
            src="https://www.shareicon.net/data/2017/02/15/878685_user_512x512.png"
            alt=""
          ></img>
          <p>{data.name || "Customer"}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83325 8.33337L9.99992 12.5L14.1666 8.33337"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`${styles.wrapper} mt-5 `}>
        <div className={styles.container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="163"
            viewBox="0 0 20 163"
            fill="none"
          >
            <circle cx="5" cy="4" r="4" fill="#FA8D1D" />
            <path d="M5.09375 11.998L5.09375 153.5" stroke="#3E4958" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.16 162.787C5.08 162.893 4.92 162.893 4.84 162.787L0.74 157.32C0.641115 157.188 0.735191 157 0.9 157H9.1C9.26481 157 9.35889 157.188 9.26 157.32L5.16 162.787Z"
              fill="#3E4958"
            />
          </svg>
          <div className={styles.text}>
            <span className={`${styles.text}`}>From:</span>
            <span>To:</span>
          </div>

          <div className={styles.address}>
            <input
              type="text"
              name=""
              placeholder="Enter customer’s pick-up location..."
              className={styles.fieldInput}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1102"
              height="2"
              viewBox="0 0 1102 2"
              fill="none"
              className={styles.line}
            >
              <path d="M0 1L1102 0.999975" stroke="#D5DDE0" />
            </svg>
            <input
              type="text"
              name=""
              placeholder="Enter customer’s drop-off location..."
              className={styles.fieldInput}
            ></input>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper} mt-5 justify-content-end`}>
        <button className="btn-1 primary">
          Find Driver
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            className={styles.icon}
          >
            <g clip-path="url(#clip0_603_6106)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6495 9.76525C11.4196 8.8025 11.8801 7.58131 11.8801 6.25256C11.8801 3.14454 9.36056 0.625 6.25256 0.625C3.14454 0.625 0.625 3.14454 0.625 6.25256C0.625 9.36056 3.14454 11.8801 6.25256 11.8801C7.58131 11.8801 8.8025 11.4196 9.76525 10.6495L13.3076 14.1919C13.5518 14.4361 13.9477 14.4361 14.1919 14.1919C14.4361 13.9477 14.4361 13.5518 14.1919 13.3076L10.6495 9.76525ZM6.25256 10.6358C3.83175 10.6358 1.86929 8.67337 1.86929 6.25256C1.86929 3.83175 3.83175 1.86929 6.25256 1.86929C8.67337 1.86929 10.6358 3.83175 10.6358 6.25256C10.6358 8.67337 8.67337 10.6358 6.25256 10.6358Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_603_6106">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default BookDriver;
