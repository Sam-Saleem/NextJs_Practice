const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: "" },
    products: { type: Object, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    phone: { type: String, required: true },
    transactionId: { type: String, default: "" },
    amount: { type: Number, required: true },
    status: { type: String, default: "Initiating", required: true },
    // Initiating, Pending, Paid
    deliveryStatus: { type: String, default: "unshipped", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
