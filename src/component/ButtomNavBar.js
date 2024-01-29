import React from "react";
import { Link } from "react-router-dom";

export default function ButtomNavBar() {
  return (
    <div className="appBottomMenu">
      <Link to="/home" className="item">
        <div className="col">
          <ion-icon name="pie-chart-outline"></ion-icon>
          <strong>Overview</strong>
        </div>
      </Link>

      <Link className="item" to={"/history"}>
        <div className="col">
          <ion-icon name="document-text-outline"></ion-icon>
          <strong>History</strong>
        </div>
      </Link>
      <a href="app-settings.html" className="item">
        <div className="col">
          <ion-icon name="settings-outline"></ion-icon>
          <strong>Settings</strong>
        </div>
      </a>
    </div>
  );
}
