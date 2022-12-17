import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Style.scss";
import logo from "../../assets/images/logo/baloshop-black.png";

import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { CategoryService } from "../../services/category.service";
import { BrandService } from "../../services/brand.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal2 from "sweetalert2";
import { UserService } from "../../services/user.service";

const Header = () => {
  const navigate = useNavigate();
  const [allBrand, setAllBrand] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  const [user, setUser] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userId"));

  const logoutOnclick = async () => {
    swal2
      .fire({
        title: "Bạn có chắc không?",
        showDenyButton: true,
        confirmButtonText: "Có",
        denyButtonText: "Không",
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          localStorage.clear();
          window.location.reload();
        } else if (result.isDenied) {
        }
      });
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      searchInput.toString().trim() !== "" &&
      searchInput.toString().trim() !== null
    ) {
      navigate(`/search/${searchInput}`);
    }
  };
  const onClickSearch = () => {
    if (
      searchInput.toString().trim() !== "" &&
      searchInput.toString().trim() !== null
    ) {
      navigate(`/search/${searchInput}`);
    }
  };

  useEffect(() => {
    let isFetched = true;
    const fetchshowAllCategory = () => {
      CategoryService.getAllCategory().then((res) => {
        if (isFetched) {
          setAllCategory(res.data);
        }
      });
    };

    const fetchshowAllBrand = () => {
      BrandService.getAllBrand().then((res) => {
        if (isFetched) {
          setAllBrand(res.data);
        }
      });
    };

    const fetchUser = () => {
      UserService.getUserByUserID(userId).then((res) => {
        if (isFetched) {
          if (res.data != null) {
            setUser(res.data);
          }
        }
      });
    };
    fetchUser();
    fetchshowAllBrand();
    fetchshowAllCategory();
    return () => {
      isFetched = false;
    };
  }, []);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand home">
            <img
              src={logo}
              alt="BaloSG logo"
              style={{ width: "75px", height: "50px" }}
              className="d-none d-md-inline-block"
            />
          </Link>

          <div id="navigation" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Trang chủ
                </Link>
              </li>

              <li className="nav-item dropdown menu-large">
                <Link
                  to="/collections"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Sản phẩm<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu menu-product megamenu  ">
                  <li>
                    <div className="row">
                      <ul className="list-unstyled">
                        {allCategory.map((item) => {
                          return (
                            <li className="nav-item" key={item.id}>
                              <Link
                                to={`/product/category/${item.id}`}
                                className="nav-link"
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown menu-large">
                <Link
                  to="/collections"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="200"
                  className="dropdown-toggle nav-link"
                >
                  Thương Hiệu<b className="caret"></b>
                </Link>
                <ul className="dropdown-menu menu-brand megamenu ">
                  <li>
                    <div className="row">
                      <ul className="list-unstyled">
                        {allBrand.map((item) => {
                          return (
                            <li className="nav-item" key={item.id}>
                              <Link
                                to={`/product/brand/${item.id}`}
                                className="nav-link"
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Tin tức
                </Link>
              </li>
            </ul>
            <div className="navbar-buttons d-flex justify-content-end">
              <div className="input-form">
                <input
                  id="input-search"
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Tìm kiếm"
                  onChange={(e) => searchItems(e.target.value)}
                />

                <button
                  id="btn-search"
                  data-toggle="collapse"
                  href="#search"
                  className="btn navbar-btn d-none d-lg-inline-block"
                  onClick={onClickSearch}
                >
                  <BsSearch
                    className="fa fa-search"
                    style={{ marginTop: "3px" }}
                  ></BsSearch>
                </button>
              </div>
              <div
                id="basket-overview"
                className="navbar-collapse collapse d-none d-lg-block"
              >
                <Link to={`/basket`} className="btn btn-secondary navbar-btn">
                  <FaShoppingCart
                    className="fa fa-shopping-cart"
                    style={{ marginBottom: "-2px" }}
                  />{" "}
                  <span></span>
                </Link>
              </div>
              {!localStorage.getItem("accessToken") && (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary "
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <GoPerson
                        className="fa fa-person"
                        style={{ marginBottom: "-2px" }}
                      />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link to={"/login"} className="dropdown-item">
                        Đăng nhập
                      </Link>
                    </div>
                  </div>
                </>
              )}
              {localStorage.getItem("accessToken") && (
                <div className="text-white d-flex align-items-center">
                  <div className="dropdown">
                    <div
                      className="rounded-circle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src={
                          "http://localhost:8080/api/v1/image_product/" +
                          user.photo
                        }
                        class="rounded-circle "
                        style={{ height: "30px" }}
                        alt="..."
                      />
                    </div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link to={"/account"} className="dropdown-item">
                        Thông tin tài khoản
                      </Link>

                      <Link
                        to={""}
                        className="d-flex align-items-center dropdown-item"
                      >
                        <div onClick={logoutOnclick}>Đăng xuất</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
