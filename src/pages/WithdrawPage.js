import React, { useContext } from "react";
import ButtomNavBar from "../component/ButtomNavBar";
import HeaderComponents from "../component/HeaderComponents";
import TextInputPart from "../parts/TextInputPart";
import ErrorComponent from "../component/ErrorComponent";
import { WithdrawContext } from "../helper/context/WithdrawContext";
import FormatHelper from "../helper/FormatHelper";
import LoadingComponent from "../component/LoadingComponent";

export default function WithdrawPage() {
  const {
    form,
    handleChange,
    error,
    bank,
    handleBankButton,
    saldo,
    isLoading,
  } = useContext(WithdrawContext);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponents />
          <div id="appCapsule">
            <div className="p-3">
              <div className="listview-title ">
                <TextInputPart
                  name={"rekening"}
                  type={"text"}
                  autoComplete={"Jumlah Setoran"}
                  id={"rekening"}
                  value={form.rekening}
                  onChange={handleChange}
                />
                <TextInputPart
                  name={"jumlah"}
                  type={"number"}
                  autoComplete={"Jumlah Setoran"}
                  id={"jumlah"}
                  value={form.jumlah}
                  onChange={handleChange}
                />
              </div>
              <div className="listview-title ">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Pilih Bank
                </label>
                <div className="row justify-content-center">
                  <button
                    className="btn btn-info col-5 m-2"
                    onClick={() => {
                      handleBankButton("Bank Mandiri");
                    }}
                  >
                    Bank Mandiri
                  </button>
                  <button
                    className="btn btn-info col-5 m-2"
                    onClick={() => {
                      handleBankButton("Bank BCA");
                    }}
                  >
                    Bank BCA
                  </button>
                  <button
                    className="btn btn-info col-5 m-2"
                    onClick={() => {
                      handleBankButton("Bank BRI");
                    }}
                  >
                    Bank BRI
                  </button>
                </div>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Bank
                  </label>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    {bank}
                  </label>
                </div>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Total Withdraw
                  </label>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    {FormatHelper.format(form.jumlah)}
                  </label>
                </div>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Total Saldo
                  </label>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    {FormatHelper.format(saldo)}
                  </label>
                </div>
              </div>
              {error && <ErrorComponent errorMessage={error} />}
              <div className="row d-flex justify-content-center">
                <button
                  className="btn btn-primary col-11 m-2 p-3"
                  onClick={() => {}}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
