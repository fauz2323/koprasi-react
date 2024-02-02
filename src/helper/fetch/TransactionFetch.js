import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default class TransactionFetch {
  static getAllTransaction = async (callback) => {
    //axios
    axios
      .get("https://indomuliasejahtera.com/api/transaction-list", {
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

  static getAllBonus = async (callback) => {
    //axios
    axios
      .get("https://indomuliasejahtera.com/api/bonus-list", {
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

  static setoranTransaction = async (path, data, callback) => {
    const body = {
      amount: data.amount,
      bank: data.bank,
    };
    //axios
    await axios
      .post("https://indomuliasejahtera.com/api/" + path, body, {
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
          status: error.status,
          message: error.data.message,
          data: "",
        });
      });
  };

  static detailVaTransaction = async (transactionid, callback) => {
    const body = {
      transactionid: transactionid,
    };

    //axios
    await axios
      .post("https://indomuliasejahtera.com/api/transaction-detail-id", body, {
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
          status: error.status,
          message: error.data.message,
          data: "",
        });
      });
  };

  static cancelTransaction = async (transactionid, callback) => {
    const body = {
      transactionid: transactionid,
    };

    //axios
    await axios
      .post("https://indomuliasejahtera.com/api/transaction-cancel", body, {
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
          status: error.status,
          message: error.data.message,
          data: "",
        });
      });
  };
}
