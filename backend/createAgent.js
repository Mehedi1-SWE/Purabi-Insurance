
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Agent = require("./models/Agent");

const createAgent = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        const email = "agent@purabi.com";
        const password = "Agent@12345";

        const existingAgent = await Agent.findOne({ email });

        if (existingAgent) {
            console.log("Agent already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const agent = await Agent.create({
            name: "Purabi Agent",
            mobileNumber: "01700000000",
            email,
            address: "House 774, Road 11, Avenue 2, Mirpur DOHS",
            city: "Dhaka",
            nationality: "Bangladeshi",
            passportOrNid: "6910408920",
            dateOfBirth: new Date("2000-11-15"),
            gender: "Male",
            maritalStatus: "Married",
            password: hashedPassword,
            status: "active",
        });

        console.log("Agent created successfully!");
        console.log("Email:", agent.email);
        console.log("Password:", password);

        process.exit(0);
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
};

createAgent();