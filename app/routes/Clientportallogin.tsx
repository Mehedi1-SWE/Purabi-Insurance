import { useNavigate } from "react-router";



export default function Clientportallogin() {
  const navigate = useNavigate();

  return (
    <div className="min-w-[1440px] font-['Poppins']">
      {/* Layout 1 - Navbar */}
      <nav className="flex h-[106px] w-[1440px] items-center justify-between border-b-[0.5px] border-black/20 px-[80px] py-[20px]">
        {/* Layout 1A - Logo */}
        <div
          className="flex h-[33.17px] w-[180px] cursor-pointer items-center"
          onClick={() => navigate("/landing-page-v2")}
        >
          <img
            src="public/logo.png"
            alt="Purabi General Insurance Co. Ltd."
            className="h-[46t.22px] w-[184.35px] object-contain [filter:brightness(0)_saturate(100%)_invert(28%)_sepia(54%)_saturate(1430%)_hue-rotate(338deg)_brightness(91%)_contrast(93%)]"
          />
        </div>

        {/* Layout 1B */}
        <div className="flex h-[43px] w-[798px] gap-[20px]">
          <button
            type="button"
            onClick={() => navigate("/landing-page-v2")}
            className="flex h-[43px] w-[193px] items-center justify-center gap-[10px] rounded-[5px] bg-[rgba(172,62,37,0.2)] px-[30px] py-[10px] transition-all duration-300 ease-out"
          >
            <span className="text-[15px] font-bold leading-[100%] capitalize text-[rgba(172,62,37,1)]">
              Go Back to Home
            </span>
          </button>
        </div>
      </nav>

      {/* Layout 2 */}
      <div className="flex h-[52px] w-[1440px] items-center gap-[10px] bg-[rgba(172,62,37,0.1)] p-[10px]">
        <p className="w-[554px] text-[14px] leading-[100%] text-[#444]">
          <span>2 </span>
          <span className="font-bold">
            premium Payment of ৳25,000 is due for policy no. 218242641 on 25
            July 2025
          </span>
        </p>
      </div>

      {/* Layout 3 */}
      <section className="flex h-[541px] w-[1440px] gap-[20px] bg-white px-[80px] py-[50px]">
        {/* Left Layout */}
        <div className="flex h-[441px] w-[300px] flex-col">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={item}
              className="flex h-[52px] w-[300px] items-center gap-[10px] px-[20px] py-[14px]"
              style={{
                backgroundColor:
                  index === 0 ? "rgba(172, 62, 37, 1)" : "transparent",
              }}
            >
              <div className="h-[24px] w-[107px] bg-white" />
            </div>
          ))}
        </div>

        {/* Right Layout */}
        <div className="flex h-[441px] w-[960px] flex-col gap-[30px]">
          {/* Right Layout 1 */}
          <div className="flex h-[45px] w-[155px] items-center">
            <h1 className="text-[30px] font-medium leading-[100%] capitalize text-black">
              My Details
            </h1>
          </div>

          {/* Right Layout 2 */}
          <div className="flex h-[65px] w-[228px] gap-[10px]">
            <div className="h-[65px] w-[65px] rounded-[5px] p-[10px]">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-[45px] w-[45px] rounded-[5px] object-cover"
              />
            </div>

            <div className="flex h-[65px] w-[153px] flex-col gap-[10px]">
              <div className="flex h-[27px] w-[153px] items-center gap-[5px] rounded-[10px]">
                <span className="text-[18px] font-normal leading-[100%] capitalize text-black">
                  tarif Al-Mozahed
                </span>
              </div>

              <div className="h-[28px] w-[103px] rounded-[2px] bg-[rgba(172,62,37,1)] px-[10px] py-[5px]" />
            </div>
          </div>

          {/* Right Layout 3 */}
          <div className="flex h-[271px] w-[960px] flex-col gap-[20px] rounded-[5px] bg-white p-[20px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
            <h2 className="h-[27px] w-[187px] text-[18px] font-medium leading-[100%] capitalize text-black">
              Account Information
            </h2>

            <div className="flex h-[184px] w-[920px] flex-col gap-[10px]">
              <div className="h-[24px] w-[920px] shrink-0" />
              <div className="h-[48px] w-[920px] shrink-0" />
              <div className="h-[24px] w-[920px] shrink-0" />
              <div className="h-[24px] w-[920px] shrink-0" />
              <div className="h-[24px] w-[920px] shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Layout 4 - Footer */}
      <footer
        className="h-[367px] w-[1440px] px-[80px] pt-[100px] pb-[50px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(172, 62, 37, 0) 0%, rgba(172, 62, 37, 0.1) 100%), #FFFFFF",
        }}
      />
    </div>
  );
}
