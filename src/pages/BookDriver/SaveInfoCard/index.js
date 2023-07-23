import styles from "./SaveInfoCard.module.scss";
import { useState, useEffect } from "react";

const SaveInfoCard = ({ data, setData }) => {
  // const [data, setData] = useState(() => {
  //   return { name: "", phoneNum: "", isValid: false };
  // });
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState(() => {
    return { name: "", error: " ", isValid: false };
  });
  const [phoneNum, setPhoneNum] = useState(() => {
    return { phoneNum: "", error: " ", isValid: false };
  });
  const SaveData = () => {
    setData({ phoneNum: phoneNum.phoneNum, name: name.name });
  };
  useEffect(() => {
    if (isValid === true) {
      const identifier = setTimeout(() => {
        if (name.name.length === 0) {
          setName({ ...name, error: "Thông tin bắt buộc", isValid: false });
        } else {
          setName({ ...name, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [name.name]);
  useEffect(() => {
    if (isValid === true) {
      const filter = /^(84|0[3|5|7|8|9])+([0-9]{8})$/;
      const identifier = setTimeout(() => {
        if (!filter.test(phoneNum.phoneNum)) {
          setPhoneNum({
            ...phoneNum,
            error: "SĐT không đúng định dạng",
            isValid: false,
          });
        } else if (phoneNum.phoneNum.length === 0) {
          setPhoneNum({
            ...phoneNum,
            error: "Thông tin bắt buộc",
            isValid: false,
          });
        } else {
          setPhoneNum({ ...phoneNum, error: " ", isValid: true });
        }
      }, 500);
      return () => {
        clearTimeout(identifier);
      };
    }
  }, [phoneNum.phoneNum]);
  useEffect(() => {
    setIsValid(true);
  }, []);
  return (
    <div className={styles.wrapper}>
      <h3>Customer’s Information</h3>
      <div className={styles.container}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Customer's Name"
          onChange={(e) => setName({ ...name, name: e.target.value })}
        />
        <p className={styles.err}>{name.error}</p>
      </div>
      <div className={styles.container}>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="(+84) 9742 - 20702"
          onChange={(e) =>
            setPhoneNum({ ...phoneNum, phoneNum: e.target.value })
          }
        />
        <p className={styles.err}>{phoneNum.error}</p>
      </div>

      {name.isValid === true && phoneNum.isValid === true && (
        <button className="btn-1 primary" onClick={SaveData}>
          Save
        </button>
      )}
      {(name.isValid !== true || phoneNum.isValid !== true) && (
        <button className="btn-1 primary disabled">Save</button>
      )}
    </div>
  );
};
export default SaveInfoCard;
