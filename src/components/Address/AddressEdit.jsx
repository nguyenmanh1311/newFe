import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { AddressService } from "../../services/address.service";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SidebarCustomer from "../Sidebar/SidebarCustomer";
import useLocationForm from "./useLocationForm";
import Swal from "sweetalert2";

function AddressEdit() {
  const { id } = useParams();
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(true, id);
  const navigate = useNavigate();
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
  const [ward, setWard] = useState();
  const [address, setAddress] = useState();
  const addressLine = useRef();
  const fullName = useRef();
  const phone = useRef();

  const fetchAddress = () => {
    AddressService.getAddressByID(id).then((res) => {
      setAddress(res.data);
    });
  };

  useEffect(() => {
    fetchAddress();
  }, [id]);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const onCancel = () => {
    navigate(-1);
  };

  const onSave = () => {
    const user = JSON.parse(localStorage.getItem("userId"));
    const updateData = {
      fullName: fullName.current.value,
      phone: phone.current.value,
      addressLine: addressLine.current.value,
      province: province?.label ? province?.label : selectedCity?.label,
      district: district?.label ? district?.label : selectedDistrict?.label,
      ward: ward?.label ? ward?.label : selectedWard?.label,
      provinceId: province?.value ? province?.value : selectedCity?.value,
      districtId: district?.value ? district?.value : selectedDistrict?.value,
      wardId: ward?.value ? ward?.value : selectedWard?.value,
    };
    AddressService.updateAddress(updateData, id).then((response) => {
      if (response.status === "OK") {
        navigate(-1);
      } else {
        Swal.fire("C???p nh???t ?????a ch??? kh??ng th??nh c??ng", "Th??ng b??o", "warning");
      }
    });
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
                      <Link to={`/`}>Trang ch???</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to={`/address`}>Danh s??ch ?????a ch???</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                      C???p nh???t ?????a ch???
                    </li>
                  </ol>
                </nav>
              </div>
              <SidebarCustomer />
              <div id="customer-orders" className="col-lg-9">
                <div className="box">
                  <h1>C???p nh???t ?????a ch???</h1>
                  <br />
                  <form>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="fullname" className="font-weight-bold">
                          H??? v?? t??n
                        </label>
                        <input
                          name="name"
                          ref={fullName}
                          id="fullname"
                          type="text"
                          className="form-control"
                          defaultValue={address?.fullName}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone" className="font-weight-bold">
                          S??? ??i???n tho???i
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          ref={phone}
                          className="form-control"
                          defaultValue={address?.phone}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="street" className="font-weight-bold">
                          S??? nh??, t??n ???????ng
                        </label>
                        <input
                          name="address"
                          type="text"
                          ref={addressLine}
                          id="street"
                          className="form-control"
                          defaultValue={address?.addressLine}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="province" className="font-weight-bold">
                          T???nh / Th??nh ph???
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
                        <label htmlFor="district" className="font-weight-bold">
                          Huy???n / Qu???n
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
                        <label htmlFor="ward" className="font-weight-bold">
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

                    <br />
                  </form>
                </div>
                <button
                  onClick={onSave}
                  style={{ fontSize: "16px" }}
                  className="btn btn-success mb-4 "
                >
                  L??u
                </button>
                <button
                  onClick={onCancel}
                  style={{ fontSize: "16px" }}
                  className="btn btn-danger mb-4 "
                >
                  H???y
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddressEdit;
