import axios from "axios";

const getProvince = () => {
  return axios
    .get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/province`)
    .then((res) => {
      console.log(res);
      return res.data;
    });
};

const getDistrict = () => {
  return axios
    .get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district`)
    .then((res) => {
      return res.data;
    });
};

const getWard = () => {
  return axios
    .get(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward`)
    .then((res) => {
      return res.data;
    });
};

export const AddressService = {
  getProvince,
  getDistrict,
  getWard,
};
