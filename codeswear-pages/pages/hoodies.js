import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "@/models/Product";

const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container py-14 md:py-20 px-6 md:px-10 lg:px-14 max-w-full">
          {Object.keys(products).length === 0 && (
            <p className="text-center">
              Sorry all the Hoodies are currently out of stock. New stock coming
              soon. Stay Tuned!
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full"
                >
                  <Link
                    className="block relative rounded overflow-hidden"
                    href={`/product/${products[item].slug}`}
                  >
                    <img
                      alt="ecommerce"
                      className="m-auto h-[30vh] md:h-[36vh] block"
                      src={products[item].img}
                    />
                  </Link>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {/* {products[item].category} */}
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">Rs. {products[item].price}.00</p>
                    <div className="mt-1">
                      {products[item].size.includes("S") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          S
                        </span>
                      )}
                      {products[item].size.includes("M") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          M
                        </span>
                      )}
                      {products[item].size.includes("L") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          L
                        </span>
                      )}
                      {products[item].size.includes("XL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XL
                        </span>
                      )}
                      {products[item].size.includes("XXL") && (
                        <span className="border border-gray-300 px-1 mx-1">
                          XXL
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      {products[item].color.includes("white") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                      {products[item].color.includes("blue") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                      {products[item].color.includes("rinsed") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-slate-800 rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                      {products[item].color.includes("black") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-gray-900  rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                      {products[item].color.includes("light blue") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                      {products[item].color.includes("navy") && (
                        <button
                          className={`border-2 border-gray-300 ml-1 bg-sky-950 rounded-full w-6 h-6 focus:outline-none`}
                        ></button>
                      )}
                    </div>
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
                  className="m-auto h-[30vh] md:h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Wear the Code
                </h2>
                <p className="mt-1">Rs. 2,500.00</p>
                <p className="mt-1">S, M, L, XL</p>
              </div>
            </div> */}

            {/*<div className="lg:w-1/4 p-4 shadow-xl hover:shadow-2xl min-w-full">
              <Link
                className="block relative rounded overflow-hidden"
                href={"/product/wear-the-code"}
              >
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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
                  src="https://m.media-amazon.com/images/I/A1SJt13utfL._AC_UL640_FMwebp_QL65_.jpg"
                />
              </Link>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodies
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

export default Hoodies;
export async function getServerSideProps() {
  // Connecting to databse
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Getting all the products:
  let products = await Product.find({ category: "hoodies" });
  let hoods = {};
  for (let item of products) {
    if (item.title in hoods) {
      if (
        !hoods[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        hoods[item.title].color.push(item.color);
      }
      if (
        !hoods[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        hoods[item.title].size.push(item.size);
      }
    } else {
      hoods[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        hoods[item.title].color = [item.color];
        hoods[item.title].size = [item.size];
      } else {
        hoods[item.title].color = [];
        hoods[item.title].size = [];
      }
    }
  }

  // Pass data to the page via props
  // Creaing a deep copy of this object as it contains an id which is object
  return { props: { products: JSON.parse(JSON.stringify(hoods)) } };
}
