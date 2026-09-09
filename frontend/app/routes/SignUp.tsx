

import { Link } from "react-router";

import InsuranceCarousel from "../../components/InsuranceCarousel";

export default function SignUp() {
    return (
        <div className="h-[676px] w-[1300px] opacity-100">

            {/* ================= Desktop - 2 / Main Layout ================= */}
            <div className="box-border flex h-[676px] w-[1300px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px] opacity-100">

                {/* ================= Reusable Left Layout ================= */}
                <InsuranceCarousel
                    width={620}
                    height={636}
                    headerWidth={520}
                />

                {/* ================= Right Layout ================= */}
                <div className="box-border flex h-[636px] w-[620px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-[#FFFFFF] p-[50px] opacity-100">

                    {/* ================= Right Layout - 1st Layout ================= */}
                    <div className="h-[99px] w-[510px] shrink-0 opacity-100">

                        {/* Welcome Back */}
                        <div className="h-[75px] w-[510px] opacity-100">
                            <h1 className="h-[75px] w-[510px] text-center font-['Poppins'] text-[50px] font-semibold capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                Welcome Back
                            </h1>
                        </div>

                        {/* Credential Message */}
                        <div className="h-[24px] w-[510px] opacity-100">
                            <p className="h-[24px] w-[510px] text-center font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                Don't Share your Login Credential
                            </p>
                        </div>

                    </div>

                    {/* ================= Right Layout - 2nd Layout ================= */}
                    <div className="flex h-[387px] w-[520px] flex-col gap-[30px] opacity-100">

                        {/* ================= 1st Inner Layout ================= */}
                        <div className="flex h-[263px] w-[520px] flex-col gap-[30px] opacity-100">

                            {/* ================= Mobile Number Layout ================= */}
                            <div className="flex h-[64px] w-[520px] shrink-0 opacity-100">

                                {/* ================= Country Code Layout ================= */}
                                <div className="box-border flex h-[64px] w-[82px] shrink-0 items-center gap-[10px] rounded-l-[5px] border-l border-t border-b border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px]">

                                    <p className="h-[24px] w-[42px] text-center font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        +880
                                    </p>

                                </div>

                                {/* ================= Mobile Number Input Layout ================= */}
                                <div className="box-border flex h-[64px] w-[438px] shrink-0 items-center gap-[10px] rounded-r-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px] py-[20px]">

                                    <p className="h-[24px] w-[207px] text-center font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        Enter Your Mobile number
                                    </p>

                                </div>

                            </div>

                            {/* ================= Send OTP ================= */}
                            <Link
                                to="/verify-otp"
                                className="box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-[rgba(150,52,30,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(172,62,37,0.4)]"
                            >
                                <span className="h-[24px] w-[77px] font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                                    Send OTP
                                </span>
                            </Link>

                            {/* ================= OR ================= */}
                            <div className="flex h-[14px] w-[520px] shrink-0 items-center gap-[20px] opacity-100">

                                {/* Left Divider */}
                                <div className="h-[1px] w-[230px] shrink-0 border-t border-[rgba(172,62,37,1)]" />

                                {/* OR */}
                                <div className="h-[14px] w-[20px] shrink-0">
                                    <p className="h-[14px] w-[20px] text-center font-['DM_Sans'] text-[14px] font-semibold leading-[14px] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        OR
                                    </p>
                                </div>

                                {/* Right Divider */}
                                <div className="h-[1px] w-[230px] shrink-0 border-t border-[rgba(172,62,37,1)]" />

                            </div>

                            {/* ================= Continue with Google ================= */}
                            <a
                                href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent("http://localhost:5173/auth/google/callback")}&response_type=code&scope=${encodeURIComponent("openid email profile")}&access_type=offline&prompt=select_account`}
                                className="flex h-[52px] w-[520px] shrink-0 opacity-100"
                            >
                                {/* Google Icon */}
                                <div className="box-border flex h-[52px] w-[64px] shrink-0 items-center gap-[10px] rounded-l-[5px] border-l-[0.5px] border-t-[0.5px] border-b-[0.5px] border-[rgba(66,133,244,1)] bg-white px-[20px] py-[14px] opacity-100">
                                    <img
                                        src="/Google Logo.png"
                                        alt="Google"
                                        className="h-[24px] w-[24px] shrink-0 object-contain opacity-100"
                                    />
                                </div>

                                {/* Continue with Google */}
                                <div className="box-border flex h-[52px] w-[456px] shrink-0 items-center justify-center gap-[10px] rounded-r-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(66,133,244,1)] px-[20px] py-[14px] opacity-100 transition-all duration-300 ease-out hover:scale-[1.01] hover:brightness-105 hover:shadow-[0_8px_20px_rgba(66,133,244,0.25)] active:scale-[0.99]">
                                    <p className="h-[24px] w-[175px] shrink-0 text-center font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                                        Continue with Google
                                    </p>
                                </div>
                            </a>

                        </div>

                        {/* ================= Social + Terms ================= */}
                        <div className="flex h-[84px] w-[510px] shrink-0 flex-col gap-[20px] opacity-100">

                            {/* ================= Social Icons Group ================= */}
                            <div className="relative mx-auto h-[22px] w-[133.9619px] shrink-0 opacity-100">

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="absolute left-0 top-[1px] flex h-[19.845px] w-[9.9233px] items-center justify-center opacity-100 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 hover:drop-shadow-[0_4px_10px_rgba(172,62,37,0.35)] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AC3E25]/30"
                                >
                                    <img
                                        src="/facebook.png"
                                        alt=""
                                        className="block h-[19.845px] w-[9.9233px] object-contain"
                                    />
                                </a>

                                {/* Twitter */}
                                <a
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                    className="absolute left-[49.96px] top-[2px] flex h-[17.875px] w-[22px] items-center justify-center opacity-100 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 hover:drop-shadow-[0_4px_10px_rgba(172,62,37,0.35)] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AC3E25]/30"
                                >
                                    <img
                                        src="/twitter.png"
                                        alt=""
                                        className="block h-[17.875px] w-[22px] object-contain"
                                    />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="absolute left-[112px] top-0 flex h-[22px] w-[22px] items-center justify-center opacity-100 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 hover:drop-shadow-[0_4px_10px_rgba(172,62,37,0.35)] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AC3E25]/30"
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
                                <div className="flex h-[42px] w-[510px] flex-col items-center justify-center gap-[6px] font-['Poppins'] text-[14px] font-light leading-[14px] tracking-[0%] text-[rgba(0,0,0,1)]">

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        By Creating An Account Or Logging In, You Agree To{" "}
                                        <Link
                                            to="/terms-of-service"
                                            className="font-['Poppins'] text-[14px] font-bold leading-[14px] tracking-[0%] text-[rgba(172,62,37,1)] underline decoration-solid underline-offset-0 transition-all duration-300 ease-out hover:text-[#7A2114]"
                                        >
                                            Our Terms Of Service
                                        </Link>
                                    </div>

                                    <div className="h-[14px] w-[510px] whitespace-nowrap text-center">
                                        And{" "}
                                        <Link
                                            to="/privacy-policy"
                                            className="font-['Poppins'] text-[14px] font-bold leading-[14px] tracking-[0%] text-[rgba(172,62,37,1)] underline decoration-solid underline-offset-0 transition-all duration-300 ease-out hover:text-[#7A2114]"
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