import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/LMCreationsLogo1.png";
import NavLinks from "./NavLinks";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [top, setTop] = React.useState(!window.scrollY);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        top && "text-white font-semibold"
      } ${!top && "bg-black shadow-lg  text-rose-500 font-semibold"}`}
    >
      <div className=" bg-opacity-10 bg-slate-200 relative  z-20 font-semibold ">
        <div className="navbar max-w-screen-xl mx-auto h-4">
          <div className="navbar-start">
            <div className="dropdown right-0 text-rose-500">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-gradient-to-br from-pink-50 to-orange-100
                 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-box w-56"
              >
                <NavLinks></NavLinks>
              </ul>
            </div>
            <Link className="flex items-center" to="/">
              <img className="w-24 h-14" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center  hidden lg:flex gap-5">
            <ul className="menu menu-horizontal text-xl  px-1">
              <NavLinks></NavLinks>
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
