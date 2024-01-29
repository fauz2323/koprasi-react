import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponents() {
  return (
    <div className="appHeader">
      <div className="left">
        <Link to={-1} className="headerButton goBack">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </Link>
      </div>
      <div className="pageTitle">Koprasi Indo Mulia Sejahtera</div>
      <div className="right"></div>
    </div>
  );
}
