import React from "react";

const Order = ({ subTotal, cart }) => {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.COM
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: #89772
              </h1>
              <p class="leading-relaxed mb-4">
                Your Order has been successfully placed.
              </p>
              <h3 className="text-gray-900 text-center text-xl font-semibold">
                Order Items
              </h3>
              <div class="flex mb-4">
                <a class="flex-grow text-center text-pink-500 border-b-2 border-gray-300 py-2 text-lg px-1">
                  Item Description
                </a>
                <a class="flex-grow text-center text-pink-500 border-b-2 border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
                <a class="flex-grow text-center text-pink-500 border-b-2 border-gray-300 py-2 text-lg px-1">
                  Item Total
                </a>
              </div>

              <div class="flex border-b border-gray-200 py-2">
                <span class="text-gray-500">Tshirt - Wear the code</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">Rs.2500</span>
              </div>
              <div class="flex border-b border-gray-200 py-2">
                <span class="text-gray-500">Tshirt - Wear the code</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">Rs.2500</span>
              </div>
              <div class="flex border-b  border-gray-200 py-2">
                <span class="text-gray-500">Tshirt - Wear the code</span>
                <span class="ml-auto text-gray-900">1</span>
                <span class="ml-auto text-gray-900">Rs.2500</span>
              </div>
              <div class="flex flex-col my-4">
                <span class="title-font font-medium text-xl md:text-2xl text-gray-900">
                  SubTotal: Rs.{subTotal}
                </span>
                <button class="mt-6 md:mt-10 flex mx-auto text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"> 
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>*/}
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
