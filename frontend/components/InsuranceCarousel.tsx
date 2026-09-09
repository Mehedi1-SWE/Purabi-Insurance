import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
    "/variant 1.jpg",
    "/variant 2.jpg",
    "/variant 3.jpg",
    "/variant 4.jpg",
    "/variant 5.jpg",
    "/variant 6.jpg",
];

type InsuranceCarouselProps = {
    width: number;
    height: number;
    headerWidth?: number;
    indicatorBottom?: number;
};

export default function InsuranceCarousel({
    width,
    height,
    headerWidth,
    indicatorBottom = 50,
}: InsuranceCarouselProps) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [activeSlide]);

    return (
        <div
            className="relative box-border shrink-0 overflow-hidden rounded-[50px] p-[50px]"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            {/* ================= Carousel Images ================= */}
            {slides.map((image, index) => (
                <img
                    key={image}
                    src={image}
                    alt=""
                    aria-hidden={activeSlide !== index}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1000ms] ease-linear ${activeSlide === index
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                        }`}
                />
            ))}

            {/* ================= Gradient Overlay ================= */}
            <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)]" />

            {/* ================= Header ================= */}
            <div
                className="relative z-30 flex h-[41px] justify-between"
                style={{
                    width: `${headerWidth ?? width - 100}px`,
                }}
            >
                {/* ================= Logo ================= */}
                <Link
                    to="/"
                    aria-label="Purabi General Insurance Co. Ltd."
                    className="relative h-[33.1722px] w-[180px] shrink-0"
                >
                    <div className="absolute left-[-2.18px] top-[-6.53px] h-[46.2236px] w-[184.3504px]">
                        <img
                            src="/logo.png"
                            alt="Purabi General Insurance Co. Ltd."
                            className="block h-[33.1722px] w-[180px] max-w-none object-contain"
                        />
                    </div>
                </Link>

                {/* ================= Login / Sign Up ================= */}
                <div className="flex h-[41px] w-[222px] shrink-0 gap-[10px]">
                    {/* Login */}
                    <Link
                        to="/login"
                        className="flex h-[41px] w-[98px] items-center justify-center rounded-[100px] px-[30px] py-[10px] backdrop-blur-[14px] transition-all duration-300 ease-out hover:scale-105 hover:bg-[linear-gradient(135deg,rgba(172,62,37,0.75)_0%,rgba(120,38,25,0.8)_45%,rgba(55,18,12,0.9)_100%)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_20px_rgba(172,62,37,0.2),inset_0_1px_0_rgba(255,255,255,0.25)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    >
                        <span className="h-[21px] w-[38px] font-['Poppins'] text-[14px] font-medium capitalize leading-[100%] tracking-[0%] text-white">
                            Login
                        </span>
                    </Link>

                    {/* Sign Up */}
                    <Link
                        to="/signup"
                        className="flex h-[41px] w-[114px] items-center justify-center gap-[10px] rounded-[100px] border-[0.5px] border-white bg-[#FFFFFF1A] px-[30px] py-[10px] backdrop-blur-[10px] transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        <span className="h-[21px] w-[54px] font-['Poppins'] text-[14px] font-medium capitalize leading-[100%] tracking-[0%] text-white">
                            Sign Up
                        </span>
                    </Link>
                </div>
            </div>

            {/* ================= Slider Indicators ================= */}
            <div
                className="absolute left-[50px] z-30 flex h-[5px] w-[510px] items-center gap-[15px]"
                style={{
                    bottom: `${indicatorBottom}px`,
                }}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-[5px] shrink-0 rounded-[100px] transition-all duration-[1000ms] ease-linear ${activeSlide === index
                            ? "w-[40px] bg-[rgba(172,62,37,1)]"
                            : "w-[15px] bg-[rgba(255,255,255,0.15)] backdrop-blur-[10px]"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}