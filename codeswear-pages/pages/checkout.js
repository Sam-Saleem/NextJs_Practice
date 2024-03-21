import React, { useState } from "react";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
// import { MdDeleteForever } from "react-icons/md";
import Link from "next/link";
const Checkout = ({ cart, clearCart, addToCart, removeFromCart, subTotal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [disabled, setDisabled] = useState(true);

  const handleChange = async (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "pincode") {
      setPincode(e.target.value);
      let pin = e.target.value;
      if (pin.length === 6) {
        console.log(pin);
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinJson = await pins.json();
        if (Object.keys(pinJson).includes(pin)) {
          setState(pinJson[pin][1]);
          setCity(pinJson[pin][0]);
        }
      } else {
        setState("");
        setCity("");
      }
    }
    // else if (e.target.name === "state") {
    //   setState(e.target.value);
    // } else if (e.target.name === "city") {
    //   setCity(e.target.value);
    // }
    // if (name && email && address && phone && city && state && pincode) {
    //   setDisabled(false);
    // } else {
    //   setDisabled(true);
    // }
  };
  return (
    <div className="conatiner m-auto px-8 md:px-20 py-10">
      <h1 className="font-bold text-3xl text-center mb-8">Checkout</h1>
      <h2 className="font-semibold text-xl mb-4">1. Delivery Details</h2>
      <div className="form">
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2 mb-4">
            {/* <div className="mb-4"> */}
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              value={name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {/* </div> */}
          </div>
          <div className="px-2 w-1/2 mb-4">
            {/* <div className="mb-4"> */}
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="px-2 w-full my-2">
          <div className="mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>

            <textarea
              value={address}
              onChange={handleChange}
              cols="30"
              rows="2"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2 mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              value={phone}
              onChange={handleChange}
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="px-2 w-1/2 mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              PinCode
            </label>
            <input
              value={pincode}
              onChange={handleChange}
              type="number"
              id="pincode"
              name="pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2 mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              value={state}
              // onChange={handleChange}
              type="text"
              id="state"
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              readOnly
            />
          </div>
          <div className="px-2 w-1/2 mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              value={city}
              // onChange={handleChange}
              type="text"
              id="city"
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              readOnly
            />
          </div>
        </div>
      </div>
      <h2 className="font-semibold text-xl my-4">
        2. Review Cart Items & Payment
      </h2>
      <div className="sideCart bg-pink-100 p-5">
        {/* <h2 className="text-xl font-bold text-center mb-8">Shopping Cart</h2> */}

        <ol className="list-decimal font-bold px-5 md:px-10">
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
                  <div className="w-1/3 font-bold flex items-center justify-start">
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
        <div className="font-bold text-end my-5">SubTotal: Rs.{subTotal}</div>
        <Link href={"/order"}>
          <button
            disabled={
              !(name && email && address && phone && pincode && city && state)
            }
            className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded disabled:bg-pink-400"
          >
            <IoBagCheckSharp className="m-1" />
            Pay Rs.{subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
