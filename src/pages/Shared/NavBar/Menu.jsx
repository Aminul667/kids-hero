import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const activeStyle = {
    color: "white",
    backgroundColor: "#4E7D64",
  };

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium">
      <NavLink
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Home
      </NavLink>
      <NavLink
        to="/alltoys"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        All Toys
      </NavLink>
      {
        user ? (
          <>
          <NavLink
        to="/mytoys"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        My Toys
      </NavLink>
      <NavLink
        to="/addtoy"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Add A Toy
      </NavLink>
          </>
        ):null
      }
      <NavLink
        to="/blog"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        Blogs
      </NavLink>
      {!user ? (
        <NavLink
          to="/login"
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Login
        </NavLink>
      ) : (
        <button
          onClick={handleLogout}
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-[#4E7D64] focus:outline-none focus:text-white focus:bg-[#4E7D64]"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Menu;
