import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router";

const paymentMethods = [
  {
    name: "VISA",
    image: "/visa-logo-png-transparent.png.png",
  },
  {
    name: "Mastercard",
    image: "/Mastercard.png",
  },
  {
    name: "Nagad",
    image: "/Nagad-Logo.wine.png.png",
  },
  {
    name: "bKash",
    image: "/bkash-log-png.png.png",
  },
  {
    name: "Rocket",
    image:
      "/dutch-bangla-rocket-logo-png_seeklogo.png.png",
  },
  {
    name: "Upay",
    image: "/upay.png.jpg",
  },
  {
    name: "SureCash",
    image:
      "/surecash-logo-sure-cash-mobile-banking.png.jpg",
  },
  {
    name: "TapTap Send",
    image: "/taptap.png.png",
  },
  {
    name: "CellFin",
    image: "/cellfin.png.png",
  },
  {
    name: "Dutch-Bangla Bank",
    image: "/Dutch-Bangla-Bank-ltd.png.png",
  },
  {
    name: "City Bank",
    image: "/city-bank-logo.png.png",
  },
  {
    name: "Islami Bank",
    image:
      "/islami-bank-bangladesh.png.png",
  },
  {
    name: "BRAC Bank",
    image: "/Brac-Bank-Logo.png.png",
  },
  {
    name: "UCB",
    image:
      "/united-commercial-bank-UCB.png.png",
  },
  {
    name: "EBL",
    image: "/simple-math.png.png",
  },
];

const menuItems = [
  {
    label: "Profile Details",
    path: "/client-portal",
  },
  {
    label: "My Orders",
    path: "/client-portal/orders",
  },
  {
    label: "My Polices",
    path: "/client-portal/policies",
  },
  {
    label: "My Claims",
    path: "/client-portal/claims",
  },
  {
    label: "Claims Tracker",
    path: "/client-portal/claims-tracker",
  },
  {
    label: "Notifications",
    path: "/client-portal/notifications",
  },
  {
    label: "Settings",
    path: "/client-portal/settings",
  },
];

export default function Clientportallogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/client-portal") {
      return location.pathname === "/client-portal";
    }

    return location.pathname === path;
  };

  return (
    <div className="min-w-[1440px] bg-white">

      {/* ================= Navbar ================= */}
      <nav className="flex h-[106px] w-[1440px] items-center justify-between border-b border-black/20 px-[80px]">

        <div className="relative flex h-[46.22px] w-[184.35px] items-center justify-center">

          <img
            src="/logo.png"
            alt="Purabi General Insurance"
            className="h-[33.17px] w-[180px] cursor-pointer object-contain opacity-0"
            onClick={() => navigate("/")}
          />

          <div className="pointer-events-none absolute inset-0 bg-[rgba(172,62,37,1)] [mask:url('/logo.png')_center/contain_no-repeat]" />

        </div>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="group relative h-[43px] w-[193px] overflow-hidden rounded-[5px] border border-[rgba(172,62,37,0.25)] bg-[rgba(172,62,37,0.2)] px-[30px] py-[10px] text-[15px] font-bold text-[rgba(172,62,37,1)] shadow-[0_4px_12px_rgba(172,62,37,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[rgba(172,62,37,1)] hover:text-white hover:shadow-[0_8px_22px_rgba(172,62,37,0.28)] active:scale-[0.98]"
        >

          <span className="pointer-events-none absolute inset-y-0 -left-[80px] w-[45px] rotate-[20deg] bg-white/30 blur-[4px] transition-all duration-700 group-hover:left-[220px]" />

          <span className="relative z-10">
            Go Back to Home
          </span>

        </button>

      </nav>


      {/* ================= Notification ================= */}
      <div className="flex h-[52px] w-[1440px] items-center justify-center gap-[10px] bg-[rgba(172,62,37,0.1)] p-[10px]">

        <img
          src="/notification.png"
          alt="Notification"
          className="h-[32px] w-[32px] object-contain"
        />

        <p className="text-center text-[14px] leading-[100%] text-[#444]">

          2{" "}

          <span className="font-bold">
            premium Payment of ৳25,000 is due for policy
            no. 218242641 on 25 July 2025
          </span>

        </p>

      </div>


      {/* ================= Main Content ================= */}
      <section className="flex h-[541px] w-[1440px] gap-[20px] px-[80px] py-[50px]">


        {/* ================= Sidebar ================= */}
        <div className="h-[441px] w-[300px]">

          {menuItems.map((item) => {

            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex h-[52px] w-[300px] items-center px-[20px] no-underline transition-colors duration-200 ${active
                  ? "bg-[rgba(172,62,37,1)] text-white"
                  : "bg-white text-[#444] hover:bg-[rgba(172,62,37,0.08)]"
                  }`}
              >

                <p
                  className={`m-0 font-['Poppins'] text-[16px] font-normal leading-[100%] ${active
                    ? "text-white"
                    : "text-[#444]"
                    }`}
                >
                  {item.label}
                </p>

              </Link>
            );

          })}

        </div>


        {/* ================= Right Content ================= */}
        <div className="flex w-[960px] flex-col gap-[30px]">

          <h1 className="m-0 text-[30px] font-medium">
            My Details
          </h1>


          {/* Profile */}
          <div className="flex h-[65px] w-[228px] gap-[10px]">

            <img
              src="/profile.png"
              alt="Profile"
              className="h-[65px] w-[65px] rounded-[5px] object-cover"
            />

            <div
              className="flex h-[28px] w-[103px] cursor-pointer items-center gap-[10px] rounded-[2px] bg-[rgba(172,62,37,1)] px-[10px] py-[5px]"
              onClick={() =>
                navigate("/client-portal")
              }
            >

              <img
                src="/Edit.png"
                alt="Edit"
                className="h-[12px] w-[12px] object-contain"
              />

              <span className="font-['Poppins'] text-[12px] font-light leading-[100%] text-white">
                Edit Profile
              </span>

            </div>

          </div>


          {/* ================= Account Information ================= */}
          <div className="flex h-[271px] w-[960px] flex-col gap-[20px] rounded-[5px] bg-white p-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">

            <h2 className="m-0 font-['Poppins'] text-[18px] font-medium leading-[100%]">
              Account Information
            </h2>

            {/* Personal Information comes here */}
            <Outlet />

          </div>

        </div>

      </section>


      {/* ================= Footer ================= */}
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

              {paymentMethods
                .slice(0, 11)
                .map((payment) => (

                  <div
                    key={payment.name}
                    className="flex h-[48px] w-[98.18px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white"
                  >

                    <img
                      src={payment.image}
                      alt={payment.name}
                      className="max-h-[30px] max-w-[72px] object-contain"
                    />

                  </div>

                ))}

            </div>


            {/* Payment Row 2 */}
            <div className="flex h-[48px] w-[1280px] items-center justify-center gap-[20px]">

              {paymentMethods
                .slice(11)
                .map((payment) => (

                  <div
                    key={payment.name}
                    className="flex h-[48px] w-[98.67px] shrink-0 items-center justify-center rounded-[5px] border border-[rgba(172,62,37,0.2)] bg-white"
                  >

                    <img
                      src={payment.image}
                      alt={payment.name}
                      className="max-h-[30px] max-w-[72px] object-contain"
                    />

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

              Copyright ©{" "}

              <span className="font-bold text-[rgba(172,62,37,1)]">
                360D Soul Limited
              </span>{" "}

              2025. All rights reserved.

            </p>

          </div>


          {/* Legal Links */}
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