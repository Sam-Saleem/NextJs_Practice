import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-start py-2">
      <div className="logo mx-3">
        <Image src="/logo.png" width={200} height={200} alt="CodesWear Logo" />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-3 font-bold md:text-xl ">
          <Link href="/">
            <li>Tshirts</li>
          </Link>
          <Link href="/">
            <li>Hoodies</li>
          </Link>

          <Link href="/">
            <li>Stickers</li>
          </Link>

          <Link href="/">
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-3 mx-5">
        <FaCartPlus className="text-2xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
