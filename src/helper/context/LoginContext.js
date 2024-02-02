import React, { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import AuthFetch from "../fetch/AuthFetch";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const data = secureLocalStorage.getItem("token");
    if (data !== null) {
      setIsLogin(true);
    }
  }, []);

  const login = async (username, password) => {
    //axios
    setLoading(true);
    AuthFetch.loginRequest({ username, password }, (data) => {
      setLoading(false);
      if (data.status === 200) {
        setIsLogin(true);
      } else {
        setError(data.message);
      }
    });
  };

  const provider = {
    loading,
    error,
    isLogin,
    form,
    login,
    handleChange,
  };

  return (
    <LoginContext.Provider value={provider}>{children}</LoginContext.Provider>
  );
};
