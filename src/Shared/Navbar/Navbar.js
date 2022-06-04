import { signOut } from "@firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Logo.png";
import auth from "../../firebase.init";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto ">
        <div className="navbar py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-slate-100 rounded-box w-52"
              >
                <li>
                  <Link className="font-bold" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="font-bold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img className="w-24" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link className="font-bold" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="font-bold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <li className="list-none mx-5">
              {user && user.photoURL ? (
                <div className="flex justify-center items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  <h1 className="text-xl">{user?.displayName}</h1>
                </div>
              )}
            </li>
            <li className="list-none">
              {user ? (
                <button onClick={logOut} className="btn text-white btn-secondary">
                  Sign Out
                </button>
              ) : (
                <Link className="btn btn-primary text-white" to="/login">
                  Login
                </Link>
              )}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
