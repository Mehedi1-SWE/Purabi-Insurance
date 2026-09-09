import { Link } from "react-router";

export default function ClaimsTracker() {
    return (

        <div className="flex h-[499.789px] w-[1440px] shrink-0 items-center justify-between px-[80px] py-[50px]">
            {/* LEFT LAYOUT */}
            <div className="relative h-[399.789px] w-[500px] shrink-0 border-t-[1.17px] border-t-[rgba(172,62,37,0.07)]">
                <img src="/Group 5.png" alt="" className="absolute left-[139.72px] top-0 h-[399.3px] w-[278.69px] object-contain opacity-30" />

                <img src="/ClaimsTracker.png" alt="Family insurance" className="absolute left-0 top-[60px] h-[339.61px] w-[500px] object-contain" />
            </div>

            {/* RIGHT LAYOUT */}
            <div className="box-border flex h-[314px] w-[780px] shrink-0 flex-col gap-[25px] rounded-[20px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,0.1)] px-[40px] py-[50px]">
                {/* LAYOUT 1 */}
                <div className="h-[134px] w-[700px] shrink-0">
                    <p className="font-[Poppins] text-[14px] font-semibold uppercase leading-[100%] text-[#444444]">
                        BE HAPPY TO GET INSURANCE
                    </p>

                    <h2 className="mt-[25px] whitespace-nowrap font-[Poppins] text-[40px] font-bold leading-[100%] text-[#444444]">
                        Start Tracking Your Claims
                    </h2>

                    <p className="mt-[15px] w-[700px] font-[Poppins] text-[16px] font-normal leading-[150%] text-[#555555]">
                        Enjoy peace of mind with hassle-free insurance. Track your claims effortlessly and stay informed every step of the way.
                    </p>
                </div>

                {/* LAYOUT 2 */}
                <div className="flex h-[55px] w-[700px] shrink-0 items-center gap-[20px]">
                    <Link to="/claims" className="flex h-[50px] w-[213px] shrink-0 items-center justify-between rounded-[5px] bg-[#AC3E25] px-[20px] font-[Poppins] text-[16px] font-medium leading-[100%] text-white hover:bg-[#922F1C]">
                        <span>Claim Coverage</span>
                        <span className="text-[22px] leading-none">↗</span>
                    </Link>

                    <div className="flex h-[55px] shrink-0 items-center gap-[14px]">
                        <span className="h-px w-[34px] bg-[#AC3E25]" />

                        <span className="font-[Poppins] text-[12px] font-semibold leading-[100%] text-black">
                            OR
                        </span>

                        <span className="h-px w-[34px] bg-[#AC3E25]" />
                    </div>

                    <p className="whitespace-nowrap font-[Poppins] text-[10px] font-normal leading-[100%] text-[#999999]">
                        Mail Us Anytime:
                        <a href="mailto:purabiinsurance@gmail.com" className="ml-[4px] font-semibold text-[#444444]">
                            purabiinsurance@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>

    );
}