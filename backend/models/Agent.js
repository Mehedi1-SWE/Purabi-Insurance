const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        mobileNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        address: {
            type: String,
            default: "",
            trim: true,
        },

        city: {
            type: String,
            default: "",
            trim: true,
        },

        nationality: {
            type: String,
            default: "Bangladeshi",
            trim: true,
        },

        passportOrNid: {
            type: String,
            default: "",
            trim: true,
        },

        dateOfBirth: {
            type: Date,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            default: "Male",
        },

        maritalStatus: {
            type: String,
            enum: ["Single", "Married", "Divorced", "Widowed"],
            default: "Single",
        },

        password: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Agent", agentSchema);