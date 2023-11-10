import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
});

export default mongoose.model("Product", productSchema);