import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressItem from "../components/Address/AddressItem";
import { AddressService } from "../services/address.service";

const Address = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [addressList, setAddressList] = useState([]);

  const fetchAddressList = () => {
    AddressService.getAddressByUserID(userId).then((res) => {
      setAddressList(res.data);
    });
  };
  useEffect(() => {
    fetchAddressList();
  }, []);
  return (
    <div>
      <AddressItem addressList={addressList} />
    </div>
  );
};

export default Address;
