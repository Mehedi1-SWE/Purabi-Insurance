import { useEffect, useRef, useState } from "react";
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
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <div
          ref={servicesRef}
          className="relative h-[55px] shrink-0"
        >
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

          {/* Premium Services Dropdown */}
          <div
            aria-hidden={!isServicesOpen}
            className={`absolute left-1/2 top-full z-[1100] w-[350px] -translate-x-1/2 origin-top overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(38,34,34,0.98)] shadow-[0_18px_50px_rgba(0,0,0,0.30)] ring-1 ring-black/10 backdrop-blur-xl transition-all duration-200 ease-out ${isServicesOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
              }`}
          >
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-white/40">
                Our services
              </p>

              <p className="mt-1 text-[12px] text-white/65">
                Choose the protection you need
              </p>
            </div>

            <div className="p-1.5">
              {serviceItems.map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => setIsServicesOpen(false)}
                  className="group flex min-h-[42px] w-full cursor-pointer items-center justify-between rounded-[6px] px-3 py-2 text-left transition-all duration-200 hover:bg-[rgba(172,62,37,0.95)] focus:bg-[rgba(172,62,37,0.95)] focus:outline-none"
                >
                  <span className="font-['Poppins'] text-[14px] font-normal leading-[1.35] text-white/90 transition-transform duration-200 group-hover:translate-x-[3px]">
                    {service}
                  </span>

                  <span className="ml-3 text-[15px] text-white/35 transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-white">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
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
          className="box-border flex h-[55px] w-[219px] shrink-0 cursor-pointer items-center justify-center gap-[20px] rounded-[4px] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] font-['Poppins'] text-[18px] font-medium leading-[100%] tracking-[0%] text-white transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(172,62,37,0.25)]"
        >
          <span>Get A Quote</span>

          <span className="text-[22px] leading-none">
            ↗
          </span>
        </Link>

      </div>
    </nav>
  );
}