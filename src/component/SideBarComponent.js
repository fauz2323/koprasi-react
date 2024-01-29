import React from "react";

export default function SideBarComponent() {
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
                  <img
                    src="assets/img/sample/avatar/avatar1.jpg"
                    alt="image"
                    className="imaged  w36"
                  />
                </div>
                <div className="in">
                  <strong>Sebastian Doe</strong>
                  <div className="text-muted">4029209</div>
                </div>
                <a
                  href="#"
                  className="btn btn-link btn-icon sidebar-close"
                  data-bs-dismiss="modal"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </a>
              </div>
              <div className="sidebar-balance">
                <div className="listview-title">Balance</div>
                <div className="in">
                  <h1 className="amount">$ 2,562.50</h1>
                </div>
              </div>

              <div className="action-group">
                <a href="index.html" className="action-button">
                  <div className="in">
                    <div className="iconbox">
                      <ion-icon name="add-outline"></ion-icon>
                    </div>
                    Deposit
                  </div>
                </a>
                <a href="index.html" className="action-button">
                  <div className="in">
                    <div className="iconbox">
                      <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                    Withdraw
                  </div>
                </a>
                <a href="index.html" className="action-button">
                  <div className="in">
                    <div className="iconbox">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    Send
                  </div>
                </a>
                <a href="app-cards.html" className="action-button">
                  <div className="in">
                    <div className="iconbox">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>
                    My Cards
                  </div>
                </a>
              </div>

              <div className="listview-title mt-1">Menu</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <a href="index.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="pie-chart-outline"></ion-icon>
                    </div>
                    <div className="in">
                      Overview
                      <span className="badge badge-primary">10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="app-pages.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="document-text-outline"></ion-icon>
                    </div>
                    <div className="in">Pages</div>
                  </a>
                </li>
                <li>
                  <a href="app-components.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div className="in">Components</div>
                  </a>
                </li>
                <li>
                  <a href="app-cards.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>
                    <div className="in">My Cards</div>
                  </a>
                </li>
              </ul>
              <div className="listview-title mt-1">Others</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <a href="app-settings.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="settings-outline"></ion-icon>
                    </div>
                    <div className="in">Settings</div>
                  </a>
                </li>
                <li>
                  <a href="component-messages.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div className="in">Support</div>
                  </a>
                </li>
                <li>
                  <a href="app-login.html" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="log-out-outline"></ion-icon>
                    </div>
                    <div className="in">Log out</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
