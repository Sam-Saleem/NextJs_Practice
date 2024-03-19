import React from "react";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      localStorage.setItem("token", response.token);
      toast.success("You are successfully logged in.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail("");
      setPassword("");
      setTimeout(() => {
        router.push("http://localhost:3000");
      }, 1000);
    } else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <ToastContainer />
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto"
          src="/codeswearcircle.png"
          alt="Your Company"
          width={120}
          height={60}
        />
        <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or
          <Link
            href={"/signup"}
            className="font-medium text-pink-600 hover:text-pink-500 cursor-pointer ms-1"
          >
            SignUp
          </Link>
        </p>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-5">
            <label
              for="email"
              class="block text-md font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              for="password"
              class="block text-md font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="mt-2">
              <input
                value={password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-800">
                  Remember me
                </label>
              </div>
            </div>
            <div class="text-sm">
              <Link
                href="/forgot"
                class="font-semibold text-pink-600 hover:text-pink-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              <FaSignInAlt className="my-auto text-pink-800 me-2" />
              Sign in
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

export default Login;
