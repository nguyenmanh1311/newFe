import React, { useEffect, useState } from "react";
import "../styles/Style.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { FaTrashAlt } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { ImGift } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

import { CartService } from "../services/cart.service";

const Basket = () => {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, "$&.");
  };
  const [cartDetail, setCartDetail] = useState([]);
  const [statusCart, setStatusCart] = useState(true);

  let total = 0;
  const navigate = useNavigate();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    let isFetched = true;

    if (localStorage.getItem("accessToken") == null) {
      navigate("/login");
    }

    const fetchCart = () => {
      CartService.getCartId(userId).then((res) => {
        if (isFetched) {
          CartService.calTotalPriceCart(res.data.id);
          CartService.getAllCartDetailByCartID(res.data.id).then((res) => {
            if (isFetched) {
              if (res.data == null) {
                setStatusCart(false);
              } else {
                setCartDetail(res.data ?? []);
              }
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
    window.location.reload();
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
                      <Link to={`/`}>Trang ch???</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Gi??? h??ng
                    </li>
                  </ol>
                </nav>
              </div>
              {!statusCart ? (
                <div id="basket" className="col-lg-12">
                  <div className="box">
                    <h1>Gi??? h??ng</h1>
                    <FaCartPlus
                      style={{
                        fontSize: "100px",
                        marginTop: "30px",
                        color: "#191313ad",
                      }}
                    />
                    <p
                      style={{
                        marginTop: "30px",
                        fontSize: "20px",
                      }}
                    >
                      Kh??ng c?? s???n ph???m n??o trong gi??? h??ng
                    </p>
                    <button
                      style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      className="btn btn-secondary"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Quay l???i mua s???m
                    </button>
                  </div>
                </div>
              ) : (
                <div id="basket" className="col-lg-12">
                  <div className="box">
                    <form>
                      <div
                        className="font-weight-bold text-danger"
                        style={{ fontSize: "30px", marginBottom: "10px" }}
                      >
                        GI??? H??NG
                      </div>
                      <h3
                        className="font-weight-bold text-info"
                        style={{ marginBottom: "20px" }}
                      >
                        Hi???n t???i, b???n c?? {cartDetail.length ?? null} s???n ph???m
                        trong gi???.
                      </h3>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th colSpan="2">T??n s???n ph???m</th>
                              <th>S??? l?????ng</th>
                              <th>????n gi??</th>
                              <th>Khuy???n m??i</th>
                              <th>T???ng</th>
                              <th></th>
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
                                  <td>
                                    {commas(Number(item.price) + "") + "???"}
                                  </td>
                                  <td>0</td>
                                  <td>
                                    {" "}
                                    {commas(
                                      Number(item.price) *
                                        Number(item.quantity) +
                                        ""
                                    ) + "???"}
                                  </td>
                                  <td>
                                    <div
                                      onClick={() => {
                                        Swal.fire({
                                          title:
                                            "B???n c?? mu???n x??a s???n ph???m n??y kh???i gi??? h??ng kh??ng ?",
                                          showDenyButton: true,
                                          confirmButtonText: "C??",
                                          denyButtonText: "Kh??ng",
                                          customClass: {
                                            actions: "my-actions",
                                            confirmButton: "order-2",
                                            denyButton: "order-3",
                                          },
                                        }).then((result) => {
                                          if (result.isConfirmed) {
                                            Swal.fire(
                                              "X??a th??nh c??ng",
                                              "",
                                              "success"
                                            );
                                            CartService.deleteCartDetailById(
                                              item.id
                                            ).then((res) => {});
                                            window.location.reload();
                                          } else if (result.isDenied) {
                                            Swal.fire(
                                              "S???n ph???m ch??a ???????c x??a",
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
                                <th colSpan="5">T???ng ti???n</th>
                                <th colSpan="2">{commas(total + "") + "???"}</th>
                              </tr>
                            )}
                          </tfoot>
                        </table>
                      </div>
                      <div className="d-flex justify-content-between flex-column flex-lg-row">
                        <div className="left">
                          <Link
                            to={`/collections`}
                            className="btn btn-outline-secondary"
                            style={{ fontSize: "14px" }}
                          >
                            <GrPrevious
                              className="fa fa-chevron-left"
                              style={{ marginBottom: "-2px" }}
                            ></GrPrevious>{" "}
                            Ti???p t???c mua h??ng
                          </Link>
                        </div>

                        <div className="right">
                          <Link
                            to={`/check-address`}
                            className="btn btn-outline-secondary"
                            style={{ fontSize: "14px" }}
                          >
                            Ti???n h??nh thanh to??n{" "}
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
              )}

              {/* <div className="col-lg-3">
                <div className="box">
                  <div className="box-header">
                    <h4 className="mb-0">M?? gi???m gi??</h4>
                  </div>
                  <p className="text-muted">
                    N???u b???n c?? m?? gi???m gi??, vui l??ng nh???p v??o ?? b??n d?????i.
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
