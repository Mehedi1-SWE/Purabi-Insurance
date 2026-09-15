import { useLocation, useNavigate } from "react-router";

type QuoteData = {
    name?: string;
    mobile?: string;
    category?: string;
    quoteType?: string;

    yourAge?: string;
    spouseAge?: string;

    fatherAge?: string;
    motherAge?: string;

    childrenCount?: string;
    childrenAges?: string[];

    coverage?: string;
};

const plans = [
    {
        name: "Essential",
        price: "৳ 8,500",
        coverage: "Up to ৳1 Lac",
        description:
            "Essential protection for your everyday healthcare needs.",
        benefits: [
            "Hospitalization coverage",
            "Emergency medical expenses",
            "Doctor consultation",
            "24/7 customer support",
        ],
    },
    {
        name: "Premium",
        price: "৳ 15,500",
        coverage: "Up to ৳5 Lac",
        description:
            "Enhanced protection with broader healthcare coverage.",
        popular: true,
        benefits: [
            "Hospitalization coverage",
            "Emergency medical expenses",
            "Specialist consultation",
            "Ambulance coverage",
            "Priority customer support",
        ],
    },
    {
        name: "Elite",
        price: "৳ 25,000",
        coverage: "Up to ৳10 Lac",
        description:
            "Comprehensive protection for maximum peace of mind.",
        benefits: [
            "Higher hospitalization coverage",
            "Advanced medical treatment",
            "Specialist consultation",
            "Ambulance coverage",
            "Dedicated support",
        ],
    },
];

