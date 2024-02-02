import { createContext, useEffect, useState } from "react";
import AuthFetch from "../fetch/AuthFetch";
import secureLocalStorage from "react-secure-storage";

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [isloading, setIsLoading] = useState(true);
  const [balance, setBalance] = useState({
    saldo: 0,
    setoranReal: 0,
    setoranPending: 0,
    kuota: 0,
    happy: 0,
    vip: 0,
  });
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    AuthFetch.AuthRequest((data) => {
      if (data.status === 200) {
        setIsLoading(false);
        setBalance({
          ...balance,
          saldo: data.data.balance.saldo,
          setoranReal: data.data.balanceReal,
          setoranPending: data.data.balance.setoranpending,
          kuota: data.data.kuota.kuota,
          happy: data.data.balanceHappy,
          vip: data.data.balanceVip,
        });
      } else if (data.status === 401) {
        console.log("unautorize");
        secureLocalStorage.clear();
        setIsLogin(true);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const provider = {
    isloading,
    setIsLoading,
    isLogin,
    setIsLogin,
    balance,
  };

  return (
    <HomeContext.Provider value={provider}>{children}</HomeContext.Provider>
  );
};
