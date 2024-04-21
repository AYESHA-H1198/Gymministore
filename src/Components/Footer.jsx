import React from "react";
import logoImg from "../assets/Vector.png";
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#808080] border-t-4 border-b-4 border-[rgb(255,215,0)] py-8 px-6 flex flex-col items-center justify-around sm:flex-row md:justify-between sm:flex-wrap">
      <div className="flex flex-col w-1/4 text-white items-start justify-center">
        <div className="flex flex-col items-center mb-10">
          <img className="object-cover" src={logoImg} width={80} alt="Logo" />
          <p className="font-Averia text-[#FEE715] text-3xl font-bold mt-[-3px]">
            Gym<strong className="text-white">Mini</strong>Store
          </p>
        </div>
        <p className="font-poppins">
        Exercise and fit yourself<br />
        This is Best Store For you
        </p>

        <div className="socials flex gap-3 mt-5 text-xl">
            <FaTwitter className="hover:text-[#FEE715]" />
            <FaYoutube className="hover:text-[#FEE715]" />
            <FaLinkedin className="hover:text-[#FEE715]" />
            <FaFacebook className="hover:text-[#FEE715]" />
            <FaInstagram className="hover:text-[#FEE715]" />
        </div>
      </div>

      {/* links */}
      <div className="flex flex-col md:flex-row md:gap-16 mt-5 md:mt-0">
      <div className="flex flex-col text-white">
        <h2 className="font-Averia text-xl font-semibold mb-10">Information</h2>
      <ul className="flex flex-col gap-3 font-Poppins cursor-pointer">
        <li className="hover:text-[#FEE715]">Home</li>
        <li className="hover:text-[#FEE715]">About Us</li>
        <li className="hover:text-[#FEE715]">Store</li>
        </ul>
      </div>
      <div className="flex flex-col text-white mt-5 md:mt-0">
        <h2 className="font-Averia text-xl font-semibold mb-10">Support</h2>
      <ul className="flex flex-col gap-3 font-Poppins cursor-pointer">
        <li className="hover:text-[#FEE715]">Blog</li>
        <li className="hover:text-[#FEE715]">Reviews</li>
        <li className="hover:text-[#FEE715]">Products</li>
        </ul>
      </div>
      </div>
      <div>
      <div className="flex flex-col text-white mt-5 md:mt-0">
        <h2 className="font-Averia text-xl font-semibold mb-10 uppercase">Newsletter</h2>
        <p>Subscribe to our Newsletter and <br/>get amazing updates.</p>
        <div className="relative mt-2">
        <input className="rounded-full text-black  outline-none text-[12px] w-72 font-Poppins  px-3 pr-10 py-2" type="email" placeholder="Your Email Address" />
        <button className="absolute text-white hover:text-black hover:bg-white font-Averia px-3 bg-[rgb(255,215,0)] text-black rounded-full -ml-[99px] mt-[5px]">Subscribe</button>
      </div>
      
      </div>
      </div>
    </footer>
  );
};

export default Footer;