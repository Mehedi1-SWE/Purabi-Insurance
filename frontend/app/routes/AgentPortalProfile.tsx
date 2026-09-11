import { useNavigate } from "react-router";

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

export default function AgentPortalProfile() {
    const navigate = useNavigate();

    return (
        <div className="min-w-[1440px] bg-white">

            {/* Navbar */}
            <nav className="flex h-[106px] w-[1440px] items-center justify-between border-b border-black/20 px-[80px]">
                <div className="relative flex h-[46.22px] w-[184.35px] items-center justify-center">
                    <img src="/logo.png" alt="Purabi General Insurance" className="h-[33.17px] w-[180px] cursor-pointer object-contain opacity-0" onClick={() => navigate("/")} />
                    <div className="pointer-events-none absolute inset-0 bg-[rgba(172,62,37,1)] [mask:url('/logo.png')_center/contain_no-repeat]" />
                </div>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="group relative h-[43px] w-[193px] overflow-hidden rounded-[5px] border border-[rgba(172,62,37,0.25)] bg-[rgba(172,62,37,0.2)] px-[30px] py-[10px] text-[15px] font-bold text-[rgba(172,62,37,1)] shadow-[0_4px_12px_rgba(172,62,37,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[rgba(172,62,37,1)] hover:text-white hover:shadow-[0_8px_22px_rgba(172,62,37,0.28)] active:scale-[0.98]"
                >
                    <span className="pointer-events-none absolute inset-y-0 -left-[80px] w-[45px] rotate-[20deg] bg-white/30 blur-[4px] transition-all duration-700 group-hover:left-[220px]" />
                    <span className="relative z-10">Go Back to Home</span>
                </button>
            </nav>

            {/* Notification */}
            <div className="flex h-[52px] w-[1440px] items-center justify-center gap-[10px] bg-[rgba(172,62,37,0.1)] p-[10px]">
                <img src="/notification.png" alt="Notification" className="h-[32px] w-[32px] object-contain" />

                <div className="flex h-[21px] w-[777px] items-center">
                    <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] capitalize">
                        You’ve Earned{" "}
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-bold leading-[100%] capitalize">
                        ৳30,000
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-bold leading-[100%] capitalize">
                        {" "}in Commissions! Great job!
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-normal leading-[100%] capitalize">
                        {" "}Your latest commissions have been updated.{" "}
                    </span>

                    <span className="font-['Poppins'] text-[14px] font-bold leading-[100%] capitalize text-[rgba(66,133,244,1)] underline decoration-solid underline-offset-0">
                        View Details
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <section className="flex h-[499px] w-[1440px] gap-[20px] px-[80px] py-[50px]">

                {/* Sidebar */}
                <div className="h-[399px] w-[300px]">
                    <div className="flex h-[52px] w-[300px] items-center bg-[rgba(172,62,37,1)] px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] text-white">Profile Details</p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] text-[#444]">My Orders</p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] text-[#444]">My Polices</p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] text-[#444]">My Claims</p>
                    </div>

                    <div className="flex h-[52px] w-[300px] items-center px-[20px]">
                        <p className="m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] text-[#444]">Settings</p>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex w-[960px] flex-col gap-[30px]">
                    <h1 className="m-0 text-[30px] font-medium">My Details</h1>

                    <div className="flex h-[65px] w-[228px] gap-[10px]">
                        <img src="/profile.png" alt="Profile" className="h-[65px] w-[65px] rounded-[5px] object-cover" />

                        <div className="flex h-[28px] w-[103px] items-center gap-[10px] rounded-[2px] bg-[rgba(172,62,37,1)] px-[10px] py-[5px]">
                            <img src="/Edit.png" alt="Edit" className="h-[12px] w-[12px] object-contain" />
                            <span className="font-['Poppins'] text-[12px] font-light leading-[100%] text-white">Edit Profile</span>
                        </div>
                    </div>

                    {/* Account Information */}
                    <div className="flex h-[271px] w-[960px] flex-col gap-[20px] rounded-[5px] bg-white p-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                        <h2 className="m-0 font-['Poppins'] text-[18px] font-medium leading-[100%]">Account Information</h2>


                        <div className="flex h-[229px] w-[920px] flex-col gap-[10px]">
                            {/* Layout 1 */}
                            <div className="flex h-[21px] w-[920px] justify-between">
                                {/* Main Left Layout */}
                                <div className="flex h-[21px] w-[350px] gap-[10px]">
                                    {/* Name */}
                                    <div className="flex h-[21px] w-[100px] items-center justify-center">
                                        <div className="h-[21px] w-[44px] text-center font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Name
                                        </div>
                                    </div>

                                    {/* Tarif */}
                                    <div className="flex h-[21px] w-[200px] items-center justify-center">
                                        <div className="h-[21px] w-[126px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            Tarif Al-Mozahed
                                        </div>
                                    </div>
                                </div>

                                {/* Main Right Layout */}
                                <div className="flex h-[21px] w-[400px] gap-[10px]">
                                    {/* Mobile Number */}
                                    <div className="flex h-[21px] w-[150px] items-center">
                                        <div className="h-[21px] w-[111px] font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Mobile Number
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex h-[21px] w-[299px] items-center justify-center">
                                        <div className="h-[21px] w-[299px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : +880 1768-179927
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Layout 2 */}
                            <div className="flex h-[21px] w-[920px] justify-between">
                                {/* Main Left Layout */}
                                <div className="flex h-[21px] w-[350px] gap-[10px]">
                                    {/* Name */}
                                    <div className="flex h-[21px] w-[100px] items-center justify-center">
                                        <div className="h-[21px] w-[44px] text-center font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Email
                                        </div>
                                    </div>

                                    {/* Tarif */}
                                    <div className="flex h-[21px] w-[200px] items-center justify-center">
                                        <div className="h-[21px] w-[126px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : tarif@goinnovior.com
                                        </div>
                                    </div>
                                </div>

                                {/* Main Right Layout */}
                                <div className="flex h-[21px] w-[400px] gap-[10px]">
                                    {/* Mobile Number */}
                                    <div className="flex h-[21px] w-[150px] items-center">
                                        <div className="h-[21px] w-[111px] font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Address
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex h-[21px] w-[299px] items-center justify-center">
                                        <div className="h-[21px] w-[299px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            House 774, Road 11, Avenue 2, Mirpur DOHS
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Layout 3 */}
                            <div className="flex h-[21px] w-[920px] justify-between">
                                {/* Main Left Layout */}
                                <div className="flex h-[21px] w-[350px] gap-[10px]">
                                    {/* Name */}
                                    <div className="flex h-[21px] w-[100px] items-center justify-center">
                                        <div className="h-[21px] w-[44px] text-center font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            City
                                        </div>
                                    </div>

                                    {/* Tarif */}
                                    <div className="flex h-[21px] w-[200px] items-center justify-center">
                                        <div className="h-[21px] w-[126px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : Dhaka
                                        </div>
                                    </div>
                                </div>

                                {/* Main Right Layout */}
                                <div className="flex h-[21px] w-[400px] gap-[10px]">
                                    {/* Mobile Number */}
                                    <div className="flex h-[21px] w-[150px] items-center">
                                        <div className="h-[21px] w-[111px] font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Nationality
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex h-[21px] w-[299px] items-center justify-center">
                                        <div className="h-[21px] w-[299px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : Bangladeshi
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Layout 4 */}
                            <div className="flex h-[21px] w-[920px] justify-between">
                                {/* Main Left Layout */}
                                <div className="flex h-[21px] w-[350px] gap-[10px]">
                                    {/* Name */}
                                    <div className="flex h-[21px] w-[100px] items-center justify-center">
                                        <div className="h-[21px] w-[44px] text-center font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Passport/NID
                                        </div>
                                    </div>

                                    {/* Tarif */}
                                    <div className="flex h-[21px] w-[200px] items-center justify-center">
                                        <div className="h-[21px] w-[126px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : 691 040 8920
                                        </div>
                                    </div>
                                </div>

                                {/* Main Right Layout */}
                                <div className="flex h-[21px] w-[400px] gap-[10px]">
                                    {/* Mobile Number */}
                                    <div className="flex h-[21px] w-[150px] items-center">
                                        <div className="h-[21px] w-[111px] font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Date of Birth
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex h-[21px] w-[299px] items-center justify-center">
                                        <div className="h-[21px] w-[299px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : 15 November 2000
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Layout 5 */}
                            <div className="flex h-[21px] w-[920px] justify-between">
                                {/* Main Left Layout */}
                                <div className="flex h-[21px] w-[350px] gap-[10px]">
                                    {/* Name */}
                                    <div className="flex h-[21px] w-[100px] items-center justify-center">
                                        <div className="h-[21px] w-[44px] text-center font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Gender
                                        </div>
                                    </div>

                                    {/* Tarif */}
                                    <div className="flex h-[21px] w-[200px] items-center justify-center">
                                        <div className="h-[21px] w-[126px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : Male
                                        </div>
                                    </div>
                                </div>

                                {/* Main Right Layout */}
                                <div className="flex h-[21px] w-[400px] gap-[10px]">
                                    {/* Mobile Number */}
                                    <div className="flex h-[21px] w-[150px] items-center">
                                        <div className="h-[21px] w-[111px] font-[Poppins] text-[14px] font-bold leading-[100%]">
                                            Martial Status
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex h-[21px] w-[299px] items-center justify-center">
                                        <div className="h-[21px] w-[299px] text-center font-[Poppins] text-[14px] font-normal leading-[100%]">
                                            : Married
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="box-border flex h-[367px] w-[1440px] flex-col gap-[50px] bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)] px-[80px] pt-[100px] pb-[50px]">

                {/* Footer Layout 1 */}
                <div className="flex h-[144px] w-[1280px] flex-col gap-[10px]">


                    <div className="flex h-[18px] w-[111px] items-center">
                        <span className="font-['Poppins'] text-[12px] font-normal leading-[100%] tracking-[-0.2px] text-[rgba(68,68,68,1)]">
                            Payment Channels
                        </span>
                    </div>

                    <div className="flex h-[116px] w-[1280px] flex-col gap-[20px]">

                        {/* Payment Row 1 */}
                        <div className="flex h-[48px] w-[1280px] items-center gap-[20px]">
                            {paymentMethods.slice(0, 11).map((payment) => (
                                <div key={payment.name} className="flex h-[48px] w-[98.18px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white">
                                    <img src={payment.image} alt={payment.name} className="max-h-[30px] max-w-[72px] object-contain" />
                                </div>
                            ))}
                        </div>

                        {/* Payment Row 2 */}
                        <div className="flex h-[48px] w-[1280px] items-center justify-center gap-[20px]">
                            {paymentMethods.slice(11).map((payment) => (
                                <div key={payment.name} className="flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white">
                                    <img src={payment.image} alt={payment.name} className="max-h-[30px] max-w-[72px] object-contain" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Footer Layout 2 */}
                <div className="flex h-[23px] w-[1280px] items-center justify-between">

                    {/* Copyright */}
                    <div className="flex h-[23px] w-[403px] items-center">
                        <p className="m-0 font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[#444]">
                            Copyright © <span className="font-bold text-[rgba(172,62,37,1)]">360D Soul Limited</span> 2025. All rights reserved.
                        </p>
                    </div>

                    {/* Legal Links Layout */}
                    <div className="flex h-[23px] w-[827px] items-center justify-end gap-[50px]">
                        <div className="flex h-[23px] w-[140px] items-center">
                            <span className="font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[rgba(68,68,68,1)]">
                                Teams & Condition
                            </span>
                        </div>

                        <div className="flex h-[23px] w-[114px] items-center">
                            <span className="font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[rgba(68,68,68,1)]">
                                Privacy & Policy
                            </span>
                        </div>

                        <div className="flex h-[23px] w-[98px] items-center">
                            <span className="font-['Poppins'] text-[15px] font-normal leading-[100%] tracking-[-0.2px] text-[rgba(68,68,68,1)]">
                                Refund Policy
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}