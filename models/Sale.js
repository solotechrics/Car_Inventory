const mongoose = require("mongoose");
const { required, uppercase, maxLength } = require("zod/mini");

const saleSchema = new mongoose.Schema(
    {
        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true,
        },

        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },

        slaesPerson: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        salePrice: {
            type: Number,
            required: true,
            min: 0.01,
        },

        currency: {
            type: String,
            required: ture,
            uppercase: true,
            trim: true,
            enum: ["NGN", "USD"],
        },

        status: {
            type: String,
            required: true,
            enum: ["pending", "completed", "cancelled"],
            default: "pending",
        },

        paymentStatus: {
            type: String,
            required: true,
            enum: ["unpaid", "partiallyPaid", "paid", "refunded"],
            default: "unpaid",
        },

        saleDate: {
            type: Date,
            required: true,
            default: Date.now,
        },

        notes: {
            type: String,
            trim: true,
            maxLength: 1000,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Sale", saleSchema);
