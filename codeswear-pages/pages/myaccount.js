import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAccount = ({ user }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const getUser = async (token) => {
      const data = { user: token };
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      const userData = response.user;
      setEmail(userData.email);
      setName(userData.name);
      setAddress(userData.address);
      setPhone(userData.phone);
      setPincode(userData.pincode);
    };
    if (!localStorage.getItem("myuser")) {
      router.push("/");
    }
    if (user.value) {
      getUser(user.value.token);
    }
  }, [user]);

  const handleChange = async (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "newPassword") {
      setNewPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "pincode") {
      setPincode(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { token: user.value?.token };
    data["user"] = { name, address, phone, pincode };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const response = await res.json();
    if (res.status === 200) {
      toast.success("Your delivery details has been updated successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error updating delivery details!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const changePassword = async (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const data = { token: user.value?.token, password, newPassword };
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`,
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.status === 200) {
        toast.success("Your password has been updated successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (res.status === 400) {
        toast.error("Please enter the correct old password!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Error updating password!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("New Password and Confirm Password doesn't match!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <div className="container mx-auto py-5 px-5 md:py-10 md:px-10">
        <ToastContainer />
        <h1 className="font-bold text-3xl text-center mb-8">My Account</h1>
        <h2 className="font-semibold text-xl mb-4">1. Delivery Details</h2>
        <div className="form mb-6">
          <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2 mb-4">
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
            </div>
            <div className="px-2 w-1/2 mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email (Cannot be updateable)
              </label>
              {user.value && (
                <input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  readOnly
                />
              )}
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
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
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
          <button
            onClick={handleSubmit}
            disabled={!(name || address || phone || pincode)}
            className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded disabled:bg-pink-400 shadow-xl mt-4"
          >
            Submit
          </button>
          {/* <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2 mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                value={state}
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
              />
            </div>
            <div className="px-2 w-1/2 mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                District
              </label>
              <input
                value={city}
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
              />
            </div>
          </div> */}
        </div>

        <h2 className="font-semibold text-xl mb-4">2. Change Password</h2>
        <div className="form">
          <div className="mx-auto flex my-2">
            <div className="px-2 w-1/2 mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Old Password
              </label>
              <input
                autoComplete="false"
                value={password}
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="px-2 w-1/2 mb-4">
              <label
                htmlFor="newPassword"
                className="leading-7 text-sm text-gray-600"
              >
                New Password
              </label>
              <input
                value={newPassword}
                onChange={handleChange}
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="px-2 w-1/2 mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm New Password
              </label>
              <input
                value={confirmPassword}
                onChange={handleChange}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <button
            onClick={changePassword}
            disabled={!(password && confirmPassword)}
            className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded disabled:bg-pink-400 shadow-xl my-4"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

// export async function getServerSideProps(context) {
//   console.log(context);
//   // Connecting to databse
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }
//   // Getting all the products:
//   let user = await User.findOne({ slug: context.query.slug });
//   // if (!product) {
//   //   return {
//   //     props: {
//   //       error: 404,
//   //     },
//   //   };
//   // }

//   // Pass data to the page via props
//   // Creaing a deep copy of this object as it contains an id which is object
//   return {
//     props: {
//       user: JSON.parse(JSON.stringify(user)),
//     },
//   };
// }
