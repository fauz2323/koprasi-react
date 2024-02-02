import React from "react";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { icon } from "../assets/images/index";

export default function SideBarComponent() {
  const handlerLogout = () => {
    secureLocalStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <div
        className="modal fade panelbox panelbox-left"
        id="sidebarPanel"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="profileBox pt-2 pb-2">
                <div className="image-wrapper">
                  <img src={icon} alt="images" className="imaged w36" />
                </div>
                <div className="in">
                  <strong>Hello Koprasi User</strong>
                </div>
                <a
                  href="/"
                  className="btn btn-link btn-icon sidebar-close"
                  data-bs-dismiss="modal"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </a>
              </div>

              <div className="listview-title mt-1">Menu</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <Link to="/home" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="pie-chart-outline"></ion-icon>
                    </div>
                    <div className="in">Home</div>
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="document-text-outline"></ion-icon>
                    </div>
                    <div className="in">History</div>
                  </Link>
                </li>
                <li>
                  <Link to="/history/bonus" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div className="in">History Bonus</div>
                  </Link>
                </li>
              </ul>
              <div className="listview-title mt-1">Others</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <Link to="/setting" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="settings-outline"></ion-icon>
                    </div>
                    <div className="in">Settings</div>
                  </Link>
                </li>
                <li>
                  <a href="#" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div className="in">Support</div>
                  </a>
                </li>
                <li>
                  <button onClick={handlerLogout} className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="log-out-outline"></ion-icon>
                    </div>
                    <div className="in">Log out</div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
