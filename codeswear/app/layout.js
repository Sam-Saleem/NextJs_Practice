import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodesWear.com - Wear the code",
  description: "CodesWear.com - Wear the code",
};

export default function RootLayout({ children, params }) {
  const app_state = { a: 3 };
  params["app_state"] = app_state;
  // const [cart, setCart] = useState();
  // let cart = localStorage.getItem(cart) ? localStorage.getItem(cart) : {};
  // const subTotal = 0;
  // const clearCart = () => {
  //   cart = {};
  //   saveCart(cart);
  // };
  // const addToCart = (itemCode, qty, price, name, size, variant) => {
  //   if (itemCode in cart) {
  //     cart[itemCode].qty = cart[itemCode].qty + qty;
  //   } else {
  //     cart[itemCode] = { qty, price, name, size, variant };
  //   }
  //   saveCart(cart);
  // };
  // const removeFromCart = (itemCode, qty, price, name, size, variant) => {
  //   if (itemCode in cart) {
  //     cart[itemCode].qty = cart[itemCode].qty - qty;
  //   }
  //   if ([itemCode]["qty"] <= 0) {
  //     delete cart[itemCode];
  //   }

  //   saveCart(cart);
  // };
  // const saveCart = (myCart) => {
  //   localStorage.setItem("cart", myCart);
  // };
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
        // cart={cart}
        // subTotal={subTotal}
        // clearCart={clearCart}
        // addToCart={addToCart}
        // removeFromCart={removeFromCart}
        />
        {console.log("Hell", params)}
        {children}
        <Footer />
      </body>
    </html>
  );
}
