import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className='bg-slate-900'>
        <div className="container flex justify-around text-slate-300 py-1">
        <div>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            info@agence.com
          </span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon
              className="mr-2"
              icon={faPhone}
            ></FontAwesomeIcon>
            017000000000
          </span>
        </div>
        </div>
      </div>
      <div className="navbar sticky overflow-hidden bg-white top-0 drop-shadow border-b tob-0 mx-auto w-full px-6 text-black font-semibold px-4">
       <div className="container">
         {/* //-------------------------------------------Mobile menu Start---------------------------------------// */}
         <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost md:hidden mr-8"
              onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </button>

            <ul
              tabIndex="0"
              className={`divide-y divide-slate-200 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52 ${navbar ? "block" : "hidden"
                }`}>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutUs"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="# features"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* //-------------------------------------------Mobile menu end---------------------------------------// */}
          <div className="navbar-center hidden md:flex" style={{marginTop:"-20px"}}>
            <a href="/" className="font-bold uppercase lg:text-lg md:text-sm">
              <img className="h-[50px]" src={Logo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="lg:gap-8 md:gap-2 p-0 flex">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4  rounded"
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                className="block py-2 pl-3 pr-4 rounded">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pl-3 pr-4 rounded">
                Services
              </a>
            </li>
            <li>
              <a
                href="# features"
                className="block py-2 pl-3 pr-4 rounded">
                features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-semibold hidden md:flex">
          <ul className="gap-8 p-0 flex">
            {/* //-------------------------------------------Start LogOut condition---------------------------------------// */}
            {/* <li className="text-black hover:text-blue-600"><a className="cursor-pointer">Log Out</a></li> */}
            <li>
              <a
                href="/login"
                className="block py-2 pl-3 pr-4 rounded">
                Login
              </a>
            </li>
            {/* //-------------------------------------------End LogOut condition---------------------------------------// */}
          </ul>
        </div>
        {/* //-------------------------------------------Mobile menu Title---------------------------------------// */}
        <div className="navbar-end flex justify-end w-full md:hidden">
          <a href="/" className="font-bold uppercase lg:text-lg md:text-sm">
            <img className="h-[50px]" src={Logo} alt="logo" />
          </a>
        </div>
        {/* //-------------------------------------------Mobile menu Title---------------------------------------// */}
        {/* <hr /> */}
       </div>
      </div>
    </>
  );
};

export default Navbar;
