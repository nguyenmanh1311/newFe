import React from "react";
import "../../styles/Style.scss";

import { BsListTask, BsPersonFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { FaAddressBook } from "react-icons/fa";

import { Link } from "react-router-dom";

const SidebarCustomer = () => {
  return (
    <div className="col-lg-3 mt-2">
      <div className="sidebar-menu">
        <div className="">
          <h3 className="h4 card-title">THÔNG TIN TÀI KHOẢN</h3>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
          <ul className="nav nav-pills d-flex justify-content-start flex-column">
            <Link
              to={`/all-order`}
              className="nav-link d-flex justify-content-start align-items-center"
            >
              <BsListTask className="fa fa-list mr-2"></BsListTask>
              TẤT CẢ ĐƠN HÀNG
            </Link>
            {/* <Link to={`/wishlist`} className="nav-link">
              <AiFillHeart
                className="fa fa-heart"
                style={{ marginBottom: "-2px" }}
              ></AiFillHeart>{" "}
              Danh mục ưu thích
            </Link> */}
            <Link
              to={`/account`}
              className="nav-link d-flex justify-content-start align-items-center"
            >
              <BsPersonFill className="fa fa-user mr-2"></BsPersonFill> TÀI
              KHOẢN
            </Link>
            <Link
              to={`/account/address`}
              className="nav-link d-flex justify-content-start align-items-center"
            >
              <FaAddressBook className="fa fa-user mr-2"></FaAddressBook> DANH
              SÁCH ĐỊA CHỈ
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarCustomer;
