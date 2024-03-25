import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const token = req.body.token;
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const dbuser = await User.findOne({ email: data.email });
    var bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET);
    var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedPass != req.body.password) {
      return res.status(400).json({ success: "false" });
    }
    var secPass = CryptoJS.AES.encrypt(
      req.body.newPassword,
      process.env.AES_SECRET
    ).toString();
    await User.findOneAndUpdate({ email: data.email }, { password: secPass });
    res.status(200).json({ success: "true" });
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};
export default connectDb(handler);
