import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SidebarCustomer from "../Sidebar/SidebarCustomer";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const AddressItem = (props) => {
  const navigate = useNavigate();

  const deleteClickHandle = () => {
    alert("Delete " + props.id);
  };
  const editClickHandle = (id) => {
    navigate("/account/address/edit/" + id);
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
                      Danh sách địa chỉ
                    </li>
                  </ol>
                </nav>
              </div>
              <SidebarCustomer />
              <div id="customer-orders" className="col-lg-9">
                <div className="box">
                  <h1>Danh sách địa chỉ</h1>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <tr>
                          <th>Họ tên người nhận</th>
                          <th>Số điện thoại</th>
                          <th>Địa chỉ</th>
                          <th colSpan={2}>Xử lý</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {props.addressList.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>{item.fullName}</td>
                              <td>{item.phone}</td>
                              <td>
                                {item.addressLine}, {item.ward},
                                <br />
                                {item.district}, {item.province}
                              </td>
                              <td>
                                <BiEdit
                                  style={{ fontSize: "16px" }}
                                  onClick={() => editClickHandle(item.id)}
                                />
                              </td>
                              <td>
                                <MdDeleteOutline
                                  style={{ fontSize: "16px" }}
                                  onClick={deleteClickHandle}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <button
                  style={{ fontSize: "16px" }}
                  className="btn btn-success mb-4 "
                  onClick={() => {
                    navigate("/account/address/add");
                  }}
                >
                  Thêm địa chỉ mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddressItem;
