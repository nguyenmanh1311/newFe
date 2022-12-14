import React, { useEffect, useRef, useState } from "react";

import "../../styles/Style.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { GiPositionMarker } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { AddressService } from "../../services/address.service";
import AddressItem from "../../components/Address/AddressItem";
import Select from "react-select";
import useLocationForm from "../../components/Address/useLocationForm";
import Swal from "sweetalert2";

const CheckAddress = () => {
  const [addressList, setAddressList] = useState([]);
  const [addressId, setAddressId] = useState(null);
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(false, null);
  const navigate = useNavigate();
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const addressLine = useRef();
  const fullName = useRef();
  const phone = useRef();
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const onClickConfirm = () => {
    const user = JSON.parse(localStorage.getItem("userId"));
    const createData = {
      fullName: fullName.current.value,
      phone: phone.current.value,
      addressLine: addressLine.current.value,
      province: province?.label ? province?.label : selectedCity?.label,
      district: district?.label ? district?.label : selectedDistrict?.label,
      ward: ward?.label ? ward?.label : selectedWard?.label,
      provinceId: province?.value ? province?.value : selectedCity?.value,
      districtId: district?.value ? district?.value : selectedDistrict?.value,
      wardId: ward?.value ? ward?.value : selectedWard?.value,
      userId: user,
    };

    AddressService.createAddress(createData).then((response) => {
      if (response.status === "OK") {
        localStorage.setItem("address", JSON.stringify(response.data));
        navigate("/check-method");
      }
    });
  };

  const chooseAddressClickHandle = () => {
    AddressService.getAddressByID(addressId).then((response) => {
      if (response.status === "OK") {
        localStorage.setItem("address", JSON.stringify(response.data));
        navigate("/check-method");
      } else {
        Swal.fire("Th??ng b??o", "Vui l??ng ch???n v??o 1 ?????a ch???", "warning");
      }
    });
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    let isFetched = true;
    const fetchAddressList = () => {
      AddressService.getAddressByUserID(userId).then((res) => {
        setAddressList(res.data);
      });
    };
    fetchAddressList();
    return () => {
      isFetched = false;
    };
  }, []);
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
                      <Link to="/">Trang ch???</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      ?????a ch???
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="col-lg-12">
                <div
                  className="font-weight-bold text-danger"
                  style={{ fontSize: "28px", marginBottom: "20px" }}
                >
                  <GiPositionMarker /> ?????A CH???
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="box"
                  onChange={(e) => {
                    setAddressId(Number(e.target.value));
                  }}
                >
                  <h3 className="font-weight-bold text-info">
                    Ch???n ?????a ch??? ???? l??u
                  </h3>
                  {addressList.map((item) => {
                    return (
                      <>
                        <label className="d-flex gap-3 " key={item.id}>
                          <input
                            type="radio"
                            name="address"
                            className="w-[30px]"
                            value={item.id}
                          />{" "}
                          <AddressItem {...item} />
                        </label>
                      </>
                    );
                  })}

                  {addressList.length > 0 && addressId != null ? (
                    <button
                      type="button"
                      style={{ margin: "auto" }}
                      className="d-flex justify-content-center btn btn-danger"
                      onClick={chooseAddressClickHandle}
                    >
                      <div style={{ fontSize: "14px" }}>
                        GIAO ?????N ?????A CH??? ???? CH???N
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      style={{ margin: "auto" }}
                      className="d-flex justify-content-center btn btn-outline-danger"
                    >
                      <div style={{ fontSize: "14px" }}>
                        GIAO ?????N ?????A CH??? ???? CH???N
                      </div>
                    </button>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box">
                  <form method="get">
                    <h3 className="font-weight-bold text-info">
                      Nh???p ?????a ch??? m???i
                    </h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="font-weight-bold"
                            htmlFor="fullname"
                          >
                            H??? v?? t??n
                          </label>
                          <input
                            name="name"
                            ref={fullName}
                            id="fullname"
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="font-weight-bold" htmlFor="phone">
                            ??i???n tho???i
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            ref={phone}
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="font-weight-bold"
                            htmlFor="province"
                          >
                            Th??nh ph??? / T???nh
                          </label>
                          <Select
                            name="cityId"
                            key={`cityId_${selectedCity?.value}`}
                            isDisabled={cityOptions.length === 0}
                            options={cityOptions}
                            onChange={(option) => {
                              setProvince(option);
                              onCitySelect(option);
                            }}
                            placeholder="T???nh/Th??nh"
                            defaultValue={selectedCity}
                            className={`mt-1 w-full focus:outline-none text-[15px] border-gray-300 shadow-sm sm:text-[15px] `}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label
                            className="font-weight-bold"
                            htmlFor="district"
                          >
                            Qu???n / Huy???n
                          </label>
                          <Select
                            name="districtId"
                            key={`districtId_${selectedDistrict?.value}`}
                            isDisabled={districtOptions.length === 0}
                            options={districtOptions}
                            onChange={(option) => {
                              setDistrict(option);
                              onDistrictSelect(option);
                            }}
                            placeholder="Qu???n/Huy???n"
                            defaultValue={selectedDistrict}
                            className={`mt-1 w-full focus:outline-none text-[15px] border-gray-300 shadow-sm sm:text-[15px] `}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="font-weight-bold" htmlFor="ward">
                            X?? / Ph?????ng
                          </label>
                          <Select
                            name="wardId"
                            key={`wardId_${selectedWard?.value}`}
                            isDisabled={wardOptions.length === 0}
                            options={wardOptions}
                            placeholder="Ph?????ng/X??"
                            onChange={(option) => {
                              setWard(option);
                              onWardSelect(option);
                            }}
                            defaultValue={selectedWard}
                            classNamePrefix="react-select"
                            className={`react-select-container mt-1 w-full focus:outline-none border-gray-300 shadow-sm text-[15px] `}
                            size="5"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="font-weight-bold" htmlFor="street">
                            S??? nh??, t??n ???????ng
                          </label>
                          <input
                            name="address"
                            type="text"
                            ref={addressLine}
                            id="street"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="d-flex justify-content-center btn btn-danger"
                      onClick={onClickConfirm}
                      style={{ margin: "auto", marginTop: "10px" }}
                    >
                      <div style={{ fontSize: "14px" }}>
                        X??C NH???N GIAO ?????N ?????A CH??? N??Y
                      </div>
                    </button>

                    {/* <div className="d-flex justify-content-between">
                      <Link
                        to={`/basket`}
                        className="btn btn-outline-secondary"
                      >
                        <GrPrevious
                          className="fa fa-chevron-left"
                          style={{ marginTop: "5px" }}
                        ></GrPrevious>{" "}
                        Tr??? v??? gi??? h??ng
                      </Link>
                      <Link to={`/delivery-method`}>
                        <button
                          type="submit"
                          className="btn btn-outline-secondary"
                        >
                          Ti???p t???c{" "}
                          <GrNext
                            className="fa fa-chevron-right"
                            style={{ marginTop: "5px" }}
                            color="white"
                          ></GrNext>
                        </button>
                      </Link>
                    </div> */}
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

export default CheckAddress;
