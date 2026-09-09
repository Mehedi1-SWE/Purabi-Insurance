import { Link } from "react-router";
import InsuranceCarousel from "../../components/InsuranceCarousel";


export default function AgentPortal() {
    return (
        <div className="h-[760px] w-[1280px] opacity-100">

            {/* ================= Main Layout ================= */}
            <div className="box-border flex h-[760px] w-[1280px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px] opacity-100">

                {/* ================= Reusable Left Layout ================= */}
                <InsuranceCarousel
                    width={610}
                    height={720}
                    headerWidth={510}
                />

                {/* ================= Right Layout ================= */}
                <div className="box-border flex h-[720px] w-[610px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-[#FFFFFF] p-[50px] opacity-100">

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
                    <div className="flex h-[471px] w-[510px] shrink-0 flex-col justify-between opacity-100">

                        {/* ================= 1st Inner Layout ================= */}
                        <div className="flex h-[289px] w-[510px] shrink-0 flex-col gap-[20px] opacity-100">

                            {/* ================= Layout 1 - Username ================= */}
                            <div className="flex h-[98px] w-[510px] shrink-0 flex-col gap-[10px] opacity-100">

                                {/* Username Label */}
                                <div className="h-[24px] w-[177px] shrink-0 opacity-100">
                                    <p className="h-[24px] w-[177px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        Username or Agent ID
                                    </p>
                                </div>

                                {/* Username Input */}
                                <div className="box-border flex h-[64px] w-[510px] shrink-0 items-center gap-[10px] rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px] py-[20px] opacity-100">
                                    <p className="h-[24px] w-[262px] shrink-0 font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        Enter Your Username or Agent ID
                                    </p>
                                </div>

                            </div>

                            {/* ================= Layout 2 - Password ================= */}
                            <div className="flex h-[98px] w-[510px] shrink-0 flex-col gap-[10px] opacity-100">

                                {/* Password Label */}
                                <div className="h-[24px] w-[167px] shrink-0 opacity-100">
                                    <p className="h-[24px] w-[167px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        Password
                                    </p>
                                </div>

                                {/* Password Input */}
                                <div className="box-border flex h-[64px] w-[510px] shrink-0 items-center gap-[10px] rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-[rgba(68,68,68,0.05)] px-[20px] py-[20px] opacity-100">
                                    <p className="h-[24px] w-[167px] shrink-0 font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(0,0,0,1)]">
                                        Enter Your Password
                                    </p>
                                </div>

                            </div>

                            {/* ================= Layout 3 - Log In ================= */}
                            <Link
                                to="/login"
                                className="box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-[rgba(150,52,30,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(172,62,37,0.4)]"
                            >
                                <span className="h-[24px] w-[47px] font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                                    Log In
                                </span>
                            </Link>

                        </div>

                        {/* ================= 2nd Inner Layout ================= */}
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