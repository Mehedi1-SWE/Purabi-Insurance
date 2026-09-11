const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Agent = require("../models/Agent");

// ==============================
// Agent Login
// ==============================

const loginAgent = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        const agent = await Agent.findOne({
            email: email.toLowerCase(),
        });

        if (!agent) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        if (agent.status !== "active") {
            return res.status(403).json({
                success: false,
                message: "Your agent account is inactive.",
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            agent.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        const token = jwt.sign(
            {
                id: agent._id,
                role: "agent",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        return res.status(200).json({
            success: true,
            message: "Agent login successful.",
            token,
            agent: {
                id: agent._id,
                name: agent.name,
                email: agent.email,
                mobileNumber: agent.mobileNumber,
                role: "agent",
            },
        });
    } catch (error) {
        console.error("Agent login error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ==============================
// Get Agent Profile
// ==============================

const getAgentProfile = async (req, res) => {
    try {
        const agent = await Agent.findById(req.user.id).select(
            "-password"
        );

        if (!agent) {
            return res.status(404).json({
                success: false,
                message: "Agent not found.",
            });
        }

        return res.status(200).json({
            success: true,
            agent,
        });
    } catch (error) {
        console.error("Get agent profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ==============================
// Update Agent Profile
// ==============================

const updateAgentProfile = async (req, res) => {
    try {
        const allowedFields = [
            "name",
            "mobileNumber",
            "email",
            "address",
            "city",
            "nationality",
            "passportOrNid",
            "dateOfBirth",
            "gender",
            "maritalStatus",
        ];

        const updates = {};

        allowedFields.forEach((field) => {
            if (req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        });

        if (updates.email) {
            updates.email = updates.email.toLowerCase();
        }

        const agent = await Agent.findByIdAndUpdate(
            req.user.id,
            updates,
            {
                new: true,
                runValidators: true,
            }
        ).select("-password");

        if (!agent) {
            return res.status(404).json({
                success: false,
                message: "Agent not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
            agent,
        });
    } catch (error) {
        console.error("Update agent profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

module.exports = {
    loginAgent,
    getAgentProfile,
    updateAgentProfile,
};