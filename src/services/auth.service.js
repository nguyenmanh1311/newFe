import axios from "axios";
import configAPI from "../configuration/apiConfig.json";

const login = (username, password) => {
  const data = { phone: username, password };
  return axios
    .post(configAPI.baseUrlApi + "/api/v1/auth/login", data)
    .then((response) => {
      if (response.data.data.accessToken) {
        localStorage.setItem("userId", JSON.stringify(response.data.data.id));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.data.accessToken)
        );
      } else {
        alert("Wrong username or password");
      }
      return response.data;
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

export const AuthService = {
  login,
  logout,
  register,
};
