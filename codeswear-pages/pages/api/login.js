import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });

    if (user && req.body.email === user.email) {
      var bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
      var decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
      if (req.body.password === decryptedPass) {
        var token = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "2 days" }
        );
        res.status(200).json({ success: true, token, email: user.email });
      } else {
        res
          .status(401)
          .json({ success: false, error: "Invalid Credentials!!!" });
      }
    } else {
      res.status(401).json({ success: false, error: "Invalid Credentials!!!" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed." });
  }
};
export default connectDb(handler);
