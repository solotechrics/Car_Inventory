const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        vin: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        make: {
            type: String,
            required: true,
            trim: true,
        },

        model: {
            type: String,
            required: true,
            trim: true,
        },

        year: {
            type: Number,
            required: true,
        },

        trim: {
            type: String,
            trim: true,
        },

        bodyType: {
            type: String,
            enum: ["sedan", "suv", "truck", "van", "coupe"],
        },

        condition: {
            type: String,
            enum: ["new", "used", "certifiedPreOwned"],
            required: true,
        },

        mileage: {
            type: Number,
            required: true,
            min: 0,
        },

        color: {
            type: String,
            trim: true,
        },

        transmission: {
            type: String,
            enum: ["automatic", "manual", "cvt"],
        },

        fuelType: {
            type: String,
            enum: ["petrol", "diesel", "electric", "hybrid"],
        },

        purchasePrice: {
            type: Number,
            required: true,
            min: 0,
        },

        askingPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        currency: {
            type: String,
            enum: ["USD", "NGN"],
            required: true,
        },

        status: {
            type: String,
            enum: ["inStock", "reserved", "sold", "inTransit"],
            default: "inStock",
            required: true,
        },

        location: {
            type: String,
            trim: true,
        },

        images: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
