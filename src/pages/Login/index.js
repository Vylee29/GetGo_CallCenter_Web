import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import styles from "./login.module.scss";
// import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const authCtx = useContext(AuthContext)

  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const Nav = useNavigate();
  const [phone, setPhone] = useState(() => {
    return { value: "", error: "", isValid: false };
  });
  const [pass, setPass] = useState(() => {
    return { value: "", error: "", isValid: false };
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // if (localStorage.getItem('user') !== undefined) {
      //     localStorage.removeItem('user')
      // }
      const res = await axios.post("http://localhost:3000/v1/users/login", {
        phone: phone.value,
        password: pass.value,
        // phone: "+84666666666",
        // password: "000000",
      });
      console.log(res);
      // toast.success('Đăng nhập thành công!');
      // await Swal.fire(
      //   "Đăng nhập thành công",
      //   "Nhấn nút để đến trang chủ",
      //   "success"
      // );
      console.log(res.data.user_info)
      authCtx.onLogin(res.data.user_info);
      toast.success('Đăng nhập thành công!');
      if (res.data.user_info.type === "CallCenterS1")
        Nav('/book/s1')
      else if (res.data.user_info.type === "CallCenterS2")
        Nav('/book/s2')
      else
        Nav('/book/s3')

      //Nav(res.data.link);
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.error);

      // await Swal.fire(
      //   err.response.data.error,
      //   "Nhấn nút để thực hiện lại việc đăng nhập",
      //   "error"
      // );
    }
  };
  const handlePhoneNumber = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue.startsWith("0")
      ? "+84" + inputValue.slice(1)
      : inputValue;
    setPhone({
      ...phone,
      value: formattedValue,
      isValid: true,
    });
  };
  useEffect(() => {
    if (phone.isValid === true) {
      const identifier = setTimeout(() => {
        if (phone.value.length === 0) {
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
    if (pass.isValid === true) {
      const identifier = setTimeout(() => {
        if (pass.value.length === 0) {
          setPass({ ...pass, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setPass({ ...pass, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [pass.value]);
  return (
    <div className={styles.wrap}>
      <ToastContainer />
      <div className={styles.introduction}>
        <div className={styles.infoWeb}>
          <img
            className={styles.logo}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTg6tm5gEwUClI_kw-ACMLo3TVND3LYc8hPDk2FSzqbirhtZPTm"
            alt=""
          />

          <div>
            <p className={styles.nameOfWeb}>GetGo Call Center</p>
            <p className={styles.description}>Excellence in every call.</p>
          </div>
        </div>
        <p className={styles.title1}>Welcome Back</p>
        <img
          className={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQzXO4LTsDVA9eXc2v5Vr16-joNVnfNieiwII9SSWBkGBOv8N"
          alt=""
        />
      </div>
      <div className={styles.triangleDown}></div>
      <div className={styles.triangleUp}></div>
      <div className={styles.login}>
        <div>
          <p className={styles.title}>Đăng nhập vào tài khoản</p>
          <div>
            <label className={styles.label}>
              Số điện thoại
              <span>*</span>
            </label>
            <div>
              <input
                className={styles.fieldInput}
                id="field-name"
                name="phone"
                type="text"
                placeholder="Nhập số điện thoại"
                // value='0666666666'
                onChange={handlePhoneNumber}
              />
            </div>
            <p className={styles.err}>{phone.error}</p>
          </div>
          <div>
            <label className={styles.label}>
              Mật khẩu
              <span>*</span>
            </label>
            <div>
              <input
                className={styles.fieldInput}
                id="field-name"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu"
                // value='000000'
                onChange={(e) =>
                  setPass({ ...pass, value: e.target.value, isValid: true })
                }
              />
            </div>
            <p className={styles.err}>{pass.error}</p>
          </div>

          <button className={styles.loginBtn} onClick={handleLogin}>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
