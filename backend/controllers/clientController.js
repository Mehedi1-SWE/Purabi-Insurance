const jwt = require("jsonwebtoken");
const Client = require("../models/Client");

// ================= Normalize Mobile Number =================
const normalizeMobileNumber = (mobileNumber) => {
    if (!mobileNumber) return "";

    let number = mobileNumber
        .toString()
        .trim()
        .replace(/\D/g, "");

    // +8801XXXXXXXXX / 8801XXXXXXXXX
    if (number.startsWith("8801")) {
        number = `0${number.slice(3)}`;
    }

    // 1XXXXXXXXX
    if (number.startsWith("1") && number.length === 10) {
        number = `0${number}`;
    }

    return number;
};

// ================= Send OTP =================
const sendClientOtp = async (req, res) => {
    try {
        const { mobileNumber } = req.body;

        if (!mobileNumber) {
            return res.status(400).json({
                success: false,
                message: "Mobile number is required.",
            });
        }

        const cleanMobileNumber =
            normalizeMobileNumber(mobileNumber);

        if (!/^01\d{9}$/.test(cleanMobileNumber)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid 11-digit mobile number.",
            });
        }

        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        const otpExpiresAt = new Date(
            Date.now() + 5 * 60 * 1000
        );

        let client = await Client.findOne({
            mobileNumber: cleanMobileNumber,
        });

        if (!client) {
            client = new Client({
                mobileNumber: cleanMobileNumber,
                otp,
                otpExpiresAt,
                otpVerified: false,
            });
        } else {
            client.otp = otp;
            client.otpExpiresAt = otpExpiresAt;
            client.otpVerified = false;
        }

        await client.save();

        console.log(
            "========================================"
        );
        console.log(
            `Client OTP for ${cleanMobileNumber}: ${otp}`
        );
        console.log(
            `OTP expires at: ${otpExpiresAt.toLocaleString()}`
        );
        console.log(
            "========================================"
        );

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully.",
        });
    } catch (error) {
        console.error(
            "Send client OTP error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ================= Verify OTP =================
const verifyClientOtp = async (req, res) => {
    try {
        const { mobileNumber, otp } = req.body;

        if (!mobileNumber || !otp) {
            return res.status(400).json({
                success: false,
                message:
                    "Mobile number and OTP are required.",
            });
        }

        const cleanMobileNumber =
            normalizeMobileNumber(mobileNumber);

        const cleanOtp = otp.toString().trim();

        if (!/^01\d{9}$/.test(cleanMobileNumber)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid mobile number.",
            });
        }

        if (!/^\d{6}$/.test(cleanOtp)) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter a valid 6-digit OTP.",
            });
        }

        const client = await Client.findOne({
            mobileNumber: cleanMobileNumber,
        });

        if (!client) {
            return res.status(404).json({
                success: false,
                message:
                    "Client not found. Please request OTP again.",
            });
        }

        if (!client.otp) {
            return res.status(400).json({
                success: false,
                message:
                    "OTP not found. Please request a new OTP.",
            });
        }

        if (!client.otpExpiresAt) {
            return res.status(400).json({
                success: false,
                message:
                    "OTP information expired. Please request a new OTP.",
            });
        }

        if (
            new Date(client.otpExpiresAt).getTime() <
            Date.now()
        ) {
            client.otp = null;
            client.otpExpiresAt = null;

            await client.save();

            return res.status(400).json({
                success: false,
                message:
                    "OTP has expired. Please request a new OTP.",
            });
        }

        if (client.otp !== cleanOtp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP.",
            });
        }

        client.otp = null;
        client.otpExpiresAt = null;
        client.otpVerified = true;

        await client.save();

        const token = jwt.sign(
            {
                id: client._id,
                role: "client",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        return res.status(200).json({
            success: true,
            message:
                "OTP verified successfully.",

            token,

            client: {
                id: client._id,
                mobileNumber:
                    client.mobileNumber,
                otpVerified:
                    client.otpVerified,
                role: "client",
            },
        });
    } catch (error) {
        console.error(
            "Verify client OTP error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ================= Get Client Profile =================
const getClientProfile = async (req, res) => {
    try {
        const authHeader =
            req.headers.authorization;

        if (
            !authHeader ||
            !authHeader.startsWith("Bearer ")
        ) {
            return res.status(401).json({
                success: false,
                message:
                    "Authentication token is required.",
            });
        }

        const token =
            authHeader.split(" ")[1];

        let decoded;

        try {
            decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );
        } catch (error) {
            return res.status(401).json({
                success: false,
                message:
                    "Invalid or expired token.",
            });
        }

        if (decoded.role !== "client") {
            return res.status(403).json({
                success: false,
                message: "Access denied.",
            });
        }

        const client = await Client.findById(
            decoded.id
        );

        if (!client) {
            return res.status(404).json({
                success: false,
                message: "Client not found.",
            });
        }

        return res.status(200).json({
            success: true,

            client: {
                id: client._id,
                mobileNumber:
                    client.mobileNumber,
                name: client.name,
                email: client.email,
                address: client.address,
                city: client.city,
                nationality:
                    client.nationality,
                passportOrNid:
                    client.passportOrNid,
                dateOfBirth:
                    client.dateOfBirth,
                gender: client.gender,
                maritalStatus:
                    client.maritalStatus,
                profileImage:
                    client.profileImage,
                otpVerified:
                    client.otpVerified,
                status: client.status,
                role: "client",
            },
        });
    } catch (error) {
        console.error(
            "Get client profile error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ================= Update Personal Information =================
const updatePersonalInformation = async (req, res) => {
    try {
        const authHeader =
            req.headers.authorization;

        if (
            !authHeader ||
            !authHeader.startsWith("Bearer ")
        ) {
            return res.status(401).json({
                success: false,
                message:
                    "Authentication token is required.",
            });
        }

        const token =
            authHeader.split(" ")[1];

        let decoded;

        try {
            decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );
        } catch (error) {
            return res.status(401).json({
                success: false,
                message:
                    "Invalid or expired token.",
            });
        }

        if (decoded.role !== "client") {
            return res.status(403).json({
                success: false,
                message: "Access denied.",
            });
        }

        const client = await Client.findById(
            decoded.id
        );

        if (!client) {
            return res.status(404).json({
                success: false,
                message: "Client not found.",
            });
        }

        if (!client.otpVerified) {
            return res.status(403).json({
                success: false,
                message:
                    "Please verify your mobile number first.",
            });
        }

        const {
            name,
            email,
            address,
            city,
            nationality,
            passportOrNid,
            dateOfBirth,
            gender,
            maritalStatus,
            profileImage,
        } = req.body;

        if (name !== undefined) {
            client.name = name.trim();
        }

        if (email !== undefined) {
            client.email = email.trim();
        }

        if (address !== undefined) {
            client.address = address.trim();
        }

        if (city !== undefined) {
            client.city = city.trim();
        }

        if (nationality !== undefined) {
            client.nationality =
                nationality.trim();
        }

        if (passportOrNid !== undefined) {
            client.passportOrNid =
                passportOrNid.trim();
        }

        if (dateOfBirth) {
            client.dateOfBirth =
                new Date(dateOfBirth);
        }

        if (gender) {
            client.gender = gender;
        }

        if (maritalStatus) {
            client.maritalStatus =
                maritalStatus;
        }

        if (profileImage !== undefined) {
            client.profileImage =
                profileImage;
        }

        await client.save();

        return res.status(200).json({
            success: true,
            message:
                "Personal information updated successfully.",

            client: {
                id: client._id,
                mobileNumber:
                    client.mobileNumber,
                name: client.name,
                email: client.email,
                address: client.address,
                city: client.city,
                nationality:
                    client.nationality,
                passportOrNid:
                    client.passportOrNid,
                dateOfBirth:
                    client.dateOfBirth,
                gender: client.gender,
                maritalStatus:
                    client.maritalStatus,
                profileImage:
                    client.profileImage,
                otpVerified:
                    client.otpVerified,
                status: client.status,
                role: "client",
            },
        });
    } catch (error) {
        console.error(
            "Update personal information error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Server error.",
        });
    }
};

// ================= Exports =================
module.exports = {
    sendClientOtp,
    verifyClientOtp,
    getClientProfile,
    updatePersonalInformation,
};