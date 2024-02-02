import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFetch from "../fetch/AuthFetch";
import secureLocalStorage from "react-secure-storage";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    username: "",
    name: "",
    phone: "",
    address: "",
    ktp: "",
    reff: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("123");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    const data = {
      username: form.username,
      name: form.name,
      phone: form.phone,
      alamat: form.address,
      ktp: form.ktp,
      reff: form.reff,
      email: form.email,
      password: form.password,
    };

    setIsLoading(true);
    AuthFetch.registerRequest(data, (response) => {
      if (response.status === 200) {
        navigate("/home");
      } else {
        setIsLoading(false);
        setError(response.message);
      }
    });
  };

  const provider = {
    isLoading,
    error,
    form,
    handleChange,
    submitHandler,
  };

  return (
    <RegisterContext.Provider value={provider}>
      {children}
    </RegisterContext.Provider>
  );
};
