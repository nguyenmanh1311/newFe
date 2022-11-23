import React from "react";
import "../styles/Style.scss";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import { RiSave3Fill } from "react-icons/ri";
import SidebarCustomer from "../components/Sidebar/SidebarCustomer";
import { Link } from "react-router-dom";

const Account = () => {
  const fetchTown = () => {};

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
                  <p className="lead">
                    Thay đổi mật khẩu và thông tin chi tiết của bạn.
                  </p>

                  <h3>Thay đổi mật khẩu</h3>
                  <form>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        <RiSave3Fill
                          className="fa fa-save"
                          style={{ marginBottom: "-2px" }}
                        ></RiSave3Fill>{" "}
                        Lưu xác nhận
                      </button>
                    </div>
                  </form>
                  <br />
                  <hr />
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
                    <div className="row">
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
                      <div className="col-md-6 col-lg-3">
                        <div className="form-group">
                          <label htmlFor="state">Xã / Phường</label>
                          <select id="state" className="form-control"></select>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="form-group">
                          <label htmlFor="state">Quận / Huyện</label>
                          <select id="state" className="form-control"></select>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="form-group">
                          <label htmlFor="province">Thành phố / Tỉnh</label>
                          <select
                            id="province"
                            className="form-control"
                          ></select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        <RiSave3Fill
                          className="fa fa-save"
                          style={{ marginBottom: "-2px" }}
                        ></RiSave3Fill>{" "}
                        Lưu thay đổi
                      </button>
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

export default Account;
