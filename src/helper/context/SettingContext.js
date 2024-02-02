import { createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import AuthFetch from "../fetch/AuthFetch";
import { useNavigate } from "react-router-dom";

export const SettingContext = createContext({});

export const SettingProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    const data = {
      old: form.old_password,
      new: form.new_password,
    };
    AuthFetch.changePassword(data, (response) => {
      if (response.status === 200) {
        setIsLoading(false);
        setForm({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
        setMessage(response.message);
      } else if (response.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
        setError(response.message);
      }
    });
  };

  useEffect(() => {
    AuthFetch.AuthRequest((data) => {
      if (data.status === 200) {
        setIsLoading(false);
        setData(data.data.user);
      } else if (data.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    });
  }, []);
  const provider = {
    isLoading,
    setIsLoading,
    data,
    setData,
    error,
    setError,
    form,
    setForm,
    handleChange,
    submitHandler,
    message,
  };
  return (
    <SettingContext.Provider value={provider}>
      {children}
    </SettingContext.Provider>
  );
};
