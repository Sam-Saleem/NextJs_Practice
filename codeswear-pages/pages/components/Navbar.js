import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { IoCloseCircle, IoBagCheckSharp } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const Navbar = ({ cart, subTotal, clearCart, addToCart, removeFromCart }) => {
  // useEffect(() => {
  //   console.log("Navbar");
  // }, [cart]);
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
            <li>Tshirts</li>
          </Link>
          <Link href="/hoodies">
            <li>Hoodies</li>
          </Link>

          <Link href="/stickers">
            <li>Stickers</li>
          </Link>

          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-3 mx-5 cursor-pointer">
        <FaCartPlus className="text-xl md:text-2xl" onClick={toggleCart} />
      </div>
      <div
        ref={ref}
        className="w-72 h-[100vh] sideCart absolute right-0 top-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full"
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
          {console.log("Cart: ", cart)}
          {Object.keys(cart).map((itemKey, index) => {
            return (
              <li key={index}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">
                    {cart[itemKey].name}
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
          {/* <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 font-bold flex items-center justify-center">
                <FaRegSquarePlus className="text-pink-600 me-2 cursor-pointer" />{" "}
                1
                <FaRegSquareMinus className="text-pink-600 ms-2 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 font-bold flex items-center justify-center">
                <FaRegSquarePlus className="text-pink-600 me-2 cursor-pointer" />{" "}
                1
                <FaRegSquareMinus className="text-pink-600 ms-2 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 font-bold flex items-center justify-center">
                <FaRegSquarePlus className="text-pink-600 me-2 cursor-pointer" />{" "}
                1
                <FaRegSquareMinus className="text-pink-600 ms-2 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="ms-2 w-1/3 font-bold flex items-center justify-center">
                <FaRegSquarePlus className="text-pink-600 mx-2 cursor-pointer" />
                1
                <FaRegSquareMinus className="text-pink-600 mx-2 cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="w-1/3 font-bold flex items-center justify-center">
                <FaRegSquarePlus className="text-pink-600 me-2 cursor-pointer" />{" "}
                1
                <FaRegSquareMinus className="text-pink-600 ms-2 cursor-pointer" />
              </div>
            </div>
          </li> */}
        </ol>
        <div className="mt-20 flex">
          <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-1 focus:outline-none hover:bg-pink-600 rounded">
            <IoBagCheckSharp className="m-1" />
            Checkout
          </button>
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
