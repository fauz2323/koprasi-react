import LoadingComponent from "../component/LoadingComponent";
import HeaderComponents from "../component/HeaderComponents";
import ButtomNavBar from "../component/ButtomNavBar";
import FormatHelper from "../helper/FormatHelper";
import { VaDetailContext } from "../helper/context/VaDetailContext";
import { useContext } from "react";

export default function VaDetailPage() {
  const { transactionid, isLoading, data } = useContext(VaDetailContext);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponents />
          <div id="appCapsule" class="full-height">
            <div class="section mt-2 mb-2">
              <div class="listed-detail mt-3">
                <div class="icon-wrapper">
                  <div class="iconbox">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <h3 class="text-center mt-2">Payment Detail</h3>
              </div>

              <ul class="listview flush transparent simple-listview no-space mt-3">
                <li>
                  <strong>Transaction Id</strong>
                  <span>{transactionid}</span>
                </li>
                <li>
                  <strong>Status</strong>
                  <span class="text-success">{data.transaction.status}</span>
                </li>
                <li>
                  <strong>Desc</strong>
                  <span>{data.transaction.desc}</span>
                </li>
                <li>
                  <strong>Bank</strong>
                  <span>{data.transaction.bank}</span>
                </li>
                <li>
                  <strong>Virtual Account</strong>
                  <span>{data.transaction.va}</span>
                </li>
                <li>
                  <strong>Transaction Category</strong>
                  <span>{data.transaction.type}</span>
                </li>
                <li>
                  <strong>Date</strong>
                  <span>
                    {FormatHelper.formatDate(data.transaction.created_at)}
                  </span>
                </li>
                <li>
                  <strong>Amount</strong>
                  <h3 class="m-0">
                    {FormatHelper.format(data.transaction.amount)}
                  </h3>
                </li>
                <li>
                  <strong>Expire Date</strong>
                  <span>{FormatHelper.formatDate(data.transaction.exp)}</span>
                </li>
                {data.transaction.status === "pending" ? (
                  <button class="btn btn-danger col-12 mt-4">
                    cancel Transaction
                  </button>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
