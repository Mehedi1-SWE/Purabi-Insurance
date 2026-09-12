const express = require("express");

const {
    sendClientOtp,
    verifyClientOtp,
    getClientProfile,
    updatePersonalInformation,
} = require("../controllers/clientController");

const router = express.Router();

// ================= Send Client OTP =================
router.post("/send-otp", sendClientOtp);

// ================= Verify Client OTP =================
router.post("/verify-otp", verifyClientOtp);

// ================= Get Client Profile =================
router.get(
    "/profile",
    getClientProfile
);

// ================= Update Personal Information =================
router.put(
    "/personal-information",
    updatePersonalInformation
);

module.exports = router;