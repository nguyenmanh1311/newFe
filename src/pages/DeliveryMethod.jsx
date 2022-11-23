import React from "react";
import "../styles/Style.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { GiPositionMarker } from "react-icons/gi";
import { ImEye, ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";

const DeliveryMethod = () => {
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
                      Phương thức vận chuyển
                    </li>
                  </ol>
                </nav>
              </div>
              <div id="checkout" className="col-lg-9">
                <div className="box">
                  <form method="get">
                    <h1>Phương thức vận chuyển</h1>
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
                        to={""}
                        className="nav-link flex-sm-fill text-sm-center active"
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
                      <div className="col-md-6">
                        <div className="box shipping-method">
                          <h4>USPS Next Day</h4>
                          <p>
                            Get it right on next day - fastest option possible.
                          </p>
                          <div className="box-footer text-center">
                            <input
                              type="radio"
                              name="delivery"
                              defaultValue="delivery1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box shipping-method">
                          <h4>USPS Next Day</h4>
                          <p>
                            Get it right on next day - fastest option possible.
                          </p>
                          <div className="box-footer text-center">
                            <input
                              type="radio"
                              name="delivery"
                              defaultValue="delivery2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box shipping-method">
                          <h4>USPS Next Day</h4>
                          <p>
                            Get it right on next day - fastest option possible.
                          </p>
                          <div className="box-footer text-center">
                            <input
                              type="radio"
                              name="delivery"
                              defaultValue="delivery3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-footer d-flex justify-content-between">
                      <Link
                        to={`/check-address`}
                        className="btn btn-outline-secondary"
                      >
                        <GrPrevious
                          className="fa fa-chevron-left"
                          style={{ marginBottom: "-2px" }}
                        ></GrPrevious>{" "}
                        Trở lại trang địa chỉ
                      </Link>
                      <Link to={`/payment-method`}>
                        <button type="submit" className="btn btn-primary">
                          Tiếp tục đến trang phương thức thanh toán{" "}
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

export default DeliveryMethod;
