import React, { useEffect, useState } from "react";
import "../styles/Style.scss";
import Select from "react-select";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { RiSave3Fill } from "react-icons/ri";
import SidebarCustomer from "../components/Sidebar/SidebarCustomer";
import { Link } from "react-router-dom";
import { AddressService } from "../services/address.service";
import { useRef } from "react";
import { AuthService } from "../services/auth.service";
import swal from "sweetalert2";
import useLocationForm from "./useLocationForm";

const Account = () => {
  const [address, setAddress] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const [oldPass, setOldPasss] = useState("");
  const [newPass, setNewPasss] = useState("");
  const [confirmPass, setConfirmPasss] = useState("");
  const userId = JSON.parse(localStorage.getItem("userId"));

  const saveOnClick = () => {
    if (newPass == confirmPass) {
      AuthService.changePassword(userId, oldPass, newPass).then((res) => {
        if (res.status === "OK") {
          swal.fire("Thông báo", "Đổi mật khẩu thành công", "success");
          window.location.reload();
        } else {
          swal.fire("Thông báo", "Mật khẩu cũ không chính xác", "error");
        }
      });
    } else {
      swal.fire("Thông báo", "Nhập lại mật khẩu không chính xác", "warning");
    }
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    let isFetched = true;
    const fetchAddress = () => {
      AddressService.getAddressByUserID(userId).then((res) => {
        console.log(res?.data[0]);
        setAddress(res?.data[0]);
      });
    };

    fetchAddress();
    return () => {
      isFetched = false;
    };
  }, []);

  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(
      true,
      Number(JSON.parse(localStorage.getItem("idAddress")))
    );

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  const [province, setProvince] = useState(selectedCity);
  const [district, setDistrict] = useState(selectedDistrict);
  const [ward, setWard] = useState(selectedWard);

  return (
    <>
      <Header />
      <div id="all">
        <div id="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to={`/`}>Trang chủ</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Tài khoản của bạn
                    </li>
                  </ol>
                </nav>
              </div>
              <SidebarCustomer />
              <div className="col-lg-9">
                <div className="box">
                  <h1>Tài khoản của bạn</h1>
                  <h3 className="mt-5">Thông tin chi tiết</h3>

                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="fullname">Họ và tên</label>
                          <input
                            id="fullname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Số điện thoại</label>
                          <input
                            id="phone"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            id="email"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-success">
                        <RiSave3Fill
                          className="fa fa-save"
                          style={{ marginBottom: "-2px" }}
                        ></RiSave3Fill>{" "}
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>

                  <br />
                  <hr />

                  <h3>Thay đổi mật khẩu</h3>
                  <div>
                    <div className="row mid">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="password_old">
                            Mật khẩu hiện tại
                          </label>
                          <input
                            id="password_old"
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                              setOldPasss(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mid">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="password_1">Mật khẩu mới</label>
                          <input
                            id="password_1"
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                              setNewPasss(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mid">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="password_2">
                            Nhập lại mật khẩu mới
                          </label>
                          <input
                            id="password_2"
                            type="password"
                            className="form-control"
                            onChange={(e) => {
                              setConfirmPasss(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={saveOnClick}
                      >
                        <RiSave3Fill
                          className="fa fa-save"
                          style={{ marginBottom: "-2px" }}
                        ></RiSave3Fill>{" "}
                        Lưu xác nhận
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
