import React, { useContext } from "react";
import ButtomNavBar from "../component/ButtomNavBar";
import HeaderComponents from "../component/HeaderComponents";
import TextInputPart from "../parts/TextInputPart";
import { SetoranContext } from "../helper/context/SetoranContext";
import FormatHelper from "../helper/FormatHelper";
import ErrorComponent from "../component/ErrorComponent";
import LoadingComponent from "../component/LoadingComponent";

export default function SetoranPage() {
  const {
    form,
    handleChange,
    handleButtonChange,
    submitHanler,
    error,
    isLoading,
    data,
    type,
  } = useContext(SetoranContext);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponents />
          <div id="appCapsule">
            <div className="listview-title ">
              <TextInputPart
                name={"setoran"}
                type={"number"}
                autoComplete={"Jumlah Setoran"}
                id={"setoran"}
                value={form.setoran}
                onChange={handleChange}
              />
            </div>
            <div className="listview-title ">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Pilih Jumlah Setoran {type}
              </label>
              <div className="row justify-content-center">
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(100000);
                  }}
                >
                  100.000
                </button>
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(500000);
                  }}
                >
                  500.000
                </button>
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(1000000);
                  }}
                >
                  1.000.000
                </button>
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(2000000);
                  }}
                >
                  2.000.000
                </button>
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(5000000);
                  }}
                >
                  5.000.000
                </button>
                <button
                  className="btn btn-primary col-5 m-2"
                  onClick={() => {
                    handleButtonChange(10000000);
                  }}
                >
                  10.000.000
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Pilih Bank
                </label>
                <select
                  className="form-select bg-white mt-2 mb-2"
                  aria-label="Default select example"
                  name="bank"
                  onChange={handleChange}
                >
                  <option value="" selected disabled>
                    Open this select menu
                  </option>
                  <option value="CIPERMATA">VA PERMATA</option>
                  <option value="CIMANDIRI">VA MANDIRI</option>
                  <option value="CIBNI">VA BNI</option>
                  <option value="CIBSI">VA BSI</option>
                  <option value="CIBRI">VA BRI</option>
                </select>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Total Setoran
                  </label>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    {FormatHelper.format(form.setoran)}
                  </label>
                </div>
              </div>
              <div className="row ">
                <div className="col-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Admin Fee
                  </label>
                </div>
                <div className="col-6 d-flex flex-row-reverse">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    {FormatHelper.format(7500)}
                  </label>
                </div>
              </div>
              {error && <ErrorComponent errorMessage={error} />}
              <div className="row d-flex justify-content-center">
                <button
                  className="btn btn-primary col-11 m-2"
                  onClick={() => {
                    submitHanler();
                  }}
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
