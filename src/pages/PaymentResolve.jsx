import React from "react";
import { useSearchParams, Navigate } from "react-router-dom";
// import { axiosInstance } from "../../../Admin/src/api/axios.config";

const PaymentResolve = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (Number(searchParams.get("resultCode")) === 0) {
    const invoiceId = Number(searchParams.get("extraData"));
    // axiosInstance.put("url/" + invoiceId).then((res) => {
    //   if (res.status === "OK") {
    //     return <Navigate to="/" />;
    //   }
    // });
  }
  return <Navigate to="/fail" />;
};

export default PaymentResolve;
