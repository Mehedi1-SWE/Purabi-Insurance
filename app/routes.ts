import {
    type RouteConfig,
    route,
    index,
    layout,
} from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayouts.tsx", [

        index("./routes/Home.tsx"),

        route("about", "./routes/About.tsx"),

        route("quote", "./routes/Quote.tsx"),

        route(
            "agent-portal",
            "./routes/AgentPortal.tsx"
        ),

        route(
            "SignUp",
            "./routes/SignUp.tsx"
        ),

        route(
            "verify-otp",
            "./routes/VerifyOtp.tsx"
        ),

        route(
            "Proceed-Otp",
            "./routes/ProceedOtp.tsx"
        ),

        /* Claims */
        route(
            "claims",
            "./routes/Claims.tsx"
        ),

        /* Blogs */
        route(
            "blogs",
            "./routes/Blogs.tsx"
        ),

        /* Full Blog Article */
        route(
            "blogs/:slug",
            "./routes/BlogArticle.tsx"
        ),

        /* Contact */
        route(
            "contact-us",
            "./routes/ContactUs.tsx"
        ),

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

    route(
        "client-portal",
        "./routes/Clientportallogin.tsx"
    ),

    route(
        "agent-portal-profile",
        "./routes/AgentPortalProfile.tsx"
    ),

] satisfies RouteConfig;