import { Link } from "react-router";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/",
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
            >
                <path d="M14.5 8H17V4.5h-2.5C11.46 4.5 10 6.08 10 9v2H7v3.5h3V21h3.5v-6.5H16L17 11h-3.5V9c0-.67.33-1 1-1Z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com/",
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
            >
                <path d="M22 5.92c-.65.29-1.34.49-2.07.58.75-.45 1.32-1.16 1.59-2.01-.7.42-1.47.72-2.29.88A3.59 3.59 0 0 0 13 8.65c0 .28.03.56.09.82A10.2 10.2 0 0 1 3.68 4.9a3.58 3.58 0 0 0 1.11 4.8A3.6 3.6 0 0 1 3.16 9.3v.05a3.59 3.59 0 0 0 2.88 3.52c-.35.1-.73.15-1.11.15-.27 0-.53-.03-.78-.08a3.6 3.6 0 0 0 3.36 2.49A7.22 7.22 0 0 1 3 16.97c-.3 0-.6-.02-.9-.05a10.18 10.18 0 0 0 5.51 1.62c6.61 0 10.23-5.48 10.23-10.23 0-.16 0-.31-.01-.47.7-.5 1.31-1.15 1.79-1.92Z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/",
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
            >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                aria-hidden="true"
            >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="white"
                    stroke="none"
                />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
            >
                <path d="M6 8H2.5v13.5H6V8ZM4.25 2A2.25 2.25 0 1 0 4.25 6.5 2.25 2.25 0 0 0 4.25 2ZM21.5 13.75c0-4.01-2.14-5.88-5-5.88-2.31 0-3.34 1.27-3.92 2.16V8H9.1v13.5h3.48v-6.69c0-1.76.33-3.47 2.52-3.47 2.15 0 2.18 2.02 2.18 3.59v6.57h3.49v-7.75Z" />
            </svg>
        ),
    },
];

export default function Topbar() {
    return (
        <div className="box-border flex h-[50px] w-[1440px] items-center justify-between bg-[rgba(172,62,37,1)] px-[80px] py-[8px]">

            {/* ================= LEFT LAYOUT ================= */}
            {/* Width: 640px | Height: 18px | Gap: 10px */}

            <div className="flex h-[18px] w-[640px] shrink-0 items-center gap-[10px]">

                {/* Location */}
                <div className="flex h-[18px] w-[407px] shrink-0 items-center gap-[10px]">
                    <img
                        src="/Vector (3).png"
                        alt=""
                        className="h-[12px] w-[9px] shrink-0 object-contain"
                    />

                    <span className="h-[18px] w-[385px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium capitalize leading-[100%] tracking-[0%] text-white">
                        Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.
                    </span>
                </div>

                {/* Email */}
                <div className="flex h-[18px] w-[200px] shrink-0 items-center gap-[10px]">
                    <img
                        src="/email-14_svgrepo.com.png"
                        alt=""
                        className="h-[12px] w-[12px] shrink-0 object-contain"
                    />
                    <a
                        href="mailto:purabiinsurance@gmail.com"
                        className="h-[18px] w-[178px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium lowercase leading-[100%] tracking-[0%] text-white"
                    >
                        purabiinsurance@gmail.com
                    </a>
                </div>


            </div>

            {/* ================= RIGHT LAYOUT ================= */}
            {/* Width: 880px | Height: 34px | Gap: 20px */}

            <div className="flex h-[34px] w-[640px] shrink-0 items-center gap-[20px]">
                {/* Phone */}
                <div className="flex h-[18px] w-[130px] shrink-0 items-center gap-[10px]">
                    <img
                        src="/Vector (4).png"
                        alt=""
                        className="h-[10px] w-[10px] shrink-0 object-contain"
                    />

                    <a
                        href="tel:+8801714044146"
                        className="h-[18px] w-[108px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium uppercase leading-[100%] tracking-[0%] text-white"
                    >
                        +880 1714-044146
                    </a>
                </div>

                {/* ================= FIRST LAYOUT ================= */}
                {/* Width: 288px | Height: 34px */}

                <div className="flex h-[34px] w-[288px] shrink-0 items-center">

                    {/* Client Portal */}
                    <Link
                        to="/SignUp"
                        className="flex h-[24px] w-[144px] shrink-0 items-center justify-center whitespace-nowrap text-center font-['Poppins'] text-[16px] font-normal uppercase leading-[100%] tracking-[0%] text-white"
                    >
                        CLIENT PORTAL
                    </Link>

                    {/* Agent Portal */}
                    <Link
                        to="/agent-portal"
                        className="flex h-[24px] w-[144px] shrink-0 items-center justify-center whitespace-nowrap text-center font-['Poppins'] text-[16px] font-normal uppercase leading-[100%] tracking-[0%] text-white"
                    >
                        AGENT PORTAL
                    </Link>

                </div>

                {/* ================= SECOND LAYOUT ================= */}
                {/* Width: 190px | Height: 30px | Gap: 10px */}

                <div className="flex h-[30px] w-[190px] shrink-0 items-center gap-[10px]">

                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-200 hover:bg-white/30"
                        >
                            {social.icon}
                        </a>
                    ))}

                </div>
            </div>
        </div>
    );
}