import { Link } from "react-router";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services", arrow: true },
  { name: "Claims", path: "/claims", arrow: true },
  { name: "Blogs", path: "/blogs" },
  { name: "Pay Premium", path: "/pay-premium" },
];

const paymentMethods = [
  { name: "VISA", image: "/visa-logo-png-transparent.png.png" },
  { name: "Mastercard", image: "/Mastercard.png" },
  { name: "Nagad", image: "/Nagad-Logo.wine.png.png" },
  { name: "bKash", image: "/bkash-log-png.png.png" },
  { name: "Rocket", image: "/dutch-bangla-rocket-logo-png_seeklogo.png.png" },
  { name: "Upay", image: "/upay.png.jpg" },
  { name: "SureCash", image: "/surecash-logo-sure-cash-mobile-banking.png.jpg" },
  { name: "TapTap Send", image: "/taptap.png.png" },
  { name: "CellFin", image: "/cellfin.png.png" },
  { name: "Dutch-Bangla Bank", image: "/Dutch-Bangla-Bank-ltd.png.png" },
  { name: "City Bank", image: "/city-bank-logo.png.png" },
  { name: "Islami Bank", image: "/islami-bank-bangladesh.png.png" },
  { name: "BRAC Bank", image: "/Brac-Bank-Logo.png.png" },
  { name: "UCB", image: "/united-commercial-bank-UCB.png.png" },
  { name: "EBL", image: "/simple-math.png.png" },
];

const legalLinks = [
  { name: "Terms & Condition", path: "/terms-and-conditions" },
  { name: "Privacy & Policy", path: "/privacy-policy" },
  { name: "Refund Policy", path: "/refund-policy" },
];

function ArrowIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 9L9 1M9 1H2.5M9 1V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropdownArrow() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcons() {
  return (
    <div className="flex h-[22px] w-[133.96px] items-center justify-between text-[#444444]">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-[#AC3E25]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.5 21v-6.8h2.4l.4-2.8h-2.8V9.6c0-.8.2-1.4 1.5-1.4h1.5V5.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H9v2.8h2.3V21h3.2Z" />
        </svg>
      </a>

      <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition hover:text-[#AC3E25]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4.1H6.5L17.8 19.9Z" />
        </svg>
      </a>

      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-[#AC3E25]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}



export default function Footer() {
  return (

    <footer className="relative box-border flex h-[723px] w-[1440px] overflow-hidden bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)] px-[80px] pb-[50px] pt-[100px]">
      <div className="relative flex h-full w-[1280px] flex-col items-center justify-between">

        {/* Layout 1 — 1280 × 248 */}
        <div className="flex h-[248px] w-[1280px] shrink-0 flex-col gap-[20px]">

          {/* Layout 1.1 — 1280 × 173 */}
          <div className="flex h-[173px] w-[1280px] shrink-0 flex-col gap-[20px]">

            {/* Layout 1.1.1 — 1280 × 98 */}
            <div className="flex h-[98px] w-[1280px] shrink-0 flex-col">

              {/* Layout 1.1.1.1 — 1280 × 26 */}
              <div className="flex h-[26px] w-[1280px] shrink-0 items-center justify-center opacity-50">
                <p className="font-['Poppins'] text-[12px] font-normal leading-[100%] text-black">
                  Are you ready?
                </p>
              </div>

              {/* Layout 1.1.1.2 — 1280 × 72 */}
              <div className="flex h-[72px] w-[1280px] shrink-0 items-center justify-center">
                <h2 className="font-['Poppins'] text-center text-[48px] font-bold leading-[100%] tracking-[-0.44px] text-black">
                  Get Your Insurance Now!
                </h2>
              </div>
            </div>

            {/* Layout 1.1.2 — 250 × 55 */}
            <div className="flex h-[55px] w-[1280px] shrink-0 items-center justify-center">
              <Link
                to="/quote"
                className="flex h-[55px] w-[250px] shrink-0 items-center justify-center gap-[20px] rounded-[5px] border border-[rgba(0,0,0,0.2)] bg-[rgba(172,62,37,1)] px-[24px] py-[14px] font-['Poppins'] text-[18px] font-medium leading-[100%] text-white transition hover:bg-[#922F1C]"
              >
                <span>Buy Now</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* Layout 1.2 — 1280 × 55 */}
          <nav className="flex h-[55px] w-[1280px] shrink-0 items-center justify-center gap-[20px]">
            <div className="flex h-[55px] items-center gap-[20px]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex h-[55px] items-center justify-center gap-[8px] px-[20px] py-[14px] font-['Poppins'] text-[13px] font-normal leading-[100%] text-black transition hover:text-[#AC3E25]"
                >
                  {link.name}
                  {link.arrow && <DropdownArrow />}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Layout 2 — 347 × 76 */}
        <div className="flex h-[76px] w-[347px] shrink-0 flex-col items-center gap-[30px]">
          <SocialIcons />

          <p className="h-[24px] w-[347px] font-['Poppins'] text-[20px] font-normal leading-[24px] text-black">
            Sunday to Thursday : 10 AM to 6 PM
          </p>
        </div>

        {/* Layout 3 — 1280 × 144 */}
        <section className="flex h-[144px] w-[1280px] shrink-0 flex-col gap-[10px]">
          <p className="h-[18px] w-[111px] shrink-0 font-['Poppins'] text-[12px] font-normal leading-[100%] tracking-[-0.2px] text-[#444444]">
            Payment Channels
          </p>

          <div className="flex h-[116px] w-[1280px] flex-col gap-[20px]">
            <div className="flex h-[48px] w-full items-center justify-start gap-[20px]">
              {paymentMethods.slice(0, 11).map((payment) => (
                <div key={payment.name} className="flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[#AC3E2533] bg-white">
                  <img src={payment.image} alt={payment.name} className="block max-h-[30px] max-w-[72px] object-contain" />
                </div>
              ))}
            </div>

            <div className="flex h-[48px] w-full items-center justify-center gap-[20px]">
              {paymentMethods.slice(11).map((payment) => (
                <div key={payment.name} className="flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[#AC3E2533] bg-white">
                  <img src={payment.image} alt={payment.name} className="block max-h-[30px] max-w-[72px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layout 4 — 1280 × 23 */}
        <div className="flex h-[23px] w-[1280px] shrink-0 items-center gap-[50px]">
          <p className="font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[#444444]">
            Copyright ©{" "}
            <span className="font-bold text-[#AC3E25]">
              360D Soul Limited
            </span>{" "}
            2025. All rights reserved.
          </p>

          <div className="ml-auto flex items-center gap-[30px]">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[#444444] transition hover:text-[#AC3E25]">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
