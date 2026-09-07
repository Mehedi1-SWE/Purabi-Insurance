import {
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayouts.tsx", [
        // Existing routes — unchanged
        index("./routes/Home.tsx"),
        route("about", "./routes/About.tsx"),
        route("quote", "./routes/Quote.tsx"),
        route("agent-portal", "./routes/AgentPortal.tsx"),
        route("SignUp", "./routes/SignUp.tsx"),
        route("verify-otp", "./routes/VerifyOtp.tsx"),
        route("Proceed-Otp", "./routes/ProceedOtp.tsx"),

        // New pages
        route("claims", "./routes/Claims.tsx"),
        route("blogs", "./routes/Blogs.tsx"),
        route("contact-us", "./routes/ContactUs.tsx"),
        route(
            "terms-and-conditions",
            "./routes/TermsAndConditions.tsx"
        ),
        route(
            "privacy-policy",
            "./routes/PrivacyPolicy.tsx"
        ),
        route(
            "refund-policy",
            "./routes/RefundPolicy.tsx"
        ),
    ]),

    // Existing routes — unchanged
    route("client-portal", "./routes/Clientportallogin.tsx"),
    route(
        "agent-portal-profile",
        "./routes/AgentPortalProfile.tsx"
    ),
] satisfies RouteConfig;