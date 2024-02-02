import React, { useContext } from "react";
import { icon } from "../assets/images";
import HeaderComponents from "../component/HeaderComponents";
import ButtomNavBar from "../component/ButtomNavBar";
import TextInputPart from "../parts/TextInputPart";
import LoadingComponent from "../component/LoadingComponent";
import { SettingContext } from "../helper/context/SettingContext";
import ErrorComponent from "../component/ErrorComponent";

export default function SettingPage() {
  const { isLoading, data, error, form, handleChange, submitHandler, message } =
    useContext(SettingContext);
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <HeaderComponents />

          <>
            <div id="appCapsule">
              <div className="m-2">
                {error && <ErrorComponent errorMessage={error} />}
                {message && <ErrorComponent errorMessage={message} />}
              </div>
              <div className="section mt-3 text-center">
                <div className="avatar-section">
                  <img
                    src={icon}
                    alt="avatar"
                    className="imaged w100 rounded"
                  />
                </div>
                <div>
                  <strong>{data.name}</strong>
                </div>
                <div>{data.username}</div>
                <div>{data.email}</div>
              </div>

              <div className="listview-title mt-1">Profile Settings</div>
              <ul className="listview image-listview text inset">
                <li>
                  <button
                    type="button"
                    className="item"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div className="in">
                      <div>Update Password</div>
                    </div>
                  </button>
                </li>
                <li>
                  <a href="#" className="item">
                    <div className="in">
                      <div>About App</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    <div className="in">
                      <div>About Apps</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="item">
                    <div className="in">
                      <div>Log Out</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Edit Password
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <TextInputPart
                      name={"old_password"}
                      type={"password"}
                      autoComplete={"old_password"}
                      value={form.old_password}
                      onChange={handleChange}
                      id={"old_password"}
                    />
                    <TextInputPart
                      name={"new_password"}
                      type={"password"}
                      autoComplete={"new_password"}
                      value={form.new_password}
                      onChange={handleChange}
                      id={"new_password"}
                    />
                    <TextInputPart
                      name={"confirm_password"}
                      type={"password"}
                      autoComplete={"password"}
                      value={form.confirm_password}
                      onChange={handleChange}
                      id={"confirm_password"}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      onClick={submitHandler}
                      className="btn btn-primary"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
          <ButtomNavBar />
        </>
      )}
    </>
  );
}
