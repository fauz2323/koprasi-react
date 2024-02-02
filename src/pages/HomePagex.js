import React, { useEffect, useState } from "react";
import ButtomNavBar from "../component/ButtomNavBar";
import HeaderComponent from "../component/HeaderComponent";
import { Blocks } from "react-loader-spinner";
import AuthFetch from "../helper/fetch/AuthFetch";
import secureLocalStorage from "react-secure-storage";
import { Navigate } from "react-router-dom";
import { HiBanknotes } from "react-icons/hi2";
import BalanceSlider from "../parts/home/BalanceSlider";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isUnautorize, setUnautorize] = useState(false);

  useEffect(() => {
    AuthFetch.AuthRequest((data) => {
      if (data.status === 200) {
        setLoading(false);
      }

      if (data.status === 401) {
        setLoading(false);
        secureLocalStorage.clear();
        setUnautorize(true);
      } else {
        setLoading(false);
        setError(data.message);
      }
    });
  }, []);

  return loading ? (
    <div className="h-screen flex items-center justify-center">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  ) : (
    <>
      {isUnautorize && <Navigate to="/login" replace />}
      <HeaderComponent />
      <BalanceSlider />
      <div className="sm:w-1/2 mx-auto mt-auto p-5 grid sm:grid-cols-3 grid-cols-3 gap-4 bg-slate-700">
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Setoran</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Withdraw</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Reward</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Promo Kendaraan</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Promo Haji</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Tabungan Lebaran</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">History Pengajuan Promo</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Setoran VIP</p>
        </div>
        <div className="flex flex-row items-center p-4 w-auto bg-sky-200 rounded-xl">
          <HiBanknotes className=" size-10" />
          <p className="">Setoran HAPPY</p>
        </div>
      </div>
      <ButtomNavBar />
    </>
  );
}
