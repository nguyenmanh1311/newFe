import React, { useEffect, useState } from "react";
import "../styles/Style.scss";
import { GiPositionMarker } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ImEye, ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CartService } from "../services/cart.service";
const OrderReview = () => {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, "$&.");
  };
  const [cartDetail, setCartDetail] = useState([]);
  let total = 0;

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    let isFetched = true;
    const fetchCart = () => {
      CartService.getCartId(userId).then((res) => {
        if (isFetched) {
          CartService.getAllCartDetailByCartID(res.data.id).then((res) => {
            if (isFetched) {
              setCartDetail(res.data ? res.data : []);
            }
          });
        }
      });
    };

    fetchCart();
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
                      Tổng quan đơn hàng
                    </li>
                  </ol>
                </nav>
              </div>
              <div id="checkout" className="col-lg-9">
                <div className="box">
                  <form method="get" action="checkout4.html">
                    <h1>Tổng quan đơn hàng</h1>
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
                        <div>Phương thức vận chuyển</div>
                      </Link>
                      <Link
                        to={"/payment-method"}
                        className="nav-link flex-sm-fill text-sm-center "
                      >
                        <MdPayment className="fa fa-money"> </MdPayment>
                        <div>Phương thức thanh toán</div>
                      </Link>
                      <Link
                        to={""}
                        className="nav-link flex-sm-fill text-sm-center active"
                      >
                        <ImEye className="fa fa-eye"> </ImEye>
                        <div>Tổng quan đơn hàng</div>
                      </Link>
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th colSpan="2">Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Khuyến mãi</th>
                            <th>Tổng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartDetail.map((item) => {
                            total = total + item.price * item.quantity;
                            return (
                              <tr key={item.id}>
                                <td>
                                  <Link to={`/product-detail`}>
                                    <img
                                      src={
                                        "http://localhost:8080/api/v1/image_product/" +
                                        item.image
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>
                                <td>
                                  <Link to={`/product-detail`}>
                                    {item.name}
                                  </Link>
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    defaultValue={item.quantity}
                                    min="1"
                                    className="form-control"
                                  />
                                </td>
                                <td>{commas(Number(item.price) + "") + "₫"}</td>
                                <td>0</td>
                                <td>
                                  {commas(
                                    Number(item.price) * Number(item.quantity) +
                                      ""
                                  ) + "₫"}
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                            <th colSpan="5">Chi phí vận chuyển</th>
                            <th colSpan="2">{commas(50000 + "") + "₫"}</th>
                          </tr>
                          ;
                        </tbody>
                        <tfoot>
                          {total !== 0 && (
                            <tr>
                              <th colSpan="5">Tổng tiền</th>
                              <th colSpan="2">{commas(total + "") + "₫"}</th>
                            </tr>
                          )}
                        </tfoot>
                      </table>
                    </div>
                    <div className="box-footer d-flex justify-content-between">
                      <Link
                        to={`/payment-method`}
                        className="btn btn-outline-secondary"
                      >
                        <GrPrevious
                          className="fa fa-chevron-left"
                          style={{ marginBottom: "-2px" }}
                        ></GrPrevious>{" "}
                        Quay lại trang chọn phương thức thanh toán
                      </Link>
                      <Link to="">
                        <button type="submit" className="btn btn-primary">
                          Đặt hàng{" "}
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

export default OrderReview;
