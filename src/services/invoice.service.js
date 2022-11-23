import axios from "axios";
import configAPI from "../configuration/apiConfig.json";

const getAllInvoice = () => {
  return axios.get(configAPI.baseUrlApi + "/api/v1/branch").then((res) => {
    return res.data;
  });
};

export const InvoiceService = {
  getAllInvoice,
};
