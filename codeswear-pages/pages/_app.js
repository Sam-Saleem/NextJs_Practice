import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);

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
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = { [itemCode]: { qty: 1, price, name, size, variant } };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };
  const logout = () => {
    // toast.success("Logged-out successfully!", {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    localStorage.removeItem("myuser");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };
  useEffect(() => {
    console.log("Hey I am an useEffect from _app.js");
    router.events.on("routeChangeStart", () => {
      setProgress(30);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    try {
      if (localStorage.getItem("myuser")) {
        const myuser = JSON.parse(localStorage.getItem("myuser"));
        setUser({ value: myuser });
      }
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }

    setKey(Math.random());
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#fe3676"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={500}
      />
      {key && (
        <Navbar
          key={key}
          user={user}
          cart={cart}
          subTotal={subTotal}
          clearCart={clearCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          logout={logout}
        />
      )}
      {/* <ToastContainer /> */}
      <Component
        {...pageProps}
        user={user}
        cart={cart}
        subTotal={subTotal}
        clearCart={clearCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        buyNow={buyNow}
      />
      <Footer />
    </>
  );
}
