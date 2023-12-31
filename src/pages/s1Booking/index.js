import React, { useState } from "react";
import "./s1Booking.scss";
import axios from "axios";
import Select from "react-select";
import dayjs from 'dayjs';
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import DateTimePicker from 'react-datetime-picker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import 'react-datetime-picker/dist/DateTimePicker.css';
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <FontAwesomeIcon className="facircle" icon={faCheckCircle} />
      <span className="message">{message}</span>
      <button className="close-button" onClick={onClose}>
        Đóng
      </button>
    </div>
  );
};

function HistoryItem({ data, handleBookCar }) {

  let trip = JSON.parse(data.start);
  // console.log(data);
  return (
    <div className="configuration-card-Kpy" onClick={() => handleBookCar(trip)}>
      <div className="content-qHX">
        <div className="svgFrame">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="8" fill="#F3F4F6" />
            <path
              d="M18.9723 33.4552C11.4047 22.3473 10 21.2073 10 17.125C10 11.5331 14.4771 7 20 7C25.5229 7 30 11.5331 30 17.125C30 21.2073 28.5953 22.3473 21.0277 33.4552C20.5311 34.1816 19.4689 34.1816 18.9723 33.4552ZM20 21.3437C22.3012 21.3437 24.1667 19.455 24.1667 17.125C24.1667 14.795 22.3012 12.9062 20 12.9062C17.6988 12.9062 15.8333 14.795 15.8333 17.125C15.8333 19.455 17.6988 21.3437 20 21.3437Z"
              fill="black"
            />
          </svg>
        </div>
        <div>
          <p className="a-ch-th-nht-yed">{trip.place}</p>
          {/* <div className="frame-78-auK">
            <p
              className="hooded-bathrobe-classic-bathrobe-Wny"
              id="877:5227"
            >
              Thành phố Hồ Chí Minh
            </p>
            <p className="more-dsb" id="877:5228"></p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
const S1Booking = () => {

  const [listCar, setListCar] = useState([
    { carType: 1, name: "4 chỗ" },
    { carType: 2, name: "7 chỗ" },
  ]);


  const [phone, setPhone] = useState(() => {
    return { value: "", error: "", isValid: false };
  });
  const [address, setAddress] = useState(() => {
    return { value: "", error: "", isValid: false };
  });
  const [type, setType] = useState(() => {
    return { value: { carType: 1, name: "4 chỗ" }, error: "", isValid: true };
  });
  const [history, setHistory] = useState([]);
  // check user vip hay thường
  const [vip, setVip] = useState(false)

  // schedule
  const [timeSchedule, setTimeSchedule] = useState(dayjs(new Date((new Date()).getTime() + 10 * 10 * 1000)));
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");
  const handleNotificationClose = () => {
    setShowNotification(false);
  };
  useEffect(() => {
    const filter = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (phone.isValid === true) {
      const identifier = setTimeout(() => {
        if (!filter.test(phone.value) && phone.value.length !== 0) {
          setPhone({ ...phone, error: "Không đúng định dạng", isValid: false });
        } else if (phone.value.length === 0) {
          setPhone({ ...phone, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setPhone({ ...phone, error: "", isValid: true });
        }
      }, 500);

      return () => {
        clearTimeout(identifier);
      };
    }
  }, [phone.value]);
  useEffect(() => {
    if (address.isValid === true) {
      const identifier = setTimeout(() => {
        if (address.value.length === 0) {
          setAddress({
            ...address,
            error: "Thông tin bắt buộc",
            isValid: false,
          });
        } else {
          setAddress({ ...address, error: "", isValid: true });
        }
      }, 500);

      return () => {
        clearTimeout(identifier);
      };
    }
  }, [address.value]);
  useEffect(() => {
    if (type.isValid === true) {
      const identifier = setTimeout(() => {

        setType({ ...type, error: "", isValid: true });
      }, 500);

      return () => {
        clearTimeout(identifier);
      };
    }
  }, [type.value]);
  // useEffect(() => {
  //   axios.get("http://localhost:3000/getallvehicles").then(function (response) {
  //     setListCar(response.data)

  //   }).catch(function (error) { console.log(error); })
  // }, [])

  const phoneRegex = /^[0-9]{10}$/;

  const handlePhoneInput = (e) => {
    // setPhone(e.target.value);
    setPhone({
      ...phone,
      value: e.target.value,
      isValid: true,
    });
    if (phoneRegex.test(e.target.value)) {
      console.log(phoneRegex.test(e.target.value));
      let convertPhone = "+84" + e.target.value.slice(1);
      axios
        .get("http://localhost:3000/v1/history/phone?phone=" + convertPhone)
        .then(function (response) {
          console.log(response.data);
          setHistory(response.data.trips);
        })
        .catch(function (error) {
          console.log(error);
        });
      axios.get("http://localhost:3000/v1/phone?phone=" + convertPhone).then(reponse => {
        console.log(reponse.data.user_info.type)
        if (reponse.data.user_info.type === "User_Vip") {
          setVip(true)
        };

      }).catch(error => {
        console.log(error)
        setVip(false)

      })
    } else {
      setVip(false)
      setHistory([]);
    }
  };
  const handleAddressInput = (e) => {
    setAddress({
      ...address,
      value: e.target.value,
      isValid: true,
    });
  };
  const handleCarInput = (e) => {
    setType({
      ...type,
      value: e.target.value,
      isValid: true,
    });
    // setCar(e.target.value);
  };

  const handleSubmit = () => {
    if (phone.isValid & address.isValid & type.isValid) {
      const currentTime = new Date();
      const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);
      const timeScheduleIsGreaterThanOneHourLater = timeSchedule > oneHourLater;
      console.log(timeSchedule.toString());
      const data = {
        start: { place: address.value },
        phone: "+84" + phone.value.slice(1),
        carType: type.value,
        is_scheduled: timeScheduleIsGreaterThanOneHourLater,
        schedule_time: timeSchedule.toString(),
      };
      console.log(data);
      axios
        .post("http://localhost:3000/v1/booking/callcenters1", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
          toast.success("Định vị chuyến đi thành công")
          setAddress({ value: "", error: "", isValid: false })
          setType({ value: "", error: "", isValid: false })
          setPhone({ value: "", error: "", isValid: false })
          setHistory([])
          setVip(false)
        })
        .catch(function (error) {
          console.log('mayf har')
          toast.error('Xin lỗi quý khách server bị sập')

          console.log(error.response.data);
        });
    } else {
      console.log('heeeloo')
      toast.error('Vui lòng điền đầy đủ thông tin chính xác')
    }
  };

  const handleBookHistory = (trip) => {
    console.log('ype.isValid')
    console.log(type.isValid)
    if (type.isValid) {
      const currentTime = new Date();
      const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);
      const timeScheduleIsGreaterThanOneHourLater = timeSchedule > oneHourLater;

      const data = {
        start: trip,
        phone: "+84" + phone.value.slice(1),
        carType: type.value,
        is_scheduled: timeScheduleIsGreaterThanOneHourLater,
        schedule_time: timeSchedule.toString(),
      };
      axios
        .post("http://localhost:3000/v1/booking/callcenters1", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          console.log(response);
          toast.success("Đã điều phối chuyến đi thành công")
          setAddress({ value: "", error: "", isValid: false })
          setType({ value: "", error: "", isValid: false })
          setPhone({ value: "", error: "", isValid: false })
          setHistory([])
        })
        .catch(function (error) {
          toast.error("Xin lỗi server gặp một chút chục trặc")

        });
    }
  };

  return (
    <React.Fragment>
      {showNotification && (
        <Notification message={message} onClose={handleNotificationClose} />
      )}
      <ToastContainer />
      <div className="st-book-driver-page-callcenter-C13">
        <p className="t-xe-cho-khch-QN1">ĐẶT XE CHO KHÁCH</p>
        <div className="section-header-Z1w">
          <p className="thng-tin-chung--SbX">
            <span className="thng-tin-chung--SbX-sub-0">Thông tin chung</span>
            <span className="thng-tin-chung--SbX-sub-1"> *</span>
          </p>
          <p className="errorMsg">{phone.error}</p>
        </div>

        <div
          className="input-LTw"
          style={{
            borderColor: phone.error !== "" ? "red" : "#e5e7eb",
          }}
        >
          <div className="frame-79-GMb">
            <p
              className="s-in-thoi-o6d"
              style={{
                color: phone.error !== "" ? "red" : "#6b7280",
              }}
            >
              Số điện thoại{" "}
            </p>
            <input
              className="website-hC1"
              placeholder="Nhập số điện thoại khách hàng"
              value={phone.value}
              onChange={handlePhoneInput}
            ></input>
          </div>
        </div>

        <div className="d-flex flex-column">
          <p className="errorMsg errorMsgAddress">{address.error}</p>
          <div
            className="input-P4q"
            style={{
              borderColor: address.error !== "" ? "red" : "#e5e7eb",
            }}
          >
            <div className="frame-79-uos">
              <p
                className="a-ch-n-fo3"
                style={{
                  color: address.error !== "" ? "red" : "#6b7280",
                }}
              >
                Địa chỉ đón
              </p>
              <input
                className="available-products-at-our-website-av1"
                placeholder="Nhập địa chỉ đón khách hàng"
                onChange={handleAddressInput}
              ></input>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column">
          <p className="errorMsg errorMsgType">{type.error}</p>
          <div
            className="input-mUh"
            style={{
              borderColor: type.error !== "" ? "red" : "#e5e7eb",
            }}
          >
            <div className="frame-79-WBP">
              <p
                className="loi-xe-3SD"
                style={{
                  color: type.error !== "" ? "red" : "#6b7280",
                }}
              >
                Loại xe
              </p>
              {/* <input
                className="available-products-at-our-website-BHX"
                placeholder="Nhập loại xe khách hàng mong muốn"
                onChange={(e) =>
                  setType({
                    ...type,
                    value: e.target.value,
                    isValid: true,
                  })
                }
              ></input> */}
              <select
                className="selectTypeCar"
                value={type.value}
                onChange={handleCarInput}
              >
                {/* <option value={listCar[0]}></option> */}
                {listCar.map((item, index) => (
                  <option key={index} value={item.carType}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {vip && <div className="d-flex flex-column">
          {/* <p className="errorMsg errorMsgType">{type.error}</p> */}
          <div
            className="input-mUh1"

          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>

                <DateTimePicker
                  label="Controlled picker"
                  value={timeSchedule}
                  minDateTime={dayjs()}
                  onChange={(newValue) => setTimeSchedule(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        }

        {/* 
        <DateTimePicker
          label="Uncontrolled picker"
          defaultValue={dayjs('2022-04-17T15:30')}
        /> */}

        <div className="rectangle-1748-MbK"></div>
        <div className="general-section-header-gNh">
          <p className="lch-s-t-xe-zuB">Lịch sử đặt xe</p>
        </div>
        <p className="tm-kim-chuyn-i-gn-nht-t-st-khch-hng-G61">
          Tìm kiếm chuyến đi gần nhất từ SĐT khách hàng
        </p>
        <div className="listHistory">
          {history.map((item, index) => (
            <HistoryItem
              key={index}
              data={item}
              handleBookCar={handleBookHistory}
            />
          ))}

          <button className="input-tBw" onClick={handleSubmit}>
            ĐỊNH VỊ{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default S1Booking;
