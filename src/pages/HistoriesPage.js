import React, { useContext } from "react";
import { HistoryContext } from "../helper/context/HistoryContext";
import HeaderComponents from "../component/HeaderComponents";
import ButtomNavBar from "../component/ButtomNavBar";
import LoadingComponent from "../component/LoadingComponent";
import { Navigate } from "react-router-dom";
import FormatHelper from "../helper/FormatHelper";
import CardHistoryPart from "../parts/CardHistoryPart";

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
              <div className="section-title mb-3">History Transactions</div>
              <div className="transactions">
                {Object.values(history).map((item) =>
                  item.type !== "wd" ? (
                    <CardHistoryPart
                      type={item.type}
                      va={item.va}
                      amount={item.amount}
                      date={item.created_at}
                      status={item.status}
                      button={true}
                      url={"/transaction/va/" + item.transactionid}
                    />
                  ) : (
                    <CardHistoryPart
                      type={item.type}
                      va={item.va}
                      amount={item.amount}
                      date={item.created_at}
                      status={item.status}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
