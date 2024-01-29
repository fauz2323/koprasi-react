import React, { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const halo = "test halo";

  const provider = {
    loading,
    setLoading,
    error,
    setError,
    isLogin,
    setIsLogin,
    form,
    setForm,
    halo,
  };

  return (
    <LoginContext.Provider value={provider}>{children}</LoginContext.Provider>
  );
};
