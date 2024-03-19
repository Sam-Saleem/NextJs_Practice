import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email } = req.body;
    var secPass = CryptoJS.AES.encrypt(
      req.body.password,
      "secret key 123"
    ).toString();
    let u = new User({ name, email, password: secPass });
    await u.save();

    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};
export default connectDb(handler);
