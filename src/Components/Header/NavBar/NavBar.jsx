import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Hook/Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 font-extrabold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 font-extrabold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 font-extrabold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/q"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 font-extrabold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/p"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-500 font-extrabold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="h-20 w-28"
            src="https://i.ibb.co/VHX6VrT/logof.png"
            alt=""
          />
          <p className="text-2xl font-serif font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text">
            Tectronic
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navLink}</ul>
      </div>
      <div className="navbar-end gap-3">
        <p className="mt-2 font-serif hidden lg:contents text-black">
          {user?.displayName}
        </p>
        <div className="text-3xl">
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-12 mt-2 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <FaUserCircle></FaUserCircle>
          )}
        </div>
        {user ? (
          <Link
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/"
          >
            LogOut
          </Link>
        ) : (
          <Link
            className="btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
            to="/login"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
