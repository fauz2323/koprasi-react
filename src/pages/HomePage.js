import React, { useContext } from "react";
import ButtomNavBar from "../component/ButtomNavBar";
import BalanceHomePart from "../parts/home/BalanceHomePart";
import HeaderMenuHomePart from "../parts/home/HeaderMenuHomePart";
import LoadingComponent from "../component/LoadingComponent";
import { Navigate, redirect } from "react-router-dom";
import { HomeContext } from "../helper/context/HomeContext";
import HeaderHome from "../component/HeaderHome";

export default function HomePage() {
  const { isloading, isLogin, balance } = useContext(HomeContext);

  return (
    <>
      {isLogin ? <Navigate replace to="/login" /> : null}
      {isloading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderHome />
          <HeaderMenuHomePart />
          <BalanceHomePart {...balance} />
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
