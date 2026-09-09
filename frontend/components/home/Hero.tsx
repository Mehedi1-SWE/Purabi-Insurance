import { useState } from "react";
import { Link } from "react-router";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative box-border h-[800px] w-[1440px] min-w-[1280px] max-w-[1920px] overflow-hidden px-[80px]">

      {/* Background Image */}
      <img
        src="/hero.png.jpg"
        alt="Purabi General Insurance"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,#000000_100%)]" />

      {/* =====================================================
          INNER LAYOUT
          Width: 1000px
          Height: 429.2386px
      ===================================================== */}
      <div className="absolute left-[80px] top-1/2 h-[429.2386px] w-[1000px] -translate-y-1/2">

        {/* ===================================================
            1ST LAYOUT
            Width: 444.8681px
            Height: 20px
            Gap: 19.33px
        =================================================== */}
        <div className="absolute left-0 top-0 flex h-[20px] w-[444.8681px] items-center gap-[19.33px]">

          {/* Line */}
          <div className="h-[1.2885px] w-[51.5405px] shrink-0 bg-white" />

          {/* Text */}
          <p className="m-0 flex h-[20px] w-[374px] shrink-0 items-center font-['Poppins'] text-[20px] font-semibold leading-[19.84px] tracking-[0%] text-white">
            Protecting Value Through Innovation
          </p>

        </div>

        {/* ===================================================
            2ND LAYOUT
            Width: 1000px
            Height: 180px
        =================================================== */}
        <div className="absolute left-0 top-[45px] h-[180px] w-[1000px]">

          <h1 className="m-0 w-[1000px] font-['Poppins'] text-[60px] font-medium leading-[100%] tracking-[0%] text-white">
            Leading Insurance Solutions for
            <br />
            Your Peace of Mind
          </h1>

        </div>

        {/* ===================================================
            3RD LAYOUT
            Width: 879.0524px
            Height: 90px
        =================================================== */}
        <div className="absolute left-0 top-[240px] h-[90px] w-[879.0524px]">

          <p className="m-0 w-[879.0524px] font-['Poppins'] text-[20px] font-normal leading-[100%] tracking-[0%] text-white">
            Purabi General Insurance Company Limited (PGICL), established in 1988, is a leading
            <br />
            insurer in Bangladesh, providing comprehensive asset protection for corporate
            <br />
            organizations.
          </p>

        </div>

        {/* ===================================================
            4TH LAYOUT
            Width: 490.1112px
            Height: 64.4256px
            Gap: 45.1px
        =================================================== */}
        <div className="absolute left-0 top-[370px] flex h-[64.4256px] w-[490.1112px] items-center gap-[45.1px]">

          {/* =================================================
              DISCOVER MORE
              Width: 244.7914px
              Height: 60px
              Gap: 10px
              Padding: 15px 40px
              Radius: 5px
          ================================================= */}
          <Link
            to="/about"
            className="flex h-[60px] w-[244.7914px] shrink-0 items-center justify-center gap-[10px] rounded-[5px] bg-[rgba(172,62,37,1)] px-[40px] py-[15px] font-['Poppins'] text-[14px] font-medium leading-[100%] tracking-[0%] text-white no-underline transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#9F351F] hover:shadow-[0_6px_16px_rgba(172,62,37,0.3)]"
          >
            DISCOVER MORE
          </Link>

          {/* =================================================
              WATCH VIDEO
              Width: 200.2218px
              Height: 64.4256px
              Gap: 12.89px
          ================================================= */}
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            aria-label="Watch Video"
            className="group flex h-[64.4256px] w-[200.2218px] shrink-0 cursor-pointer items-center gap-[12.89px] border-0 bg-transparent p-0 text-white outline-none focus:outline-none focus:ring-0"
          >

            {/* Premium Play Button */}
            <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-white bg-transparent transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">

              {/* Play Triangle */}
              <span className="ml-[3px] h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />

            </span>

            {/* Watch Video Text */}
            <span className="whitespace-nowrap font-['Poppins'] text-[14px] font-semibold leading-[100%] tracking-[0%] text-white transition-transform duration-300 group-hover:translate-x-[2px]">
              WATCH VIDEO
            </span>

          </button>

        </div>
      </div>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-[2px]"
          onClick={() => setShowVideo(false)}
        >

          <div
            className="relative w-full max-w-[900px]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              className="absolute -top-[45px] right-0 flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black/30 p-0 text-[24px] leading-none text-white outline-none transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-0"
            >
              ×
            </button>

            {/* Video */}
            <video
              src="/insurance-video.mp4"
              controls
              autoPlay
              className="block w-full rounded-[5px]"
            />

          </div>
        </div>
      )}

    </section>
  );
}