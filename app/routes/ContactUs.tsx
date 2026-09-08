
import { Link } from "react-router";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-[#faf9f8] font-['Poppins'] text-[#171313]">

            {/* =========================================================
                PREMIUM CONTACT BANNER
            ========================================================= */}
            <section
                className="relative h-[400px] w-[1440px] overflow-hidden bg-cover bg-center px-[80px] py-[50px]"
                style={{
                    backgroundImage: "url('/contact-banner.jpg')",
                }}
            >

                {/* Light Premium Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,247,0.96)_0%,rgba(250,248,247,0.90)_28%,rgba(250,248,247,0.68)_52%,rgba(250,248,247,0.30)_78%,rgba(250,248,247,0.08)_100%)]" />

                {/* Soft Warm Glow */}
                <div className="absolute -left-[160px] -top-[170px] h-[400px] w-[400px] rounded-full bg-[#ac3e25]/[0.055] blur-[20px]" />

                {/* Decorative Circle */}
                <div className="absolute -right-[120px] -top-[120px] h-[310px] w-[310px] rounded-full border border-white/50 bg-white/[0.04]" />

                <div className="absolute -bottom-[180px] -right-[60px] h-[340px] w-[340px] rounded-full border border-[#ac3e25]/[0.08]" />


                {/* =====================================================
                    SAME CONTENT WIDTH / ALIGNMENT
                ===================================================== */}
                <div className="relative mx-auto flex h-full w-full items-center">

                    <div className="w-full">

                        {/* Label */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ac3e25]/15 bg-white/75 px-4 py-2 shadow-[0_6px_22px_rgba(55,30,20,0.06)] backdrop-blur-md">

                            <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#ac3e25] text-[10px] font-medium text-white">
                                ✓
                            </span>

                            <span className="text-[10px] font-medium uppercase tracking-[1.8px] text-[#8f3723]">
                                We're here to help
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="max-w-[760px] text-[38px] font-semibold leading-[1.08] tracking-[-1px] text-[#211a18] sm:text-[46px] lg:text-[54px]">

                            Let's talk about{" "}

                            <span className="text-[#ac3e25]">
                                what matters to you.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-5 max-w-[700px] text-[13px] leading-[1.8] text-[#625a56] sm:text-[14px]">

                            Whether you have a question about your policy, need help with
                            a claim, or simply want to understand your options, our team is
                            ready to help you find the right way forward.

                        </p>


                        {/* Buttons */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">

                            <a
                                href="#contact-form"
                                className="group inline-flex items-center gap-3 rounded-[5px] bg-[#ac3e25] px-6 py-3.5 text-[12px] font-medium text-white shadow-[0_9px_24px_rgba(172,62,37,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#922f1c] hover:shadow-[0_13px_30px_rgba(172,62,37,0.25)]"
                            >
                                Send us a message

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </a>


                            <a
                                href="#contact-information"
                                className="inline-flex items-center rounded-[5px] border border-[#d7cdc8] bg-white/70 px-6 py-3.5 text-[12px] font-medium text-[#403835] backdrop-blur-sm transition-all duration-300 hover:border-[#ac3e25]/30 hover:bg-white"
                            >
                                Contact information
                            </a>

                        </div>


                        {/* Trust Line */}
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] text-[#817873]">

                            <div className="flex -space-x-1">

                                <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-[#f5f1ef] bg-[#ac3e25] text-[8px] text-white">
                                    ✓
                                </span>

                                <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-[#f5f1ef] bg-[#332c29] text-[8px] text-white">
                                    ✓
                                </span>

                                <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border-2 border-[#f5f1ef] bg-[#94796e] text-[8px] text-white">
                                    ✓
                                </span>

                            </div>

                            <span>
                                Friendly support · Clear answers · Reliable guidance
                            </span>

                        </div>

                    </div>

                </div>


                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#ac3e25] via-[#ac3e25]/35 to-transparent" />

            </section>


            {/* =========================================================
                CONTACT INFORMATION + FORM
            ========================================================= */}
            <section
                id="contact-information"
                className="w-full px-6 py-[65px] sm:px-8 lg:px-12 xl:px-[60px]"
            >

                <div className="grid w-full gap-10 lg:grid-cols-[390px_minmax(0,1fr)]">


                    {/* =====================================================
                        CONTACT INFORMATION CARD
                    ===================================================== */}
                    <div className="relative overflow-hidden rounded-[9px] bg-[#111111] p-8 text-white sm:p-9">

                        {/* Decorative Elements */}
                        <div className="absolute -right-[100px] -top-[100px] h-[260px] w-[260px] rounded-full border border-white/[0.06]" />

                        <div className="absolute -bottom-[100px] -left-[70px] h-[240px] w-[240px] rounded-full bg-[#ac3e25]/10 blur-[20px]" />


                        <div className="relative">

                            <p className="text-[10px] font-medium uppercase tracking-[1.8px] text-white/40">
                                Purabi Insurance
                            </p>


                            <h2 className="mt-5 max-w-[320px] text-[29px] font-semibold leading-[1.25] tracking-[-0.5px]">
                                Let's make insurance easier for you.
                            </h2>


                            <p className="mt-4 max-w-[330px] text-[13px] leading-[1.8] text-white/50">
                                Have a question? Our team is ready to help you understand
                                your policy, claim or coverage options.
                            </p>


                            {/* Contact Details */}
                            <div className="mt-10 space-y-6">


                                {/* Office */}
                                <div className="flex gap-4">

                                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[5px] bg-white/[0.07] text-[15px] text-[#c77761]">
                                        ◷
                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[1.2px] text-white/35">
                                            Office hours
                                        </p>

                                        <p className="mt-1.5 text-[12px] leading-[1.65] text-white/75">
                                            Sunday to Thursday
                                            <br />
                                            10 AM to 6 PM
                                        </p>

                                    </div>

                                </div>


                                {/* Support */}
                                <div className="flex gap-4">

                                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[5px] bg-white/[0.07] text-[15px] text-[#c77761]">
                                        ✓
                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[1.2px] text-white/35">
                                            Customer support
                                        </p>

                                        <p className="mt-1.5 text-[12px] leading-[1.65] text-white/75">
                                            We're here to help with
                                            <br />
                                            your insurance needs.
                                        </p>

                                    </div>

                                </div>


                                {/* Enquiries */}
                                <div className="flex gap-4">

                                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[5px] bg-white/[0.07] text-[15px] text-[#c77761]">
                                        +
                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[1.2px] text-white/35">
                                            Enquiries
                                        </p>

                                        <p className="mt-1.5 text-[12px] leading-[1.65] text-white/75">
                                            Policies · Claims
                                            <br />
                                            Payments · General enquiries
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Bottom Text */}
                            <div className="mt-10 border-t border-white/[0.08] pt-6">

                                <p className="text-[11px] leading-[1.7] text-white/40">
                                    We believe good insurance starts with a clear conversation.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        CONTACT FORM
                    ===================================================== */}
                    <div
                        id="contact-form"
                        className="rounded-[9px] border border-[#e9dfdb] bg-white p-7 shadow-[0_10px_35px_rgba(40,25,20,0.05)] sm:p-9"
                    >

                        {/* Form Header */}
                        <div className="flex items-start justify-between gap-5">

                            <div>

                                <p className="text-[10px] font-medium uppercase tracking-[1.7px] text-[#ac3e25]">
                                    Get in touch
                                </p>

                                <h2 className="mt-2 text-[27px] font-semibold tracking-[-0.6px] text-[#211a18]">
                                    Send us a message
                                </h2>

                                <p className="mt-2 max-w-[560px] text-[13px] leading-[1.7] text-[#77706d]">
                                    Fill in the details below and our team will help you with
                                    your enquiry.
                                </p>

                            </div>


                            <div className="hidden h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[6px] bg-[#ac3e25]/10 text-[17px] text-[#ac3e25] sm:flex">
                                →
                            </div>

                        </div>


                        {/* Form */}
                        <form className="mt-8">


                            {/* Name + Email */}
                            <div className="grid gap-5 sm:grid-cols-2">

                                <label className="block">

                                    <span className="text-[11px] font-medium text-[#4e4845]">
                                        Full name
                                    </span>

                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="mt-2 h-[48px] w-full rounded-[5px] border border-[#ddd5d1] bg-[#fdfcfb] px-4 text-[13px] text-[#222] outline-none transition-all placeholder:text-[#aaa3a0] focus:border-[#ac3e25] focus:bg-white focus:ring-2 focus:ring-[#ac3e25]/10"
                                    />

                                </label>


                                <label className="block">

                                    <span className="text-[11px] font-medium text-[#4e4845]">
                                        Email address
                                    </span>

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="mt-2 h-[48px] w-full rounded-[5px] border border-[#ddd5d1] bg-[#fdfcfb] px-4 text-[13px] text-[#222] outline-none transition-all placeholder:text-[#aaa3a0] focus:border-[#ac3e25] focus:bg-white focus:ring-2 focus:ring-[#ac3e25]/10"
                                    />

                                </label>

                            </div>


                            {/* Phone + Subject */}
                            <div className="mt-5 grid gap-5 sm:grid-cols-2">

                                <label className="block">

                                    <span className="text-[11px] font-medium text-[#4e4845]">
                                        Phone number
                                    </span>

                                    <input
                                        type="tel"
                                        placeholder="+880"
                                        className="mt-2 h-[48px] w-full rounded-[5px] border border-[#ddd5d1] bg-[#fdfcfb] px-4 text-[13px] text-[#222] outline-none transition-all placeholder:text-[#aaa3a0] focus:border-[#ac3e25] focus:bg-white focus:ring-2 focus:ring-[#ac3e25]/10"
                                    />

                                </label>


                                <label className="block">

                                    <span className="text-[11px] font-medium text-[#4e4845]">
                                        Subject
                                    </span>

                                    <select
                                        defaultValue=""
                                        className="mt-2 h-[48px] w-full rounded-[5px] border border-[#ddd5d1] bg-[#fdfcfb] px-4 text-[13px] text-[#555] outline-none transition-all focus:border-[#ac3e25] focus:bg-white focus:ring-2 focus:ring-[#ac3e25]/10"
                                    >

                                        <option value="" disabled>
                                            Select a topic
                                        </option>

                                        <option value="policy">
                                            Policy enquiry
                                        </option>

                                        <option value="claim">
                                            Claims support
                                        </option>

                                        <option value="payment">
                                            Payment enquiry
                                        </option>

                                        <option value="general">
                                            General enquiry
                                        </option>

                                    </select>

                                </label>

                            </div>


                            {/* Message */}
                            <label className="mt-5 block">

                                <span className="text-[11px] font-medium text-[#4e4845]">
                                    Message
                                </span>

                                <textarea
                                    placeholder="Tell us a little more about how we can help..."
                                    className="mt-2 h-[145px] w-full resize-none rounded-[5px] border border-[#ddd5d1] bg-[#fdfcfb] p-4 text-[13px] leading-[1.6] text-[#222] outline-none transition-all placeholder:text-[#aaa3a0] focus:border-[#ac3e25] focus:bg-white focus:ring-2 focus:ring-[#ac3e25]/10"
                                />

                            </label>


                            {/* Submit */}
                            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#eee8e5] pt-6 sm:flex-row sm:items-center">

                                <p className="max-w-[430px] text-[10px] leading-[1.6] text-[#99918d]">
                                    By submitting this form, you agree that our team may contact
                                    you regarding your enquiry.
                                </p>


                                <button
                                    type="button"
                                    className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-[5px] bg-[#ac3e25] px-7 py-3.5 text-[12px] font-medium text-white shadow-[0_8px_20px_rgba(172,62,37,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#922f1c] hover:shadow-[0_12px_26px_rgba(172,62,37,0.22)]"
                                >

                                    Send message

                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BOTTOM CTA
            ========================================================= */}
            <section className="w-full px-6 pb-[70px] sm:px-8 lg:px-12 xl:px-[60px]">

                <div className="relative overflow-hidden rounded-[9px] bg-[#f2ebe7] px-7 py-9 sm:px-10">

                    {/* Decorative Circle */}
                    <div className="absolute -right-[70px] -top-[110px] h-[270px] w-[270px] rounded-full border border-[#ac3e25]/10" />


                    <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                        <div>

                            <p className="text-[10px] font-medium uppercase tracking-[1.7px] text-[#ac3e25]">
                                Need immediate assistance?
                            </p>

                            <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.4px] text-[#211a18]">
                                We're ready when you are.
                            </h3>

                            <p className="mt-2 text-[12px] text-[#746b67]">
                                Start a conversation with our team today.
                            </p>

                        </div>


                        <Link
                            to="/quote"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-[5px] bg-[#111] px-6 py-3.5 text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#292424]"
                        >

                            Get a quote

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>

                        </Link>

                    </div>

                </div>

            </section>

        </div>
    );
}

