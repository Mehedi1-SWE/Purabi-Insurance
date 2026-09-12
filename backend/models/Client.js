const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        mobileNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        otp: {
            type: String,
            default: null,
        },

        otpExpiresAt: {
            type: Date,
            default: null,
        },

        otpVerified: {
            type: Boolean,
            default: false,
        },

        name: {
            type: String,
            default: "",
            trim: true,
        },

        email: {
            type: String,
            default: "",
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
        },

        maritalStatus: {
            type: String,
            enum: ["Single", "Married", "Divorced", "Widowed"],
        },

        profileImage: {
            type: String,
            default: "",
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

module.exports = mongoose.model("Client", clientSchema);