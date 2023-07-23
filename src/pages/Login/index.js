import React from "react";
import { useState, useEffect } from "react";
import styles from "./login.module.scss";
const Login = () => {
  const [data, setData] = useState(() => {
    return { email: "", pass: "", isValid: false };
  });
  const [email, setEmail] = useState(() => {
    return { value: "", error: " ", isValid: false };
  });
  const [pass, setPass] = useState(() => {
    return { value: "", error: " ", isValid: false };
  });
  useEffect(() => {
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (data.isValid === true) {
      const identifier = setTimeout(() => {
        if (!filter.test(data.email)) {
          setEmail({ ...email, error: "Email không đúng", isValid: false });
        } else if (data.email.length === 0) {
          setEmail({ ...email, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setEmail({ ...email, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [data.email]);
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
              Email
              <span>*</span>
            </label>
            <div>
              <input
                className={styles.fieldInput}
                id="field-name"
                name="email"
                type="text"
                placeholder="Nhập email"
                onChange={(e) =>
                  setData({ ...data, email: e.target.value, isValid: true })
                }
              />
            </div>
            <p className={styles.err}>{email.error}</p>
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

          <button className={styles.loginBtn}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
