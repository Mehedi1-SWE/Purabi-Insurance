import { Link } from "react-router";
import InsuranceCarousel from "../../components/InsuranceCarousel";


export default function VerifyOtp() {
    return (
        <div className="h-[594px] w-[1280px] opacity-100">

            {/* ================= Main Layout ================= */}
            <div className="box-border flex h-[594px] w-[1280px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px] opacity-100">

                {/* ================= Reusable Left Layout ================= */}
                <InsuranceCarousel
                    width={610}
                    height={554}
                    headerWidth={510}
                />

                {/* ================= Right Layout ================= */}
                <div className="box-border flex h-[554px] w-[610px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-white p-[50px] opacity-100">

                    {/* ================= Right Layout - 1st Layout ================= */}
                    <div className="h-[99px] w-[510px] shrink-0 opacity-100">

                        <div className="h-[75px] w-[510px] opacity-100">
                            <h1 className="h-[75px] w-[510px] text-center font-['Poppins'] text-[50px] font-semibold capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                OTP Verification
                            </h1>
                        </div>

                        <div className="h-[24px] w-[510px] shrink-0 text-center opacity-100">
                            <p className="h-[24px] w-[510px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%]">

                                <span className="font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,0.5)]">
                                    Enter the OTP sent to{" "}
                                </span>

                                <span className="font-['Poppins'] text-[16px] font-bold capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,1)]">
                                    +880 - 1768-179927{" "}
                                </span>

                                <Link
                                    to="/signup"
                                    className="font-['Poppins'] text-[16px] font-bold capitalize leading-[100%] tracking-[0%] text-[rgba(66,133,244,1)] transition-all duration-300 ease-out hover:brightness-110 hover:drop-shadow-[0_2px_6px_rgba(66,133,244,0.3)] active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(66,133,244,0.3)]"
                                >
                                    Edit
                                </Link>

                            </p>
                        </div>
                    </div>

                    {/* ================= Right Layout - 2nd Layout ================= */}
                    <div className="flex h-[305px] w-[510px] shrink-0 flex-col gap-[30px] opacity-100">

                        {/* ================= OTP + Resend + Verify ================= */}
                        <div className="flex h-[201px] w-[510px] shrink-0 flex-col gap-[30px] opacity-100">

                            {/* ================= OTP Input Layout ================= */}
                            <div className="flex h-[64px] w-[510px] shrink-0 gap-[20px] opacity-100">

                                {[1, 2, 3, 4, 5, 6].map((index) => (
                                    <div
                                        key={index}
                                        className="box-border flex h-[64px] w-[68.33333587646484px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] p-[20px] opacity-100"
                                    />
                                ))}

                            </div>

                            {/* ================= Resend OTP ================= */}
                            <div className="h-[24px] w-[283px] shrink-0 opacity-100">
                                <p className="h-[24px] w-[283px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-black">
                                    Don't receive the OTP?{" "}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            console.log("OTP Resend clicked")
                                        }
                                        className="cursor-pointer font-['Poppins'] text-[16px] font-semibold capitalize leading-[100%] tracking-[0%] text-[rgba(66,133,244,1)] underline decoration-solid underline-offset-0 transition-all duration-300 ease-out hover:brightness-110 hover:drop-shadow-[0_2px_6px_rgba(66,133,244,0.3)] active:scale-95 active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(66,133,244,0.3)]"
                                    >
                                        Resend OTP
                                    </button>
                                </p>
                            </div>

                            {/* ================= Verify OTP ================= */}
                            <Link
                                to="/Proceed-Otp"
                                className="box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-[rgba(150,52,30,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2px]"
                            >
                                <span className="h-[24px] w-[82px] font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] tracking-[0%] text-white">
                                    Verify OTP
                                </span>
                            </Link>

                        </div>

                        {/* ================= Social + Terms ================= */}
                        <div className="flex h-[84px] w-[510px] shrink-0 flex-col gap-[20px] opacity-100">

                            {/* ================= Social Icons ================= */}
                            <div className="mx-auto flex h-[22px] w-[133.9619140625px] shrink-0 items-center justify-between opacity-100">

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

                            {/* ================= Terms & Privacy ================= */}
                            <div className="h-[42px] w-[510px] shrink-0 opacity-100">
                                <div className="flex h-[42px] w-[510px] flex-col items-center justify-center gap-[6px] font-['Poppins'] text-[14px] font-light leading-[14px] tracking-[0%] text-black">

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        By Creating An Account Or Logging In, You Agree To{" "}
                                        <Link
                                            to="/terms-of-service"
                                            className="font-['Poppins'] text-[14px] font-bold leading-[14px] tracking-[0%] text-[rgba(172,62,37,1)] underline"
                                        >
                                            Our Terms Of Service
                                        </Link>
                                    </div>

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        And{" "}
                                        <Link
                                            to="/privacy-policy"
                                            className="font-['Poppins'] text-[14px] font-bold leading-[14px] tracking-[0%] text-[rgba(172,62,37,1)] underline"
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