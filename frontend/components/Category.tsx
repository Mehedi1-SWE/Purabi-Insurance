import { useState } from "react";

const categories = [
  {
    title: "Fire Insurance",
    description:
      "With our Fire insurance policies, you can choose from various coverage options that protect your property, equipment,",
    image: "/flame.png.png",
  },
  {
    title: "Health Insurance",
    description:
      "With our Health insurance policies, you can choose from various coverage options that protect your property, equipment,",
    image: "/healthcare.png.png",
  },
  {
    title: "Motor Insurance",
    description:
      "Motor Car insurance provides comprehensive protection for your vehicles, covering accidents, theft.",
    image: "/protection.png.png",
  },
  {
    title: "Marine Insurance",
    description:
      "We offer comprehensive and flexible coverage for your vessels, protecting against physical damage,",
    image: "/logistics-delivery.png.png",
  },
  {
    title: "Travel Insurance",
    description:
      "Our Travel Insurance (Overseas Mediclaim Insurance) ensures comprehensive coverage for medical emergencies.",
    image: "/travel-insurance.png.png",
  },
  {
    title: "Engineering Insurance",
    description:
      "Engineering insurance provides protection for machinery, equipment, and engineering projects against unexpected damage.",
    image: "/protection.png.png",
  },
  {
    title: "Aviation Insurance",
    description:
      "Aviation insurance provides coverage for aircraft and related risks, including accidental damage and liability.",
    image: "/logistics-delivery.png.png",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16.77"
      height="16.77"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.2 14.8L14.8 2.2M14.8 2.2H5.5M14.8 2.2V11.5"
        stroke="#FFFFFF"
        strokeWidth="1.46"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InsuranceCard({
  category,
}: {
  category: (typeof categories)[number];
}) {
  return (
    <article className="relative h-[282.1875px] w-[350px] shrink-0 rounded-[21.88px] bg-[#F7ECEA]">
      {/* Card Content */}
      <div className="absolute left-[33.54px] top-[16.04px] flex h-[184.48px] w-[282.92px] flex-col items-center text-center">
        <img
          src={category.image}
          alt={category.title}
          className="h-[60px] w-[60px] object-contain"
        />

        <h3 className="mt-[7.29px] h-[27px] whitespace-nowrap font-[Poppins] text-[18px] font-bold uppercase leading-[100%] tracking-[0%] text-black">
          {category.title}
        </h3>

        <p className="mt-[7.29px] h-[54px] w-[268.33px] font-[Poppins] text-[12px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
          {category.description}
        </p>
      </div>

      {/* Bottom White Shape */}
      <div className="absolute bottom-0 left-1/2 h-[34px] w-[82px] -translate-x-1/2 rounded-t-full bg-white" />

      {/* Arrow Button */}
      <button
        type="button"
        aria-label={`View ${category.title}`}
        className="absolute left-1/2 top-[222.4px] z-10 flex h-[59.79px] w-[59.79px] -translate-x-1/2 items-center justify-center rounded-full bg-[#AC3E25] transition-colors duration-200 hover:bg-[#922F1C]"
      >
        <ArrowIcon />
      </button>
    </article>
  );
}

export default function Category() {
  const [currentStart, setCurrentStart] = useState(0);

  /*
    Initial:
    1 2 3 4

    First See More:
    4 5 6 7

    Second See More:
    5 6 7

    Layout itself NEVER changes.
    Only the cards inside Layout 2 change.
  */

  const getVisibleCategories = () => {
    if (currentStart === 0) {
      return categories.slice(0, 4);
    }

    if (currentStart === 3) {
      return categories.slice(3, 7);
    }

    return categories.slice(currentStart, currentStart + 4);
  };

  const visibleCategories = getVisibleCategories();

  const handleSeeMore = () => {
    if (currentStart === 0) {
      setCurrentStart(3);
    } else if (currentStart === 3) {
      setCurrentStart(4);
    }
  };

  const handleShowLess = () => {
    setCurrentStart(0);
  };

  const isInitial = currentStart === 0;
  const hasMore = currentStart < 4;

  return (
    <section className="box-border flex h-[689.1875px] w-[1440px] shrink-0 flex-col gap-[60px] overflow-hidden bg-white px-[80px] py-[50px]">
      {/* =====================================================
          MAIN LAYOUT
          1440 × 689.1875
          padding: 50px 80px
          gap: 60px
          background: #FFFFFF
      ====================================================== */}

      {/* =====================================================
          LAYOUT 1
          1280 × 130
      ====================================================== */}
      <div className="flex h-[130px] w-[1280px] shrink-0 flex-col items-center">
        <h2 className="h-[72px] w-[659px] whitespace-nowrap text-center font-[Poppins] text-[48px] font-semibold uppercase leading-[100%] tracking-[0%] text-black">
          CATEGORIES OF INSURANCE
        </h2>

        <div className="mt-[10px] flex h-[42px] w-[1280px] items-center justify-center">
          <p className="h-[42px] w-[1280px] text-center font-[Poppins] text-[14px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
            At SIPLC, we exceed customer expectations by being available both
            physically and virtually on their preferred channels. As a
            leading general insurer in Bangladesh, we are committed to
            continuous development and improvement, ensuring every citizen
            can access insurance benefits without hindrance
          </p>
        </div>
      </div>

      {/* =====================================================
          LAYOUT 2
          1280 × 282.1875
          gap: 27px

          CONTENT
          350 × 282.1875

          REMAINING CONTENT
      ====================================================== */}
      <div className="flex h-[282.1875px] w-[1280px] shrink-0 gap-[27px] overflow-hidden">
        {/* CONTENT */}
        <div className="h-[282.1875px] w-[350px] shrink-0">
          {visibleCategories[0] && (
            <InsuranceCard category={visibleCategories[0]} />
          )}
        </div>

        {/* REMAINING CONTENT */}
        <div className="h-[282.1875px] flex-1 overflow-hidden">
          <div className="flex h-[282.1875px] gap-[27px]">
            {visibleCategories.slice(1).map((category) => (
              <InsuranceCard
                key={category.title}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          LAYOUT 3
          242.8 × 57
          gap: 15.71px
          CENTER
      ====================================================== */}
      <div className="flex h-[57px] w-[1280px] shrink-0 items-center justify-center">
        <button
          type="button"
          onClick={hasMore ? handleSeeMore : handleShowLess}
          className="flex h-[57px] w-[242.8px] shrink-0 items-center justify-center gap-[15.71px] rounded-[5px] border border-[#AC3E2533] bg-[#AC3E25] px-[30px] py-[15px] font-[Poppins] text-[12px] font-medium leading-[100%] tracking-[0%] text-white transition-colors duration-200 hover:bg-[#922F1C]"
        >
          <span>
            {isInitial || currentStart === 3 ? "See More" : "Show Less"}
          </span>

          <ArrowIcon />
        </button>
      </div>
    </section>
  );
}