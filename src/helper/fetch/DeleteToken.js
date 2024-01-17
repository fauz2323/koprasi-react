import secureLocalStorage from "react-secure-storage";

export default class DeleteToken {
  static deleteToken = () => {
    secureLocalStorage.clear();
  };
}
