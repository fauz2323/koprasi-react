import React, { useContext, useEffect } from "react";
import HeaderComponents from "../component/HeaderComponents";
import ButtomNavBar from "../component/ButtomNavBar";
import LoadingComponent from "../component/LoadingComponent";
import TransactionFetch from "../helper/fetch/TransactionFetch";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../component/ErrorComponent";
import CardHistoryPart from "../parts/CardHistoryPart";
import { HistoryBonusContext } from "../helper/context/HistoryBonusContext";

export default function HistoryBonusPage() {
  const { data, isLoading, error } = useContext(HistoryBonusContext);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {error && <ErrorComponent errorMessage={error} />}
          <HeaderComponents />
          <div id="appCapsule">
            <div className="p-3">
              <div className="section-title mb-3">History Bonus</div>
              <div className="transactions">
                {Object.values(data).map((item) => (
                  <CardHistoryPart
                    type={item.desc}
                    va={item.va}
                    amount={item.amount}
                    date={item.created_at}
                    status={item.status}
                  />
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
