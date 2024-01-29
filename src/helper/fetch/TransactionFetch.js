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
}
