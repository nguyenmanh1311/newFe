import React, { useEffect, useState } from "react";
import "../styles/Style.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { FaTrashAlt } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ImGift } from "react-icons/im";
import Swal from "sweetalert2";

import { CartService } from "../services/cart.service";

const Basket = () => {
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
          CartService.calTotalPriceCart(res.data.id);
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

  let data = {};
  const onChangeQuantity = (value) => {
    const dataUpdate = { id: value.id, quantity: value.quantity };
    CartService.updateQuantity(dataUpdate);
  };
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
                      Giỏ hàng
                    </li>
                  </ol>
                </nav>
              </div>
              <div id="basket" className="col-lg-9">
                <div className="box">
                  <form>
                    <h1>Giỏ hàng</h1>
                    <p className="text-muted">
                      Hiện tại, bạn có 3 sản phẩm trong giỏ.
                    </p>
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
                                    onChange={(e) =>
                                      onChangeQuantity(
                                        (data = {
                                          id: item.id,
                                          quantity: e.target.value,
                                          price: item.price,
                                        })
                                      )
                                    }
                                  />
                                </td>
                                <td>{commas(Number(item.price) + "") + "₫"}</td>
                                <td>0</td>
                                <td>
                                  {" "}
                                  {commas(
                                    Number(item.price) * Number(item.quantity) +
                                      ""
                                  ) + "₫"}
                                </td>
                                <td>
                                  <div
                                    onClick={() => {
                                      Swal.fire({
                                        title:
                                          "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không ?",
                                        showDenyButton: true,
                                        confirmButtonText: "Có",
                                        denyButtonText: "Không",
                                        customClass: {
                                          actions: "my-actions",
                                          confirmButton: "order-2",
                                          denyButton: "order-3",
                                        },
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          Swal.fire(
                                            "Xóa thành công",
                                            "",
                                            "success"
                                          );
                                          CartService.deleteCartDetailById(
                                            item.id
                                          ).then((res) => {
                                            console.log(res);
                                          });
                                          window.location.reload();
                                        } else if (result.isDenied) {
                                          Swal.fire(
                                            "Sản phẩm chưa được xóa",
                                            "",
                                            "info"
                                          );
                                        }
                                      });
                                    }}
                                  >
                                    <Link to="">
                                      <FaTrashAlt className="fa fa-trash-o"></FaTrashAlt>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
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
                    <div className="box-footer d-flex justify-content-between flex-column flex-lg-row">
                      <div className="left">
                        <Link
                          to={`/collections`}
                          className="btn btn-outline-secondary"
                        >
                          <GrPrevious
                            className="fa fa-chevron-left"
                            style={{ marginBottom: "-2px" }}
                          ></GrPrevious>{" "}
                          Tiếp tục mua hàng
                        </Link>
                      </div>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => window.location.reload()}
                      >
                        <GrUpdate
                          className="fa fa-refresh"
                          style={{ marginBottom: "-2px" }}
                        ></GrUpdate>{" "}
                        Cập nhật giỏ hàng
                      </button>
                      <div className="right">
                        <Link
                          to={`/check-address`}
                          className="btn btn-outline-secondary"
                        >
                          Tiến hành thanh toán{" "}
                          <GrNext
                            className="fa fa-chevron-right"
                            style={{ marginBottom: "-2px" }}
                          ></GrNext>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3">
                {/* <div id="order-summary" className="box">
                  <div className="box-header">
                    <h3 className="mb-0">Tóm tắt đơn hàng</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Chi phí tổng sản phẩm</td>
                          <th>{commas(total + "")}</th>
                        </tr>
                        <tr>
                          <td>Chi phí vận chuyển</td>
                          <th>{commas(50000 + "")}</th>
                        </tr>
                        <tr>
                          <td>Thuế</td>
                          <th>0</th>
                        </tr>
                        <tr className="total">
                          <td>Tổng cộng</td>
                          <th>{commas(total + 50000 + "") + "₫"}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
                <div className="box">
                  <div className="box-header">
                    <h4 className="mb-0">Mã giảm giá</h4>
                  </div>
                  <p className="text-muted">
                    Nếu bạn có mã giảm giá, vui lòng nhập vào ô bên dưới.
                  </p>
                  <form>
                    <div className="d-flex justify-content-center">
                      <input type="text" className="border-dark rounded-left" />
                      <span className="input-group-append ">
                        <button
                          type="button"
                          className="btn-secondary rounded-right"
                        >
                          <ImGift className="fa fa-gift"></ImGift>
                        </button>
                      </span>
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

export default Basket;
