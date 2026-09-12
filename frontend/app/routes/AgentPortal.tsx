import { useState } from "react";
import { Link, useNavigate } from "react-router";
import InsuranceCarousel from "../../components/InsuranceCarousel";

export default function AgentPortal() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/agent/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim().toLowerCase(),
                        password,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(
                    result.message || "Invalid email or password."
                );
                return;
            }

            // Save login information ONLY after successful login
            if (typeof window !== "undefined") {
                if (result.token) {
                    window.localStorage.setItem(
                        "agentToken",
                        result.token
                    );
                }

                if (result.agent) {
                    window.localStorage.setItem(
                        "agentData",
                        JSON.stringify(result.agent)
                    );
                }
            }

            navigate("/agent-portal-profile");
        } catch (error) {
            console.error("Agent login error:", error);

            setError(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-[760px] w-[1280px] font-['Poppins']">

            <div className="box-border flex h-[760px] w-[1280px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px]">

                {/* Left Layout */}
                <InsuranceCarousel
                    width={610}
                    height={720}
                    headerWidth={510}
                />

                {/* Right Layout */}
                <div className="box-border flex h-[720px] w-[610px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-white p-[50px]">

                    {/* Header */}
                    <div className="h-[99px] w-[510px]">

                        <div className="h-[75px] w-[510px]">
                            <h1 className="h-[75px] w-[510px] text-center font-['Poppins'] text-[50px] font-semibold capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                Welcome Back
                            </h1>
                        </div>

                        <div className="h-[24px] w-[510px]">
                            <p className="h-[24px] w-[510px] text-center font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                Don't Share your Login Credential
                            </p>
                        </div>

                    </div>

                    {/* Login Form */}
                    <form
                        onSubmit={handleLogin}
                        className="flex h-[471px] w-[510px] shrink-0 flex-col justify-between"
                    >

                        <div className="flex h-auto w-[510px] shrink-0 flex-col gap-[20px]">

                            {/* Username */}
                            <div className="flex h-[98px] w-[510px] shrink-0 flex-col gap-[10px]">

                                <div className="h-[24px] w-[177px] shrink-0">
                                    <label
                                        htmlFor="agent-email"
                                        className="font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] text-black"
                                    >
                                        Username or Agent ID
                                    </label>
                                </div>

                                <input
                                    id="agent-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter Your Username or Agent ID"
                                    autoComplete="email"
                                    className="box-border h-[64px] w-[510px] rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px] font-['Poppins'] text-[16px] font-normal text-black outline-none transition-all duration-300 placeholder:text-[#777] focus:border-[#AC3E25] focus:bg-white focus:shadow-[0_5px_20px_rgba(172,62,37,0.08)]"
                                />

                            </div>

                            {/* Password */}
                            <div className="flex h-[98px] w-[510px] shrink-0 flex-col gap-[10px]">

                                <div className="h-[24px] w-[167px] shrink-0">
                                    <label
                                        htmlFor="agent-password"
                                        className="font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] text-black"
                                    >
                                        Password
                                    </label>
                                </div>

                                <input
                                    id="agent-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter Your Password"
                                    autoComplete="current-password"
                                    className="box-border h-[64px] w-[510px] rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px] font-['Poppins'] text-[16px] font-normal text-black outline-none transition-all duration-300 placeholder:text-[#777] focus:border-[#AC3E25] focus:bg-white focus:shadow-[0_5px_20px_rgba(172,62,37,0.08)]"
                                />

                            </div>

                            {/* Error */}
                            {error && (
                                <div className="w-[510px] rounded-[5px] border border-red-100 bg-red-50 px-[15px] py-[12px]">
                                    <p className="m-0 font-['Poppins'] text-[13px] leading-[20px] text-red-600">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] overflow-hidden rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#96351F] hover:shadow-[0_8px_20px_rgba(172,62,37,0.25)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                <span className="pointer-events-none absolute inset-y-0 -left-[80px] w-[45px] rotate-[20deg] bg-white/20 blur-[4px] transition-all duration-700 group-hover:left-[560px]" />

                                <span className="relative z-10 font-['Poppins'] text-[16px] font-medium capitalize leading-[100%]">
                                    {loading
                                        ? "Logging in..."
                                        : "Log In"}
                                </span>

                            </button>

                        </div>

                        {/* Bottom */}
                        <div className="flex h-[84px] w-[510px] shrink-0 flex-col gap-[20px]">

                            {/* Social Icons */}
                            <div className="relative mx-auto flex h-[22px] w-[134px] items-center justify-between">

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-125"
                                >
                                    <img
                                        src="/facebook.png"
                                        alt="Facebook"
                                        className="block h-[20px] w-[10px] object-contain"
                                    />
                                </a>

                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-125"
                                >
                                    <img
                                        src="/twitter.png"
                                        alt="Twitter"
                                        className="block h-[18px] w-[22px] object-contain"
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="transition-all duration-300 hover:-translate-y-[2px] hover:scale-125"
                                >
                                    <img
                                        src="/instagram.png"
                                        alt="Instagram"
                                        className="block h-[22px] w-[22px] object-contain"
                                    />
                                </a>

                            </div>

                            {/* Terms */}
                            <div className="h-[42px] w-[510px]">

                                <div className="flex h-[42px] w-[510px] flex-col items-center justify-center gap-[6px] font-['Poppins'] text-[14px] font-light leading-[14px] text-black">

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        By Creating An Account Or Logging In, You Agree To{" "}
                                        <Link
                                            to="/terms-of-service"
                                            className="font-bold text-[rgba(172,62,37,1)] underline transition-all duration-300 hover:text-[#7A2114]"
                                        >
                                            Our Terms Of Service
                                        </Link>
                                    </div>

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        And{" "}
                                        <Link
                                            to="/privacy-policy"
                                            className="font-bold text-[rgba(172,62,37,1)] underline transition-all duration-300 hover:text-[#7A2114]"
                                        >
                                            Privacy Policy.
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}