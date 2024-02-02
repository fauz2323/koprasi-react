import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TransactionFetch from "../fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";

export const HistoryBonusContext = createContext({});

export const HistoryBonusProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    TransactionFetch.getAllBonus((response) => {
      if (response.status === 200) {
        setData(response.data.bonus);
        setIsLoading(false);
        console.log(response.data.bonus);
      } else if (response.status === 401) {
        setIsLoading(false);
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
        setError(response.message);
      }
    });
  }, []);
  const provider = {
    data,
    isLoading,
    error,
  };
  return (
    <HistoryBonusContext.Provider value={provider}>
      {children}
    </HistoryBonusContext.Provider>
  );
};
