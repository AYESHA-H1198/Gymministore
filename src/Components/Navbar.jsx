import React, { useState } from "react";
import logoImg from "../assets/Vector.png";
import searchIcon from "../assets/searchIcon.png";
import cartImage from "../assets/cart.png";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="md:flex justify-between items-center px-6 text-white py-7 absolute w-full max-w-screen-xl hidden">
        <div className="flex flex-col items-center">
          <img src={logoImg} alt="Logo" />
          <p className="font-Averia text-[#FEE715] font-bold mt-[-3px]">
            Gym<strong className="text-white">Mini</strong>Store
          </p>
        </div>
        <ul className="md:flex gap-10 font-Poppins font-semibold cursor-pointer items-center justify-between hidden">
          <li className="hover:text-[#FEE715]">Home</li>
          <li className="hover:text-[#FEE715]">Store</li>
          <li className="hover:text-[#FEE715]">Blog</li>

          <div className="flex gap-10 items-center md:ml-16">
            <div className="search relative">
              <input
                className="outline-none text-white rounded-full px-3 h-7 bg-[#808080] opacity-50"
                type="text"
              />
              <img
                className="absolute right-2 top-0 w-7 cursor-pointer"
                src={searchIcon}
                alt="Search-Icon"
              />
            </div>

            <div className="cart flex items-center justify-center font-Poppins w-12 h-12 rounded-[50%] bg-[#808080] p-3 cursor-pointer relative ">
              <img className="w-8  " src={cartImage} alt="Cart-image" />
              <div className="w-4 h-4 bg-red-600 rounded-[50%] absolute flex items-center justify-center top-0 right-2 text-[10px]">
                1
              </div>
            </div>
          </div>
        </ul>
      </nav>

      <div className="md:hidden">
        <nav
          className={`bg-[#808080] w-full flex flex-col md:flex-row justify-between items-center px-6 text-white absolute z-10 py-7 max-w-screen-xl md:hidden ${
            !nav ? "-ml-[100%]" : "ml-0"
          } `}
        >
          <div className="flex flex-col items-center">
            <img src={logoImg} alt="Logo" />
            <p className="font-Averia text-[#FEE715] font-bold mt-[-3px]">
              Gym<strong className="text-white">Mini</strong>Store
            </p>
          </div>
          <ul className="flex flex-col gap-5 mt-5 font-Poppins font-semibold cursor-pointer items-center justify-between md:hidden">
            <li className="text-white hover:text-yellow-500 border-b-2 border-[#FEE715]">
              Home
            </li>
            <li className="hover:text-[#FEE715] border-b-2 border-[#FEE715]">
              Store
            </li>
            <li className="hover:text-[#FEE715] border-b-2 border-[#FEE715]">
              Blog
            </li>

            <div className="flex flex-col gap-5 items-center md:ml-16">
              <div className="search relative">
                <input
                  className="outline-none w-44 text-black rounded-full px-3 h-10 bg-white opacity-50"
                  type="text"
                />
                <img
                  className="absolute right-2 top-[7px] w-7 cursor-pointer"
                  src={searchIcon}
                  alt="Search-Icon"
                />
              </div>

              <div className="cart flex items-center justify-center font-Poppins w-12 h-12 rounded-[50%] bg-[#808080] p-3 cursor-pointer relative ">
                <img className="w-8  " src={cartImage} alt="Cart-image" />
                <div className="w-4 h-4 bg-red-600 rounded-[50%] absolute flex items-center justify-center top-0 right-2 text-[10px]">
                  1
                </div>
              </div>
            </div>
          </ul>
        </nav>
        <div
          onClick={handleNav}
          className="text-4xl text-white absolute top-7 right-6 md:hidden"
        >
          {!nav ? <TiThMenuOutline /> : <IoClose />}
        </div>
        <div className="flex flex-col items-center absolute top-3 left-6 md:hidden">
          <img src={logoImg} width={70} alt="Logo" />
          <p className="font-Averia text-[#FEE715] text-xl font-bold mt-[-3px]">
            Gym<strong className="text-white">Mini</strong>Store
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
