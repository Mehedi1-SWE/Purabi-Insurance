import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InsuranceCarousel from "../../components/InsuranceCarousel";

export default function VerifyOtp() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [mobileNumber, setMobileNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // ================= Get Mobile Number =================
    useEffect(() => {
        const savedMobileNumber =
            localStorage.getItem("clientMobileNumber");

        if (!savedMobileNumber) {
            navigate("/signup");
            return;
        }

        setMobileNumber(savedMobileNumber);

        // Focus first OTP input
        setTimeout(() => {
            inputRefs.current[0]?.focus();
        }, 100);
    }, [navigate]);

    // ================= Format Mobile Number =================
    const formatMobileNumber = (number: string) => {
        if (!number) return "+880";

        const cleanNumber = number.replace(/\D/g, "");

        if (cleanNumber.startsWith("0")) {
            return `+880 - ${cleanNumber.slice(
                1,
                5
            )}-${cleanNumber.slice(5)}`;
        }

        if (cleanNumber.startsWith("880")) {
            const localNumber = cleanNumber.slice(3);

            return `+880 - ${localNumber.slice(
                0,
                4
            )}-${localNumber.slice(4)}`;
        }

        return `+880 - ${cleanNumber}`;
    };

    // ================= OTP Change =================
    const handleOtpChange = (
        index: number,
        value: string
    ) => {
        const digit = value
            .replace(/\D/g, "")
            .slice(-1);

        const updatedOtp = [...otp];

        updatedOtp[index] = digit;

        setOtp(updatedOtp);
        setError("");
        setSuccess("");

        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // ================= OTP Key Down =================
    const handleOtpKeyDown = (
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            event.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // ================= OTP Paste =================
    const handleOtpPaste = (
        event: React.ClipboardEvent<HTMLInputElement>
    ) => {
        event.preventDefault();

        const pastedValue = event.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        if (!pastedValue) return;

        const updatedOtp = [
            "",
            "",
            "",
            "",
            "",
            "",
        ];

        pastedValue.split("").forEach(
            (digit, index) => {
                updatedOtp[index] = digit;
            }
        );

        setOtp(updatedOtp);
        setError("");
        setSuccess("");

        const nextIndex = Math.min(
            pastedValue.length,
            5
        );

        inputRefs.current[nextIndex]?.focus();
    };

    // ================= Verify OTP =================
    const handleVerifyOtp = async () => {
        setError("");
        setSuccess("");

        const enteredOtp = otp.join("");

        if (enteredOtp.length !== 6) {
            setError(
                "Please enter the complete 6-digit OTP."
            );
            return;
        }

        const savedMobileNumber =
            localStorage.getItem(
                "clientMobileNumber"
            );

        if (!savedMobileNumber) {
            setError(
                "Mobile number not found. Please sign up again."
            );
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/client/verify-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        mobileNumber:
                            savedMobileNumber,
                        otp: enteredOtp,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "Invalid OTP."
                );
            }

            // ================= Save Verification =================

            localStorage.setItem(
                "clientOtpVerified",
                "true"
            );

            if (data.token) {
                localStorage.setItem(
                    "clientToken",
                    data.token
                );
            }

            if (data.client) {
                localStorage.setItem(
                    "client",
                    JSON.stringify(data.client)
                );
            }

            setSuccess(
                "OTP verified successfully."
            );

            // Clear OTP
            setOtp([
                "",
                "",
                "",
                "",
                "",
                "",
            ]);

            // Go to Proceed OTP
            setTimeout(() => {
                navigate("/Proceed-Otp");
            }, 500);
        } catch (error) {
            console.error(
                "Verify OTP error:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Unable to connect to server. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // ================= Resend OTP =================
    const handleResendOtp = async () => {
        setError("");
        setSuccess("");

        const savedMobileNumber =
            localStorage.getItem(
                "clientMobileNumber"
            );

        if (!savedMobileNumber) {
            setError(
                "Mobile number not found. Please sign up again."
            );
            return;
        }

        try {
            setResending(true);

            const response = await fetch(
                "http://localhost:5000/api/client/send-otp",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        mobileNumber:
                            savedMobileNumber,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message ||
                    "Unable to resend OTP."
                );
            }

            // Clear previous OTP
            setOtp([
                "",
                "",
                "",
                "",
                "",
                "",
            ]);

            setSuccess(
                "A new OTP has been sent."
            );

            // Focus first box
            setTimeout(() => {
                inputRefs.current[0]?.focus();
            }, 100);
        } catch (error) {
            console.error(
                "Resend OTP error:",
                error
            );

            setError(
                error instanceof Error
                    ? error.message
                    : "Unable to connect to server. Please try again."
            );
        } finally {
            setResending(false);
        }
    };

    return (
        <div className="h-[594px] w-[1280px] opacity-100">
            {/* ================= Main Layout ================= */}
            <div className="box-border flex h-[594px] w-[1280px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px] opacity-100">

                {/* ================= Left Layout ================= */}
                <InsuranceCarousel
                    width={610}
                    height={554}
                    headerWidth={510}
                />

                {/* ================= Right Layout ================= */}
                <div className="box-border flex h-[554px] w-[610px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-white p-[50px] opacity-100">

                    {/* ================= Header ================= */}
                    <div className="h-[99px] w-[510px] shrink-0 opacity-100">

                        <div className="h-[75px] w-[510px] opacity-100">
                            <h1 className="h-[75px] w-[510px] text-center font-['Poppins'] text-[50px] font-semibold capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                OTP Verification
                            </h1>
                        </div>

                        <div className="h-[24px] w-[510px] shrink-0 text-center opacity-100">
                            <p className="h-[24px] w-[510px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%]">

                                <span className="text-[rgba(68,68,68,0.5)]">
                                    Enter the OTP sent to{" "}
                                </span>

                                <span className="font-bold text-[rgba(68,68,68,1)]">
                                    {formatMobileNumber(
                                        mobileNumber
                                    )}{" "}
                                </span>

                                <Link
                                    to="/signup"
                                    className="font-bold text-[rgba(66,133,244,1)] transition-all duration-300 hover:brightness-110"
                                >
                                    Edit
                                </Link>

                            </p>
                        </div>
                    </div>

                    {/* ================= Main OTP Area ================= */}
                    <div className="flex h-[305px] w-[510px] shrink-0 flex-col gap-[30px] opacity-100">

                        <div className="flex h-[201px] w-[510px] shrink-0 flex-col gap-[30px]">

                            {/* ================= OTP Inputs ================= */}
                            <div className="flex h-[64px] w-[510px] shrink-0 gap-[20px]">

                                {[
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                ].map((index) => (
                                    <input
                                        key={index}
                                        ref={(element) => {
                                            inputRefs.current[
                                                index
                                            ] = element;
                                        }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={
                                            otp[index]
                                        }
                                        onChange={(
                                            event
                                        ) =>
                                            handleOtpChange(
                                                index,
                                                event
                                                    .target
                                                    .value
                                            )
                                        }
                                        onKeyDown={(
                                            event
                                        ) =>
                                            handleOtpKeyDown(
                                                index,
                                                event
                                            )
                                        }
                                        onPaste={
                                            index === 0
                                                ? handleOtpPaste
                                                : undefined
                                        }
                                        className="box-border flex h-[64px] w-[68.33333587646484px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] p-[20px] text-center font-['Poppins'] text-[20px] font-semibold text-[#444444] outline-none transition focus:border-[#AC3E25] focus:ring-1 focus:ring-[#AC3E25]/20"
                                        aria-label={`OTP digit ${index + 1
                                            }`}
                                    />
                                ))}

                            </div>

                            {/* ================= Error ================= */}
                            {error && (
                                <p className="-mb-[15px] font-['Poppins'] text-[12px] text-red-500">
                                    {error}
                                </p>
                            )}

                            {/* ================= Success ================= */}
                            {success && (
                                <p className="-mb-[15px] font-['Poppins'] text-[12px] text-green-600">
                                    {success}
                                </p>
                            )}

                            {/* ================= Resend ================= */}
                            <div className="h-[24px] w-[283px] shrink-0">

                                <p className="h-[24px] w-[283px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] text-black">

                                    Don't receive the OTP?{" "}

                                    <button
                                        type="button"
                                        onClick={
                                            handleResendOtp
                                        }
                                        disabled={
                                            resending ||
                                            loading
                                        }
                                        className="cursor-pointer font-['Poppins'] text-[16px] font-semibold capitalize leading-[100%] text-[rgba(66,133,244,1)] underline transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {resending
                                            ? "Sending..."
                                            : "Resend OTP"}
                                    </button>

                                </p>

                            </div>

                            {/* ================= Verify Button ================= */}
                            <button
                                type="button"
                                onClick={
                                    handleVerifyOtp
                                }
                                disabled={
                                    loading ||
                                    resending
                                }
                                className="box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-[rgba(150,52,30,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(172,62,37,0.4)]"
                            >
                                <span className="font-['Poppins'] text-[16px] font-medium text-white">
                                    {loading
                                        ? "Verifying..."
                                        : "Verify OTP"}
                                </span>
                            </button>

                        </div>

                        {/* ================= Social + Terms ================= */}
                        <div className="flex h-[84px] w-[510px] shrink-0 flex-col gap-[20px]">

                            {/* ================= Social Icons ================= */}
                            <div className="mx-auto flex h-[22px] w-[133.9619140625px] shrink-0 items-center justify-between">

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="flex h-[22px] w-[10px] items-center justify-center"
                                >
                                    <img
                                        src="/facebook.png"
                                        alt=""
                                        className="block h-[19.845px] w-[9.9233px] object-contain"
                                    />
                                </a>

                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="flex h-[22px] w-[22px] items-center justify-center"
                                >
                                    <img
                                        src="/twitter.png"
                                        alt=""
                                        className="block h-[17.875px] w-[22px] object-contain"
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="flex h-[22px] w-[22px] items-center justify-center"
                                >
                                    <img
                                        src="/instagram.png"
                                        alt=""
                                        className="block h-[22px] w-[22px] object-contain"
                                    />
                                </a>

                            </div>

                            {/* ================= Terms ================= */}
                            <div className="h-[42px] w-[510px] shrink-0">

                                <div className="flex h-[42px] w-[510px] flex-col items-center justify-center gap-[6px] font-['Poppins'] text-[14px] font-light leading-[14px] text-black">

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">

                                        By Creating An Account Or Logging In, You Agree To{" "}

                                        <Link
                                            to="/terms-of-service"
                                            className="font-bold text-[rgba(172,62,37,1)] underline"
                                        >
                                            Our Terms Of Service
                                        </Link>

                                    </div>

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">

                                        And{" "}

                                        <Link
                                            to="/privacy-policy"
                                            className="font-bold text-[rgba(172,62,37,1)] underline"
                                        >
                                            Privacy Policy.
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}