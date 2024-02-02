import React from "react";

export default function ButtonPart({ onClick, disabled, text }) {
  return (
    <div className="sm:col-span-4 mt-8 mb-4">
      <button
        className="bg-sky-600 text-white py-2 px-4 block w-full rounded-xl text-center hover:bg-sky-700"
        onClick={onClick}
        disabled={disabled}
      >
        {disabled ? "Loading..." : text}
      </button>
    </div>
  );
}
