import React from "react";
import Link from "next/link";
import { FaLock } from "react-icons/fa";

const Forgot = () => {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto"
          src="/codeswearcircle.png"
          alt="Your Company"
          width={120}
          height={60}
        />
        <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or
          <Link
            href={"/login"}
            className="font-medium text-pink-600 hover:text-pink-500 cursor-pointer ms-1"
          >
            Login
          </Link>
        </p>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST">
          <div className="mb-5">
            <label
              for="email"
              class="block text-md font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              <FaLock className="my-auto text-pink-800 me-2" />
              Continue
            </button>
          </div>
        </form>

        {/* <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold leading-6 text-pink-600 hover:text-pink-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Forgot;
