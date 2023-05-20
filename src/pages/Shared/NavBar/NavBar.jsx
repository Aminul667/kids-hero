import { useContext, useState } from "react";
import Menu from "./Menu";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from "../../../assets/images/logo.png";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(user);

  return (
    <nav className="mb-5">
      <div className="mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" className="w-[50px]"/>
          <h2 className="font-jost text-3xl font-bold"><span className="text-colorPrimary">Kids</span>Hero</h2>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="text-3xl font-bold">
          {user && (
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={user.photoURL} title={user.displayName} />
              </div>
            </div>
          )}
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
