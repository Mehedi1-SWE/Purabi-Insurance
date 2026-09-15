import { useState } from "react";
import { useLocation } from "react-router";

const quoteTypes = [
    {
        label: "For Self",
        image: "/For Self.png",
    },
    {
        label: "For Couple",
        image: "/For Couple.png",
    },
    {
        label: "For Family",
        image: "/For Family.png",
    },
    {
        label: "For Parents",
        image: "/For Parents.png",
    },
];

const coverageOptions = [
    "Show all plan",
    "Up to 1 lac",
    "1 Lac to 5 Lac",
    "5 Lac to 10 Lac",
];

const ageOptions = Array.from(
    { length: 83 },
    (_, index) => index + 18
);

export default function Quote() {
    const location = useLocation();

    /*
     * Name + Mobile PriceCalculator.tsx থেকে আসবে
     */
    const {
        name = "",
        mobile = "",
        category = "Health",
    } = location.state || {};

    /*
     * Quote Type
     * 0 = Self
     * 1 = Couple
     * 2 = Family
     * 3 = Parents
     */
    const [selectedQuoteType, setSelectedQuoteType] =
        useState(0);

    /*
     * Self / Couple / Family
     */
    const [yourAge, setYourAge] = useState("");

    /*
     * Couple / Family
     */
    const [spouseAge, setSpouseAge] = useState("");

    /*
     * Parents
     */
    const [fatherAge, setFatherAge] = useState("");
    const [motherAge, setMotherAge] = useState("");

    /*
     * Family
     */
    const [childrenCount, setChildrenCount] =
        useState("0");

    const [childrenAges, setChildrenAges] =
        useState<string[]>([]);

    /*
     * Coverage
     */
    const [selectedCoverage, setSelectedCoverage] =
        useState("Show all plan");

    /*
     * Terms
     */
    const [agreedToTerms, setAgreedToTerms] =
        useState(false);

    /*
     * Plans
     */
    const [showPlans, setShowPlans] =
        useState(false);

    /*
     * Change Self / Couple / Family / Parents
     */
    const handleQuoteTypeChange = (
        index: number
    ) => {
        setSelectedQuoteType(index);

        /*
         * Reset member information
         * when quote type changes
         */
        setYourAge("");
        setSpouseAge("");
        setFatherAge("");
        setMotherAge("");

        setChildrenCount("0");
        setChildrenAges([]);

        setShowPlans(false);
    };

    /*
     * Family → Number of Children
     */
    const handleChildrenCountChange = (
        value: string
    ) => {
        setChildrenCount(value);

        const count = Number(value);

        setChildrenAges(
            Array.from(
                { length: count },
                () => ""
            )
        );

        setShowPlans(false);
    };

    /*
     * Family → Child Age
     */
    const handleChildAgeChange = (
        index: number,
        value: string
    ) => {
        setChildrenAges((previous) =>
            previous.map(
                (age, childIndex) =>
                    childIndex === index
                        ? value
                        : age
            )
        );

        setShowPlans(false);
    };

    /*
     * Form Validation
     */
    const isFormValid = () => {
        /*
         * Terms must be accepted
         */
        if (!agreedToTerms) {
            return false;
        }

        /*
         * Self
         */
        if (selectedQuoteType === 0) {
            return Boolean(yourAge);
        }

        /*
         * Couple
         */
        if (selectedQuoteType === 1) {
            return Boolean(
                yourAge &&
                spouseAge
            );
        }

        /*
         * Family
         */
        if (selectedQuoteType === 2) {
            if (
                !yourAge ||
                !spouseAge
            ) {
                return false;
            }

            if (
                childrenAges.some(
                    (age) => !age
                )
            ) {
                return false;
            }

            return true;
        }

        /*
         * Parents
         */
        if (selectedQuoteType === 3) {
            return Boolean(
                fatherAge &&
                motherAge
            );
        }

        return false;
    };

    /*
     * See Plans
     */
    const handleSeePlans = () => {
        if (!isFormValid()) {
            return;
        }

        setShowPlans(true);
    };

    /*
     * Current Quote Type
     */
    const currentQuoteType =
        quoteTypes[selectedQuoteType]?.label ||
        "For Self";

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

                    <div className="flex h-[41px] w-[238px] items-center justify-center rounded-[50px] border border-[#FFFFFF80] bg-[#FFFFFF1A] px-[30px] py-[10px] backdrop-blur-[10px]">

                        <div className="flex h-[21px] w-[178px] items-center justify-start font-['Poppins'] text-[14px] font-medium capitalize leading-[100%] text-white">
                            Home &gt; {category} Insurance
                        </div>

                    </div>

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

            <section className="flex min-h-[913px] w-[1440px] gap-[50px] bg-white px-[80px] py-[80px]">

                {/* =================================================
                    LEFT IMAGE
                ================================================== */}

                <div className="flex h-[622px] w-[500px] shrink-0 items-center justify-center">

                    <img
                        src="/Form Container.png"
                        alt="Health Insurance"
                        className="h-full w-full object-contain"
                    />

                </div>

                {/* =================================================
                    FORM CARD
                ================================================== */}

                <div className="w-[730px] shrink-0 rounded-[20px] border border-[#0000001A] bg-white p-[50px] shadow-[2px_2px_10px_0px_#00000040]">

                    <div className="flex w-[630px] flex-col">

                        {/* =================================================
                            QUOTE TYPE
                        ================================================== */}

                        <div className="flex h-[109px] w-[630px] justify-center">

                            <div className="flex h-[109px] w-[510px] items-start justify-between">

                                {quoteTypes.map(
                                    (quoteType, index) => (
                                        <button
                                            key={
                                                quoteType.label
                                            }
                                            type="button"
                                            onClick={() =>
                                                handleQuoteTypeChange(
                                                    index
                                                )
                                            }
                                            className="group flex h-[109px] w-[100px] shrink-0 cursor-pointer flex-col items-center gap-[5px] bg-transparent p-0 transition-all duration-300 ease-out hover:-translate-y-[2px]"
                                        >

                                            {/* =========================
                                                ICON CIRCLE
                                            ========================== */}

                                            <div
                                                className={`flex h-[80px] w-[80px] items-center justify-center rounded-full transition-all duration-300 ease-out ${selectedQuoteType ===
                                                    index
                                                    ? "bg-[#AC3E25] shadow-[0_6px_18px_rgba(172,62,37,0.20)]"
                                                    : "bg-[#AC3E2512]"
                                                    }`}
                                            >

                                                <img
                                                    src={
                                                        quoteType.image
                                                    }
                                                    alt={
                                                        quoteType.label
                                                    }
                                                    className={`h-[80px] w-[80px] object-contain transition-all duration-300 ease-out ${selectedQuoteType ===
                                                        index
                                                        ? "brightness-0 invert"
                                                        : ""
                                                        }`}
                                                />

                                            </div>

                                            {/* =========================
                                                LABEL
                                            ========================== */}

                                            <div
                                                className={`flex h-[24px] w-[100px] items-center justify-center text-center font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] transition-colors duration-300 ${selectedQuoteType ===
                                                    index
                                                    ? "text-[#AC3E25]"
                                                    : "text-[#00000066]"
                                                    }`}
                                            >
                                                {
                                                    quoteType.label
                                                }
                                            </div>

                                        </button>
                                    )
                                )}

                            </div>

                        </div>

                        {/* =================================================
                            FORM CONTENT
                        ================================================== */}

                        <div className="mt-[50px] flex w-[630px] flex-col gap-[20px]">

                            {/* =================================================
                                NAME + MOBILE
                            ================================================== */}

                            <div className="flex w-[630px] gap-[10px]">

                                {/* Name */}

                                <div className="flex w-[310px] shrink-0 flex-col gap-[15.71px]">

                                    <div className="font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                        Name
                                    </div>

                                    <div className="flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]">

                                        <span className="w-[254px] overflow-hidden text-ellipsis whitespace-nowrap font-['Poppins'] text-[14px] font-normal leading-[100%] text-[#444444]">
                                            {name ||
                                                "Enter Your Full Name"}
                                        </span>

                                    </div>

                                </div>

                                {/* Mobile */}

                                <div className="flex w-[310px] shrink-0 flex-col gap-[15.71px]">

                                    <div className="font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                        Mobile Number
                                    </div>

                                    <div className="flex h-[51px] w-[310px] items-center rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] py-[15px]">

                                        <span className="w-[254px] overflow-hidden text-ellipsis whitespace-nowrap font-['Poppins'] text-[14px] font-normal leading-[100%] text-[#444444]">
                                            {mobile ||
                                                "Enter Your Phone Number"}
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* =================================================
                                SELF
                            ================================================== */}

                            {selectedQuoteType === 0 && (
                                <div className="flex w-[630px] flex-col gap-[15.71px]">

                                    <label className="font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                        Your Age
                                    </label>

                                    <select
                                        value={yourAge}
                                        onChange={(e) =>
                                            setYourAge(
                                                e.target.value
                                            )
                                        }
                                        className="h-[54px] w-[630px] cursor-pointer appearance-none rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                    >

                                        <option value="">
                                            Select Your Age
                                        </option>

                                        {ageOptions.map(
                                            (age) => (
                                                <option
                                                    key={age}
                                                    value={age}
                                                >
                                                    {age} Years
                                                </option>
                                            )
                                        )}

                                    </select>

                                </div>
                            )}

                            {/* =================================================
                                COUPLE
                            ================================================== */}

                            {selectedQuoteType === 1 && (
                                <div className="flex w-[630px] gap-[10px]">

                                    {/* Your Age */}

                                    <div className="flex w-[310px] flex-col gap-[15.71px]">

                                        <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                            Your Age
                                        </label>

                                        <select
                                            value={yourAge}
                                            onChange={(e) =>
                                                setYourAge(
                                                    e.target.value
                                                )
                                            }
                                            className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                        >

                                            <option value="">
                                                Select Your Age
                                            </option>

                                            {ageOptions.map(
                                                (age) => (
                                                    <option
                                                        key={age}
                                                        value={age}
                                                    >
                                                        {age} Years
                                                    </option>
                                                )
                                            )}

                                        </select>

                                    </div>

                                    {/* Spouse Age */}

                                    <div className="flex w-[310px] flex-col gap-[15.71px]">

                                        <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                            Spouse Age
                                        </label>

                                        <select
                                            value={spouseAge}
                                            onChange={(e) =>
                                                setSpouseAge(
                                                    e.target.value
                                                )
                                            }
                                            className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                        >

                                            <option value="">
                                                Select Spouse Age
                                            </option>

                                            {ageOptions.map(
                                                (age) => (
                                                    <option
                                                        key={age}
                                                        value={age}
                                                    >
                                                        {age} Years
                                                    </option>
                                                )
                                            )}

                                        </select>

                                    </div>

                                </div>
                            )}

                            {/* =================================================
                                FAMILY
                            ================================================== */}

                            {selectedQuoteType === 2 && (
                                <div className="flex w-[630px] flex-col gap-[20px]">

                                    {/* Your Age + Spouse Age */}

                                    <div className="flex w-[630px] gap-[10px]">

                                        <div className="flex w-[310px] flex-col gap-[15.71px]">

                                            <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                                Your Age
                                            </label>

                                            <select
                                                value={yourAge}
                                                onChange={(e) =>
                                                    setYourAge(
                                                        e.target.value
                                                    )
                                                }
                                                className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                            >

                                                <option value="">
                                                    Select Your Age
                                                </option>

                                                {ageOptions.map(
                                                    (age) => (
                                                        <option
                                                            key={age}
                                                            value={age}
                                                        >
                                                            {age} Years
                                                        </option>
                                                    )
                                                )}

                                            </select>

                                        </div>

                                        <div className="flex w-[310px] flex-col gap-[15.71px]">

                                            <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                                Spouse Age
                                            </label>

                                            <select
                                                value={spouseAge}
                                                onChange={(e) =>
                                                    setSpouseAge(
                                                        e.target.value
                                                    )
                                                }
                                                className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                            >

                                                <option value="">
                                                    Select Spouse Age
                                                </option>

                                                {ageOptions.map(
                                                    (age) => (
                                                        <option
                                                            key={age}
                                                            value={age}
                                                        >
                                                            {age} Years
                                                        </option>
                                                    )
                                                )}

                                            </select>

                                        </div>

                                    </div>

                                    {/* Number of Children */}

                                    <div className="flex w-[630px] flex-col gap-[15.71px]">

                                        <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                            Number of Children
                                        </label>

                                        <select
                                            value={childrenCount}
                                            onChange={(e) =>
                                                handleChildrenCountChange(
                                                    e.target.value
                                                )
                                            }
                                            className="h-[54px] w-[630px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                        >

                                            <option value="0">
                                                No Children
                                            </option>

                                            <option value="1">
                                                1 Child
                                            </option>

                                            <option value="2">
                                                2 Children
                                            </option>

                                            <option value="3">
                                                3 Children
                                            </option>

                                            <option value="4">
                                                4 Children
                                            </option>

                                        </select>

                                    </div>

                                    {/* Child Ages */}

                                    {childrenAges.map(
                                        (age, index) => (
                                            <div
                                                key={index}
                                                className="flex w-[310px] flex-col gap-[15.71px]"
                                            >

                                                <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                                    Child{" "}
                                                    {index + 1}{" "}
                                                    Age
                                                </label>

                                                <select
                                                    value={age}
                                                    onChange={(e) =>
                                                        handleChildAgeChange(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                                >

                                                    <option value="">
                                                        Select Child Age
                                                    </option>

                                                    {Array.from(
                                                        {
                                                            length: 18,
                                                        },
                                                        (
                                                            _,
                                                            ageIndex
                                                        ) =>
                                                            ageIndex +
                                                            1
                                                    ).map(
                                                        (
                                                            childAge
                                                        ) => (
                                                            <option
                                                                key={
                                                                    childAge
                                                                }
                                                                value={
                                                                    childAge
                                                                }
                                                            >
                                                                {
                                                                    childAge
                                                                }{" "}
                                                                Years
                                                            </option>
                                                        )
                                                    )}

                                                </select>

                                            </div>
                                        )
                                    )}

                                </div>
                            )}

                            {/* =================================================
                                PARENTS
                            ================================================== */}

                            {selectedQuoteType === 3 && (
                                <div className="flex w-[630px] gap-[10px]">

                                    {/* Father */}

                                    <div className="flex w-[310px] flex-col gap-[15.71px]">

                                        <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                            Father's Age
                                        </label>

                                        <select
                                            value={fatherAge}
                                            onChange={(e) =>
                                                setFatherAge(
                                                    e.target.value
                                                )
                                            }
                                            className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                        >

                                            <option value="">
                                                Select Father's Age
                                            </option>

                                            {ageOptions.map(
                                                (age) => (
                                                    <option
                                                        key={age}
                                                        value={age}
                                                    >
                                                        {age} Years
                                                    </option>
                                                )
                                            )}

                                        </select>

                                    </div>

                                    {/* Mother */}

                                    <div className="flex w-[310px] flex-col gap-[15.71px]">

                                        <label className="font-['Poppins'] text-[16px] font-medium text-[#44444480]">
                                            Mother's Age
                                        </label>

                                        <select
                                            value={motherAge}
                                            onChange={(e) =>
                                                setMotherAge(
                                                    e.target.value
                                                )
                                            }
                                            className="h-[54px] w-[310px] cursor-pointer rounded-[5px] border border-[#00000033] bg-[#4444440D] px-[28px] font-['Poppins'] text-[14px] text-[#444444] outline-none transition-all duration-300 hover:border-[#AC3E25] focus:border-[#AC3E25]"
                                        >

                                            <option value="">
                                                Select Mother's Age
                                            </option>

                                            {ageOptions.map(
                                                (age) => (
                                                    <option
                                                        key={age}
                                                        value={age}
                                                    >
                                                        {age} Years
                                                    </option>
                                                )
                                            )}

                                        </select>

                                    </div>

                                </div>
                            )}

                            {/* =================================================
                                HEALTH COVERAGE
                            ================================================== */}

                            <div className="flex w-[630px] flex-col gap-[15.71px]">

                                <div className="font-['Poppins'] text-[16px] font-medium capitalize leading-[100%] text-[#44444480]">
                                    Health Coverage Amount (৳)
                                </div>

                                <div className="flex h-[49px] w-[630px] gap-[16px]">

                                    {coverageOptions.map(
                                        (coverage) => (
                                            <button
                                                key={coverage}
                                                type="button"
                                                onClick={() =>
                                                    setSelectedCoverage(
                                                        coverage
                                                    )
                                                }
                                                className={`flex h-[49px] flex-1 cursor-pointer items-center justify-center rounded-[5px] border transition-all duration-300 ease-out ${selectedCoverage ===
                                                    coverage
                                                    ? "border-[#AC3E25] bg-[#AC3E251A] text-[#AC3E25] shadow-[0_4px_12px_rgba(172,62,37,0.10)]"
                                                    : "border-[#00000033] bg-[#4444440D] text-black hover:-translate-y-[1px] hover:border-[#AC3E25] hover:bg-[#AC3E2508]"
                                                    }`}
                                            >
                                                <span className="font-['Poppins'] text-[14px] font-normal leading-[100%]">
                                                    {coverage}
                                                </span>
                                            </button>
                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            TERMS OF SERVICE
                        ================================================== */}

                        <button
                            type="button"
                            onClick={() =>
                                setAgreedToTerms(
                                    !agreedToTerms
                                )
                            }
                            className="mt-[35px] flex h-[20px] w-fit cursor-pointer items-center gap-[15px]"
                        >

                            <span
                                className={`flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[3px] border transition-all duration-300 ${agreedToTerms
                                    ? "border-[#AC3E25] bg-[#AC3E25]"
                                    : "border-[#00000033] bg-white"
                                    }`}
                            >

                                {agreedToTerms && (
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                    >
                                        <path
                                            d="M2 6.5L5 9.5L11 3"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}

                            </span>

                            <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] text-black">
                                I agree with the{" "}
                                <span className="font-semibold text-[#AC3E25] underline">
                                    Terms of Service
                                </span>
                            </span>

                        </button>

                        {/* =================================================
                            SEE PLANS BUTTON
                        ================================================== */}

                        <button
                            type="button"
                            disabled={!isFormValid()}
                            onClick={handleSeePlans}
                            className={`mt-[30px] flex h-[57px] w-[630px] items-center justify-center gap-[20px] rounded-[4px] font-['Poppins'] text-[16px] font-medium leading-[100%] text-white transition-all duration-300 ${isFormValid()
                                ? "cursor-pointer bg-[#AC3E25] shadow-[0_6px_18px_rgba(172,62,37,0.18)] hover:-translate-y-[2px] hover:bg-[#922F1C] hover:shadow-[0_10px_24px_rgba(172,62,37,0.26)]"
                                : "cursor-not-allowed bg-[#AC3E2580]"
                                }`}
                        >

                            <span>
                                See Plans
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

                        {/* =================================================
                            PLAN RESULTS
                        ================================================== */}

                        {showPlans && (
                            <div className="mt-[30px] w-[630px] overflow-hidden rounded-[15px] border border-[#AC3E2533] bg-[linear-gradient(180deg,#FFFDFC_0%,#F7ECEA_100%)] p-[24px] shadow-[0_8px_25px_rgba(172,62,37,0.12)]">

                                {/* Header */}

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="font-['Poppins'] text-[12px] font-medium uppercase tracking-[1px] text-[#AC3E25]">
                                            Recommended Plans
                                        </p>

                                        <h3 className="mt-[5px] font-['Poppins'] text-[22px] font-semibold text-[#151515]">
                                            Plans for{" "}
                                            {currentQuoteType}
                                        </h3>

                                    </div>

                                    <div className="rounded-full bg-[#AC3E251A] px-[14px] py-[7px] font-['Poppins'] text-[12px] font-medium text-[#AC3E25]">
                                        {selectedCoverage}
                                    </div>

                                </div>

                                {/* Plans */}

                                <div className="mt-[20px] grid grid-cols-2 gap-[12px]">

                                    {[1, 2].map(
                                        (plan) => (
                                            <div
                                                key={plan}
                                                className="rounded-[10px] border border-[#0000001A] bg-white p-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_18px_rgba(0,0,0,0.10)]"
                                            >

                                                <p className="font-['Poppins'] text-[12px] font-medium uppercase tracking-[0.8px] text-[#44444480]">
                                                    Health Plan
                                                </p>

                                                <h4 className="mt-[6px] font-['Poppins'] text-[18px] font-semibold text-[#151515]">
                                                    Plan{" "}
                                                    {plan}
                                                </h4>

                                                <div className="mt-[14px] space-y-[7px]">

                                                    <p className="font-['Poppins'] text-[13px] text-[#444444]">
                                                        ✓ Hospitalization
                                                    </p>

                                                    <p className="font-['Poppins'] text-[13px] text-[#444444]">
                                                        ✓ Medical coverage
                                                    </p>

                                                    <p className="font-['Poppins'] text-[13px] text-[#444444]">
                                                        ✓ Family protection
                                                    </p>

                                                </div>

                                                <button
                                                    type="button"
                                                    className="mt-[16px] h-[42px] w-full rounded-[5px] bg-[#AC3E25] font-['Poppins'] text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#922F1C]"
                                                >
                                                    Choose Plan
                                                </button>

                                            </div>
                                        )
                                    )}

                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </section>
        </>
    );
}