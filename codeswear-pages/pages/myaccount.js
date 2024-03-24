import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MyAccount = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("myuser")) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <div className="container mx-auto py-5 px-5 md:py-10 md:px-10">
        <h1 className="font-semibold text-3xl text-center">My Account</h1>
      </div>
    </div>
  );
};

export default MyAccount;
