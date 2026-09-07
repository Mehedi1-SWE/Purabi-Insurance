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
        route("agent-portal", "./routes/AgentPortal.tsx"),
        route("SignUp", "./routes/SignUp.tsx"),
        route("verify-otp", "./routes/VerifyOtp.tsx"),
        route("Proceed-Otp", "./routes/ProceedOtp.tsx"),
    ]),
    route("client-portal", "./routes/Clientportallogin.tsx"),
] satisfies RouteConfig;