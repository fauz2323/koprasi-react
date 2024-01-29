import React from "react";
import SideBarComponent from "./SideBarComponent";

export default function HeaderHome() {
  return (
    <>
      <div className="appHeader bg-primary text-light">
        <div className="left">
          <a
            href="/"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#sidebarPanel"
          >
            <ion-icon name="menu-outline"></ion-icon>
          </a>
        </div>
        <div className="pageTitle">
          <img src="assets/img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="right">
          <a href="app-notifications.html" className="headerButton">
            <ion-icon className="icon" name="notifications-outline"></ion-icon>
            <span className="badge badge-danger">4</span>
          </a>
          <a href="app-settings.html" className="headerButton">
            <img
              src="assets/img/sample/avatar/avatar1.jpg"
              alt="image"
              className="imaged w32"
            />
            <span className="badge badge-danger">6</span>
          </a>
        </div>
      </div>
      <SideBarComponent />
    </>
  );
}
