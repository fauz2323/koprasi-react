import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { numberValidator } from "../validation/NumberValidator";

export const SetoranContext = createContext({});

export const SetoranProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    setoran: "",
    setoran2: "",
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

  const submitHanler = () => {
    if (numberValidator(form.setoran) === false) {
      return setError("Jumlah Setoran harus berupa angka");
    }

    if (form.setoran % 100000 !== 0) {
      return setError("Jumlah Setoran harus kelipatan 100.000");
    }

    sessionStorage.setItem("amount", form.setoran);
    sessionStorage.setItem("type", "setoran");
  };

  const provider = {
    form,
    handleChange,
    handleButtonChange,
    submitHanler,
    error,
  };

  return (
    <SetoranContext.Provider value={provider}>
      {children}
    </SetoranContext.Provider>
  );
};
