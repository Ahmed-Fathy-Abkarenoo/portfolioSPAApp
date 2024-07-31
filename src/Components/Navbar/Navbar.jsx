import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const mobileMenu = (
    <>
      <div className="nav-links lg:hidden block mt-6">
        <ul className="*:font-bold *:text-white flex flex-col gap-6">
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav className="w-full bg-[#2C3D4F] py-4 lg:py-6 fixed z-40">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="logo">
            <Link to="/" className="text-xl lg:text-3xl font-bold text-white">
              START FRAMEWORK
            </Link>
          </div>

          <div className="nav-links lg:block hidden">
            <ul className="flex gap-14 *:font-bold *:text-white">
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>

          <button
            className="lg:hidden text-2xl outline outline-4 outline-offset-2 outline-slate-800 rounded-md p-1"
            onClick={handleClick}>
            {click ? <FaTimes /> : <RxHamburgerMenu />}
          </button>
        </div>

        <div className="mobile-menu container mx-auto px-4">
          {click && mobileMenu}
        </div>
      </nav>
    </>
  );
}
