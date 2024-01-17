import React from "react";

export default function ErrorComponent({ errorMessage }) {
  return (
    <div className="text-white bg-red-400 p-2 rounded-xl">{errorMessage}</div>
  );
}
