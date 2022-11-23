import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Style.scss";

const SidebarProduct = () => {
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu mb-4">
        <div className="card-header">
          <h3 className="h4 card-title">Bộ lọc</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column category-menu">
            <li>
              <Link to={`/category`} className="nav-link">
                Loại balo <span className="badge badge-secondary">4</span>
              </Link>
              <ul className="list-unstyled">
                <li>
                  <Link to={`/category`} className="nav-link">
                    Đựng Laptop
                  </Link>
                </li>
                <li>
                  <Link to={`/category`} className="nav-link">
                    Đi học
                  </Link>
                </li>
                <li>
                  <Link to={`/category`} className="nav-link">
                    Du lịch
                  </Link>
                </li>
                <li>
                  <Link to={`/category`} className="nav-link">
                    Thời trang
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/category`} className="nav-link">
                Thương hiệu <span className="badge badge-secondary">4</span>
              </Link>
              <form>
                <div className="form-group" style={{ paddingLeft: "16px" }}>
                  <div className="checkbox d-flex justify-content-start">
                    <label>
                      {" "}
                      <input type="checkbox" /> Armani (10){" "}
                    </label>
                  </div>
                  <div className="checkbox d-flex justify-content-start">
                    <label>
                      {" "}
                      <input type="checkbox" /> Versace (12){" "}
                    </label>
                  </div>
                  <div className="checkbox d-flex justify-content-start">
                    <label>
                      <input type="checkbox" /> Carlo Bruni (15)
                    </label>
                  </div>
                  <div className="checkbox d-flex justify-content-start">
                    <label>
                      <input type="checkbox" /> Jack Honey (14)
                    </label>
                  </div>
                </div>
                <button className="btn btn-default btn-sm btn-primary">
                  <FaPenFancy
                    className="fa fa-pencil"
                    style={{ marginBottom: "-2px" }}
                  ></FaPenFancy>{" "}
                  Áp dụng
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
