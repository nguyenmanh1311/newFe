import React from "react";
import "../styles/Style.scss";
import { GiPositionMarker } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ImEye, ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import COD from "../assets/images/payment/cod.png";
import MOMO from "../assets/images/payment/momo.png";
import PAYPAL from "../assets/images/payment/paypal.png";

const PaymentMethod = () => {
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
                      Phương thức thanh toán
                    </li>
                  </ol>
                </nav>
              </div>
              <div
                id="checkout"
                className="col-lg-12
              "
              >
                <div className="box">
                  <form method="get" action="checkout4.html">
                    <h1>Phương thức thanh toán</h1>
                    <div className="nav flex-column flex-sm-row nav-pills">
                      <Link
                        to={"/check-address"}
                        className="nav-link flex-sm-fill text-sm-center"
                      >
                        <GiPositionMarker className="fa fa-map-marker">
                          {" "}
                        </GiPositionMarker>
                        <div>Địa chỉ</div>
                      </Link>
                      <Link
                        to={"/delivery-method"}
                        className="nav-link flex-sm-fill text-sm-center "
                      >
                        <ImTruck className="fa fa-truck"> </ImTruck>
                        <div>Phương thức vẫn chuyển</div>
                      </Link>
                      <Link
                        to={""}
                        className="nav-link flex-sm-fill text-sm-center active"
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
                      <div className="col-md-5">
                        <div className="box-footer">
                          <img
                            style={{ width: "220px", height: "200px" }}
                            src={PAYPAL}
                            alt=""
                          />
                          <div className="text-center d-flex align-items-center justify-content-center">
                            <input
                              type="radio"
                              name="payment"
                              defaultValue="payment1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="box-footer">
                          <img
                            style={{ width: "220px", height: "200px" }}
                            src={COD}
                            alt=""
                          />
                          <div className="text-center d-flex align-items-center justify-content-center">
                            <input
                              type="radio"
                              name="payment"
                              defaultValue="payment1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="box-footer">
                          <img
                            style={{ width: "200px", height: "200px" }}
                            src={MOMO}
                            alt=""
                          />
                          <div className=" text-center d-flex align-items-center justify-content-center">
                            <input
                              type="radio"
                              name="payment"
                              defaultValue="payment1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/delivery-method`}
                        className="btn btn-outline-secondary"
                      >
                        <GrPrevious
                          className="fa fa-chevron-left"
                          style={{ marginBottom: "-2px" }}
                        ></GrPrevious>{" "}
                        Quay lại trang chọn phương thức vận chuyển
                      </Link>
                      <Link to={`/order-review`}>
                        <button type="submit" className="btn btn-primary">
                          Tiếp tục đến trang tổng quan đơn hàng{" "}
                          <GrNext
                            className="fa fa-chevron-right"
                            style={{ marginBottom: "-2px" }}
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

export default PaymentMethod;
