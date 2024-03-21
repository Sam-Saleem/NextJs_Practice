export default function handler(req, res) {
  let pincodes = {
    721302: ["Kharagpur", "West Bengal"],
    110003: ["Delhi", "Delhi"],
    560017: ["Bangalore", "Karnataka"],
  };
  res.status(200).json(pincodes);
}
// [52254, 51000, 53400, 42000, 40050, 53201]
