import { useState } from "react";

const quoteTypes = [
    { label: "For Self", image: "/For Self.png" },
    { label: "For Couple", image: "/For Couple.png" },
    { label: "For Family", image: "/For Family.png" },
    { label: "For Parents", image: "/For Parents.png" },
];

export default function Quote() {
    const [selectedQuoteType, setSelectedQuoteType] = useState(0);
    return (
        <>
            <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
                <defs>
                    <filter id="quote-selected-icon" colorInterpolationFilters="sRGB">
                        <feComponentTransfer>
                            <feFuncA type="table" tableValues="0 0 1 1" />
                        </feComponentTransfer>
                        <feFlood floodColor="#FFFFFF" result="white" />
                        <feComposite in="white" in2="SourceGraphic" operator="in" />
                    </filter>
                </defs>
            </svg>
            {/* =====================================================
                BANNER
            ====================================================== */}
            <section
                className="h-[331px] w-[1440px] bg-cover bg-center px-[80px] py-[50px]"
                style={{ backgroundImage: "url('/Banner.jpg')" }}
            >
                <div className="flex h-[231px] w-[1280px] flex-col gap-[10px] rounded-[10px] bg-[#FFFFFF1A] px-[20px] py-[30px] backdrop-blur-[10px]">

                    {/* Breadcrumb */}
                    <div className="flex h-[41px] w-[238px] items-center justify-center rounded-[50px] border border-[#FFFFFF80] bg-[#FFFFFF1A] px-[30px] py-[10px] backdrop-blur-[10px]">
                        <div className="flex h-[21px] w-[178px] items-center justify-start font-['Poppins'] text-[14px] font-medium capitalize leading-[100%] text-white">
                            Home &gt; Health Insurance
                        </div>
                    </div>

                    {/* Banner Heading */}
                    <div className="flex h-[120px] w-[768px] items-center justify-start">
                        <h1 className="text-left font-['Poppins'] text-[35px] font-medium capitalize leading-[60px] text-white">
                            Choose The Best Health Insurance Plan For
                            <br />
                            Yourself And Your Family
                        </h1>
                    </div>

                </div>
            </section>


            {/* =====================================================
                QUOTE SECTION
            ====================================================== */}

            <section className="flex h-[913.1313px] w-[1440px] gap-[50px] bg-white px-[80px] py-[80px]">

                {/* LEFT IMAGE */}
                <div className="h-[622px] w-[500px] shrink-0">
                    <img
                        src="/Form Container.png"
                        alt="Health Insurance"
                        className="h-full w-full object-contain"
                    />
                </div>


                {/* FORM CARD */}
                <div className="h-[753.1313px] w-[730px] shrink-0 rounded-[20px] border border-[#0000001A] bg-white p-[50px] shadow-[2px_2px_10px_0px_#00000040]">

                    <div className="flex w-[630px] flex-col">


                        {/* =================================================
                            4 OPTIONS
                        ================================================== */}
                        <div className="flex h-[109px] w-[630px] justify-center">

                            <div className="flex h-[109px] w-[510px] items-start justify-between">
                                {quoteTypes.map((quoteType, index) => (
                                    <button
                                        key={quoteType.label}
                                        type="button"
                                        onClick={() => setSelectedQuoteType(index)}
                                        className="group flex h-[109px] w-[100px] shrink-0 cursor-pointer flex-col items-center gap-[5px] bg-transparent p-0 transition-all duration-300 ease-out hover:-translate-y-[2px]"
                                    >
                                        <div
                                            className={`flex h-[80px] w-[80px] items-center justify-center rounded-full transition-all duration-300 ease-out group-hover:scale-[1.03] ${selectedQuoteType === index ? "bg-[#AC3E25]" : "bg-transparent"
                                                }`}
                                        >
                                            <img
                                                src={quoteType.image}
                                                alt={quoteType.label}
                                                className={`h-[80px] w-[80px] transition-all duration-300 ease-out ${selectedQuoteType === index
                                                    ? "[filter:url(#quote-selected-icon)]"
                                                    : ""
                                                    }`}
                                            />
                                        </div>

                                        <div
                                            className={`flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] transition-colors duration-300 ${selectedQuoteType === index
                                                ? "text-[#AC3E25]"
                                                : "text-[#00000066]"
                                                }`}
                                        >
                                            {quoteType.label}
                                        </div>
                                    </button>
                                ))}
                            </div>

                        </div>


                        {/* =================================================
                            FORM CONTENT
                        ================================================== */}
                        <div className="mt-[50px] flex h-[313.1313px] w-[630px] flex-col gap-[20px]">


                            {/* =================================================
                                FIRST LAYOUT
                            ================================================== */}
                            <div className="flex h-[90.7104px] w-[630px] gap-[10px]">


                                {/* NAME */}
                                <div className="flex h-[90.7104px] w-[310px] shrink-0 flex-col gap-[15.71px]">

                                    <div className="flex h-[24px] w-[310px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                        Name
                                    </div>

                                    <div className="flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]">
                                        <span className="h-[21px] w-[254px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]">
                                            Enter Your Full Name
                                        </span>
                                    </div>

                                </div>


                                {/* MOBILE NUMBER */}
                                <div className="flex h-[90.7104px] w-[310px] shrink-0 flex-col gap-[15.71px]">

                                    <div className="flex h-[24px] w-[310px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                        Mobile Number
                                    </div>

                                    <div className="flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]">
                                        <span className="h-[21px] w-[254px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]">
                                            Enter Your Phone Number
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* =================================================
                                SECOND LAYOUT
                            ================================================== */}
                            <div className="flex h-[93.7104px] w-[630px] flex-col gap-[10px]">

                                {/* YOUR AGE */}
                                <div className="flex h-[24px] w-[630px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                    Your Age
                                </div>


                                {/* SELECT BOX */}
                                <div className="group flex h-[54px] w-[630px] cursor-pointer items-center justify-between rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px] transition-all duration-300 ease-out hover:border-[#AC3E25] hover:bg-[#AC3E2508] hover:shadow-[0_4px_14px_rgba(172,62,37,0.10)]">

                                    <span className="h-[21px] w-[550px] font-['Poppins'] text-[14px] font-normal capitalize leading-[100%] text-[#444444]">
                                        Select
                                    </span>

                                    <svg
                                        width="16"
                                        height="10"
                                        viewBox="0 0 16 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L8 8L15 1"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </div>

                            </div>


                            {/* =================================================
                                THIRD LAYOUT
                            ================================================== */}
                            <div className="flex h-[88.7104px] w-[630px] flex-col gap-[15.71px]">


                                {/* HEALTH COVERAGE TITLE */}
                                <div className="flex h-[24px] w-[630px] items-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                    Health Coverage Amount (৳)
                                </div>


                                {/* 4 BUTTONS */}
                                <div className="flex h-[49px] w-[630px] gap-[16px]">

                                    {/* SHOW ALL PLAN */}
                                    <button className="flex h-[49px] flex-1 cursor-pointer items-center justify-center rounded-[5px] border border-[#AC3E25] bg-[#AC3E251A] shadow-[0_4px_12px_rgba(172,62,37,0.10)] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:shadow-[0_6px_16px_rgba(172,62,37,0.16)]">
                                        <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-[#AC3E25]">
                                            Show all plan
                                        </span>
                                    </button>


                                    {/* UP TO 1 LAC */}
                                    <button className="flex h-[49px] flex-1 cursor-pointer items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-[#AC3E25] hover:bg-[#AC3E2508] hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]">
                                        <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-black">
                                            Up to 1 lac
                                        </span>
                                    </button>


                                    {/* 1 LAC TO 5 LAC */}
                                    <button className="flex h-[49px] flex-1 cursor-pointer items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-[#AC3E25] hover:bg-[#AC3E2508] hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]">
                                        <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-black">
                                            1 Lac to 5 Lac
                                        </span>
                                    </button>


                                    {/* 5 LAC TO 10 LAC */}
                                    <button className="flex h-[49px] flex-1 cursor-pointer items-center justify-center rounded-[5px] border border-[#00000033] bg-[#4444440D] transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-[#AC3E25] hover:bg-[#AC3E2508] hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]">
                                        <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-black">
                                            5 lac to 10 lac
                                        </span>
                                    </button>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            TERMS OF SERVICE
                        ================================================== */}
                        <div className="mt-[50px] flex h-[20px] w-[630px] items-center gap-[15px]">

                            <div className="flex h-[20px] w-[20px] shrink-0 cursor-pointer items-center justify-center rounded-[3px] bg-[#AC3E25] text-[14px] leading-none text-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(172,62,37,0.25)]">
                                −
                            </div>

                            <p className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-black">
                                I agree with the{" "}
                                <span className="font-semibold text-[#AC3E25] underline">
                                    Terms of Service
                                </span>
                            </p>

                        </div>


                        {/* =================================================
                            SEE PLANS BUTTON
                        ================================================== */}
                        <button className="mt-[52px] flex h-[57px] w-[630px] cursor-pointer items-center justify-center gap-[20px] rounded-[4px] bg-[#AC3E25] font-['Poppins'] text-[16px] font-medium leading-[100%] text-white shadow-[0_6px_18px_rgba(172,62,37,0.18)] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(172,62,37,0.26)] active:translate-y-0">

                            See Plans

                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 13L13 3"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M5 3H13V11"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ SECTION
            ====================================================== */}
            <section className="flex h-[722px] w-[1440px] gap-[50px] px-[80px] py-[50px] opacity-100">

                <div className="flex w-[1280px] flex-col items-center">


                    {/* =================================================
                        FAQ TITLE
                    ================================================== */}
                    <div className="flex h-[64px] w-[1280px] items-center justify-center">

                        <h2 className="text-center font-['Poppins'] text-[45px] font-semibold leading-[64px] tracking-[-1.34px] text-[#151515]">
                            Frequently asked questions
                        </h2>

                    </div>


                    {/* =================================================
                        FAQ 8 ITEMS
                    ================================================== */}
                    <div className="mt-[40px] flex h-[508px] w-[792px] flex-col gap-[12px]">


                        {/* FAQ 01 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    What is Health Insurance?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 02 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    Why do you need a Health Insurance?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 03 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    Which Health Insurance policies are available now?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 04 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    Individual Plan vs Family Floater Plan, what is the difference?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 05 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    How to claim for Health Insurance coverage?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 06 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    Which Health Insurance policies are available now?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 07 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    Why is Bimafy the best place to buy Health Insurance policies?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>


                        {/* FAQ 08 */}
                        <div className="flex h-[53px] w-[792px] items-center rounded-[16px] bg-[#F5F5F5] p-[14px]">

                            <div className="flex h-[24px] w-[744px] items-center justify-between">

                                <span className="font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#151515]">
                                    How to contact Bimafy?
                                </span>

                                <span className="text-[28px] font-normal leading-[24px] text-[#151515]">
                                    +
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}