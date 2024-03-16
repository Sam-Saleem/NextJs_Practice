import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  //   let cart = localStorage.getItem(cart) ? localStorage.getItem(cart) : {};
  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("Cart has been cleared.");
  };
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    const newCart = cart;
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    const keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  useEffect(() => {
    console.log("Hey I am an useEffect from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <Navbar
        cart={cart}
        subTotal={subTotal}
        clearCart={clearCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Component
        {...pageProps}
        cart={cart}
        subTotal={subTotal}
        clearCart={clearCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </>
  );
}
