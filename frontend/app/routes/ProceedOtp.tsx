import { Link } from "react-router";
import InsuranceCarousel from "../../components/InsuranceCarousel";


export default function ProceedOtp() {
    return (
        <div className="h-[594px] w-[1280px] opacity-100">

            {/* ================= Desktop - 3 / Main Layout ================= */}
            <div className="box-border flex h-[594px] w-[1280px] gap-[20px] rounded-[50px] bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] p-[20px] opacity-100">

                {/* ================= Reusable Left Layout ================= */}
                <InsuranceCarousel
                    width={610}
                    height={554}
                    headerWidth={520}
                />

                {/* ================= Right Layout ================= */}
                <div className="box-border flex h-[554px] w-[610px] shrink-0 flex-col gap-[50px] rounded-[50px] bg-[rgba(255,255,255,1)] p-[50px] opacity-100">

                    {/* ================= Right Layout - 1st Layout ================= */}
                    <div className="h-[99px] w-[510px] shrink-0 opacity-100">

                        {/* ================= OTP Verification ================= */}
                        <div className="h-[75px] w-[510px] opacity-100">
                            <h1 className="h-[75px] w-[510px] text-center font-['Poppins'] text-[50px] font-semibold capitalize leading-[100%] tracking-[0%] text-[#444444]">
                                OTP Verification
                            </h1>
                        </div>

                        {/* ================= OTP Message ================= */}
                        <div className="h-[24px] w-[510px] shrink-0 text-center opacity-100">
                            <p className="h-[24px] w-[510px] font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%]">

                                <span className="font-['Poppins'] text-[16px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,0.5)]">
                                    Enter the OTP sent to{" "}
                                </span>

                                <span className="font-['Poppins'] text-[16px] font-bold capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,1)]">
                                    +880 - 1768-179927{" "}
                                </span>

                                <Link
                                    to="/agent-portal"
                                    className="font-['Poppins'] text-[16px] font-bold capitalize leading-[100%] tracking-[0%] text-[rgba(66,133,244,1)] transition-all duration-300 ease-out hover:brightness-110 hover:drop-shadow-[0_2px_6px_rgba(66,133,244,0.3)] active:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(66,133,244,0.3)]"
                                >
                                    Edit
                                </Link>

                            </p>
                        </div>
                    </div>

                    {/* ================= Right Layout - 2nd Layout ================= */}
                    <div className="flex h-[305px] w-[510px] shrink-0 flex-col gap-[30px] opacity-100">

                        {/* ================= 1st Inner Layout ================= */}
                        <div className="flex h-[243.71044921875px] w-[510px] shrink-0 flex-col gap-[20px] opacity-100">

                            {/* ================= OTP Result Layout ================= */}
                            <div className="flex h-[60px] w-[510px] shrink-0 gap-[20px] opacity-100">

                                {[1, 2, 3, 4, 5, 6].map((number) => (
                                    <div
                                        key={number}
                                        className="box-border flex h-[60px] w-[68.33333587646484px] shrink-0 items-center justify-center gap-[10px] rounded-[5px] border border-[rgba(13,153,0,0.2)] bg-[rgba(13,153,0,0.05)] px-[20px]"
                                    >
                                        <p className="font-['Poppins'] text-[40px] font-medium capitalize leading-[100%] tracking-[0%] text-[rgba(13,153,0,1)]">
                                            {number}
                                        </p>
                                    </div>
                                ))}

                            </div>

                            {/* ================= New Layout ================= */}
                            <div className="flex h-[90.71044921875px] w-[510px] shrink-0 flex-col gap-[15.71px] opacity-100">

                                {/* ================= Enter Your Name ================= */}
                                <div className="h-[24px] w-[510px] shrink-0 opacity-100">
                                    <p className="h-[24px] w-[510px] font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,1)]">
                                        Enter Your Name
                                    </p>
                                </div>

                                {/* ================= Name ================= */}
                                <div className="box-border flex h-[51px] w-[510px] shrink-0 items-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(68,68,68,0.05)] px-[28px] py-[15px] opacity-100">
                                    <div className="h-[21px] w-[454px] shrink-0 opacity-100">
                                        <p className="h-[21px] w-[454px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] tracking-[0%] text-[rgba(68,68,68,1)]">
                                            Mahdi Hasan
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* ================= Proceed Button ================= */}
                            <Link
                                to="/verify-otp"
                                className="box-border flex h-[53px] w-[510px] shrink-0 items-center justify-center gap-[15px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] text-white transition-all duration-500 ease-out hover:scale-[1.02] hover:bg-[rgba(150,52,30,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(172,62,37,0.4)]"
                            >
                                <span className="h-[24px] w-[67px] font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] tracking-[0%] text-[rgba(255,255,255,1)]">
                                    Proceed
                                </span>
                            </Link>

                        </div>

                        {/* ================= Social + Terms Layout ================= */}
                        <div className="flex h-[84px] w-[510px] shrink-0 flex-col gap-[20px] opacity-100">

                            {/* ================= Social Icons Layout ================= */}
                            <div className="flex h-[22px] w-[133.9619140625px] shrink-0 self-center opacity-100">

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="inline-flex h-[22px] w-[9.9233px] items-center justify-center transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 active:scale-100"
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
                                    className="ml-[40.0367px] inline-flex h-[22px] w-[22px] items-center justify-center transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 active:scale-100"
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
                                    className="ml-[40px] inline-flex h-[22px] w-[22px] items-center justify-center transition-all duration-300 ease-out hover:-translate-y-[2px] hover:scale-125 hover:brightness-110 active:scale-100"
                                >
                                    <img
                                        src="/instagram.png"
                                        alt=""
                                        className="block h-[22px] w-[22px] object-contain"
                                    />
                                </a>

                            </div>

                            {/* ================= Terms & Privacy Layout ================= */}
                            <div className="h-[42px] w-[510px] shrink-0 opacity-100">
                                <div className="flex h-[42px] w-[510px] flex-col items-center justify-center gap-[6px] font-['Poppins'] text-[14px] font-light leading-[14px] tracking-[0%] text-[rgba(0,0,0,1)]">

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