import { useState, useRef, useEffect } from "react";
import styles from "./BookDriver.module.scss";
import SearchBar from "../../components/SearchBar";
import SaveInfoCard from "./SaveInfoCard";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
const MySwal = withReactContent(Swal);
const BookDriver = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBLAnygT3LzvYGdMD43t12_zw79CXC0O2w",
    libraries: ["places"],
  });

  const [dataUser, setDataUser] = useState(() => {
    return { name: "", phoneNum: "" };
  });
  const handleClick = () => {
    MySwal.fire({
      // title: "Saving Detail",
      html: <SaveInfoCard data={dataUser} setData={setDataUser} />,
      showCloseButton: true,
      showConfirmButton: false,
      width: "347px",
      height: "530px",
      backdrop: "#fffff",
    });
  };
  const handleFindDriverAndSaveClient = async (e) => {
    e.preventDefault();
    try {
      // if (localStorage.getItem('user') !== undefined) {
      //     localStorage.removeItem('user')
      // }
      const res = await axios.post("http://localhost:8800/auth/login", {
        Name: dataUser.name,
        PhoneNum: dataUser.phoneNum,
      });
      const res1 = await axios.post("http://localhost:8800/auth/login", {
        Name: dataUser.name,
        PhoneNum: dataUser.phoneNum,
        //PickupAddress:
        //DropoffAddress:
      });
      //await LoginHandler(res.data.emailAvailable)
      //await Swal.fire('Đăng nhập thành công', 'Nhấn nút để đến trang chủ', 'success')
      //Nav(res.data.link)
    } catch (err) {
      console.log(err);
      //await Swal.fire(err.response.data, 'Nhấn nút để thực hiện lại việc đăng nhập', 'error')
    }
  };
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const data1 = [
    "Australia",
    "Austria",
    "Brazil",
    "Canada",
    "Denmark",
    "Egypt",
    "France",
    "Germany",
    "USA",
    "Vietnam",
  ];
  // const {
  //   ready,
  //   value,
  //   setValue,
  //   suggestions: { status, dataPlace },
  //   clearSuggestions,
  // } = usePlacesAutocomplete();

  // const handleSelect = async (address) => {
  //   setValue(address, false);
  //   clearSuggestions();

  //   const results = await getGeocode({ address });
  //   const { lat, lng } = await getLatLng(results[0]);
  //   // setSelected({ lat, lng });
  // };
  // Danh sách cố định của các địa điểm

  // const {
  //   isOpen,
  //   getMenuProps,
  //   getInputProps,
  //   getComboboxProps,
  //   highlightedIndex,
  //   getItemProps,
  //   inputValue,
  //   setInputValue,
  // } = useCombobox({
  //   items: options,
  //   onInputValueChange: ({ inputValue }) => {
  //     setInputValue(inputValue);
  //   },
  //   onSelectedItemChange: ({ selectedItem }) => {
  //     if (selectedItem) {
  //       // Xử lý khi một lựa chọn được chọn
  //       console.log("Selected Item:", selectedItem);
  //     }
  //   },
  // });
  // const [items, setItems] = useState([]);

  // Hàm gọi API để lấy dữ liệu PlaceID
  const getPlaceIDFromAPI = async (inputValue) => {
    // Gọi API và lấy dữ liệu PlaceID dựa vào giá trị inputValue
    // Ví dụ: const response = await fetch(https://your-api-url/${inputValue});
    // const data = await response.json();
    // return data;
    // Trong ví dụ này, chúng ta sẽ sử dụng danh sách cố định làm mẫu
    setValue(inputValue);
    return [
      { value: "PlaceID-1", description: "Place 1" },
      { value: "PlaceID-2", description: "Place 2" },
      { value: "PlaceID-3", description: "Place 3" },
    ];
  };
  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhh");
  console.log(data);
  console.log(status);
  return isLoaded ? (
    <div>
      <div className={styles.wrapper}>
        <SearchBar dataUser={dataUser} setDataUser={setDataUser} />
        <div className={styles.subContainer} onClick={handleClick}>
          <img
            src="https://www.shareicon.net/data/2017/02/15/878685_user_512x512.png"
            alt=""
          ></img>
          <p>{dataUser.name || "Customer"}</p>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.16 162.787C5.08 162.893 4.92 162.893 4.84 162.787L0.74 157.32C0.641115 157.188 0.735191 157 0.9 157H9.1C9.26481 157 9.35889 157.188 9.26 157.32L5.16 162.787Z"
              fill="#3E4958"
            />
          </svg>
          <div className={styles.text}>
            <span className={`${styles.text}`}>From:</span>
            <span>To:</span>
          </div>

          <div className={styles.address}>
            {/* địa điểm đón */}
            <input
              type="text"
              name=""
              placeholder="Enter customer’s pick-up location..."
              className={styles.fieldInput}
              onChange={async (event) => {
                const inputValue = event.target.value;
                if (inputValue) {
                  console.log(inputValue);
                  setValue(inputValue);
                } else {
                  // Nếu trường input rỗng, đặt items về rỗng để không hiển thị gợi ý
                  // setItems([]);
                }
              }}
            ></input>
            <div className={styles.list}>
              {data.map((location, index) => {
                return (
                  <div key={index} className={styles.listItem}>
                    {location}
                  </div>
                );
              })}
            </div>

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
  ) : (
    <div>heeeeeee</div>
  );
};
export default BookDriver;
