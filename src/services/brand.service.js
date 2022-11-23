import axios from "axios";
import configAPI from "../configuration/apiConfig.json";

const getAllBrand = () => {
  return axios.get(configAPI.baseUrlApi + "/api/v1/branch").then((res) => {
    return res.data;
  });
};

export const BrandService = {
  getAllBrand,
};
