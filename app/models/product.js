import mongoose from "mongoose";
import { type } from "os";

const productSchema = new mongoose.Schema({
    //define the structure for the product
    userId: {
        type: String,
        required: true,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offerPrice: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Product = mongoose.models.product || mongoose.models('product', productSchema)

export default Product;