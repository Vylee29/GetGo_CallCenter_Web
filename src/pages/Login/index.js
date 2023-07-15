import React from "react";
import styles from "./login.module.scss";
const Login = () => {
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
              />
            </div>
            <p className={styles.err}></p>
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
              />
            </div>
          </div>

          <button className={styles.loginBtn}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