export default function HealthPlans() {
    const location = useLocation();
    const navigate = useNavigate();

    const quoteData =
        (location.state as QuoteData | null) || {};

    const {
        name = "",
        mobile = "",
        category = "Health",
        quoteType = "For Self",

        yourAge = "",
        spouseAge = "",

        fatherAge = "",
        motherAge = "",

        childrenCount = "0",
        childrenAges = [],

        coverage = "Show all plan",
    } = quoteData;

    const handleChoosePlan = (
        planName: string,
        planPrice: string
    ) => {
        navigate("/personal-information", {
            state: {
                ...quoteData,
                selectedPlan: planName,
                planPrice,
            },
        });
    };

    const getMemberDetails = () => {
        if (quoteType === "For Self") {
            return `Age ${yourAge || "-"}`;
        }

        if (quoteType === "For Couple") {
            return `Ages ${yourAge || "-"} & ${spouseAge || "-"}`;
        }

        if (quoteType === "For Parents") {
            return `Parents: ${fatherAge || "-"} & ${motherAge || "-"}`;
        }

        if (quoteType === "For Family") {
            return `${2 + Number(childrenCount)} Members`;
        }

        return "-";
    };

    return (
        <>
            {/* =====================================================
                BANNER
            ====================================================== */}

            <section
                className="h-[331px] w-[1440px] bg-cover bg-center px-[80px] py-[50px]"
                style={{
                    backgroundImage:
                        "url('/Banner.jpg')",
                }}
            >
                <div className="flex h-[231px] w-[1280px] flex-col gap-[10px] rounded-[10px] bg-[#FFFFFF1A] px-[20px] py-[30px] backdrop-blur-[10px]">

                    <div className="flex h-[41px] w-fit items-center justify-center rounded-[50px] border border-[#FFFFFF80] bg-[#FFFFFF1A] px-[30px] py-[10px] backdrop-blur-[10px]">

                        <span className="font-['Poppins'] text-[14px] font-medium leading-[100%] text-white">
                            Home &gt; {category} Insurance &gt; Plans
                        </span>

                    </div>

                    <div className="flex h-[120px] w-[800px] items-center">

                        <h1 className="font-['Poppins'] text-[35px] font-medium capitalize leading-[60px] text-white">
                            Choose The Right Health
                            <br />
                            Insurance Plan For You
                        </h1>

                    </div>

                </div>
            </section>

            {/* =====================================================
                PLANS
            ====================================================== */}

            <section className="min-h-[850px] w-[1440px] bg-[#FFFDFC] px-[80px] py-[70px]">

                {/* Header */}

                <div className="flex w-[1280px] items-end justify-between">

                    <div className="flex flex-col gap-[10px]">

                        <span className="font-['Poppins'] text-[13px] font-medium uppercase tracking-[1.5px] text-[#AC3E25]">
                            Recommended Plans
                        </span>

                        <h2 className="font-['Poppins'] text-[32px] font-semibold leading-[120%] text-[#151515]">
                            Health Insurance Plans
                        </h2>

                        <p className="w-[600px] font-['Poppins'] text-[14px] leading-[160%] text-[#44444480]">
                            Choose the plan that gives you the
                            right balance of protection, coverage
                            and value.
                        </p>

                    </div>

                    <div className="flex h-[78px] w-[350px] items-center justify-between rounded-[10px] border border-[#AC3E2533] bg-[#AC3E2508] px-[24px]">

                        <div className="flex flex-col gap-[6px]">

                            <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[1px] text-[#44444466]">
                                Selected For
                            </span>

                            <span className="font-['Poppins'] text-[16px] font-semibold text-[#151515]">
                                {quoteType}
                            </span>

                        </div>

                        <div className="h-[40px] w-[1px] bg-[#AC3E2533]" />

                        <div className="flex flex-col items-end gap-[6px]">

                            <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[1px] text-[#44444466]">
                                Coverage
                            </span>

                            <span className="font-['Poppins'] text-[13px] font-medium text-[#AC3E25]">
                                {coverage}
                            </span>

                        </div>

                    </div>

                </div>

                {/* =================================================
                    USER SUMMARY
                ================================================== */}

                <div className="mt-[35px] flex h-[82px] w-[1280px] items-center rounded-[10px] border border-[#00000014] bg-white px-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.04)]">

                    <div className="flex w-[250px] flex-col gap-[6px]">

                        <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[0.8px] text-[#44444466]">
                            Applicant
                        </span>

                        <span className="font-['Poppins'] text-[14px] font-medium text-[#151515]">
                            {name || "Applicant"}
                        </span>

                    </div>

                    <div className="h-[40px] w-[1px] bg-[#00000014]" />

                    <div className="flex w-[250px] flex-col gap-[6px] pl-[30px]">

                        <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[0.8px] text-[#44444466]">
                            Mobile Number
                        </span>

                        <span className="font-['Poppins'] text-[14px] font-medium text-[#151515]">
                            {mobile || "Not provided"}
                        </span>

                    </div>

                    <div className="h-[40px] w-[1px] bg-[#00000014]" />

                    <div className="flex w-[300px] flex-col gap-[6px] pl-[30px]">

                        <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[0.8px] text-[#44444466]">
                            Member Details
                        </span>

                        <span className="font-['Poppins'] text-[14px] font-medium text-[#151515]">
                            {getMemberDetails()}
                        </span>

                    </div>

                    <div className="h-[40px] w-[1px] bg-[#00000014]" />

                    <div className="flex flex-col gap-[6px] pl-[30px]">

                        <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[0.8px] text-[#44444466]">
                            Insurance
                        </span>

                        <span className="font-['Poppins'] text-[14px] font-medium text-[#AC3E25]">
                            {category} Insurance
                        </span>

                    </div>

                </div>

                {/* =================================================
                    PLAN CARDS
                ================================================== */}

                <div className="mt-[40px] grid w-[1280px] grid-cols-3 gap-[24px]">

                    {plans.map((plan) => (

                        <div
                            key={plan.name}
                            className={`relative flex min-h-[480px] w-[410px] flex-col rounded-[15px] border bg-white p-[30px] transition-all duration-300 ${plan.popular
                                ? "border-[#AC3E25] shadow-[0_10px_30px_rgba(172,62,37,0.14)] hover:-translate-y-[5px] hover:shadow-[0_16px_35px_rgba(172,62,37,0.20)]"
                                : "border-[#0000001A] shadow-[0_5px_18px_rgba(0,0,0,0.05)] hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.10)]"
                                }`}
                        >

                            {plan.popular && (
                                <div className="absolute right-[25px] top-[25px] rounded-full bg-[#AC3E25] px-[14px] py-[7px]">

                                    <span className="font-['Poppins'] text-[10px] font-medium uppercase tracking-[0.8px] text-white">
                                        Most Popular
                                    </span>

                                </div>
                            )}

                            <span className="font-['Poppins'] text-[12px] font-medium uppercase tracking-[1px] text-[#AC3E25]">
                                Health Plan
                            </span>

                            <h3 className="mt-[8px] font-['Poppins'] text-[26px] font-semibold text-[#151515]">
                                {plan.name}
                            </h3>

                            <p className="mt-[10px] min-h-[45px] font-['Poppins'] text-[13px] leading-[160%] text-[#44444480]">
                                {plan.description}
                            </p>

                            {/* Price */}

                            <div className="mt-[25px] rounded-[8px] bg-[#F7ECEA] px-[20px] py-[16px]">

                                <span className="font-['Poppins'] text-[11px] font-medium uppercase tracking-[0.7px] text-[#44444480]">
                                    Starting From
                                </span>

                                <div className="mt-[5px] flex items-end gap-[5px]">

                                    <span className="font-['Poppins'] text-[27px] font-semibold leading-[100%] text-[#AC3E25]">
                                        {plan.price}
                                    </span>

                                    <span className="font-['Poppins'] text-[11px] text-[#44444480]">
                                        / year
                                    </span>

                                </div>

                            </div>

                            {/* Coverage */}

                            <div className="mt-[18px] flex items-center justify-between border-b border-[#00000012] pb-[15px]">

                                <span className="font-['Poppins'] text-[13px] text-[#44444480]">
                                    Coverage
                                </span>

                                <span className="font-['Poppins'] text-[13px] font-semibold text-[#151515]">
                                    {plan.coverage}
                                </span>

                            </div>

                            {/* Benefits */}

                            <div className="mt-[20px] flex flex-col gap-[11px]">

                                {plan.benefits.map(
                                    (benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-center gap-[10px]"
                                        >

                                            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#AC3E2512]">

                                                <svg
                                                    width="11"
                                                    height="11"
                                                    viewBox="0 0 11 11"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M2 5.5L4.2 7.5L9 2.5"
                                                        stroke="#AC3E25"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>

                                            </span>

                                            <span className="font-['Poppins'] text-[12px] text-[#444444]">
                                                {benefit}
                                            </span>

                                        </div>
                                    )
                                )}

                            </div>

                            {/* Choose Plan */}

                            <button
                                type="button"
                                onClick={() =>
                                    handleChoosePlan(
                                        plan.name,
                                        plan.price
                                    )
                                }
                                className={`mt-auto flex h-[50px] w-full items-center justify-center gap-[12px] rounded-[5px] font-['Poppins'] text-[14px] font-medium text-white transition-all duration-300 ${plan.popular
                                    ? "bg-[#AC3E25] hover:bg-[#922F1C]"
                                    : "bg-[#7E2F20] hover:bg-[#AC3E25]"
                                    }`}
                            >
                                <span>
                                    Choose Plan
                                </span>

                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
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

                    ))}

                </div>

                <p className="mt-[30px] text-center font-['Poppins'] text-[11px] text-[#44444466]">
                    Premium and coverage shown here are sample
                    values for the current UI implementation.
                </p>

            </section>
        </>
    );
}