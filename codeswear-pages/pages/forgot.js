import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("myuser")) {
      router.push("/");
    }
    console.log(router.query.token);
  }, []);

  const forgotPassword = async (e) => {
    e.preventDefault();
    const data = { email, sendMail: true };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const response = await res.json();
    if (res.status === 200) {
      toast.success("Password reset link has been sent to your email.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Password reset error!!!", {
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
  const resetPassword = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = { password, sendMail: false };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const response = await res.json();
      if (res.status === 200) {
        toast.success("Password has been changed successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Password reset error!!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Password and Confirm Password doesn't match!", {
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

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <ToastContainer />
      {router.query?.token ? (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto"
              src="/codeswearcircle.png"
              alt="Logo"
              width={120}
              height={60}
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset Password
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="false"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Confirm New Password
              </label>
              <div className="mt-2">
                <input
                  value={confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={resetPassword}
                disabled={!password || !confirmPassword}
                className="disabled:bg-pink-400 flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <FaLock className="my-auto text-pink-800 me-2" />
                Reset Password
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto"
              src="/codeswearcircle.png"
              alt="Logo"
              width={120}
              height={60}
            />
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                disabled={!email}
                onClick={forgotPassword}
                className="disabled:bg-pink-400 flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <FaLock className="my-auto text-pink-800 me-2" />
                Continue
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Forgot;
