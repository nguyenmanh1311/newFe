import React from "react";
import { Link } from "react-router-dom";
import SidebarCustomer from "../components/Sidebar/SidebarCustomer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Style.scss";

const Order = () => {
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
                    <li aria-current="page" className="breadcrumb-item">
                      <Link to="">Tất cả đơn đặt hàng</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      Đơn hàng # 1735
                    </li>
                  </ol>
                </nav>
              </div>
              <SidebarCustomer />
              <div id="customer-order" className="col-lg-9">
                <div className="box">
                  <h1>Đơn hàng #1735</h1>
                  <p className="lead">
                    Đơn hàng số 1735 đã được đặt vào ngày 22/06/2013 và hiện
                    đang được chuẩn bị.
                  </p>
                  <p className="text-muted">
                    Nếu bạn có thắc mắc, vui lòng{" "}
                    <Link to={`/contact`}>
                      <i>liên hệ chúng tôi</i>
                    </Link>
                    , dịch vụ chăm sóc khách hàng của chúng tôi hoạt động 24/7
                  </p>
                  <hr />
                  <div className="table-responsive mb-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th colspan="2">Sản phẩm</th>
                          <th>Số lượng</th>
                          <th>Đơn giá</th>
                          <th>Khuyến mãi</th>
                          <th>Tổng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={`/product-detail`}>
                              <img
                                src="img/detailsquare.jpg"
                                alt="White Blouse Armani"
                              />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/product-detail`}>
                              White Blouse Armani
                            </Link>
                          </td>
                          <td>2</td>
                          <td>$123.00</td>
                          <td>$0.00</td>
                          <td>$246.00</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={`/product-detail`}>
                              <img
                                src="img/basketsquare.jpg"
                                alt="Black Blouse Armani"
                              />
                            </Link>
                          </td>
                          <td>
                            <Link to={`/product-detail`}>
                              Black Blouse Armani
                            </Link>
                          </td>
                          <td>1</td>
                          <td>$200.00</td>
                          <td>$0.00</td>
                          <td>$200.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="5" className="text-right">
                            Chi phí tổng sản phẩm
                          </th>
                          <th>$446.00</th>
                        </tr>
                        <tr>
                          <th colspan="5" className="text-right">
                            Chi phí vận chuyển
                          </th>
                          <th>$10.00</th>
                        </tr>
                        <tr>
                          <th colspan="5" className="text-right">
                            Thuế
                          </th>
                          <th>$0.00</th>
                        </tr>
                        <tr>
                          <th colspan="5" className="text-right">
                            Tổng cộng
                          </th>
                          <th>$456.00</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="row addresses">
                    <div className="col-lg-6">
                      <h2>Địa chỉ gửi hàng</h2>
                      <p>
                        John Brown
                        <br />
                        13/25 New Avenue
                        <br />
                        New Heaven
                        <br />
                        45Y 73J
                        <br />
                        England
                        <br />
                        Great Britain
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h2>Địa chỉ nhận hàng</h2>
                      <p>
                        John Brown
                        <br />
                        13/25 New Avenue
                        <br />
                        New Heaven
                        <br />
                        45Y 73J
                        <br />
                        England
                        <br />
                        Great Britain
                      </p>
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

export default Order;
