import axios from "axios";
import configAPI from "../configuration/apiConfig.json";
import { AddressService } from "./address.service";

const login = (username, password) => {
  const data = { phone: username, password };
  return axios
    .post(configAPI.baseUrlApi + "/api/v1/auth/login", data)
    .then((response) => {
      try {
        if (response.data.data.accessToken) {
          localStorage.setItem("userId", JSON.stringify(response.data.data.id));
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.data.accessToken)
          );
          AddressService.getAddressByUserID(response.data.data.id).then(
            (res) => {
              localStorage.setItem(
                "idAddress",
                JSON.stringify(response.data.data?.id)
              );
            }
          );
        } else {
          alert("Wrong username or password");
        }
      } catch {
      } finally {
        return response.data;
      }
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = (phone, password, confirmPassword, email) => {
  const data = { phone, password, confirmPassword, email };
  return axios
    .post(configAPI.baseUrlApi + "/api/v1/auth/register", data)
    .then((res) => {
      return res.data;
    });
};

const changePassword = (userId, oldPassword, newPassword) => {
  const data = { userId, oldPassword, newPassword };
  return axios
    .post(configAPI.baseUrlApi + "/api/v1/auth/change-password", data)
    .then((res) => {
      return res.data;
    });
};

export const AuthService = {
  login,
  logout,
  register,
  changePassword,
};
