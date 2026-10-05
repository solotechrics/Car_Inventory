const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: false,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        customerType: {
            type: String,
            enum: ["individual", "business"],
            default: "individual",
            required: true,
        },

        businessName: {
            type: String,
            trim: true,
            required: function () {
                return this.customerType === "business";
            },
        },

        address: {
            street: { type: String, trim: true },
            city: { type: String, trim: true },
            state: { type: String, trim: true },
            postalCode: { type: String, trim: true },
            country: { type: String, trim: true },
        },

        notes: {
            type: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Customer", customerSchema);
