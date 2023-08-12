import React, { useState } from "react";
import "./s1Booking.scss";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
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

function HistoryItem({ data,  handleBookCar }) {
  let trip = JSON.parse(data.start)
  // console.log(data);
  return (
    <div className="configuration-card-Kpy" onClick={()=>handleBookCar(trip)}>
      <div className="content-qHX" >
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
  )
}
const S1Booking = () => {
  const [phone, setPhone] = useState("");
  const [errMsgPhone, setErrMsgPhone] = useState('');
  const [address, setAddress] = useState("");
  const [errMsgAdd, setErrMsgAdd] = useState('');
  const [listCar, setListCar] = useState([
    { "carType": 1, "name": "Honda 4 chỗ" },
    { "carType": 2, "name": "Honda 7 chỗ" }
  ]);
  const [car, setCar] = useState("");
  const [errMsgCar, setErrMsgCar] = useState('');
  const [history, setHistory] = useState([]);


  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");
  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/getallvehicles").then(function (response) {
  //     setListCar(response.data)

  //   }).catch(function (error) { console.log(error); })
  // }, [])

  const phoneRegex = /^[0-9]{10}$/;

  const handlePhoneInput = (e) => {
    setPhone(e.target.value);

    if (phoneRegex.test(e.target.value)) {
      console.log(phoneRegex.test(e.target.value));
      let convertPhone = '+84' + e.target.value.slice(1)
      axios
        .get("http://localhost:3001/v1/history/phone?phone=" + convertPhone)
        .then(function (response) {
          console.log(response.data);
          setHistory(response.data.trips)
        })
        .catch(function (error) {
        })
    } else {
      setHistory([])
    }
  };
  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleCarInput = (e) => {
    setCar(e.target.value);
  };

  const handleSubmit = () => {
    let flag = true
    if (!phoneRegex.test(phone)) {
      setErrMsgPhone("Số điện thoại không đúng định dạng")
      flag = false
    } else {
      setErrMsgPhone("")
    }

    if (!address) {
      setErrMsgAdd("Địa chỉ không được để trống")
      flag = false
    } else {
      setErrMsgAdd("")
    }

    if (!car) {
      setErrMsgCar("Loại xe không được để trống")
      flag = false
    } else {
      setErrMsgCar("")
    }

    if (flag) {
      const data = {
        "start": { "place": address },
        "phone": '+84' + phone.slice(1),
        "carType": car,
      }
      console.log(data);
      axios
        .post("http://localhost:3001/v1/booking/callcenters1", data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function (response) {
          console.log(response);
          if (response.data.statusCode == 200)
            setMessage("Định vị chuyến đi thành công")
          else setMessage("Định vị chuyến đi thất bại")
          setShowNotification(true)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }


  return (
    <React.Fragment>
      {showNotification && (
        <Notification message={message} onClose={handleNotificationClose} />
      )}
      <div className="st-book-driver-page-callcenter-C13">
        <p className="t-xe-cho-khch-QN1">ĐẶT XE CHO KHÁCH</p>
        <div className="section-header-Z1w">
          <p className="thng-tin-chung--SbX">
            <span className="thng-tin-chung--SbX-sub-0">Thông tin chung</span>
            <span className="thng-tin-chung--SbX-sub-1"> *</span>
          </p>
        </div>
        <div className="input-LTw">
          <div className="frame-79-GMb">
            <p className="s-in-thoi-o6d">Số điện thoại </p>
            <input
              className="website-hC1"
              placeholder="Nhập số điện thoại khách hàng"
              value={phone}
              onChange={handlePhoneInput}
            ></input>
            {errMsgPhone && <p className="errMsgInput">{errMsgPhone}</p>}
          </div>
        </div>
        <div className="input-P4q">
          <div className="frame-79-uos">
            <p className="a-ch-n-fo3">Địa chỉ đón</p>
            <input
              className="available-products-at-our-website-av1"
              placeholder="Nhập địa chỉ đón khách hàng"
              value={address}
              onChange={handleAddressInput}
            ></input>
            {errMsgAdd && <p className="errMsgInput">{errMsgAdd}</p>}

          </div>
        </div>
        <div className="input-mUh">
          <div className="frame-79-WBP">
            <p className="loi-xe-3SD">Loại xe</p>
            {/* <input
              className="available-products-at-our-website-BHX"
              placeholder="Nhập loại xe khách hàng mong muốn"
              value={car}
              onChange={handleCarInput}
            ></input> */}
            <select className="selectTypeCar" value={car} onChange={handleCarInput} >
              <option value="">Chọn loại xe khách hàng mong muốn</option>
              {listCar.map((item, index) => <option key={index} value={item.carType}>{item.name}</option>)}

            </select>
            {errMsgCar && <p className="errMsgInput">{errMsgCar}</p>}

          </div>
        </div>
        <div className="rectangle-1748-MbK"></div>
        <div className="general-section-header-gNh">
          <p className="lch-s-t-xe-zuB">Lịch sử đặt xe</p>
        </div>
        <p className="tm-kim-chuyn-i-gn-nht-t-st-khch-hng-G61">
          Tìm kiếm chuyến đi gần nhất từ SĐT khách hàng
        </p>
        <div className="listHistory">
          {history.map((item, index) => <HistoryItem key={index} data={item} handleBookCar={handleBookCar}/>)}

          <button className="input-tBw" onClick={handleSubmit} >ĐỊNH VỊ </button>
        </div>

      </div>
    </React.Fragment>
  );
};
export default S1Booking;
