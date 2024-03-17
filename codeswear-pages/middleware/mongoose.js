import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  // Check if mongoose is already connected.
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
  console.log("Database conected!");
};

export default connectDb;
