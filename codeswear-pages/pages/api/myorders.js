import Order from "../../models/Order";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  const token = req.body.token;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  //   console.log(data);
  let orders = await Order.find({ email: data.email, status: "Paid" });
  res.status(200).json({ success: "success", orders });
};
export default connectDb(handler);
