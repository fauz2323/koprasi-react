import React from "react";
import SideBarComponent from "./SideBarComponent";
import { icon } from "../assets/images";
import { Link } from "react-router-dom";

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
          <img src={icon} alt="logo" className="logo" />
        </div>
        <div className="right">
          <a href="#" className="headerButton">
            <ion-icon className="icon" name="notifications-outline"></ion-icon>
          </a>
          <Link to="/setting" className="headerButton">
            <img
              src="assets/img/sample/avatar/avatar1.jpg"
              alt="images"
              className="imaged w32"
            />
          </Link>
        </div>
      </div>
      <SideBarComponent />
    </>
  );
}
