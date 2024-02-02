import React from "react";
import { Link } from "react-router-dom";

export default function ButtomNavBar() {
  return (
    <div className="appBottomMenu">
      <Link to="/home" className="item">
        <div className="col">
          <ion-icon name="pie-chart-outline"></ion-icon>
          <strong>Home</strong>
        </div>
      </Link>

      <Link className="item" to={"/history/bonus"}>
        <div className="col">
          <ion-icon name="document-text-outline"></ion-icon>
          <strong>History Bonus</strong>
        </div>
      </Link>
      <Link className="item" to={"/history"}>
        <div className="col">
          <ion-icon name="document-text-outline"></ion-icon>
          <strong>History Transaction</strong>
        </div>
      </Link>
      <Link className="item" to={"/setting"}>
        <div className="col">
          <ion-icon name="settings-outline"></ion-icon>
          <strong>Settings</strong>
        </div>
      </Link>
    </div>
  );
}
