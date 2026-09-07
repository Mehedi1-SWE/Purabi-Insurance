import { useState } from "react";
import { Link } from "react-router";

const serviceItems = [
  "Health Insurance",
  "Travel Insurance",
  "Accident Insurance",
  "Car Insurance",
  "Motorcycle Insurance",
  "Life Insurance",
  "Fire Insurance",
  "Marine Insurance",
  "Group Insurance For Employees",
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="box-border flex h-[83px] w-[1440px] items-center justify-between border-b border-[rgba(171,61,36,0.5)] bg-white px-[80px] py-[14px]">

      {/* Logo */}
      <div className="flex h-[46.2236px] w-[184.3504px] shrink-0 items-center justify-center bg-[rgba(171,61,37,1)]">
        <img
          src="/logo.png"
          alt="Purabi General Insurance Co. Ltd."
          className="h-[33.1722px] w-[180px] shrink-0 object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="flex h-[55px] w-[994px] shrink-0 items-center justify-end gap-[20px]">

        {/* Home */}
        <Link
          to="/"
          className="flex h-[55px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
        >
          Home
        </Link>

        {/* About Us */}
        <Link
          to="/about"
          className="flex h-[55px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
        >
          About Us
        </Link>

        {/* Services */}
        <div className="relative h-[55px] shrink-0">

          <button
            type="button"
            onClick={() => setIsServicesOpen((open) => !open)}
            className="flex h-[55px] cursor-pointer items-center justify-center gap-[10px] whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
          >
            <span>Services</span>

            <span
              className={`text-[22px] leading-none transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                }`}
            >
              ⌄
            </span>
          </button>

          {/* Services Dropdown */}
          {isServicesOpen && (
            <div
              className="
                absolute left-1/2 top-full z-[1100]
                w-[350px]
                -translate-x-1/2
                overflow-hidden
                rounded-[4px]
                bg-[rgba(79,69,69,1)]
                shadow-[0_14px_40px_rgba(0,0,0,0.28)]
                ring-1 ring-white/10
              "
            >
              {serviceItems.map((service) => (
                <div
                  key={service}
                  className="
                    group
                    box-border
                    flex h-[44px] w-[350px]
                    cursor-pointer
                    items-center justify-between
                    px-[10px] py-[10px]
                    opacity-100
                    transition-all duration-300 ease-out
                    hover:bg-[rgba(172,62,37,0.95)]
                  "
                >
                  {/* Service Name */}
                  <span
                    className="
                      font-['Poppins']
                      text-[16px]
                      font-normal
                      capitalize
                      leading-[100%]
                      tracking-[0%]
                      text-white
                      transition-all duration-300 ease-out
                      group-hover:translate-x-[4px]
                    "
                  >
                    {service}
                  </span>

                  {/* Arrow */}
                  <img
                    src="/arrow-right.png"
                    alt=""
                    className="
                      h-[20px] w-[20px]
                      shrink-0
                      object-contain
                      transition-all duration-300 ease-out
                      group-hover:translate-x-[4px]
                    "
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Claims */}
        <Link
          to="/claims"
          className="flex h-[55px] shrink-0 cursor-pointer items-center justify-center gap-[10px] whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
        >
          <span>Claims</span>
          <span className="text-[22px] leading-none">⌄</span>
        </Link>

        {/* Blogs */}
        <Link
          to="/blogs"
          className="flex h-[55px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
        >
          Blogs
        </Link>

        {/* Contact Us */}
        <Link
          to="/contact-us"
          className="flex h-[55px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-['Poppins'] text-[18px] font-normal leading-[100%] tracking-[0%] text-black transition-all duration-300 hover:text-[rgba(172,62,37,1)]"
        >
          Contact Us
        </Link>

        {/* Get A Quote */}
        <Link
          to="/quote"
          className="
            box-border
            flex h-[55px] w-[219px]
            shrink-0
            cursor-pointer
            items-center justify-center
            gap-[20px]
            rounded-[4px]
            bg-[rgba(172,62,37,1)]
            px-[24px] py-[14px]
            font-['Poppins']
            text-[18px]
            font-medium
            leading-[100%]
            tracking-[0%]
            text-white
            transition-all duration-300 ease-out
            hover:-translate-y-[2px]
            hover:shadow-[0_8px_20px_rgba(172,62,37,0.25)]
          "
        >
          <span>Get A Quote</span>

          <span className="text-[22px] leading-none transition-transform duration-300 group-hover:translate-x-[3px]">
            ↗
          </span>
        </Link>

      </div>
    </nav>
  );
}