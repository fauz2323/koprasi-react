import React, { useContext } from "react";
import { HistoryContext } from "../helper/context/HistoryContext";
import HeaderComponents from "../component/HeaderComponents";
import ButtomNavBar from "../component/ButtomNavBar";
import LoadingComponent from "../component/LoadingComponent";
import { Navigate } from "react-router-dom";
import FormatHelper from "../helper/FormatHelper";

export default function HistoriesPage() {
  const { history, isLogin, isLoading } = useContext(HistoryContext);
  return (
    <>
      {!isLogin ? <Navigate replace to="/login" /> : null}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponents />
          <div id="appCapsule">
            <div className="p-3">
              <div className="section-title mb-3">History Transaction</div>
              <div className="transactions">
                {Object.values(history).map((item) => (
                  <i className="item">
                    <div className="detail">
                      <div>
                        <strong>{item.type}</strong>
                        <strong>VA : {item.va}</strong>
                        <p>{FormatHelper.formatDate(item.created_at)}</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="price ">
                        {FormatHelper.format(item.amount)}
                      </div>
                      <div className="price ">{item.status}</div>
                    </div>
                  </i>
                ))}
              </div>
            </div>
          </div>
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
