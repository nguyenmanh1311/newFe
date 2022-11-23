import React, { useEffect, useState } from "react";

import "../styles/Style.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { GiPositionMarker } from "react-icons/gi";
import { ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import SidebarPayment from "../components/Sidebar/SidebarPayment";
import { AddressService } from "../services/address.service";

const CheckAddress = () => {
  const [allProvince, setAllProvince] = useState([]);
  useEffect(() => {
    let isFetched = true;
    const fetchAllProvince = () => {
      AddressService.getProvince().then((res) => {
        if (isFetched) {
          setAllProvince(res.data);
        }
      });
    };
    fetchAllProvince();
    return () => {
      isFetched = false;
    };
  }, []);
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
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Địa chỉ
                    </li>
                  </ol>
                </nav>
              </div>
              <div id="checkout" className="col-lg-9">
                <div className="box">
                  <form method="get">
                    <h1>Địa chỉ</h1>
                    <div className="nav flex-column flex-md-row nav-pills text-center">
                      <Link
                        to={""}
                        className="nav-link flex-sm-fill text-sm-center active"
                      >
                        <GiPositionMarker className="fa fa-map-marker">
                          {" "}
                        </GiPositionMarker>
                        <div>Địa chỉ</div>
                      </Link>

                      <Link
                        to={"/delivery-method"}
                        className="nav-link flex-sm-fill text-sm-center disabled"
                      >
                        <ImTruck className="fa fa-truck"> </ImTruck>
                        <div>Phương thức vận chuyển</div>
                      </Link>
                      <Link
                        to={"/payment-method"}
                        className="nav-link flex-sm-fill text-sm-center disabled"
                      >
                        <MdPayment className="fa fa-money"> </MdPayment>
                        <div>Phương thức thanh toán</div>
                      </Link>
                      <Link
                        to={"/order-review"}
                        className="nav-link flex-sm-fill text-sm-center disabled"
                      >
                        <ImEye className="fa fa-eye"> </ImEye>
                        <div>Tổng quan đơn hàng</div>
                      </Link>
                    </div>
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

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Điện thoại</label>
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
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="street">Số nhà, tên đường</label>
                          <input
                            id="street"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="state">Xã / Phường</label>
                          <select id="state" className="form-control"></select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="state">Quận / Huyện</label>
                          <select id="state" className="form-control"></select>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label htmlFor="province">Thành phố / Tỉnh</label>
                          <select
                            id="province"
                            className="form-control"
                          ></select>
                        </div>
                      </div>
                    </div>
                    <div className="box-footer d-flex justify-content-between">
                      <Link
                        to={`/basket`}
                        className="btn btn-outline-secondary"
                      >
                        <GrPrevious
                          className="fa fa-chevron-left"
                          style={{ marginTop: "5px" }}
                        ></GrPrevious>{" "}
                        Trở về giỏ hàng
                      </Link>
                      <Link to={`/delivery-method`}>
                        <button type="submit" className="btn btn-primary">
                          Tiếp tục chọn phương thức vận chuyển{" "}
                          <GrNext
                            className="fa fa-chevron-right"
                            style={{ marginTop: "5px" }}
                            color="white"
                          ></GrNext>
                        </button>
                      </Link>
                    </div>
                  </form>
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

export default CheckAddress;
