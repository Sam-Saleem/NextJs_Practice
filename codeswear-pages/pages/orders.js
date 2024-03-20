import React, { useEffect } from "react";
import mongoose from "mongoose";
import Order from "@/models/Order";
import { useRouter } from "next/router";

const Orders = ({}) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <div>
      <div className="container mx-auto py-5 px-5 md:py-10 md:px-10">
        <h1 className="font-semibold text-3xl m-5 text-center">My Orders</h1>
        <div className="flex flex-col border rounded-lg mb-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b border-neutral-200 font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  // Connecting to databse
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Getting all the products:
  let orders = await Order.find();
  // let variants = await Order.find({
  //   title: product.title,
  //   category: product.category,
  // });

  // let colorSizeSlug = {}; // {red:{xl:{slug:"wear-the-code-xl"}}}
  // for (let item of variants) {
  //   if (Object.keys(colorSizeSlug).includes(item.color)) {
  //     colorSizeSlug[item.color][item.size] = { slug: item.slug };
  //   } else {
  //     colorSizeSlug[item.color] = {};
  //     colorSizeSlug[item.color][item.size] = { slug: item.slug };
  //   }
  // }

  // Pass data to the page via props
  // Creaing a deep copy of this object as it contains an id which is object
  return {
    props: {
      orders,
      // variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
