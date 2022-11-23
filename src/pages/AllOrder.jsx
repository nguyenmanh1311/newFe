import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SidebarCustomer from "../components/Sidebar/SidebarCustomer";

const AllOrder = () => {
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
                      Tất cả đơn hàng
                    </li>
                  </ol>
                </nav>
              </div>
              <SidebarCustomer />
              <div id="customer-orders" className="col-lg-9">
                <div className="box">
                  <h1>Tất cả đơn hàng</h1>
                  <p className="lead">
                    Nếu có bất kỳ thắc mắc nào, vui lòng{" "}
                    <Link to={`/contact`}>
                      <i>liên hệ với chúng tôi</i>
                    </Link>
                    , dịch vụ chăm sóc khách hàng của chúng tôi làm việc 24/7.
                  </p>
                  <hr />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Mã đặt hàng</th>
                          <th>Ngày đặt hàng</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái</th>
                          <th>Xem chi tiết</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th># 1735</th>
                          <td>22/06/2013</td>
                          <td>$ 150.00</td>
                          <td>
                            <span className="badge badge-info">
                              Đang giao hàng
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail`}
                              className="btn btn-primary btn-sm"
                            >
                              Xem
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <th># 1735</th>
                          <td>22/06/2013</td>
                          <td>$ 150.00</td>
                          <td>
                            <span className="badge badge-info">
                              Đang giao hàng
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail`}
                              className="btn btn-primary btn-sm"
                            >
                              Xem
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <th># 1735</th>
                          <td>22/06/2013</td>
                          <td>$ 150.00</td>
                          <td>
                            <span className="badge badge-success">
                              Đã nhận hàng
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/order-detail`}
                              className="btn btn-primary btn-sm"
                            >
                              Xem
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <th># 1735</th>
                          <td>22/06/2013</td>
                          <td>$ 150.00</td>
                          <td>
                            <span className="badge badge-danger">Đã hủy</span>
                          </td>
                          <td>
                            <Link
                              to={`/order`}
                              className="btn btn-primary btn-sm"
                            >
                              Xem
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <th># 1735</th>
                          <td>22/06/2013</td>
                          <td>$ 150.00</td>
                          <td>
                            <span className="badge badge-warning">
                              Đang chuẩn bị hàng
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/order`}
                              className="btn btn-primary btn-sm"
                            >
                              Xem
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default AllOrder;
