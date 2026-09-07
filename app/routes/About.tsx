import react from "react";
import ClaimsTracker from "../../components/ClaimsTracker";
import TrustedPartners from "../../components/TrustedPartners";




export default function AboutSection() {
    const [isPlaying, setIsPlaying] = react.useState(false);

    return (
        <>
            {/* ================================================== */}
            {/* About Banner */}
            {/* ================================================== */}

            <section
                className="h-[341px] w-[1440px] bg-cover bg-center px-[80px] py-[50px]"
                style={{
                    backgroundImage: "url('/About Banner.jpg')",
                }}
            >
                {/* Glass Parent Layout */}
                <div className="h-[241px] w-[1280px] rounded-[10px] bg-white/20 px-[20px] py-[30px] backdrop-blur-[10px]">

                    {/* 1st Layout */}
                    <div className="flex h-[41px] w-[181px] items-center justify-center rounded-[50px] border border-white/50 bg-white/10 px-[30px] py-[10px] backdrop-blur-[10px]">
                        <p className="w-[121px] text-center font-poppins text-[14px] font-medium leading-[100%] capitalize text-white">
                            Home &gt; About Us
                        </p>
                    </div>

                    {/* 2nd Layout */}
                    <div className="mt-[20px] h-[60px] w-[667px]">
                        <h1 className="font-poppins text-[35px] font-medium leading-[60px] capitalize text-white">
                            Securing Your Future with Confidence
                        </h1>
                    </div>

                    {/* 3rd Layout */}
                    <div className="mt-[10px] h-[60px] w-[1240px]">
                        <p className="font-poppins text-[20px] font-normal leading-[100%] tracking-[0%] text-white">
                            Driven by a vision of trust and reliability, we aim not just to sell
                            policies, but to build lasting relationships with our clients—
                            <br />
                            supporting you through every stage of life.
                        </p>
                    </div>

                </div>
            </section>


            {/* ================================================== */}
            {/* About Content Section */}
            {/* ================================================== */}

            <section className="h-[791px] w-[1440px] bg-white px-[80px] py-[100px]">

                {/* Main Layout → 1280 × 591 */}
                <div className="flex h-[591px] w-[1280px] gap-[20px]">


                    {/* ================================================== */}
                    {/* 1st Part → 630 × 591 */}
                    {/* ================================================== */}

                    <div className="relative h-[591px] w-[630px] shrink-0">


                        {/* ================================================== */}
                        {/* 1st Layout → Family Image */}
                        {/* ================================================== */}

                        <div className="absolute left-0 top-0 h-[421.61px] w-[428.86px] overflow-hidden rounded-[22.73px]">

                            <img
                                src="/about-image.jpg.png"
                                alt="Family"
                                className="h-full w-full object-cover"
                            />

                        </div>


                        {/* ================================================== */}
                        {/* 2nd Layout → Experience Box */}
                        {/* ================================================== */}

                        <div className="absolute left-[392.37px] top-[52.69px] z-20 h-[164.78px] w-[160.82px] rounded-[23.08px] border-[12px] border-solid border-white bg-[#AC3E25]">

                            {/* 27+ */}
                            <div className="absolute left-1/2 top-[34.62px] h-[48.47px] w-[91.56px] -translate-x-1/2">

                                <div className="absolute left-1/2 top-[-1.15px] h-[50.78px] w-[79.37px] -translate-x-1/2">

                                    <p className="m-0 flex h-full w-full items-center justify-center whitespace-nowrap text-center font-jakarta text-[42.16px] font-semibold leading-[48.47px] text-white">
                                        27+
                                    </p>

                                </div>

                            </div>


                            {/* YEARS OF EXPERIENCE */}
                            <div className="absolute left-1/2 top-[94.63px] h-[35.52px] w-[91.56px] -translate-x-1/2">

                                <div className="absolute left-1/2 top-[-1.25px] h-[36px] w-[99px] -translate-x-1/2">

                                    <p className="absolute left-1/2 top-0 m-0 w-[120px] -translate-x-1/2 text-center font-poppins text-[16.86px] font-semibold leading-[17.77px] text-white">
                                        YEARS OF
                                        <br />
                                        EXPERIENCE
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* ================================================== */}
                        {/* 4th Layout → Umbrella Image */}
                        {/* ================================================== */}

                        <div className="absolute left-[308.35px] top-[274.79px] z-10 h-[316.21px] w-[321.65px] overflow-hidden rounded-[23.86px] border-[12px] border-solid border-white">

                            <img
                                src="/about-image-4.jpg.png"
                                alt="Insurance protection"
                                className="h-full w-full object-cover"
                            />

                        </div>


                        {/* ================================================== */}
                        {/* 3rd Layout → Satisfied Clients */}
                        {/* ================================================== */}

                        <div className="absolute left-[50px] top-[439px] z-30 flex h-[120px] w-[357px] items-center gap-[20px] rounded-[26.03px] bg-white px-[12px] py-[10px] shadow-[0px_26.03px_65.06px_0px_#00000026]">

                            {/* Client Image → 100 × 100 */}
                            <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[13.01px] border-[3.9px] border-solid border-[#F6F6F6]">

                                <img
                                    src="/satis.jpg"
                                    alt="Satisfied client"
                                    className="h-full w-full object-cover"
                                />

                            </div>


                            {/* Client Information */}
                            <div className="h-[89px] w-[213px] shrink-0">

                                {/* 1000k+ */}
                                <div className="h-[43px] w-[109px]">

                                    <p className="m-0 whitespace-nowrap font-['Open_Sans'] text-[31.62px] font-semibold leading-[100%] tracking-[0%] text-black">
                                        1000k+
                                    </p>

                                </div>


                                {/* SATISFIED CLIENTS */}
                                <div className="h-[46px] w-[172px]">

                                    <p className="m-0 whitespace-nowrap bg-gradient-to-r from-[#46190F] to-[#AC3E25] bg-clip-text font-poppins text-[18.97px] font-semibold leading-[45.54px] tracking-[0%] text-transparent">
                                        SATISFIED CLIENTS
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>



                    {/* ================================================== */}
                    {/* 2nd Part → 630 × 591 */}
                    {/* ================================================== */}

                    <div className="flex h-[591px] w-[630px] shrink-0 flex-col gap-[20px]">


                        {/* ================================================== */}
                        {/* 2nd Part → 1st Part → 630 × 276 */}
                        {/* ================================================== */}

                        <div className="h-[276px] w-[630px]">


                            {/* ================================================== */}
                            {/* 1st Part → About Us */}
                            {/* ================================================== */}

                            <div className="flex h-[16px] w-[139px] items-center gap-[15px]">

                                {/* Horizontal Divider → 40 × 1 */}
                                <div className="h-[1px] w-[40px] shrink-0 bg-gradient-to-r from-[#AC3E25] to-[#46190F]" />


                                {/* ABOUT US → 84 × 16 */}
                                <div className="h-[16px] w-[84px] shrink-0">

                                    <p className="m-0 whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#9F0101] bg-clip-text font-poppins text-[16px] font-semibold leading-[15.4px] tracking-[0%] text-transparent">
                                        ABOUT US
                                    </p>

                                </div>

                            </div>


                            {/* ================================================== */}
                            {/* 2nd Part → Heading */}
                            {/* ================================================== */}

                            <div className="mt-[20px] flex h-[120px] w-[630px] items-center gap-[10px] py-[10px]">

                                <div className="h-[100px] w-[609px]">

                                    <h2 className="m-0 font-poppins text-[45px] font-bold leading-[50px] tracking-[0%] text-black">
                                        We’re Providing Best Insurance Policy's
                                    </h2>

                                </div>

                            </div>


                            {/* ================================================== */}
                            {/* 3rd Part → Description */}
                            {/* ================================================== */}

                            <div className="mt-[10px] flex h-[140px] w-[630px] items-center gap-[10px] py-[10px]">

                                <div className="h-[120px] w-[630px]">

                                    <p className="m-0 font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-justify text-black">

                                        Purabi General Insurance Company Limited (PGICL),{" "}

                                        <span className="font-bold">
                                            established on June 29, 1998
                                        </span>

                                        , is a leading insurer in Bangladesh, providing comprehensive
                                        general insurance services. Licensed under the Insurance Act,
                                        1938, PGICL offers a wide range of protection beyond life
                                        insurance, ensuring your peace of mind with reliable and
                                        innovative solutions.

                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* ================================================== */}
                        {/* 2nd Part → 2nd Part → 630 × 295 */}
                        {/* ================================================== */}

                        <div className="flex h-[295px] w-[630px] flex-row gap-[10px] rounded-[20px] bg-[#F6F6F6] p-[20px]">


                            {/* ================================================== */}
                            {/* 1st Part → 290 × 252 */}
                            {/* ================================================== */}

                            <div className="flex h-[252px] w-[290px] max-w-[350px] shrink-0 flex-col gap-[40px]">


                                {/* ================================================== */}
                                {/* 1st Part → Success Rate → 290 × 89 */}
                                {/* ================================================== */}

                                <div className="flex h-[89px] w-[290px] items-center gap-[10px]">


                                    {/* Icon Box → 82 × 89 */}
                                    <div className="flex h-[89px] w-[82px] shrink-0 items-center justify-center rounded-[10px] bg-[#AC3E25]">

                                        {/* Chart Icon */}
                                        <div className="relative h-[32px] w-[32px]">

                                            <div className="absolute bottom-[4px] left-[3px] h-[10px] w-[4px] border border-white" />

                                            <div className="absolute bottom-[4px] left-[11px] h-[17px] w-[4px] border border-white" />

                                            <div className="absolute bottom-[4px] left-[19px] h-[24px] w-[4px] border border-white" />

                                            <div className="absolute bottom-[3px] left-[1px] h-[1px] w-[25px] bg-white" />

                                        </div>

                                    </div>


                                    {/* ================================================== */}
                                    {/* Success Rate → 198 × 89 */}
                                    {/* ================================================== */}

                                    <div className="h-[89px] w-[198px] shrink-0">

                                        {/* 90% → 95 × 68 */}
                                        <div className="flex h-[68px] w-[95px] flex-col gap-[10px]">

                                            {/* 90% */}
                                            <div className="h-[42px] w-[95px]">

                                                <p className="m-0 whitespace-nowrap font-poppins text-[31px] font-semibold leading-[42px] text-black">
                                                    90%
                                                </p>

                                            </div>


                                            {/* SUCCESS RATE → 198 × 21 */}
                                            <div className="h-[21px] w-[198px]">

                                                <p className="m-0 whitespace-nowrap font-poppins text-[14px] font-semibold leading-[100%] tracking-[0%] text-[#737092]">
                                                    SUCCESS RATE
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>



                                {/* ================================================== */}
                                {/* 2nd Part → Benefits → 290 × 102 */}
                                {/* ================================================== */}

                                <div className="flex h-[102px] w-[290px] flex-col gap-[5px] rounded-[10px] bg-white p-[10px]">


                                    {/* ================================================== */}
                                    {/* 1st Item → 230 × 24 */}
                                    {/* ================================================== */}

                                    <div className="flex h-[24px] w-[230px] items-center gap-[5px]">

                                        {/* Check Icon */}
                                        <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">

                                            <span className="text-[9px] font-bold leading-none text-white">
                                                ✓
                                            </span>

                                        </div>


                                        {/* Text → 211 × 24 */}
                                        <div className="h-[24px] w-[211px] shrink-0">

                                            <p className="m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]">
                                                Comprehensive Coverage
                                            </p>

                                        </div>

                                    </div>



                                    {/* ================================================== */}
                                    {/* 2nd Item → 249 × 24 */}
                                    {/* ================================================== */}

                                    <div className="flex h-[24px] w-[249px] items-center gap-[5px]">

                                        {/* Check Icon */}
                                        <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">

                                            <span className="text-[9px] font-bold leading-none text-white">
                                                ✓
                                            </span>

                                        </div>


                                        {/* Text → 230 × 24 */}
                                        <div className="h-[24px] w-[230px] shrink-0">

                                            <p className="m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]">
                                                Customer-Centric Approach
                                            </p>

                                        </div>

                                    </div>



                                    {/* ================================================== */}
                                    {/* 3rd Item → 235 × 24 */}
                                    {/* ================================================== */}

                                    <div className="flex h-[24px] w-[235px] items-center gap-[5px]">

                                        {/* Check Icon */}
                                        <div className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-[#AC3E25]">

                                            <span className="text-[9px] font-bold leading-none text-white">
                                                ✓
                                            </span>

                                        </div>


                                        {/* Text → 216 × 24 */}
                                        <div className="h-[24px] w-[216px] shrink-0">

                                            <p className="m-0 whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0%] text-[#AC3E25B0]">
                                                Commitment to Excellence
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>



                            {/* ================================================== */}
                            {/* 2nd Part → Insurance Image → 290 × 255 */}
                            {/* ================================================== */}

                            <div className="h-[255px] w-[290px] shrink-0 overflow-hidden rounded-[20px]">

                                <img
                                    src="/Insurance About.jpg"
                                    alt="Insurance"
                                    className="h-full w-full object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <ClaimsTracker />


            <section className="box-border h-[712px] w-[1440px] bg-white px-[80px] py-[100px]">
                <div className="flex gap-[20px]">

                    {/* ================= 1st Layout ================= */}
                    <div className="flex h-[501px] w-[630px] shrink-0 flex-col gap-[30px]">

                        {/* ================= 1st Part ================= */}
                        <div className="relative h-[147px] w-[630px] shrink-0">

                            <div className="absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]">

                                <div className="flex h-[86px] w-[470px] flex-col gap-[10px]">

                                    <h3 className="h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent">
                                        100% Safe Money
                                    </h3>

                                    <p className="h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]">
                                        Your money is 100% secure with us, ensuring peace of mind.
                                    </p>

                                </div>

                            </div>

                            <div className="absolute left-[16px] top-0 box-border flex h-[125px] w-[99px] items-center justify-center rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] px-[17px] py-[30px] shadow-[1px_2px_21px_0px_#00000026]">

                                <img
                                    src="/Medel.png"
                                    alt="Medal"
                                    className="block h-full w-full object-contain"
                                />

                            </div>

                        </div>


                        {/* ================= 2nd Part ================= */}
                        <div className="relative h-[147px] w-[630px] shrink-0">

                            <div className="absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]">

                                <div className="flex h-[86px] w-[470px] flex-col gap-[10px]">

                                    <h3 className="h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent">
                                        Anytime Money Back
                                    </h3>

                                    <p className="h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]">
                                        Access your money anytime with Anytime Money Back for maximum convenience.
                                    </p>

                                </div>

                            </div>

                            <div className="absolute left-[16px] top-0 box-border flex h-[125px] w-[99px] items-center justify-center rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] px-[17px] py-[30px] shadow-[1px_2px_21px_0px_#00000026]">

                                <img
                                    src="/Money Back.png"
                                    alt="Money Back"
                                    className="block h-full w-full object-contain"
                                />

                            </div>

                        </div>


                        {/* ================= 3rd Part ================= */}
                        <div className="relative h-[147px] w-[630px] shrink-0">

                            <div className="absolute top-[23px] box-border h-[124px] w-[630px] rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border border-[#00000033] bg-gradient-to-r from-[#AC3E251A] to-transparent py-[19px] pl-[140px] pr-[20px]">

                                <div className="flex h-[86px] w-[470px] flex-col gap-[10px]">

                                    <h3 className="h-[28px] w-[470px] whitespace-nowrap bg-gradient-to-b from-[#AC3E25] to-[#46190F] bg-clip-text font-['Poppins'] text-[25px] font-semibold leading-[26.4px] text-transparent">
                                        Fast Process
                                    </h3>

                                    <p className="h-[48px] w-[470px] font-['Poppins'] text-[18px] font-normal leading-[24px] text-[#000000B2]">
                                        Experience a Fast Process with quick and efficient solutions tailored to your needs.
                                    </p>

                                </div>

                            </div>

                            <div className="absolute left-[16px] top-0 box-border flex h-[125px] w-[99px] items-center justify-center rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px] border-[3px] border-white bg-[#AC3E25] px-[17px] py-[30px] shadow-[1px_2px_21px_0px_#00000026]">

                                <img
                                    src="/Fast Process.png"
                                    alt="Fast Process"
                                    className="block h-full w-full object-contain"
                                />

                            </div>

                        </div>

                    </div>




                    {/* ================= 2nd Layout ================= */}
                    <div className="flex h-[512px] w-[630px] shrink-0 flex-col gap-[10px]">

                        {/* ================= 1st Layout ================= */}
                        <div className="flex h-[204px] w-[630px] shrink-0 flex-col gap-[10px]">

                            {/* ================= 1st Inner Layout ================= */}
                            <div className="flex h-[16px] w-[193px] shrink-0 items-center gap-[15px]">

                                {/* Horizontal Divider */}
                                <div className="h-[1px] w-[40px] shrink-0 bg-gradient-to-r from-[#AC3E25] to-[#9F0101]" />

                                {/* WHY CHOOSE US */}
                                <h3 className="h-[16px] w-[138px] shrink-0 bg-gradient-to-b from-[#AC3E25] to-[#9F0101] bg-clip-text font-['Poppins'] text-[16px] font-semibold leading-[15.4px] tracking-[0%] text-transparent">
                                    WHY CHOOSE US
                                </h3>

                            </div>


                            {/* ================= 2nd Inner Layout ================= */}
                            <div className="h-[100px] w-[630px] shrink-0">

                                <h2 className="h-[100px] w-[630px] font-['Poppins'] text-[45px] font-bold leading-[50px] tracking-[0%] text-black">
                                    Why You Should Choose Our Insurance Policy's
                                </h2>

                            </div>


                            {/* ================= 3rd Inner Layout ================= */}
                            <div className="box-border flex h-[68px] w-[630px] shrink-0 flex-col gap-[10px] py-[10px]">

                                <p className="h-[48px] w-[630px] font-['Poppins'] text-[16px] font-normal leading-[100%] tracking-[0%] text-[#000000B2]">
                                    Choose our insurance policy for comprehensive coverage, reliable protection, hassle-free claims, and a customer-focused experience.
                                </p>

                            </div>

                        </div>


                        {/* ================= 2nd Layout ================= */}
                        <div className="relative box-border h-[298px] w-[630px] shrink-0 overflow-hidden rounded-[20px] border-[4px] border-solid border-white shadow-[0px_20px_50px_0px_#00000026]">

                            {!isPlaying ? (
                                <>
                                    {/* Background Image */}
                                    <img
                                        src="/Choose Background.jpg"
                                        alt="Family"
                                        className="absolute inset-0 m-0 block h-full w-full max-w-none object-cover p-0"
                                    />

                                    {/* Play Button */}
                                    <button
                                        type="button"
                                        aria-label="Play video"
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute left-[275px] top-[109px] z-20 box-border h-[80px] w-[80px] cursor-pointer rounded-[40px] border-[2px] border-solid border-[#AC3E25] bg-[#FFFFFF33] backdrop-blur-[10px]"
                                    >
                                        <span className="absolute left-1/2 top-1/2 ml-[3px] h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#AC3E25]" />
                                    </button>
                                </>
                            ) : (
                                <video
                                    src="/Insurance Bank.mp4"
                                    controls
                                    autoPlay
                                    className="absolute inset-0 m-0 block h-full w-full max-w-none object-cover p-0"
                                />
                            )}

                        </div>

                    </div>
                </div>

            </section >
            <TrustedPartners />
        </>
    );
}










