import React from "react";

export default function ButtomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex flex-row justify-center">
        <a
          href="/home"
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
        >
          License
        </a>
        <a
          href="/s"
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
        >
          License
        </a>
      </div>
    </div>
  );
}
