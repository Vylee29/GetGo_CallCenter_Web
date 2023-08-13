import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";
const Login = () => {
  const authCtx = useContext(AuthContext)
  const Nav = useNavigate();
  const [data, setData] = useState(() => {
    return { phone: "+84888888888", pass: "000000", isValid: false };
  });
  const [phone, setPhone] = useState(() => {
    return { value: "", error: " ", isValid: false };
  });
  const [pass, setPass] = useState(() => {
    return { value: "", error: " ", isValid: false };
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // if (localStorage.getItem('user') !== undefined) {
      //     localStorage.removeItem('user')
      // }
      console.log(data)
      const res = await axios.post("http://localhost:3000/v1/users/login", {
        phone: data.phone,
        password: data.pass,
      });
      //await LoginHandler(res.data.emailAvailable);
      await Swal.fire(
        "Đăng nhập thành công",
        "Nhấn nút để đến trang chủ",
        "success"
      );
      console.log(res.data.user_info)
      authCtx.onLogin(res.data.user_info);
      Nav('/')
      //Nav(res.data.link);
    } catch (err) {
      await Swal.fire(
        err.response.data.error,
        "Nhấn nút để thực hiện lại việc đăng nhập",
        "error"
      );
    }
  };
  useEffect(() => {
    // const filter =
    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (data.isValid === true) {
      const identifier = setTimeout(() => {
        // if (!filter.test(data.email)) {
        //   setEmail({ ...email, error: "Email không đúng", isValid: false });
        // } else
        if (data.phone.length === 0) {
          setPhone({ ...phone, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setPhone({ ...phone, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [data.phone]);
  useEffect(() => {
    if (data.isValid === true) {
      const identifier = setTimeout(() => {
        if (data.pass.length === 0) {
          setPass({ ...pass, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setPass({ ...pass, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [data.pass]);
  return (
    <div className={styles.wrap}>
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
        {/* <p className={styles.title2}>Solution for a great trip</p> */}
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
              Phone
              <span>*</span>
            </label>
            <div>
              <input
                className={styles.fieldInput}
                id="field-name"
                name="phone"
                type="text"
                placeholder="Nhập số điện thoại"
                onChange={(e) =>
                  setData({
                    ...data,
                    phone: "+84" + e.target.value,
                    isValid: true,
                  })
                }
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
                onChange={(e) =>
                  setData({ ...data, pass: e.target.value, isValid: true })
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
