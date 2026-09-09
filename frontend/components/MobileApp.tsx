export default function MobileApp() {
    return (
        <section className="h-[654.3424px] w-[1440px] px-[80px] py-[50px]">
            <div className="flex h-[554.3424px] w-[1280px] flex-col items-center gap-[30px] overflow-hidden rounded-[20px] border border-[#00000033] bg-[linear-gradient(180deg,rgba(172,62,37,0)_0%,rgba(172,62,37,0.1)_100%)] pt-[50px]">

                {/* Content */}
                <div className="h-[148.39px] w-[1036px]">

                    {/* Section Label */}
                    <div className="flex h-[15.39px] w-full items-center justify-center">
                        <div className="flex items-center gap-[15px]">

                            <span
                                className="h-[1px] w-[40px]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)",
                                }}
                            />

                            <span
                                className="whitespace-nowrap font-['Poppins'] text-[14px] font-semibold uppercase leading-[15.4px]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                GET OUR MOBILE APP
                            </span>

                            <span
                                className="h-[1px] w-[40px]"
                                style={{
                                    background:
                                        "linear-gradient(0deg, #AC3E25 0%, #9F0101 100%)",
                                }}
                            />

                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mx-auto flex h-[88px] w-[681px] items-center justify-center py-[10px]">
                        <h1 className="whitespace-nowrap text-center font-['Poppins'] text-[45px] font-bold uppercase leading-[100%] text-black">
                            EXPERIENCED OUR MOBILE APP
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="h-[45px] w-[1036px] text-center font-['Poppins'] text-[14px] font-normal leading-[24px] text-[#000000B2]">
                        Simplify your insurance experience with our mobile app. Access your
                        policy details, track claims, and receive instant updates anytime,
                        anywhere.
                        <br />
                        Stay in control of your coverage with just a few taps. Download now
                        for convenience and peace of mind!
                    </p>

                </div>

                {/* Download Buttons */}
                <div className="flex h-[40px] w-[260px] gap-[20px]">

                    {/* Google Play */}
                    <a
                        href="https://play.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[40px] w-[120px] overflow-hidden rounded-[6px] border border-[#A6A6A6] bg-black transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        <img
                            src="/Android Store.png"
                            alt="Get it on Google Play"
                            className="h-full w-full object-cover"
                        />
                    </a>

                    {/* App Store */}
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[40px] w-[120px] overflow-hidden rounded-[6px] border border-[#A6A6A6] bg-black transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        <img
                            src="/Apple Store.png"
                            alt="Download on the App Store"
                            className="h-full w-full object-cover"
                        />
                    </a>

                </div>

                {/* Mobile Images */}
                <div className="relative mx-auto h-[255.9524px] w-[400px] shrink-0 overflow-hidden">

                    {/* Left Phone */}
                    <div className="absolute left-[24px] top-0 h-[394.2831px] w-[194.3843px]">

                        {/* Left Phone Background */}
                        <img
                            src="/backleft.png"
                            alt=""
                            className="absolute left-[3.9px] top-[2.67px] h-[389.6877px] w-[187.0317px] rotate-[6deg]"
                        />

                        {/* Left Phone Device */}
                        <img
                            src="/BIphone.png"
                            alt="Left Mobile"
                            className="absolute left-[10.97px] top-[9.74px] h-[376.8207px] w-[174.1647px] rotate-[6deg]"
                        />

                    </div>

                    {/* Right Phone */}
                    <div className="absolute left-[138px] top-0 z-10 h-[394.2832px] w-[194.3843px]">

                        {/* Right Phone Background */}
                        <img
                            src="/backright.png"
                            alt=""
                            className="absolute left-0 top-0 h-[394.2832px] w-[194.3843px] rotate-[-6deg] shadow-[5.36px_13.69px_2.38px_0px_#00000040]"
                        />

                        {/* Right Phone Device */}
                        <img
                            src="/Iphone 16 Pro.png"
                            alt="Right Mobile"
                            className="absolute left-[10.97px] top-[9.74px] h-[376.8207px] w-[174.1647px] rotate-[-6deg]"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
} 