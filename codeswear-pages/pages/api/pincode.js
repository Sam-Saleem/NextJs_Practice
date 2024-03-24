import pincodes from "../../pincodes.json";
// pincode: [city, state],
// [52254, 51000, 53400, 42000, 40050, 53201]

export default function handler(req, res) {
  res.status(200).json(pincodes);
}
