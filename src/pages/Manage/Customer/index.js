import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
  NavBar,
  NavHandle,
  DropdownButton,
  DropdownOption,
} from "../../../components";
import { Table } from "react-bootstrap";
import styles from "../Manage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withReactContent from "sweetalert2-react-content";
import Axios from "axios";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

function HotelTable({ data, option }) {
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    if (data) {
      let total = Math.floor(data.length / 4);
      if (data.length % 4 !== 0) total++;
      setTotalPage(total);
    }
  }, [data]);

  return (
    <div className={styles.tableWrapper}>
      <Table className={styles.cusTable}>
        <thead>
          <tr>
            <th className={styles.center}>
              <input type="checkbox" className={styles.checkBox} />
            </th>
            <th>
              <h3 className={styles.title}>ID</h3>
            </th>
            <th>
              <h3 className={styles.title}>Tên khách hàng</h3>
            </th>
            <th>
              <h3 className={styles.title}>Số điện thoại</h3>
            </th>
            <th>
              <h3 className={styles.title}>Loại khách hàng</h3>
            </th>
            <th>
              <h3 className={styles.title}>Chuyến đi gần nhất</h3>
            </th>
            <th>
              <h3 className={styles.title}>Trạng thái</h3>
            </th>
            {/* <th>
              <h3 className={styles.title}>Tổng tiền</h3>
            </th>
            <th>
              <h3 className={styles.title}>Trạng thái</h3>
            </th>
            <th></th> */}
          </tr>
        </thead>
        <tbody>
          <tr className={styles.memberRow}>
            <td className={styles.center}>
              <input type="checkbox" className={styles.checkBox} />
            </td>
            <td>
              <div className="d-flex-js">
                <img src="" alt="Client" />
                <div className={styles.text1}>
                  <span className={styles.codeOrder}>#01</span>
                  <h4 className={`${styles.subText} `}>Nam</h4>
                  <br />
                </div>
              </div>
            </td>
            <td>
              <span className={`${styles.text1} text-left`}>
                Nguyễn Đăng Mạnh Tú
              </span>
            </td>
            <td>
              <span className={`${styles.text2} text-left`}>097422002</span>
            </td>

            <td>
              {/* <span className={`${styles.text2} text-left`}>Thường</span> */}
              <span className={`${styles.vipTextType} text-left`}>VIP</span>
            </td>
            <td>
              {/* <span className={styles.date}>
                {new Date(data.NgayDiGanNhat).toLocaleDateString("en-SG", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span> */}
              <span className={styles.date}>29/07/2023</span>
            </td>

            {/* <td>
                    <h3 className={clsx(styles.text1, styles.primary)}>
                      {numberFormat.format(data.TongTien).replace("₫", "")}
                      <sup>VND</sup>
                    </h3>
                  </td> */}
            <td>
              <div
                className={`btn-1 active`}
                // className={clsx(
                //   "btn-1",
                //   {
                //     primary: data.TrangThai === 0,
                //     pending: data.TrangThai === 1,
                //     active: data.TrangThai === 2,
                //   },
                //   styles.statusPending,
                //   data.TrangThai === 1 && styles.statusPending1
                // )}
              >
                {/* {data.TrangThai === 0
                    ? "Hoạt động"
                    : data.TrangThai === 1
                    ? "Khóa"
                    : "Ngừng hoạt động"} */}
                Hoạt động
              </div>
            </td>
            <td className={`${styles.relative} ${styles.btnDotted}`}>
              <DropdownOption
                type={9}
                // idActive={data.MaDatPhong}
                // list={option}
                // hides={[false, data.TrangThai !== 0]}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      {/* <FooterPaging
        curPage={page}
        handleChangePage={setPage}
        totalPage={totalPage}
      /> */}
    </div>
  );
}
const ManageCustomer = () => {
  const [data, setData] = useState(null);
  const [option, setOption] = useState([]);

  const [orderO, setOrderO] = useState(null);

  const [active, setActive] = useState(0);
  const handleActive = (value) => {
    setActive(value);
    if (data) {
      if (value === 1 && value !== active) {
        setData(orderO.filter((key) => key.TrangThai === 1));
      } else if (value === 2 && value !== active) {
        setData(orderO.filter((key) => key.TrangThai === 0));
      } else if (value === 3 && value !== active) {
        setData(orderO.filter((key) => key.TrangThai === 2));
      } else if (value === 0 && value !== active) {
        setData(orderO);
      }
    }
  };

  return (
    <div className={styles.content}>
      <div className="mt-4 d-flex justify-content-between align-items-center ">
        <div className="card-action coin-tabs mb-2">
          <NavHandle
            list={["Tất cả", "Thường", "VIP", "Tạm ngưng"]}
            active={active}
            onActive={handleActive}
          />
        </div>
        <div className="d-flex align-items-center mb-2">
          <div className="input-group">
            <div id="search-autocomplete" className="form-outline">
              <input
                type="search"
                id="phoneInput"
                className={`form-control ${styles.form1}`}
              />
            </div>
            <button
              type="button"
              className={`btn btn-primary ${styles.btnSearch}`}
            >
              <svg
                class="svg-inline--fa fa-magnifying-glass"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="magnifying-glass"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <div id="room_wrapper" className="dataTables_wrapper no-footer">
                  <HotelTable data={data} option={option} />
                  {/* Xác nhận xóa */}
                  {/* <ConformModal
                    show={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConform={() => handleDeleteHotel()}
                    content={`Bạn chắc chắn muốn xóa đơn`}
                    highlight={orderActive && orderActive.MaDatPhong}
                  /> */}
                  {/* Xác nhận Duyệt */}
                  {/* <ConformModal
                    show={showDuyetModal}
                    conFormBtn="OK"
                    onClose={() => setShowDuyetModal(false)}
                    onConform={() => handleDuyetHotel()}
                    content={`Bạn chắc chắn muốn duyệt đơn `}
                    highlight={orderActive && orderActive.MaDatPhong}
                  /> */}
                  {/* Thông báo thành công */}
                  {/* {showInformModal && (
                    <div id="myModal" className="myModal1">
                      {/* <!-- Modal content --> */}
                  {/* <div className="modalContent">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="modalIcon"
                    />
                    <div>Thao tác thành công</div>
                  </div> */}
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ManageCustomer;
