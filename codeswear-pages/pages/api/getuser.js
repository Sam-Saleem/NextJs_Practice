import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const token = req.body.user;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    let u = await User.findOne({ email: data.email });
    const user = {
      name: u.name,
      email: u.email,
      address: u.address,
      phone: u.phone,
      pincode: u.pincode,
    };
    res.status(200).json({ user });
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};
export default connectDb(handler);
