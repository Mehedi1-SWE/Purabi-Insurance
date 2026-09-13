import { useRef, useState } from "react";
import { Link } from "react-router";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M14.5 8H17V4.5h-2.5C11.46 4.5 10 6.08 10 9v2H7v3.5h3V21h3.5v-6.5H16L17 11h-3.5V9c0-.67.33-1 1-1Z" /></svg> },
  { name: "Twitter", href: "https://twitter.com/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M22 5.92c-.65.29-1.34.49-2.07.58.75-.45 1.32-1.16 1.59-2.01-.7.42-1.47.72-2.29.88A3.59 3.59 0 0 0 13 8.65c0 .28.03.56.09.82A10.2 10.2 0 0 1 3.68 4.9a3.58 3.58 0 0 0 1.11 4.8A3.6 3.6 0 0 1 3.16 9.3v.05a3.59 3.59 0 0 0 2.88 3.52c-.35.1-.73.15-1.11.15-.27 0-.53-.03-.78-.08a3.6 3.6 0 0 0 3.36 2.49A7.22 7.22 0 0 1 3 16.97c-.3 0-.6-.02-.9-.05a10.18 10.18 0 0 0 5.51 1.62c6.61 0 10.23-5.48 10.23-10.23 0-.16 0-.31-.01-.47.7-.5 1.31-1.15 1.79-1.92Z" /></svg> },
  { name: "YouTube", href: "https://www.youtube.com/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8-.5-5.8ZM9.5 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg> },
  { name: "Instagram", href: "https://www.instagram.com/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" /></svg> },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M6 8H2.5v13.5H6V8ZM4.25 2A2.25 2.25 0 1 0 4.25 6.5 2.25 2.25 0 0 0 4.25 2ZM21.5 13.75c0-4.01-2.14-5.88-5-5.88-2.31 0-3.34 1.27-3.92 2.16V8H9.1v13.5h3.48v-6.69c0-1.76.33-3.47 2.52-3.47 2.15 0 2.18 2.02 2.18 3.59v6.57h3.49v-7.75Z" /></svg> },
];

