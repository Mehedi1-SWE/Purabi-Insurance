import {
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayouts.tsx", [

        // Home
        index("./routes/Home.tsx"),

        // About
        route(
            "about",
            "./routes/About.tsx"
        ),

        // Quote
        route(
            "quote",
            "./routes/Quote.tsx"
        ),

        // Agent Portal
        route(
            "agent-portal",
            "./routes/AgentPortal.tsx"
        ),

        // Sign Up
        route(
            "SignUp",
            "./routes/SignUp.tsx"
        ),

        // Verify OTP
        route(
            "verify-otp",
            "./routes/VerifyOtp.tsx"
        ),

        // Proceed OTP
        route(
            "Proceed-Otp",
            "./routes/ProceedOtp.tsx"
        ),

        // Claims
        route(
            "claims",
            "./routes/Claims.tsx"
        ),

        // Blogs
        route(
            "blogs",
            "./routes/Blogs.tsx"
        ),

        // Add Blog
        route(
            "add-blog",
            "./routes/AddBlog.tsx"
        ),

        // Blog Management
        route(
            "blog-management",
            "./routes/BlogManagement.tsx"
        ),

        // Edit Blog
        route(
            "blog-management/edit/:id",
            "./routes/EditBlog.tsx"
        ),

        // Full Blog Article
        route(
            "blogs/:id",
            "./routes/BlogArticle.tsx"
        ),

        // Contact Us
        route(
            "contact-us",
            "./routes/ContactUs.tsx"
        ),

        // Terms & Conditions
        route(
            "terms-and-conditions",
            "./routes/TermsAndConditions.tsx"
        ),

        // Privacy Policy
        route(
            "privacy-policy",
            "./routes/PrivacyPolicy.tsx"
        ),

        // Refund Policy
        route(
            "refund-policy",
            "./routes/RefundPolicy.tsx"
        ),

        // Admin Login
        route(
            "admin-login",
            "./routes/AdminLogin.tsx"
        ),
        // Admin Dashboard
        route(
            "admin-dashboard",
            "./routes/AdminDashboard.tsx"
        ),

    ]),

    // Client Portal
    route(
        "client-portal",
        "./routes/Clientportallogin.tsx"
    ),

    // Agent Portal Profile
    route(
        "agent-portal-profile",
        "./routes/AgentPortalProfile.tsx"
    ),

] satisfies RouteConfig;