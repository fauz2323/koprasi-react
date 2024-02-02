import { createContext, useState } from "react";
import { numberValidator } from "../validation/NumberValidator";
import { useNavigate } from "react-router-dom";
import TransactionFetch from "../fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";

export const SetoranContext = createContext({});

export const SetoranProvider = ({ children }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    setoran: "",
    bank: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonChange = (data) => {
    setForm({ ...form, setoran: data });
  };

  const tester = () => {
    console.log(form);
  };

  const submitHanler = () => {
    if (numberValidator(form.setoran) === false) {
      return setError("Jumlah Setoran harus berupa angka");
    }

    if (form.bank === "") {
      return setError("Pilih Bank");
    }

    if (form.setoran % 100000 !== 0) {
      return setError("Jumlah Setoran harus kelipatan 100.000");
    }

    setIsLoading(true);

    const dataBody = {
      amount: form.setoran,
      bank: form.bank,
    };

    TransactionFetch.setoranTransaction(dataBody, (data) => {
      console.log(data);
      if (data.status === 200) {
        setIsLoading(false);
        console.log(data.data.va.transactionid);
        navigate(`/transaction/va/${data.data.va.transactionid}`);
      } else if (data.status === 401) {
        setIsLoading(false);
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    });
  };

  const provider = {
    form,
    handleChange,
    handleButtonChange,
    submitHanler,
    error,
    tester,
    isLoading,
  };

  return (
    <SetoranContext.Provider value={provider}>
      {children}
    </SetoranContext.Provider>
  );
};