export default function AdminDashboard() {
  const [language, setLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceItems: string[] = [];

  const salesData = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 85 },
    { month: "Apr", value: 92 },
    { month: "May", value: 125 },
    { month: "Jun", value: 82 },
    { month: "Jul", value: 72 },
    { month: "Aug", value: 95 },
    { month: "Sep", value: 118 },
    { month: "Oct", value: 140 },
    { month: "Nov", value: 162 },
    { month: "Dec", value: 190 },
  ];

  const supportMessages = [
    { id: 1, name: "Tanvir Ahmed", email: "tanvir@gmail.com", phone: "+880 1712 345678", subject: "Policy Inquiry", subjectClass: "bg-blue-100 text-blue-700", message: "I would like to know more about health insurance...", date: "Sep 13, 2026" },
    { id: 2, name: "Nusrat Jahan", email: "nusrat@mail.com", phone: "+880 1819 876543", subject: "Claim Support", subjectClass: "bg-green-100 text-green-700", message: "My claim status is still pending. Can you ple...", date: "Sep 12, 2026" },
    { id: 3, name: "Rahat Karim", email: "rahat@example.com", phone: "+880 1678 112233", subject: "Payment Issue", subjectClass: "bg-red-100 text-red-700", message: "I have already made the payment but it's no...", date: "Sep 11, 2026" },
    { id: 4, name: "Sadia Islam", email: "sadia@mail.com", phone: "+880 1555 667788", subject: "General Question", subjectClass: "bg-purple-100 text-purple-700", message: "Do you have any student insurance plans?", date: "Sep 10, 2026" },
    { id: 5, name: "Mehedi Hasan", email: "mehedi@mail.com", phone: "+880 1312 998877", subject: "Agent Support", subjectClass: "bg-orange-100 text-orange-700", message: "I want to become an agent. What is the proc...", date: "Sep 09, 2026" },
  ];

  const activities = [
    { icon: "document", title: "New policy created for Rahim Islam", time: "2 minutes ago", bg: "bg-green-100", color: "#16A34A" },
    { icon: "edit", title: "Claim #1002 updated", time: "12 minutes ago", bg: "bg-orange-100", color: "#F97316" },
    { icon: "more", title: "New agent registered", time: "1 hour ago", bg: "bg-gray-100", color: "#64748B" },
    { icon: "users", title: "Customer profile updated", time: "3 hours ago", bg: "bg-purple-100", color: "#7C3AED" },
    { icon: "shield", title: "New claim submitted", time: "5 hours ago", bg: "bg-red-100", color: "#DC2626" },
  ];


  return (
    <div className="relative box-border min-h-screen w-[1440px] min-w-[1280px] max-w-[1920px] overflow-hidden bg-white">

      {/* Top Bar */}
      <div className="box-border flex h-[35px] w-[1440px] items-center justify-between bg-[rgba(172,62,37,1)] px-[80px] py-[8px]">
        <div className="flex h-[18px] w-[640px] shrink-0 items-center gap-[10px]">
          <div className="flex h-[18px] w-[407px] shrink-0 items-center gap-[10px]">
            <img src="/Vector (3).png" alt="" className="h-[12px] w-[9px] shrink-0 object-contain" />
            <span className="h-[18px] w-[385px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium capitalize leading-[100%] tracking-[0%] text-white">Sandhani Life Tower (2nd Floor), 34 Bangla Motor, Dhaka - 1000.</span>
          </div>

          <div className="flex h-[18px] w-[200px] shrink-0 items-center gap-[10px]">
            <img src="/email-14_svgrepo.com.png" alt="" className="h-[12px] w-[12px] shrink-0 object-contain" />
            <a href="mailto:purabiinsurance@gmail.com" className="h-[18px] w-[178px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium lowercase leading-[100%] tracking-[0%] text-white">purabiinsurance@gmail.com</a>
          </div>

          <div className="flex h-[18px] w-[130px] shrink-0 items-center gap-[10px]">
            <img src="/Vector (4).png" alt="" className="h-[10px] w-[10px] shrink-0 object-contain" />
            <a href="tel:+8801714044146" className="h-[18px] w-[108px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium uppercase leading-[100%] tracking-[0%] text-white">+880 1714-044146</a>
          </div>
        </div>

        <div className="mr-[-60px] flex h-[34px] w-[640px] shrink-0 items-center justify-end gap-[20px]">
          <div className="flex h-[30px] w-[190px] shrink-0 items-center justify-end gap-[10px]">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-200 hover:bg-white/30">
                {social.icon}
              </a>
            ))}
          </div>

          <div className="relative ml-0 flex h-[30px] w-[90px] shrink-0 items-center justify-end">
            <button type="button" onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="flex h-[30px] items-center gap-[6px] whitespace-nowrap font-['Poppins'] text-[12px] font-medium leading-[100%] text-white">
              {language}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-[30px] z-50 w-[90px] overflow-hidden rounded-[4px] bg-white shadow-md">
                <button type="button" onClick={() => { setLanguage("English"); setIsLanguageOpen(false); }} className="flex w-full items-center px-[10px] py-[7px] text-left font-['Poppins'] text-[11px] text-[#444] hover:bg-[#f5f5f5]">English</button>
                <button type="button" onClick={() => { setLanguage("বাংলা"); setIsLanguageOpen(false); }} className="flex w-full items-center px-[10px] py-[7px] text-left font-['Poppins'] text-[11px] text-[#444] hover:bg-[#f5f5f5]">বাংলা</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Admin Navbar */}
      <nav className="box-border flex h-[50px] w-[1440px] items-center border-b border-[rgba(171,61,36,0.5)] bg-white px-[20px] py-[8px]">

        {/* Logo */}
        <div className="flex h-[36px] w-[184.3504px] shrink-0 items-center justify-center bg-[rgba(171,61,37,1)]">
          <img src="/logo.png" alt="Purabi General Insurance Co. Ltd." className="h-[30px] w-[180px] shrink-0 object-contain" />
        </div>

        {/* Navigation */}
        <div className="ml-[65px] flex h-[55px] flex-1 items-center gap-[32px]">

          <Link to="/admin/dashboard" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F2937] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Dashboard
          </Link>

          <Link to="/admin/policies" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F2937] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Policies
          </Link>

          <Link to="/admin/claims" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F2937] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Claims
          </Link>

          <Link to="/admin/customers" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F29337] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Customers
          </Link>

          <Link to="/admin/blogs" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F2937] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Blogs
          </Link>

          <Link to="/admin/reports" className="flex h-[55px] shrink-0 items-center justify-center whitespace-nowrap font-['Poppins'] text-[13px] font-bold leading-[100%] text-[#1F2937] transition-all duration-200 hover:text-[rgba(172,62,37,1)]">
            Reports
          </Link>

          {/* Search */}
          <div className="ml-auto box-border flex h-[40px] w-[200px] shrink-0 items-center justify-between rounded-[7px] border border-[#E1E4E8] bg-[#FAFAFA] px-[12px] transition-all duration-200 focus-within:border-[rgba(172,62,37,0.45)] focus-within:bg-white focus-within:shadow-[0_3px_12px_rgba(0,0,0,0.06)]">
            <input type="text" placeholder="Search anything..." className="w-[150px] bg-transparent font-['Poppins'] text-[11px] font-normal leading-none text-[#444] outline-none placeholder:text-[#999]" />
            <svg className="h-[19px] w-[19px] text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </div>

          {/* Notification */}
          <button type="button" className="relative flex h-[38px] w-[30px] shrink-0 items-center justify-center">
            <svg className="h-[20px] w-[20px] text-[#4B5563]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M10 21h4" />
            </svg>
            <span className="absolute right-[-1px] top-[2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#DC2626] font-['Poppins'] text-[8px] font-medium leading-none text-white">
              3
            </span>
          </button>

          {/* Divider */}
          <div className="h-[28px] w-[1px] shrink-0 bg-[#E5E7EB]" />

          {/* Admin Profile */}
          <div className="relative">
            <button type="button" onClick={() => setIsAdminOpen((open) => !open)} className="flex h-[46px] w-[150px] shrink-0 cursor-pointer items-center gap-[9px] rounded-[8px] px-[7px] transition-all duration-200 hover:bg-[#F7F7F7]">

              <img src="/Satisfied.jpg" alt="Admin" className="h-[34px] w-[34px] shrink-0 rounded-full object-cover" />

              <div className="flex min-w-0 flex-1 flex-col items-start">
                <span className="font-['Poppins'] text-[12px] font-semibold leading-[15px] text-[#1F2937]">
                  Admin
                </span>
                <span className="font-['Poppins'] text-[9px] font-normal leading-[12px] text-[#6B7280]">
                  Super Admin
                </span>
              </div>

              {/* Premium Chevron */}
              <span className={`flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isAdminOpen ? "bg-[#F7F3F1]" : "bg-transparent"}`}>
                <svg className={`h-[13px] w-[13px] text-[#6B7280] transition-transform duration-200 ${isAdminOpen ? "rotate-180 text-[#AC3E25]" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            {/* Admin Dropdown */}
            <div className={`absolute right-0 top-[52px] z-[1200] w-[250px] origin-top-right overflow-hidden rounded-[12px] border border-[#E5E7EB] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-200 ${isAdminOpen ? "visible scale-100 opacity-100" : "invisible pointer-events-none scale-95 opacity-0"}`}>

              {/* Profile Header */}
              <div className="flex items-center gap-[10px] border-b border-[#E5E7EB] px-[14px] py-[12px]">
                <img src="/Satisfied.jpg" alt="Admin" className="h-[38px] w-[38px] shrink-0 rounded-full object-cover" />

                <div className="min-w-0">
                  <p className="font-['Poppins'] text-[12px] font-semibold leading-[16px] text-[#1F2937]">
                    Admin
                  </p>
                  <p className="font-['Poppins'] text-[9px] font-normal leading-[13px] text-[#6B7280]">
                    Super Admin
                  </p>
                  <p className="truncate font-['Poppins'] text-[9px] font-normal leading-[13px] text-[#6B7280]">
                    admin@purabi.com
                  </p>
                </div>
              </div>

              {/* Dropdown Items */}
              <div className="p-[7px]">

                <button type="button" className="flex h-[34px] w-full items-center gap-[11px] rounded-[6px] px-[10px] font-['Poppins'] text-[10px] font-normal text-[#374151] transition-all duration-200 hover:bg-[#F7F3F1] hover:text-[#AC3E25]">
                  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 3-7 8-7s8 3 8 7" />
                  </svg>
                  <span>My Profile</span>
                </button>

                <button type="button" className="flex h-[34px] w-full items-center gap-[11px] rounded-[6px] px-[10px] font-['Poppins'] text-[10px] font-normal text-[#374151] transition-all duration-200 hover:bg-[#F7F3F1] hover:text-[#AC3E25]">
                  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V22h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4v-2.6h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1L7 8.6l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V7h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.5 1Z" />
                  </svg>
                  <span>Account Settings</span>
                </button>

                <button type="button" className="flex h-[34px] w-full items-center gap-[11px] rounded-[6px] px-[10px] font-['Poppins'] text-[10px] font-normal text-[#374151] transition-all duration-200 hover:bg-[#F7F3F1] hover:text-[#AC3E25]">
                  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21h4" />
                  </svg>
                  <span>Notification Preferences</span>
                </button>

                <button type="button" className="flex h-[34px] w-full items-center gap-[11px] rounded-[6px] px-[10px] font-['Poppins'] text-[10px] font-normal text-[#374151] transition-all duration-200 hover:bg-[#F7F3F1] hover:text-[#AC3E25]">
                  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1 .8-1.7 1.2-1.7 2.7" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span>Help & Support</span>
                </button>

                <div className="my-[5px] border-t border-[#E5E7EB]" />

                <button type="button" onClick={() => setIsAdminOpen(false)} className="flex h-[36px] w-full items-center gap-[11px] rounded-[6px] bg-[#FFF1F1] px-[10px] font-['Poppins'] text-[10px] font-medium text-[#DC2626] transition-all duration-200 hover:bg-[#FEE2E2]">
                  <svg className="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17l5-5-5-5" />
                    <path d="M15 12H3" />
                    <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
                  </svg>
                  <span>Logout</span>
                </button>

              </div>
            </div>
          </div>

          {/* Logout */}
          <button type="button" className="flex h-[38px] w-[88px] shrink-0 items-center justify-center gap-[7px] rounded-[5px] bg-[rgba(172,62,37,1)] font-['Poppins'] text-[11px] font-medium text-white transition-all duration-200 hover:bg-[#96351F] hover:shadow-[0_5px_14px_rgba(172,62,37,0.25)]">
            <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
            </svg>
            <span>Logout</span>
          </button>

        </div>
      </nav>




      {/* Outlet */}
      <div className="relative box-border min-h-[760px] w-[1440px] overflow-hidden bg-[linear-gradient(0deg,rgba(172,62,37,0.1),rgba(172,62,37,0.1)),linear-gradient(0deg,#FFFFFF,#FFFFFF)] font-['Poppins']">

        {/* ================================================== */}
        {/* Left Sidebar */}
        {/* ================================================== */}

        <aside className="absolute left-0 top-0 box-border flex h-[760px] w-[240px] cursor-pointer flex-col bg-[#AC3E25] px-[14px] py-[14px] shadow-[6px_0_18px_rgba(89,31,18,0.14)]">

          {/* Menu */}
          <div className="flex flex-col gap-[2px]">

            {/* Dashboard */}
            <div className="flex h-[44px] w-full items-center rounded-[9px]  px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></svg>
              <span className="ml-[18px] text-[16px] font-medium">Dashboard</span>
            </div>

            {/* Policies */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2" /><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5v-2" /></svg>
              <span className="ml-[18px] flex-1 text-[16px] font-normal">Policies</span>
              <svg className="h-[15px] w-[15px] text-[#E7B0A1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </div>

            {/* Claims */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2" /><path d="M10 12h4M10 16h3" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Claims</span>
            </div>

            {/* Customers */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 5.5a3 3 0 0 1 0 5.8" /><path d="M18 14.5c1.8.7 3 2.5 3 4.5" /></svg>
              <span className="ml-[18px] flex-1 text-[16px] font-normal">Customers</span>
              <svg className="h-[15px] w-[15px] text-[#E7B0A1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </div>

            {/* Agents */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /><path d="M16 14c2.8.4 5 2.8 5 6" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Agents</span>
            </div>

            {/* Blogs */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Blogs</span>
            </div>

            {/* Reports */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 20V9M12 20V4M19 20v-7" /><path d="M3 20h18" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Reports</span>
            </div>

            {/* Payments */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M14.5 8.5c-.7-.7-1.6-1-2.5-1-1.7 0-3 1-3 2.3s1.3 2.1 3 2.2c1.7.1 3 1 3 2.3s-1.3 2.3-3 2.3c-1 0-2-.4-2.7-1.1" /><path d="M12 6v2M12 16v2" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Payments</span>
            </div>

            {/* User Management */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /><path d="M16 14c2.8.4 5 2.5 5 5.5" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">User Management</span>
            </div>

            {/* Settings */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4.4v-2.5h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4.4h2.5v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V13h-.2a1.7 1.7 0 0 0-1.5 1Z" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Settings</span>
            </div>

            {/* Support */}
            <div className="flex h-[44px] w-full items-center rounded-[9px] px-[14px] text-white transition-all duration-200 hover:bg-[#963521]">
              <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1 .8-1.7 1.2-1.7 2.7" /><path d="M12 17h.01" /></svg>
              <span className="ml-[18px] text-[16px] font-normal">Support</span>
            </div>

          </div>

          {/* Bottom Promo */}
          <div className="mt-auto h-[190px] w-full overflow-hidden rounded-[12px] shadow-[0_8px_20px_rgba(70,20,10,0.20)]">
            <img src="/Umbrella.jpg" alt="Together for a Safer Tomorrow" className="h-full w-full object-cover" />
          </div>

        </aside>


        {/* ================================================== */}
        {/* Main Dashboard */}
        {/* ================================================== */}

        <main className="absolute left-[240px] top-0 box-border h-[760px] w-[1200px] overflow-hidden px-[20px] py-[14px]">

          {/* ================================================== */}
          {/* 1st Layout → Welcome */}
          {/* ================================================== */}

          <section className="relative h-[92px] w-[1160px] overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat px-[26px] py-[14px]"
            style={{ backgroundImage: "url('/Backgroundadmin.png')" }}>


            <div className="absolute left-[26px] top-[10px]">
              <h1 className="font-poppins text-[30px] font-semibold leading-[42px] text-[#102A4C]">
                Welcome back, Admin!
              </h1>
              <p className="font-poppins text-[16px] font-normal leading-[24px] text-[#4D6380]">
                Here's what's happening with your insurance business today.
              </p>
            </div>

            <div className="absolute left-[570px] top-[10px] w-[270px]">
              <p className="font-serif text-[24px] italic leading-[31px] text-[#AC3E25]">
                “Protecting<br />what matters most.”
              </p>
            </div>

            <div className="absolute right-[24px] top-[10px] flex h-[42px] w-[218px] items-center justify-center gap-[10px] rounded-[9px] bg-white px-[12px] shadow-[0_2px_10px_rgba(50,30,20,0.08)]">
              <svg className="h-[20px] w-[20px] text-[#102A4C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              <span className="font-poppins text-[14px] font-medium text-[#102A4C]">September 13, 2026</span>
              <svg className="h-[16px] w-[16px] text-[#102A4C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </div>

          </section>


          {/* ================================================== */}
          {/* 4 Stat Cards */}
          {/* ================================================== */}

          <section className="mt-[10px] flex h-[102px] w-[1160px] gap-[10px]">

            {/* Total Customers */}
            <div className="box-border flex h-[102px] w-[285px] items-center rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">
                <svg className="h-[36px] w-[36px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /><path d="M16 14c2.8.4 5 2.8 5 6" /></svg>
              </div>
              <div className="ml-[18px]">
                <p className="font-poppins text-[14px] font-normal text-[#526174]">Total Customers</p>
                <div className="mt-[3px] flex items-center gap-[18px]">
                  <p className="font-poppins text-[25px] font-semibold leading-[30px] text-[#111827]">2,850</p>
                  <span className="font-poppins text-[14px] font-medium text-[#16A34A]">↑ +12%</span>
                </div>
                <p className="font-poppins text-[12px] text-[#64748B]">from last month</p>
              </div>
            </div>

            {/* Active Policies */}
            <div className="box-border flex h-[102px] w-[285px] items-center rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">
                <svg className="h-[36px] w-[36px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>
              </div>
              <div className="ml-[18px]">
                <p className="font-poppins text-[14px] font-normal text-[#526174]">Active Policies</p>
                <div className="mt-[3px] flex items-center gap-[18px]">
                  <p className="font-poppins text-[25px] font-semibold leading-[30px] text-[#111827]">1,920</p>
                  <span className="font-poppins text-[14px] font-medium text-[#16A34A]">↑ +8%</span>
                </div>
                <p className="font-poppins text-[12px] text-[#64748B]">from last month</p>
              </div>
            </div>

            {/* Pending Claims */}
            <div className="box-border flex h-[102px] w-[285px] items-center rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">
                <svg className="h-[36px] w-[36px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 20 6v5c0 5.2-3.3 8.7-8 10-4.7-1.3-8-4.8-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <div className="ml-[18px]">
                <p className="font-poppins text-[14px] font-normal text-[#526174]">Pending Claims</p>
                <div className="mt-[3px] flex items-center gap-[18px]">
                  <p className="font-poppins text-[25px] font-semibold leading-[30px] text-[#111827]">320</p>
                  <span className="font-poppins text-[14px] font-medium text-red-500">↑ +5%</span>
                </div>
                <p className="font-poppins text-[12px] text-[#64748B]">from last month</p>
              </div>
            </div>

            {/* Total Revenue */}
            <div className="box-border flex h-[102px] w-[285px] items-center rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">
                <svg className="h-[36px] w-[36px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 20V10M12 20V4M19 20v-7" /></svg>
              </div>
              <div className="ml-[18px]">
                <p className="font-poppins text-[14px] font-normal text-[#526174]">Total Revenue</p>
                <div className="mt-[3px] flex items-center gap-[16px]">
                  <p className="font-poppins text-[25px] font-semibold leading-[30px] text-[#111827]">৳ 12.5M</p>
                  <span className="font-poppins text-[14px] font-medium text-[#16A34A]">↑ +18%</span>
                </div>
                <p className="font-poppins text-[12px] text-[#64748B]">from last month</p>
              </div>
            </div>

          </section>


          {/* ================================================== */}
          {/* 2nd Layout */}
          {/* Policy Sales + Distribution */}
          {/* ================================================== */}

          <section className="mt-[10px] flex h-[214px] w-[1160px] gap-[10px]">

            {/* Policy Sales Overview */}
            <div className="box-border h-[214px] w-[580px] rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] py-[14px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">

              <div className="flex h-[34px] items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <svg className="h-[26px] w-[26px] text-[#C43620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M8 8h5M8 16h6" /></svg>
                  <h2 className="font-poppins text-[17px] font-semibold text-[#102A4C]">Policy Sales Overview</h2>
                </div>
                <button className="flex h-[32px] items-center gap-[8px] rounded-[7px] bg-[#F8F8F8] px-[12px] font-poppins text-[12px] text-[#102A4C]">
                  This Year
                  <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </button>
              </div>

              <div className="mt-[10px] flex h-[140px] w-full items-end gap-[17px] border-b border-[#E8EDF2] px-[4px] pb-[20px]">
                {salesData.map((item) => (
                  <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end">
                    <div className={`w-[25px] rounded-t-[5px] bg-[#AC3E25] ${item.month === "May" ? "shadow-[0_0_0_1px_#963521]" : ""}`} style={{ height: `${item.value * 0.55}px` }} />
                    <span className="mt-[7px] font-poppins text-[9px] text-[#64748B]">{item.month}</span>
                  </div>
                ))}
              </div>

            </div>


            {/* Policy Type Distribution */}
            <div className="box-border h-[214px] w-[570px] rounded-[10px] border border-[#F1ECE9] bg-white px-[20px] py-[14px] shadow-[0_3px_12px_rgba(60,30,20,0.05)]">

              <div className="flex h-[34px] items-center gap-[12px]">
                <svg className="h-[26px] w-[26px] text-[#C43620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a9 9 0 1 1-9 9h9V3Z" /><path d="M14 3a7 7 0 0 1 7 7h-7V3Z" /></svg>
                <h2 className="font-poppins text-[17px] font-semibold text-[#102A4C]">Policy Type Distribution</h2>
              </div>

              <div className="mt-[4px] flex items-center">

                <div className="relative ml-[20px] h-[150px] w-[150px] shrink-0">
                  <div className="h-full w-full rounded-full" style={{ background: "conic-gradient(#AC3E25 0deg 144deg,#C52F22 144deg 234deg,#F0442D 234deg 306deg,#FF8A24 306deg 342deg,#FFD19A 342deg 360deg)" }} />
                  <div className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white">
                    <span className="font-poppins text-[20px] font-semibold text-[#102A4C]">1,920</span>
                    <span className="font-poppins text-[11px] text-[#64748B]">Total</span>
                  </div>
                </div>

                <div className="ml-[32px] flex flex-col gap-[12px]">
                  <div className="flex w-[310px] items-center justify-between"><div className="flex items-center gap-[10px]"><span className="h-[12px] w-[12px] rounded-full bg-[#AC3E25]" /><span className="font-poppins text-[13px] text-[#334155]">Life Insurance</span></div><span className="font-poppins text-[13px] font-medium text-[#102A4C]">40%</span></div>
                  <div className="flex w-[310px] items-center justify-between"><div className="flex items-center gap-[10px]"><span className="h-[12px] w-[12px] rounded-full bg-[#C52F22]" /><span className="font-poppins text-[13px] text-[#334155]">Health Insurance</span></div><span className="font-poppins text-[13px] font-medium text-[#102A4C]">25%</span></div>
                  <div className="flex w-[310px] items-center justify-between"><div className="flex items-center gap-[10px]"><span className="h-[12px] w-[12px] rounded-full bg-[#F0442D]" /><span className="font-poppins text-[13px] text-[#334155]">Motor Insurance</span></div><span className="font-poppins text-[13px] font-medium text-[#102A4C]">20%</span></div>
                  <div className="flex w-[310px] items-center justify-between"><div className="flex items-center gap-[10px]"><span className="h-[12px] w-[12px] rounded-full bg-[#FF8A24]" /><span className="font-poppins text-[13px] text-[#334155]">Travel Insurance</span></div><span className="font-poppins text-[13px] font-medium text-[#102A4C]">10%</span></div>
                  <div className="flex w-[310px] items-center justify-between"><div className="flex items-center gap-[10px]"><span className="h-[12px] w-[12px] rounded-full bg-[#FFD19A]" /><span className="font-poppins text-[13px] text-[#334155]">Others</span></div><span className="font-poppins text-[13px] font-medium text-[#102A4C]">5%</span></div>
                </div>

              </div>

            </div>

          </section>


          {/* ================================================== */}
          {/* 3rd Layout */}
          {/* Customer Support + Recent Activities */}
          {/* ================================================== */}

          <section className="mt-[10px] flex h-[244px] w-[1160px] gap-[10px]">

            {/* Customer Support */}
            <div className="group box-border h-[287px] w-[820px] cursor-pointer rounded-[10px] border border-[#F1ECE9] bg-white px-[16px] py-[12px] shadow-[0_3px_12px_rgba(60,30,20,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E7C2B7] hover:shadow-[0_8px_24px_rgba(60,30,20,0.10)]">

              <div className="flex h-[45px] items-start justify-between">

                <div className="flex items-start gap-[12px]">
                  <div className="mt-[-1px] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,#FFF2ED,#FFE5DC)] text-[#C43620] shadow-[0_4px_12px_rgba(172,62,37,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_16px_rgba(172,62,37,0.16)]"><svg className="h-[19px] w-[19px] text-[#C43620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16v12H7l-3 3V5Z" /><circle cx="8" cy="11" r="1" /><circle cx="12" cy="11" r="1" /><circle cx="16" cy="11" r="1" /></svg></div>
                  <div>
                    <h2 className="font-poppins text-[17px] font-semibold leading-[22px] text-[#102A4C]">Customer Support</h2>
                    <p className="font-poppins text-[12px] leading-[17px] text-[#64748B]">Recent enquiries from contact form</p>
                  </div>
                </div>

                <button className="flex h-[34px] cursor-pointer items-center gap-[8px] rounded-[7px] border border-[#E6B4A6] bg-white px-[14px] font-poppins text-[12px] font-medium text-[#AC3E25] shadow-[0_3px_10px_rgba(172,62,37,0.06)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#FFF8F5] hover:shadow-[0_6px_16px_rgba(172,62,37,0.12)] active:translate-y-0">
                  View All Messages
                  <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>

              </div>

              <div className="mt-[6px] overflow-hidden rounded-[8px] border border-[#EEF1F4] bg-white shadow-[0_2px_8px_rgba(16,42,76,0.03)]">

                <div className="grid h-[34px] grid-cols-[42px_118px_128px_128px_110px_1fr_92px_50px] items-center bg-[linear-gradient(90deg,#F8FAFC,#F7F8FA)] px-[7px]">
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">#</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Name</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Email</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Phone</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Subject</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Message (Preview)</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Date</span>
                  <span className="font-poppins text-[11px] font-semibold text-[#102A4C]">Action</span>
                </div>

                {supportMessages.map((item) => (
                  <div key={item.id} className="group/row grid h-[34px] cursor-pointer grid-cols-[42px_118px_128px_128px_110px_1fr_92px_50px] items-center border-t border-[#EEF1F4] px-[7px] transition-all duration-200 hover:bg-[#FFF9F6] hover:shadow-[inset_3px_0_0_#AC3E25]">
                    <span className="font-poppins text-[10px] text-[#526174]">{item.id}</span>
                    <span className="truncate font-poppins text-[10px] font-medium text-[#102A4C]">{item.name}</span>
                    <span className="truncate font-poppins text-[10px] text-[#526174]">{item.email}</span>
                    <span className="truncate font-poppins text-[10px] text-[#526174]">{item.phone}</span>
                    <span className={`w-fit cursor-pointer rounded-[5px] px-[8px] py-[4px] font-poppins text-[9px] font-medium shadow-[0_2px_6px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.03] hover:shadow-[0_4px_10px_rgba(15,23,42,0.10)] ${item.subjectClass}`}>{item.subject}</span>
                    <span className="truncate font-poppins text-[10px] text-[#526174]">{item.message}</span>
                    <span className="font-poppins text-[10px] text-[#526174]">{item.date}</span>
                    <button className="h-[28px] w-[42px] cursor-pointer rounded-[5px] bg-[#AC3E25] font-poppins text-[10px] font-medium text-white shadow-[0_3px_8px_rgba(172,62,37,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#96351F] hover:shadow-[0_5px_12px_rgba(172,62,37,0.24)] active:translate-y-0">View</button>
                  </div>
                ))}

              </div>

            </div>


            {/* Right Column */}
            <div className="flex h-[288px] w-[330px] flex-col gap-[10px]">

              {/* Banner */}
              <div className="group/banner relative h-[100px] w-full cursor-pointer overflow-hidden rounded-[10px] bg-[#AC3E25] bg-cover bg-center bg-no-repeat shadow-[0_5px_16px_rgba(60,30,20,0.10)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_9px_22px_rgba(60,30,20,0.16)]" style={{ backgroundImage: "url('/Umbrella.jpg')" }}>
                <img src="/Umbrella.jpg" alt="Together for a Safer Tomorrow" className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover/banner:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(80,24,12,0.78),rgba(172,62,37,0.30),rgba(172,62,37,0.05))]" />
                <div className="relative z-10 flex h-full items-center px-[16px]">
                  <div>
                    <p className="font-poppins text-[9px] font-medium uppercase tracking-[1px] text-white/80">Purabi Insurance</p>
                    <p className="mt-[2px] font-poppins text-[15px] font-semibold leading-[20px] text-white">Protecting what matters most.</p>
                  </div>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="group/activity box-border h-[280px] w-[330px] cursor-pointer overflow-hidden rounded-[10px] border border-[#F1ECE9] bg-white px-[16px] py-[10px] shadow-[0_3px_12px_rgba(60,30,20,0.05)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E7C2B7] hover:shadow-[0_8px_24px_rgba(60,30,20,0.10)]">

                <div className="flex h-[30px] items-center justify-between">

                  <div className="flex items-center gap-[10px]">

                    <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,#FFF2ED,#FFE5DC)] shadow-[0_4px_12px_rgba(172,62,37,0.10)] transition-all duration-300 group-hover/activity:scale-105 group-hover/activity:shadow-[0_6px_16px_rgba(172,62,37,0.16)]">
                      <svg className="h-[17px] w-[17px] text-[#C43620]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>
                    </div>

                    <h2 className="font-poppins text-[17px] font-semibold text-[#102A4C]">
                      Recent Activities
                    </h2>

                  </div>

                  <button className="flex items-center gap-[6px] font-poppins text-[11px] font-medium text-[#C43620]">
                    View All
                    <svg className="h-[13px] w-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </button>

                </div>

                <div className="mt-[5px] flex flex-col">

                  {activities.map((activity, index) => (
                    <div key={index} className="group/activity-row flex h-[24px] cursor-pointer items-center rounded-[7px] border-b border-[#EEF1F4] transition-all duration-200 hover:bg-[#FFF9F6] hover:px-[4px]">

                      <div className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full ${activity.bg} shadow-[0_3px_9px_rgba(15,23,42,0.08)] ring-1 ring-white transition-all duration-200 group-hover/activity-row:scale-105 group-hover/activity-row:shadow-[0_5px_12px_rgba(15,23,42,0.12)]`}>

                        {activity.icon === "document" && <svg className="h-[17px] w-[17px]" style={{ color: activity.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>}

                        {activity.icon === "edit" && <svg className="h-[17px] w-[17px]" style={{ color: activity.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 16 9.5-9.5a2.1 2.1 0 0 1 3 3L7 22H3v-4l1-2Z" /></svg>}

                        {activity.icon === "more" && <svg className="h-[17px] w-[17px]" style={{ color: activity.color }} viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /></svg>}

                        {activity.icon === "users" && <svg className="h-[17px] w-[17px]" style={{ color: activity.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /></svg>}

                        {activity.icon === "shield" && <svg className="h-[17px] w-[17px]" style={{ color: activity.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 20 6v5c0 5.2-3.3 8.7-8 10-4.7-1.3-8-4.8-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></svg>}

                      </div>

                      <div className="ml-[10px] min-w-0 flex-1">
                        <p className="truncate font-poppins text-[10px] font-medium text-[#102A4C]">{activity.title}</p>
                        <p className="font-poppins text-[9px] text-[#64748B]">{activity.time}</p>
                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </section>

        </main>

      </div>

      {/* Footer */}
      <footer className="box-border flex h-[47px] w-[1440px] items-center border-t border-[#E8D8D2] bg-[#FFFDFC] px-[20px] py-[8px]">

        {/* Main Footer Content */}
        <div className="flex flex-1">
          {/* এখানে Logo / About / Links / Contact ইত্যাদি থাকবে */}
        </div>

        {/* Bottom Footer */}
        <div className="flex h-[10px] w-full items-center justify-between">

          {/* Left - Copyright */}
          <p className="font-['Poppins'] text-[13px] font-normal leading-[100%] text-[#777777]">
            Copyright © 360D Soul Limited 2025. All rights reserved.
          </p>

          {/* Center - Main Navigation */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[14px] font-['Poppins'] text-[13px] font-normal leading-[100%] text-[#3F3F3F]">

            <a
              href="/"
              className="transition-colors duration-200 hover:text-[#AC3E25]"
            >
              Home
            </a>

            <span className="text-[#D8C8C2]">|</span>

            <a
              href="/about"
              className="transition-colors duration-200 hover:text-[#AC3E25]"
            >
              About Us
            </a>

            <span className="text-[#D8C8C2]">|</span>

            <a
              href="/contact"
              className="transition-colors duration-200 hover:text-[#AC3E25]"
            >
              Contact
            </a>

          </div>

          {/* Right - Legal Navigation */}
          <div className="mr-[40px] flex items-center gap-[14px] font-['Poppins'] text-[13px] font-normal leading-[100%] text-[#3F3F3F]">

            <a
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#AC3E25]"
            >
              Privacy Policy
            </a>

            <span className="text-[#D8C8C2]">|</span>

            <a
              href="/terms-and-conditions"
              className="transition-colors duration-200 hover:text-[#AC3E25]"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}
