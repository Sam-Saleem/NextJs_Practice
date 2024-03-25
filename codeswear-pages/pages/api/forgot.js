import Forgot from "@/models/Forgot";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.body.sendEmail) {
    let token = "";
    let forgot = new Forgot({ email: req.body.email, token });
    let email = `We have sent you this email in response to your request to reset your password on CodesWear.com
   To reset your password, please follow the link below:

    <a href="${process.env.NEXT_PUBLIC_HOST}/forgot?token=${token}">Click here to reset your password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your CodesWear.com My Account Page and change your password.

    <br/><br/>`;

    return res.status(200).json({ email });
  } else {
    return res.status(200).json({ name: "John Doe" });
  }
};

export default connectDb(handler);
