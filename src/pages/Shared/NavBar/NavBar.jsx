import { useState } from "react";
import Menu from "./Menu";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="mb-5">
      <div className="mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <span>LOGO</span>
          <span>WebName</span>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="text-3xl font-bold">
          <h2>User Pic</h2>
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">{showMobileMenu && <Menu />}</div>
    </nav>
  );
};

export default NavBar;
