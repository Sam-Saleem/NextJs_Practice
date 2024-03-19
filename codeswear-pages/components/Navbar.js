import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { IoCloseCircle, IoBagCheckSharp } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { MdDeleteForever, MdAccountCircle } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";

const Navbar = ({
  user,
  cart,
  subTotal,
  clearCart,
  addToCart,
  removeFromCart,
}) => {
  const ref = useRef();
  const toggleCart = async () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-start py-2 shadow-md sticky top-0 z-10 bg-white">
      <div className="logo mx-3">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="CodesWear Logo"
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href="/tshirts">
            <li className="hover:text-pink-600">Tshirts</li>
          </Link>
          <Link href="/hoodies">
            <li className="hover:text-pink-600">Hoodies</li>
          </Link>

          <Link href="/stickers">
            <li className="hover:text-pink-600">Stickers</li>
          </Link>

          <Link href="/mugs">
            <li className="hover:text-pink-600">Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="flex absolute right-0 top-3 mx-5  space-x-1 md:space-x-2">
        {user.value ? (
          <Link href={"/login"}>
            <MdAccountCircle className="text-xl md:text-2xl cursor-pointer hover:text-pink-600" />
          </Link>
        ) : (
          <Link href={"/login"}>
            <RiLoginCircleLine className="text-xl md:text-2xl cursor-pointer hover:text-pink-600" />
          </Link>
        )}
        <FaCartPlus
          className="text-xl md:text-2xl cursor-pointer hover:text-pink-600"
          onClick={toggleCart}
        />
      </div>
      <div
        ref={ref}
        className="w-72 h-[100vh] sideCart overflow-y-scroll absolute right-0 top-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full"
      >
        <h2 className="text-xl font-bold text-center mb-8">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute left-2 top-3 text-2xl cursor-pointer text-pink-600"
        >
          <IoCloseCircle />
        </span>
        <ol className="list-decimal font-bold">
          {!Object.keys(cart).length && (
            <div className="text-center text-red-600">
              No items present in the cart. <br /> Please add a few items to
              checkout.
            </div>
          )}
          {Object.keys(cart).map((itemKey, index) => {
            return (
              <li key={index}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">
                    {cart[itemKey].name} ({cart[itemKey].size}/
                    {cart[itemKey].variant})
                  </div>
                  <div className="w-1/3 font-bold flex items-center justify-center">
                    <FaRegSquarePlus
                      onClick={() => {
                        addToCart(
                          itemKey,
                          1,
                          cart[itemKey].price,
                          cart[itemKey].name,
                          cart[itemKey].size,
                          cart[itemKey].variant
                        );
                      }}
                      className="text-pink-600 me-2 cursor-pointer"
                    />
                    {cart[itemKey].qty}
                    <FaRegSquareMinus
                      onClick={() => {
                        removeFromCart(
                          itemKey,
                          1,
                          cart[itemKey].price,
                          cart[itemKey].name,
                          cart[itemKey].size,
                          cart[itemKey].variant
                        );
                      }}
                      className="text-pink-600 ms-2 cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold text-end mt-10">SubTotal: Rs.{subTotal}</div>
        <div className="mt-5 flex">
          <Link href={"/checkout"}>
            <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded">
              <IoBagCheckSharp className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded"
          >
            <MdDeleteForever className="m-1" />
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
