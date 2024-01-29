import { createContext, useEffect, useState } from "react";
import TransactionFetch from "../fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";

export const HistoryContext = createContext({});

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    TransactionFetch.getAllTransaction((data) => {
      if (data.status === 200) {
        setIsLoading(false);
        setHistory({
          ...history,
          ...data.data.list,
        });
        console.log(data);
      }
      if (data.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        setIsLogin(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const provider = {
    history,
    setHistory,
    isLoading,
    setIsLoading,
    isLogin,
    setIsLogin,
  };

  return (
    <HistoryContext.Provider value={provider}>
      {children}
    </HistoryContext.Provider>
  );
};
