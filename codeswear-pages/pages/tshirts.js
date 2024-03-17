import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "@/models/Product";

const Tshirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container py-14 md:py-20 px-6 md:px-10 lg:px-14 max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full"
                >
                  <Link
                    className="block relative rounded overflow-hidden"
                    href={`/product/${product.slug}`}
                  >
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh] md:h-[36vh] block"
                      src={product.img}
                    />
                  </Link>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.title}
                    </h2>
                    <p className="mt-1">Rs. {product.price}.00</p>
                    <p className="mt-1">S, M, L, XL</p>
                  </div>
                </div>
              );
            })}

            {/* <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1N06gL7e+L._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
           <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1GHcqd8keL._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
            <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A14d9tNcXjL._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
            <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1ydZbD9ymL._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  TWear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
            <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1N06gL7e+L._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
            <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1GHcqd8keL._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div>
            <div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A14d9tNcXjL._AC_SX679_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirts;

export async function getServerSideProps() {
  // Connecting to databse
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Getting all the products:
  let products = await Product.find({ category: "T-Shirts" });

  // Pass data to the page via props
  // Creaing adeep copy of this object as it contains an id which is object
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
