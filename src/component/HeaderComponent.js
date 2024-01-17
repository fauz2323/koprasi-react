import React, { useState } from "react";
import { icon, profile } from "../assets/images";

export default function HeaderComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickDropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="flex flex-row justify-between bg-sky-500 p-4">
        <div className="flex flex-row">
          <img
            className="rounded-lg"
            src={icon}
            alt="Logo"
            width={50}
            height={50}
          />
          <h2 className="lg:text-4xl ml-4 text-xl text-white">Koprasi IMS</h2>
        </div>

        <div className="flex flex-row relative  text-left">
          <div className="mt-3 mr-4">
            <h4>Hello, User</h4>
          </div>
          <div>
            <button onClick={clickDropdownHandler}>
              <img
                className="rounded-lg"
                src={profile}
                alt="Logo"
                width={50}
                height={50}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="/profile"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
                  >
                    Account settings
                  </a>
                  <a
                    href="/support"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
                  >
                    Support
                  </a>
                  <a
                    href="/login"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
                  >
                    License
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
