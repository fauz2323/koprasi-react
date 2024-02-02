import React from "react";
import { Link } from "react-router-dom";

export default function HeaderMenuHomePart() {
  return (
    <>
      <div className="section wallet-card-section pt-1 mt-5">
        <div className="wallet-card">
          <div className="wallet-footer">
            <div className="item">
              <Link to={"/withdraw"}>
                <div className="icon-wrapper bg-danger">
                  <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
                <strong>Withdraw</strong>
              </Link>
            </div>
            <div className="item">
              <Link to={"/setoran/setoran"}>
                <div className="icon-wrapper">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <strong>Setoran</strong>
              </Link>
            </div>
            <div className="item">
              <Link to={"/setoran/vip"}>
                <div className="icon-wrapper bg-success">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Setoran VIP</strong>
              </Link>
            </div>
            <div className="item">
              <Link to={"/setoran/happy"}>
                <div className="icon-wrapper bg-warning">
                  <ion-icon name="swap-vertical"></ion-icon>
                </div>
                <strong>Setoran Happy</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
