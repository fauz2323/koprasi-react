import React, { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const tes = "yang buat arya";

  const provider = {
    // state
    loading,
    setLoading,
    error,
    setError,
    isLogin,
    setIsLogin,
    form,
    setForm,

    tes,
  };

  return (
    <LoginContext.Provider value={provider}>{children}</LoginContext.Provider>
  );
};
