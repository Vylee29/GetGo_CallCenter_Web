import styles from "./SearchBar.module.scss";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
const SearchBar = ({ dataUser, setDataUser }) => {
  const [phoneNum, setPhoneNum] = useState(() => {
    return { value: "", error: " ", isValid: false };
  });

  const handleSearch = () => {
    axios
      .get("http://localhost:8800/profile/order/detail", {
        params: { phoneNum: phoneNum },
      })
      .then(function (response) {
        Swal.fire(
          "Đã tìm thấy khách hàng",
          "Nhấn nút để đặt xe cho khách",
          "success"
        );
        setDataUser(response.data);
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire(
          error.response.data,
          "Nhấn nút để thực hiện lại việc tìm kiếm",
          "error"
        );
        console.log(error);
      });
  };
  return (
    <div>
      <div className="d-flex mb-2">
        <div className="input-group">
          <div id="search-autocomplete" className="form-outline">
            <input
              type="text"
              id="phoneInput"
              className={`form-control ${styles.form1}`}
              placeholder="Nhập SĐT khách hàng..."
              onChange={(e) => {
                setPhoneNum({ ...phoneNum, value: e.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className={`btn btn-primary ${styles.btnSearch}`}
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <g clipPath="url(#clip0_603_6106)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
      {/* <div className={`d-flex justify-content-around d-none ${styles.box}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          className={styles.icon}
        >
          <g clipPath="url(#clip0_169_1158)">
            <path
              d="M11.9 10.6875C10.8109 10.6875 10.2873 11.25 8.5 11.25C6.71272 11.25 6.19286 10.6875 5.1 10.6875C2.28437 10.6875 0 12.8039 0 15.4125V16.3125C0 17.2441 0.815848 18 1.82143 18H15.1786C16.1842 18 17 17.2441 17 16.3125V15.4125C17 12.8039 14.7156 10.6875 11.9 10.6875ZM15.1786 16.3125H1.82143V15.4125C1.82143 13.7391 3.29375 12.375 5.1 12.375C5.65402 12.375 6.55335 12.9375 8.5 12.9375C10.4618 12.9375 11.3422 12.375 11.9 12.375C13.7063 12.375 15.1786 13.7391 15.1786 15.4125V16.3125ZM8.5 10.125C11.5167 10.125 13.9643 7.85742 13.9643 5.0625C13.9643 2.26758 11.5167 0 8.5 0C5.48326 0 3.03571 2.26758 3.03571 5.0625C3.03571 7.85742 5.48326 10.125 8.5 10.125ZM8.5 1.6875C10.5074 1.6875 12.1429 3.20273 12.1429 5.0625C12.1429 6.92227 10.5074 8.4375 8.5 8.4375C6.49263 8.4375 4.85714 6.92227 4.85714 5.0625C4.85714 3.20273 6.49263 1.6875 8.5 1.6875Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_169_1158">
              <rect width="17" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.infor}>
          <div>Nguyễn Đăng Mạnh Tú</div>
          <div>0974220702</div>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png"
          alt=""
          className={styles.vip_icon}
        />
      </div> */}
    </div>
  );
};
export default SearchBar;
