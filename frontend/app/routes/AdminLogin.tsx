import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
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
                    result.message || "Invalid email or password."
                );
                return;
            }

            if (result.token) {
                localStorage.setItem(
                    "adminToken",
                    result.token
                );
            }

            // Login successful
            navigate("/blog-management");
        } catch (error) {
            console.error("Admin login error:", error);

            setError(
                "Unable to connect to server."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-[700px] items-center justify-center bg-[#faf8f7] px-5 font-['Poppins']">

            <div className="w-full max-w-[450px] rounded-[8px] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

                {/* Heading */}
                <div className="text-center">

                    <h1 className="text-[30px] font-semibold text-[#211a18]">
                        Admin Login
                    </h1>

                    <p className="mt-2 text-[13px] text-[#777]">
                        Login to manage your blogs
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleLogin}
                    className="mt-8"
                >

                    {/* Email */}
                    <div>

                        <label className="text-[13px] font-medium text-[#333]">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter admin email"
                            required
                            className="mt-2 h-[52px] w-full rounded-[5px] border border-[#eadfdc] px-4 text-[13px] outline-none focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Password */}
                    <div className="mt-5">

                        <label className="text-[13px] font-medium text-[#333]">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter password"
                            required
                            className="mt-2 h-[52px] w-full rounded-[5px] border border-[#eadfdc] px-4 text-[13px] outline-none focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mt-4 rounded-[5px] bg-red-50 px-4 py-3">

                            <p className="text-[13px] text-red-600">
                                {error}
                            </p>

                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 h-[52px] w-full rounded-[5px] bg-[#ac3e25] text-[14px] font-medium text-white transition hover:bg-[#922f1c] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </button>

                </form>

            </div>

        </div>
    );
}