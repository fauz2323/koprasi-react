import React from "react";

export default function BalanceHomePart({
  saldo,
  setoranReal,
  setoranPending,
  kuota,
  happy,
  vip,
}) {
  return (
    <>
      <div className="section">
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">Saldo</div>
              <div className="value text-success">Rp. {saldo}</div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="stat-box">
              <div className="title">Setoran Real</div>
              <div className="value text-danger">Rp. {setoranReal}</div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <div className="stat-box">
              <div className="title">Setoran Pending</div>
              <div className="value">Rp. {setoranPending}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="stat-box">
              <div className="title">Kuota</div>
              <div className="value">Rp. {kuota}</div>
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="stat-box">
              <div className="title">Setoran Happy</div>
              <div className="value">Rp. {happy}</div>
            </div>
          </div>
          <div className="col-6 mt-2">
            <div className="stat-box">
              <div className="title">Setoran VIP</div>
              <div className="value">Rp. {vip}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
