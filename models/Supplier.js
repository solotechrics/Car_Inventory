const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        supplierKind: {
            type: String,
            enum: ["individual", "business"],
            required: true,
            default: "business",
        },

        supplierType: {
            type: String,
            enum: ["manufacturer", "auction", "dealer", "leasingCompany", "individual"],
            required: true,
            default: "dealer",
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        businessName: {
            type: String,
            required: function () {
                return this.supplierKind === "business";
            },
            trim: true,
        },

        address: {
            street: { type: String, trim: true },
            city: { type: String, trim: true },
            state: { type: String, trim: true },
            postalCode: { type: String, trim: true },
            country: { type: String, trim: true },
        },

        isActive: {
            type: Boolean,
            default: true,
            required: true,
        },

        notes: {
            type: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Supplier", supplierSchema);
