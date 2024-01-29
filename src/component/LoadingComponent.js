import React from "react";
import { Blocks } from "react-loader-spinner";

export default function LoadingComponent() {
  return (
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
  );
}
