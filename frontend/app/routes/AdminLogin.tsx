import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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
            console.error(
                "Admin login error:",
                error
            );

            setError(
                "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f3f1] font-['Poppins']">

            <div className="mx-auto flex min-h-screen max-w-[1440px]">

                {/* Left Section */}
                <div className="relative hidden w-1/2 overflow-hidden bg-[#ac3e25] lg:flex">

                    {/* Decorative shapes */}
                    <div className="absolute -right-[120px] -top-[120px] h-[360px] w-[360px] rounded-full border-[70px] border-white/10" />

                    <div className="absolute -bottom-[150px] -left-[100px] h-[380px] w-[380px] rounded-full border-[70px] border-white/10" />

                    <div className="relative z-10 flex w-full flex-col justify-between p-[70px] text-white">

                        {/* Brand */}
                        <div>

                            <div className="flex items-center gap-4">

                                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[10px] bg-white text-[24px] font-semibold text-[#ac3e25]">
                                    P
                                </div>

                                <div>
                                    <h2 className="text-[20px] font-semibold">
                                        Purabi Insurance
                                    </h2>

                                    <p className="mt-1 text-[11px] tracking-[1.5px] text-white/65">
                                        INSURANCE & PROTECTION
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Main Text */}
                        <div className="max-w-[500px]">

                            <p className="text-[12px] font-medium uppercase tracking-[3px] text-white/60">
                                Administration Portal
                            </p>

                            <h1 className="mt-6 text-[52px] font-semibold leading-[1.12] tracking-[-2px]">
                                Manage your
                                <br />
                                content with
                                <br />
                                confidence.
                            </h1>

                            <p className="mt-7 max-w-[430px] text-[14px] leading-[1.9] text-white/70">
                                A secure and simple workspace to manage
                                Purabi Insurance blogs, articles and
                                website content.
                            </p>

                        </div>

                        {/* Footer */}
                        <div className="text-[11px] text-white/50">
                            © {new Date().getFullYear()} Purabi Insurance.
                            All rights reserved.
                        </div>

                    </div>

                </div>

                {/* Right Section */}
                <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2 lg:px-[80px]">

                    <div className="w-full max-w-[460px]">

                        {/* Mobile Brand */}
                        <div className="mb-10 lg:hidden">

                            <div className="flex items-center gap-3">

                                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[9px] bg-[#ac3e25] text-[22px] font-semibold text-white">
                                    P
                                </div>

                                <div>
                                    <h2 className="text-[18px] font-semibold text-[#211a18]">
                                        Purabi Insurance
                                    </h2>

                                    <p className="text-[10px] tracking-[1px] text-[#999]">
                                        ADMINISTRATION PORTAL
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Login Card */}
                        <div className="rounded-[14px] border border-[#eadfdc] bg-white p-8 shadow-[0_20px_60px_rgba(65,35,25,0.08)] md:p-10">

                            {/* Heading */}
                            <div>

                                <p className="text-[11px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                                    Welcome Back
                                </p>

                                <h1 className="mt-3 text-[32px] font-semibold tracking-[-1px] text-[#211a18]">
                                    Admin Sign In
                                </h1>

                                <p className="mt-3 text-[13px] leading-[1.7] text-[#777]">
                                    Sign in to access your Purabi Insurance
                                    administration dashboard.
                                </p>

                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleLogin}
                                className="mt-9"
                            >

                                {/* Email */}
                                <div>

                                    <label className="text-[12px] font-medium text-[#333]">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                        placeholder="admin@example.com"
                                        autoComplete="email"
                                        required
                                        className="mt-2 h-[54px] w-full rounded-[7px] border border-[#e3d9d5] bg-[#fffdfc] px-4 text-[13px] text-[#211a18] outline-none transition placeholder:text-[#aaa] focus:border-[#ac3e25] focus:ring-4 focus:ring-[#ac3e25]/10"
                                    />

                                </div>

                                {/* Password */}
                                <div className="mt-6">

                                    <div className="flex items-center justify-between">

                                        <label className="text-[12px] font-medium text-[#333]">
                                            Password
                                        </label>

                                    </div>

                                    <div className="relative mt-2">

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            required
                                            className="h-[54px] w-full rounded-[7px] border border-[#e3d9d5] bg-[#fffdfc] px-4 pr-[80px] text-[13px] text-[#211a18] outline-none transition placeholder:text-[#aaa] focus:border-[#ac3e25] focus:ring-4 focus:ring-[#ac3e25]/10"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-[#777] transition hover:text-[#ac3e25]"
                                        >
                                            {showPassword
                                                ? "Hide"
                                                : "Show"}
                                        </button>

                                    </div>

                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="mt-5 flex items-start gap-3 rounded-[7px] border border-red-100 bg-red-50 px-4 py-3">

                                        <div className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[9px] font-bold text-red-600">
                                            !
                                        </div>

                                        <p className="text-[12px] leading-[1.6] text-red-600">
                                            {error}
                                        </p>

                                    </div>
                                )}

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-7 flex h-[54px] w-full items-center justify-center rounded-[7px] bg-[#ac3e25] text-[13px] font-medium text-white shadow-[0_8px_20px_rgba(172,62,37,0.18)] transition hover:bg-[#96351f] hover:shadow-[0_10px_24px_rgba(172,62,37,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-3">
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Signing in...
                                        </span>
                                    ) : (
                                        "Sign In to Dashboard →"
                                    )}
                                </button>

                            </form>

                            {/* Security Note */}
                            <div className="mt-7 border-t border-[#eee] pt-6">

                                <p className="text-center text-[11px] leading-[1.7] text-[#999]">
                                    Secure administrator access.
                                    <br />
                                    Your session is protected with
                                    authentication.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}