import React from "react";
import FormatHelper from "../helper/FormatHelper";

export default function CardHistoryPart({ type, va, amount, date, status }) {
  return (
    <div className="mt-1">
      <i className="item">
        <div className="detail">
          <div>
            <strong>{type}</strong>
            {va && <strong>VA : {va}</strong>}
            <p>{FormatHelper.formatDate(date)}</p>
          </div>
        </div>
        <div className="right">
          <div className="price ">{FormatHelper.format(amount)}</div>
          <div className="price ">{status}</div>
        </div>
      </i>
    </div>
  );
}
