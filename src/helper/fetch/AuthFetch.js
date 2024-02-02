import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class AuthFetch {
  static loginRequest = async ({ username, password }, callback) => {
    //axios
    axios
      .post(
        "https://indomuliasejahtera.com/api/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        secureLocalStorage.setItem("token", response.data.token);
        callback({ status: response.status, message: response.data.message });
      })
      .catch(function (error) {
        callback({
          status: error.response.status,
          message: error.response.data.message,
        });
      });
  };

  static registerRequest = async (
    { username, email, name, phone, password, reff, alamat, ktp },
    callback
  ) => {
    //axios
    const body = {
      username: username,
      email: email,
      name: name,
      phone: phone,
      password: password,
      reff: reff,
      alamat: alamat,
      ktp: ktp,
    };
    axios
      .post("https://indomuliasejahtera.com/api/register", body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(function (response) {
        secureLocalStorage.setItem("token", response.data.token);
        callback({ status: response.status, message: response.data.message });
      })
      .catch(function (error) {
        callback({
          status: error.response.status,
          message: error.response.data.message,
        });
      });
  };

  static AuthRequest = async (callback) => {
    //axios
    await axios
      .get("https://indomuliasejahtera.com/api/auth", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + secureLocalStorage.getItem("token"),
        },
      })
      .then(function (response) {
        callback({
          status: response.status,
          message: response.data.message,
          data: response.data,
        });
      })
      .catch(function (error) {
        callback({
          status: error.response.status,
          message: error.response.data.message,
          data: "",
        });
      });
  };

  static changePassword = async (data, callback) => {
    axios
      .post(
        "https://indomuliasejahtera.com/api/change-password",
        {
          oldPassword: data.old,
          newPassword: data.new,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + secureLocalStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        callback({ status: response.status, message: response.data.message });
      })
      .catch(function (error) {
        callback({
          status: error.response.status,
          message: error.response.data.message,
        });
      });
  };
}
