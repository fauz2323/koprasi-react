import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TransactionFetch from "../fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";

export const VaDetailContext = createContext({});

export const VaDetailProvider = ({ children }) => {
  let { transactionid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getTransactionDetail = (transactionid) => {
    TransactionFetch.detailVaTransaction(transactionid, (data) => {
      if (data.status === 200) {
        setData(data.data);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getTransactionDetail(transactionid);
  }, [transactionid]);

  const cancelTransaction = async (transactionid) => {
    setIsLoading(true);
    await TransactionFetch.cancelTransaction(transactionid, (data) => {
      if (data.status === 200) {
        getTransactionDetail(transactionid);
      } else if (data.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        navigate("/login");
      } else {
        setIsLoading(false);
      }
    });
  };

  const provider = {
    data,
    isLoading,
    transactionid,
    cancelTransaction,
  };
  return (
    <VaDetailContext.Provider value={provider}>
      {children}
    </VaDetailContext.Provider>
  );
};
