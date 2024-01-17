import React, { useEffect, useState } from "react";
import ButtomNavBar from "../component/ButtomNavBar";
import HeaderComponent from "../component/HeaderComponent";
import { Blocks } from "react-loader-spinner";
import AuthFetch from "../helper/fetch/AuthFetch";
import secureLocalStorage from "react-secure-storage";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isUnautorize, setUnautorize] = useState(false);

  useEffect(() => {
    AuthFetch.AuthRequest((data) => {
      if (data.status === 200) {
        setLoading(false);
        console.log(data);
      }

      if (data.status === 401) {
        setLoading(false);
        secureLocalStorage.clear();
        setUnautorize(true);
      } else {
        setLoading(false);
        setError(data.message);
      }
    });
  }, []);

  return loading ? (
    <div className="h-screen flex items-center justify-center">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  ) : (
    <>
      {isUnautorize && <Navigate to="/login" replace />}
      <HeaderComponent />
      <div className="w-full bg-sky-500 p-4">
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
            <div className="p-4 bg-white rounded-xl sm:w-64 w-48 h-24">
              <h4>test</h4>
            </div>
          </div>
        </div>
      </div>
      <ButtomNavBar />
    </>
  );
}
