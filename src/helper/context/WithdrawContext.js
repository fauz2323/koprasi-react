import { createContext, useEffect, useState } from "react";
import AuthFetch from "../fetch/AuthFetch";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";

export const WithdrawContext = createContext({});

export const WithdrawProvider = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ jumlah: 0, rekening: "" });
  const [error, setError] = useState("");
  const [bank, setBank] = useState("-");
  const [saldo, setSaldo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AuthFetch.AuthRequest((data) => {
      if (data.status === 200) {
        setIsLoading(false);
        setSaldo(data.data.balance.saldo);
      } else if (data.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        return navigate("/login");
      } else {
        setError("Unknown Error");
        setIsLoading(false);
      }
    });
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBankButton = (data) => {
    setBank(data);
  };

  const provider = {
    form,
    error,
    bank,
    handleChange,
    handleBankButton,
    saldo,
    isLoading,
  };

  return (
    <WithdrawContext.Provider value={provider}>
      {children}
    </WithdrawContext.Provider>
  );
};
