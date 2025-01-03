import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const NavLink = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to={'/ourMenu'}>OUR MENU</Link>
      </li>
      <li>
        <Link to={'/ourShop/salad'}>OUR SHOP</Link>
      </li>
    </>
  );
  return (
    <div className="navbar md:w-11/12 text-white py-5 px-5 mx-auto flex fixed z-10 bg-black/25 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavLink}
          </ul>
        </div>
        <a className="text-2xl font-bold">
          <p className="text-yellow-400 inline">Spice</p> Symphony
        </a>
      </div>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLink}</ul>
      </div>
      <div className="btn">SING OUT</div>
    </div>
  );
}

export default Navbar;
