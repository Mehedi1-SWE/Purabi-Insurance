
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                setError(
                    result.message ||
                    "Invalid email or password."
                );

                return;
            }

            if (result.token) {
                localStorage.setItem(
                    "adminToken",
                    result.token
                );
            }

            navigate("/admin-dashboard");
        } catch (error) {
            console.error("Admin login error:", error);

            setError(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="w-[1280px] h-[750px] rounded-[30px] p-[20px] gap-[20px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)]">

            {/* Main Layout */}

            <div className="mx-auto flex h-[705px] max-w-[1350px] gap-5 overflow-hidden rounded-[30px] bg-white p-5">

                {/* ================= LEFT SIDE ================= */}

                <div className="relative flex w-1/2 overflow-hidden rounded-[30px] bg-[#AC3E25]">

                    {/* Round Shapes */}

                    <div className="absolute -right-[120px] -top-[120px] h-[350px] w-[350px] rounded-full border-[60px] border-white/10" />
                    {/* Clean Background Image */}
                    <img
                        src="/Backgroundadmin.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute -bottom-[150px] -left-[120px] h-[380px] w-[380px] rounded-full border-[60px] border-white/10" />

                    <div className="absolute right-[15%] top-[25%] h-[130px] w-[130px] rounded-full border border-white/10" />

                    {/* Left Content */}

                    <div className="relative z-10 flex h-full w-full flex-col justify-start p-[32px]">

                        {/* Logo */}

                        <div className="flex h-[46.2236px] w-[184.3504px] shrink-0 items-center justify-center bg-[rgba(171,61,37,1)]">
                            <img
                                src="/logo.png"
                                alt="Purabi Insurance"
                                className="h-[50px] w-auto object-contain"
                            />
                        </div>

                        {/* Main Content */}


                        <div className="mt-[48px]">
                            <h1 className="font-serif text-[40px] font-semibold leading-[1.08] text-[#6F2418]">
                                Together for
                                <br />
                                a Safer Tomorrow
                            </h1>

                            <p className="mt-4 text-[15px] leading-[1.5] text-[#27303B]">
                                Reliable insurance solutions
                                <br />
                                for a brighter and more secure future.
                            </p>

                            <div className="mt-5 h-[2px] w-[36px] bg-[#AC3E25]" />
                        </div>

                        {/* Features */}
                        <div className="mt-[30px] space-y-[18px]">

                            {/* Trusted Protection */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25] text-white">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M12 3L19 6V11C19 15.5 16.1 19.2 12 21C7.9 19.2 5 15.5 5 11V6L12 3Z"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M9 12L11 14L15 10"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#202020]">
                                        Trusted Protection
                                    </h3>

                                    <p className="mt-0.5 text-[12px] text-[#30343A]">
                                        For you and your loved ones
                                    </p>
                                </div>
                            </div>

                            {/* Customer First */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25] text-white">
                                    <svg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            cx="12"
                                            cy="8"
                                            r="3"
                                            stroke="white"
                                            strokeWidth="2"
                                        />

                                        <path
                                            d="M6 19C6.5 15.8 8.5 14 12 14C15.5 14 17.5 15.8 18 19"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />

                                        <circle
                                            cx="5"
                                            cy="10"
                                            r="2"
                                            stroke="white"
                                            strokeWidth="1.7"
                                        />

                                        <circle
                                            cx="19"
                                            cy="10"
                                            r="2"
                                            stroke="white"
                                            strokeWidth="1.7"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#202020]">
                                        Customer First
                                    </h3>

                                    <p className="mt-0.5 text-[12px] text-[#30343A]">
                                        Always by your side
                                    </p>
                                </div>
                            </div>

                            {/* A Brighter Tomorrow */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25] text-white">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 19V14"
                                            stroke="white"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M12 19V9"
                                            stroke="white"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M19 19V5"
                                            stroke="white"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#202020]">
                                        A Brighter Tomorrow
                                    </h3>

                                    <p className="mt-0.5 text-[12px] text-[#30343A]">
                                        Through financial security
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Quote */}
                        <div className="absolute bottom-0 left-0 h-[154px] w-full overflow-hidden">
                            <svg
                                className="absolute inset-0 h-full w-full"
                                viewBox="0 0 510 154"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 47 C70 10 145 15 215 55 C290 98 340 128 410 112 C455 102 485 80 510 88 L510 154 L0 154 Z"
                                    fill="#AC3E25"
                                />
                            </svg>

                            <div className="absolute left-[40px] top-[35px]">
                                <p className="font-serif text-[23px] italic leading-[1.3] text-white">
                                    “Protecting
                                    <br />
                                    what matters most.”
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

                {/* ================= RIGHT SIDE ================= */}

                <div className="relative flex w-1/2 items-center justify-center overflow-hidden rounded-[30px] bg-white">



                    <div className="relative z-10 w-full max-w-[480px] px-8 py-10 sm:px-12">

                        {/* Back to Website */}
                        <a
                            href="/"
                            className="absolute right-8 top-20 z-20 text-[14px] font-medium text-[#AC3E25] hover:text-[#8f321f]"
                        >
                            ← &nbsp; Back to Website
                        </a>

                        {/* Heading */}
                        <div className="mt-[105px]">
                            <h2 className="text-[42px] font-bold leading-tight tracking-[-1px] text-[#1F2937]">
                                Welcome Back
                            </h2>

                            <p className="mt-3 text-[16px] text-[#6B7280]">
                                Log in to your admin account
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleLogin}
                            className="mt-9"
                        >
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-[14px] font-medium text-[#1F2937]"
                                >
                                    Email Address
                                </label>

                                <div className="relative mt-2">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A6]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <rect
                                                x="3"
                                                y="5"
                                                width="18"
                                                height="14"
                                                rx="2"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M4 7L12 13L20 7"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="admin@purabiinsurance.com"
                                        autoComplete="email"
                                        required
                                        className="h-[50px] w-full rounded-[8px] border border-[#E5E7EB] bg-white pl-[46px] pr-4 text-[14px] text-[#1F2937] outline-none placeholder:text-[#9CA3AF] focus:border-[#AC3E25] focus:ring-2 focus:ring-[#AC3E25]/10"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="mt-5">
                                <label
                                    htmlFor="password"
                                    className="text-[14px] font-medium text-[#1F2937]"
                                >
                                    Password
                                </label>

                                <div className="relative mt-2">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A6]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <rect
                                                x="5"
                                                y="10"
                                                width="14"
                                                height="10"
                                                rx="2"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M8 10V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V10"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                        className="h-[50px] w-full rounded-[8px] border border-[#E5E7EB] bg-white pl-[46px] pr-[70px] text-[14px] text-[#1F2937] outline-none placeholder:text-[#9CA3AF] focus:border-[#AC3E25] focus:ring-2 focus:ring-[#AC3E25]/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-[#777] hover:text-[#AC3E25]"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Remember + Forgot */}
                            <div className="mt-5 flex items-center justify-between">
                                <label className="flex cursor-pointer items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(
                                                e.target.checked
                                            )
                                        }
                                        className="h-[21px] w-[21px] accent-[#AC3E25]"
                                    />

                                    <span className="text-[13px] text-[#4B5563]">
                                        Remember me
                                    </span>
                                </label>

                                <button
                                    type="button"
                                    className="text-[13px] font-medium text-[#AC3E25] hover:text-[#8f321f]"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="mt-4 rounded-[8px] border border-red-100 bg-red-50 px-4 py-3">
                                    <p className="text-[13px] text-red-600">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* Login button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-6 h-[50px] w-full rounded-[8px] bg-[#AC3E25] text-[15px] font-medium text-white transition hover:bg-[#96351F] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading
                                    ? "Logging in..."
                                    : "Log In   →"}
                            </button>
                        </form>

                        {/* OR */}
                        <div className="mt-4 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#E5E7EB]" />

                            <span className="text-[12px] text-[#6B7280]">
                                OR
                            </span>

                            <div className="h-px flex-1 bg-[#E5E7EB]" />
                        </div>

                        {/* Admin Access */}
                        <div className="mt-4 flex items-center gap-4 rounded-[10px] bg-[#F9F7F6] px-5 py-4">
                            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white text-[#AC3E25] shadow-sm">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12 3L19 6V11C19 15.5 16.1 19.2 12 21C7.9 19.2 5 15.5 5 11V6L12 3Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p className="text-[14px] font-semibold text-[#1F2937]">
                                    Admin Access Only
                                </p>

                                <p className="mt-1 text-[12px] leading-5 text-[#6B7280]">
                                    This area is restricted to authorized
                                    personnel.
                                </p>
                            </div>
                        </div>

                    </div>






                </div>

            </div>

        </div>
    );
}
