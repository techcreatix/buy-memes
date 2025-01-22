import React from "react";
import Logo from "../assets/images/logo.svg";
import Twitter from "../assets/images/twitter.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Computer from "../assets/images/computer.svg";
import Hamburger from "../assets/images/hamburger.svg";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div className="flex  py-3 sm:px-6 px-4  w-full min-h-[84px] tracking-wide relative z-50">
      <div className="flex items-center max-w-screen-xl mx-auto w-full">
      <button id="toggleOpen" className="lg:hidden block" >
               <img src={Hamburger} alt=""/>
              </button>
        <div className="flex flex-wrap items-center justify-center lg:justify-between lg:gap-y-2 gap-4 w-full">
          <Link to="/" className="max-sm:hidden">
            <img src={Logo} alt="logo" className="w-36" />
          </Link>
          <Link to="/" className="hidden max-sm:block">
            <img src={Logo} alt="logo" className="w-full" />
          </Link>
          <div
            id="collapseMenu"
            className="lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                />
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                />
              </svg>
            </button>
          </div>






<div className="lg:flex hidden items-center bg-gray-100 rounded-full px-4 py-1.5 shadow-sm ">
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>

      <input
        type="text"
        placeholder="Search ai agents..."
        className="flex-grow bg-gray-100 w-[350px]  h-[40px] border-none outline-none px-2 text-sm"
      />

      <div className="flex items-center bg-white border rounded px-2 py-1 text-xs text-gray-500">
        ⌘ K
      </div>
    </div>





          <div className="lg:flex hidden items-center gap-x-6 gap-y-4 ">
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                <Link to="/" className="max-sm:hidden">
                  <img src={Twitter} alt="logo" className="w-full h-full" />
                </Link>
               
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                <Link to="/" className="max-sm:hidden">
                  <img src={LinkedIn} alt="logo" className="w-full h-full" />
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                <Link to="/" className="max-sm:hidden">
                  <img src={Computer} alt="logo" className="w-full h-full" />
                </Link>
              </div>
              <button className="max-lg:hidden font-semibold px-6 py-2 w-[143px] h-[48px] text-sm rounded-[4px] text-white bg-[#000]">
                Start Buying
              </button>
              <button id="toggleOpen" className="lg:hidden">
                <svg
                  className="w-7 h-7"
                  fill="#333"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
