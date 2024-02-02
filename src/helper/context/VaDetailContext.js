import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionFetch from "../fetch/TransactionFetch";

export const VaDetailContext = createContext({});

export const VaDetailProvider = ({ children }) => {
  let { transactionid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    TransactionFetch.detailVaTransaction(transactionid, (data) => {
      if (data.status === 200) {
        setData(data.data);
        console.log(data.data);
        setIsLoading(false);
      }
    });
  }, [transactionid]);

  const provider = {
    data,
    isLoading,
    transactionid,
  };
  return (
    <VaDetailContext.Provider value={provider}>
      {children}
    </VaDetailContext.Provider>
  );
};
