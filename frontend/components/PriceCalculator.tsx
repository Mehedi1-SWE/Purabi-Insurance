import { useState } from "react";
import { Link } from "react-router";

export default function PriceCalculator() {
    const [selectedCategory, setSelectedCategory] = useState("Health");

    const categories = [
        { name: "Health", image: "/Health.png", width: "w-[100px]" },
        { name: "Car", image: "/Car.png", width: "w-[100px]" },
        { name: "Travel", image: "/Travel.png", width: "w-[100px]" },
        { name: "Life", image: "/Life.png", width: "w-[100px]" },
        { name: "Marine", image: "/Marine.png", width: "w-[100px]" },
        { name: "Engineering", image: "/Engineering.png", width: "w-[108px]" },
        { name: "More", image: "/More.png", width: "w-[100px]" },
    ];

    return (
        <section className="box-border flex h-[487.7104px] w-[1440px] min-w-[1280px] max-w-[1920px] flex-col gap-[10px] bg-[#F7ECEA] px-[80px] py-[100px]">

            {/* Inner Layout: 1280 × 287.7104 */}
            <div className="box-border flex h-[287.7104px] w-[1280px] shrink-0 flex-col gap-[50px]">

                {/* Layout 1: 948 × 132 */}
                <div className="flex h-[132px] w-[948px] shrink-0 gap-[40px]">

                    {categories.map((category) => (
                        <button
                            key={category.name}
                            type="button"
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex h-[132px] ${category.width} shrink-0 items-center justify-center transition ${selectedCategory === category.name
                                ? "scale-105"
                                : "opacity-60 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-[132px] w-full object-contain"
                            />
                        </button>
                    ))}

                </div>

                {/* Layout 2: 1154.006 × 105.7104 */}
                <div className="flex h-[105.7104px] w-[1154.006px] shrink-0 gap-[31.42px]">

                    {/* Child Layout 1 */}
                    <div className="flex h-[105.7104px] w-[424.182px] shrink-0 flex-col gap-[15.71px]">

                        <label
                            htmlFor="name"
                            className="h-[33px] w-[424.182px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter Your Full Name"
                            className="box-border h-[57px] w-[424.182px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] text-black outline-none placeholder:text-[#44444480] focus:border-[#AC3E25]"
                        />

                    </div>

                    {/* Child Layout 2 */}
                    <div className="flex h-[105.7104px] w-[424.182px] shrink-0 flex-col gap-[15.71px]">

                        <label
                            htmlFor="mobile"
                            className="h-[33px] w-[424.182px] font-[Poppins] text-[21.95px] font-bold capitalize leading-[100%] text-black"
                        >
                            Mobile Number
                        </label>

                        <input
                            id="mobile"
                            type="tel"
                            name="mobile"
                            placeholder="Enter Your Valid Phone Number"
                            className="box-border h-[57px] w-[424.182px] rounded-[5px] border border-[#0000001A] bg-white px-[24px] font-[Poppins] text-[18px] font-normal italic leading-[100%] text-black outline-none placeholder:text-[#44444480] focus:border-[#AC3E25]"
                        />

                    </div>

                    {/* Child Layout 3 */}
                    <div className="flex h-[105.7104px] w-[242.8px] shrink-0 items-start pt-[48.71px]">

                        <Link
                            to="/health-insurance"
                            className="box-border flex h-[57px] w-[242.8px] shrink-0 items-center justify-between gap-[15.71px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-white transition-colors duration-200 hover:bg-[#922F1C]"
                        >
                            <span className="text-[18px] font-normal leading-[100%]">
                                Get Price
                            </span>

                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
                                <svg
                                    className="h-[20px] w-[20px]"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5.5 19.5L19.5 5.5M19.5 5.5H10.5M19.5 5.5V14.5"
                                        stroke="white"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}