import React from "react";

export default function TextInputPart({
  id,
  name,
  type,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div className="sm:col-span-4 mt-8">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {name}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          className="block w-full rounded-md border-1 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
