import React from "react";
import "../../styles/Style.scss";

import { BsListTask, BsPersonFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

const SidebarCustomer = () => {
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu">
        <div className="card-header">
          <h3 className="h4 card-title">Thông tin tài khoản</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column">
            <Link to={`/all-order`} className="nav-link active">
              <BsListTask
                className="fa fa-list"
                style={{ marginBottom: "-2px" }}
              ></BsListTask>{" "}
              Tất cả đơn đặt hàng
            </Link>
            <Link to={`/wishlist`} className="nav-link">
              <AiFillHeart
                className="fa fa-heart"
                style={{ marginBottom: "-2px" }}
              ></AiFillHeart>{" "}
              Danh mục ưu thích
            </Link>
            <Link to={`/account`} className="nav-link">
              <BsPersonFill
                className="fa fa-user"
                style={{ marginBottom: "-2px" }}
              ></BsPersonFill>{" "}
              Tài khoản
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarCustomer;
