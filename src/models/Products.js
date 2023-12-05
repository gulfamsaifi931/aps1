import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    mediaUrl: String,
    code: String,

  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productsSchema);

export default Product;
