import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const token = req.body.token;
    const { name, address, phone, pincode } = req.body.user;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    await User.findOneAndUpdate(
      { email: data.email },
      { name, address, phone, pincode }
    );
    res.status(200).json({ success: "true" });
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};
export default connectDb(handler);
