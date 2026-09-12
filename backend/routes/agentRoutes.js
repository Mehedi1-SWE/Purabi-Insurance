const express = require("express");

const {
    loginAgent,
    getAgentProfile,
    updateAgentProfile,
} = require("../controllers/agentController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Agent Login
router.post("/login", loginAgent);

// Protected Agent Profile
router.get(
    "/profile",
    protect,
    getAgentProfile
);

// Protected Update Profile
router.put(
    "/profile",
    protect,
    upload.single("profileImage"),
    updateAgentProfile
);

module.exports = router;