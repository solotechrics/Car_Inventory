const mongoose = require("mongoose");

const vehicleHistorySchema = new mongoose.Schema(
    {
        vehicle: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle",
            required: true,
        },

        eventType: {
            type: String,
            enum: [
                "created",
                "received",
                "statusChanged",
                "priceChanged",
                "relocated",
                "reserved",
                "sold",
                "returned",
            ],
            required: true,
        },

        performedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        previousValue: {
            type: mongoose.Schema.Types.Mixed,
        },

        newValue: {
            type: mongoose.Schema.Types.Mixed,
        },

        notes: {
            type: String,
            trim: true,
            maxlength: 1000,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("VehicleHistory", vehicleHistorySchema);
