import axios from "axios";
import configAPI from "../configuration/apiConfig.json";

const getAllProduct = () => {
  return axios.get(configAPI.baseUrlApi + "/api/v1/product").then((res) => {
    return res.data;
  });
};

const get10ProductFeature = () => {
  return axios.get(configAPI.baseUrlApi + "/api/v1/product").then((res) => {
    return res.data;
  });
};

const get8ProductNew = () => {
  return axios
    .get(configAPI.baseUrlApi + "/api/v1/product/top8new")
    .then((res) => {
      return res.data;
    });
};

const getProductByName = (name) => {
  return axios
    .get(configAPI.baseUrlApi + "/api/v1/product/search?input=" + name)
    .then((res) => {
      return res.data;
    });
};

const getProductSameCate = () => {
  return axios.get(configAPI.baseUrlApi + "/api/v1/product").then((res) => {
    return res.data;
  });
};

const getProductById = (id) => {
  return axios
    .get(`${configAPI.baseUrlApi}/api/v1/product/${id}`)
    .then((res) => {
      return res.data;
    });
};

const getProductByBrand = (id) => {
  return axios
    .get(`${configAPI.baseUrlApi}/api/v1/product/branch/${id}`)
    .then((res) => {
      return res.data;
    });
};

const getProductByCategory = (id) => {
  return axios
    .get(`${configAPI.baseUrlApi}/api/v1/product/cate/${id}`)
    .then((res) => {
      return res.data;
    });
};

export const ProductService = {
  getAllProduct,
  get8ProductNew,
  getProductById,
  getProductSameCate,
  getProductByBrand,
  getProductByCategory,
  get10ProductFeature,
  getProductByName,
};
