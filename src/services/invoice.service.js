import axios from "axios";
import configAPI from "../configuration/apiConfig.json";

const getAllInvoiceByUserId = (userId) => {
  return axios
    .get(configAPI.baseUrlApi + "/api/v1/invoice/" + userId)
    .then((res) => {
      return res.data;
    });
};

const createInvoiceByCartId = (cartId) => {
  return axios
    .post(configAPI.baseUrlApi + "/api/v1/invoice/" + cartId)
    .then((res) => {
      return res.data;
    });
};

export const InvoiceService = {
  getAllInvoiceByUserId,
  createInvoiceByCartId,
};
