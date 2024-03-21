import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState();
  useEffect(() => {
    const fetchOrders = async () => {
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      const response = await res.json();
      setOrders(response.orders);
      console.log(response.orders);
    };
    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      fetchOrders();
    }
  }, []);
  return (
    <div className="min-h-[70vh] ">
      <div className="container mx-auto py-5 px-5 md:py-10 md:px-10">
        <h1 className="font-semibold text-3xl text-center">My Orders</h1>
        <div className="flex flex-col border-2 rounded-lg my-5 md:my-10 lg:m-10 shadow-md">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {!orders?.length && (
                  <div className="flex justify-center align-middle p-10">
                    No orders
                  </div>
                )}
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b border-neutral-200 font-medium">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        # OrderId
                      </th>
                      <th scope="col" className="px-6 py-4">
                        email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order) => {
                      return (
                        <tr
                          key={order.orderId}
                          className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {order.orderId}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {order.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {order.amount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {order.status}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link
                              href={`/order?id=${order._id}`}
                              className="font-semibold text-blue-600 underline"
                            >
                              Details
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100">
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
                    </tr> */}
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

// export async function getServerSideProps(context) {
//   // Connecting to databse
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   // Getting all the products:
//   let orders = await Order.find();
//   // let variants = await Order.find({
//   //   title: product.title,
//   //   category: product.category,
//   // });

//   // let colorSizeSlug = {}; // {red:{xl:{slug:"wear-the-code-xl"}}}
//   // for (let item of variants) {
//   //   if (Object.keys(colorSizeSlug).includes(item.color)) {
//   //     colorSizeSlug[item.color][item.size] = { slug: item.slug };
//   //   } else {
//   //     colorSizeSlug[item.color] = {};
//   //     colorSizeSlug[item.color][item.size] = { slug: item.slug };
//   //   }
//   // }

//   // Pass data to the page via props
//   // Creaing a deep copy of this object as it contains an id which is object
//   return {
//     props: {
//       orders,
//       // variants: JSON.parse(JSON.stringify(colorSizeSlug)),
//     },
//   };
// }
