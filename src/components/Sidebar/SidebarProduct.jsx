import React, { useEffect, useState } from "react";
import { FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/DataProvider";
import { BrandService } from "../../services/brand.service";
import { CategoryService } from "../../services/category.service";
import { ProductService } from "../../services/product.service";
import "../../styles/Style.scss";

const SidebarProduct = ({ cateId }) => {
  const [allBrand, setAllBrand] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [price, setPrice] = useState();

  const { setProductData } = useDataContext();

  const handleInput = (e) => {
    setPrice(e.target.value);
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

    const fetchshowAllProduct = () => {
      ProductService.getAllProduct().then((res) => {
        if (isFetched) {
          setAllProduct(res.data);
        }
      });
    };

    fetchshowAllProduct();
    fetchshowAllBrand();
    fetchshowAllCategory();
    return () => {
      isFetched = false;
    };
  }, []);
  let input = {
    categoryId: Number(cateId),
    branchId: null,
  };
  const handleChange = (event) => {
    if (event.target.checked) {
      input.branchId = Number(event.target.value);
    }
    searchProduct();
  };
  const searchProduct = () => {
    console.log(input);
    ProductService.getProductByCateIdAndBrandId(input).then((res) => {
      setProductData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="col-lg-3">
      <div className="card sidebar-menu mb-4">
        <div className="card-header">
          <h3 className="h4 card-title">Bộ lọc</h3>
        </div>
        <div className="card-body">
          <ul className="nav nav-pills flex-column category-menu">
            <li>
              <Link to={``} className="nav-link">
                Loại balo <span className="badge badge-secondary">9</span>
              </Link>
              <ul className="list-unstyled">
                {allCategory.map((item) => {
                  return (
                    <li key={item.id}>
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
            </li>
            <li>
              <Link to={``} className="nav-link">
                Thương hiệu <span className="badge badge-secondary">15</span>
              </Link>
              <div>
                <div className="form-group" style={{ paddingLeft: "16px" }}>
                  {allBrand.map((item) => {
                    return (
                      <div
                        className="checkbox d-flex justify-content-start"
                        key={item.id}
                      >
                        <input
                          type="checkbox"
                          id="namePro"
                          value={item.id}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="namePro"
                          style={{ margin: 0, padding: "5px" }}
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <Link to={``} className="nav-link">
                    Giá
                  </Link>
                  <input type="range" onInput={handleInput} />
                  <div>
                    {allProduct
                      .filter((product) => {
                        return product.price > parseInt(price, 10);
                      })
                      .map((product) => {
                        return <p>{product.price}</p>;
                      })}
                  </div>
                  <button className="btn btn-default btn-sm btn-primary">
                    <FaPenFancy
                      className="fa fa-pencil"
                      style={{ marginBottom: "-2px" }}
                    ></FaPenFancy>{" "}
                    Áp dụng
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
