import mongoose from "mongoose";
import { type } from "os";
import { ref } from "process";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'user'
    },
    items: [{
        product: {
            type: String,
            required: true,
            ref: 'product'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    amount: {
        type: String,
        required: true
    },
    address: {
        type: String,
        ref: 'address',
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Order Placed Successfully'
    },
    data: {
        type: Number,
        required: true
    }
})

const Order = mongoose.models.order || mongoose.model('order', orderSchema);

export default Order;