
import { Link } from "react-router";

const claimSteps = [
    {
        number: "01",
        title: "Register your claim",
        description:
            "Tell us what happened and share your policy details. Our team will guide you through the next step.",
    },
    {
        number: "02",
        title: "Submit documents",
        description:
            "Provide the required documents and supporting information so we can start reviewing your claim.",
    },
    {
        number: "03",
        title: "Claim assessment",
        description:
            "Our claims team reviews your information carefully and keeps you updated throughout the process.",
    },
    {
        number: "04",
        title: "Settlement",
        description:
            "Once your claim is approved, we process the settlement through the appropriate payment channel.",
    },
];

const documents = [
    "Policy number or policy document",
    "National ID or identification document",
    "Incident or loss details",
    "Relevant photographs or evidence",
    "Invoices, receipts or supporting documents",
    "Any report required for your specific claim",
];

export default function Claims() {
    return (
        <div className="min-h-screen bg-[#faf9f8] font-['Poppins'] text-[#171313]">

            {/* =========================================================
          PREMIUM CLAIMS BANNER
      ========================================================= */}
            <section className="relative min-h-[475px] overflow-hidden bg-[#f3eeeb]">

                {/* Background Image */}
                <img
                    src="/claims-banner.jpg"
                    alt="Purabi Insurance claims support"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Soft premium overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,247,0.99)_0%,rgba(250,248,247,0.96)_28%,rgba(250,248,247,0.82)_47%,rgba(250,248,247,0.45)_67%,rgba(250,248,247,0.08)_100%)]" />

                {/* Subtle warm glow */}
                <div className="absolute -left-[120px] -top-[150px] h-[400px] w-[400px] rounded-full bg-[#ac3e25]/[0.06] blur-[20px]" />

                <div className="relative mx-auto flex min-h-[475px] w-full max-w-[1280px] items-center px-6 py-16 lg:px-0">

                    <div className="max-w-[650px]">

                        {/* Eyebrow */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ac3e25]/15 bg-white/75 px-4 py-2 shadow-[0_5px_20px_rgba(65,35,25,0.06)] backdrop-blur-md">

                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#ac3e25] text-[10px] text-white">
                                ✓
                            </span>

                            <span className="text-[11px] font-medium uppercase tracking-[1.6px] text-[#8f3723]">
                                Claims support
                            </span>

                        </div>

                        {/* Heading */}
                        <h1 className="max-w-[620px] text-[42px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#211a18] sm:text-[50px] lg:text-[56px]">
                            When you need us most,
                            <span className="block text-[#ac3e25]">
                                we're here to help.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-[590px] text-[15px] leading-[1.8] text-[#5f5753] sm:text-[16px]">
                            Making a claim shouldn't feel complicated. Our team is here to
                            help you understand the process, prepare the right documents
                            and move forward with confidence.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">

                            <Link
                                to="/contact-us"
                                className="group inline-flex items-center gap-3 rounded-[5px] bg-[#ac3e25] px-6 py-3.5 text-[13px] font-medium text-white shadow-[0_10px_25px_rgba(172,62,37,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#922f1c] hover:shadow-[0_14px_32px_rgba(172,62,37,0.25)]"
                            >
                                Get claims assistance

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                            <a
                                href="#claim-process"
                                className="inline-flex items-center rounded-[5px] border border-[#d9cfca] bg-white/70 px-6 py-3.5 text-[13px] font-medium text-[#3d3532] backdrop-blur-sm transition-all duration-300 hover:border-[#ac3e25]/30 hover:bg-white"
                            >
                                See how it works
                            </a>

                        </div>

                    </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#ac3e25] via-[#ac3e25]/30 to-transparent" />

            </section>


            {/* =========================================================
          QUICK CLAIM INTRO
      ========================================================= */}
            <section className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-0 lg:py-[72px]">

                <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-center">

                    <div>

                        <p className="text-[11px] font-medium uppercase tracking-[1.8px] text-[#ac3e25]">
                            A simpler claims experience
                        </p>

                        <h2 className="mt-3 max-w-[650px] text-[30px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#211a18] sm:text-[36px]">
                            Clear guidance from your first call to final settlement.
                        </h2>

                        <p className="mt-5 max-w-[670px] text-[14px] leading-[1.85] text-[#68615e]">
                            We believe the claims process should be transparent and easy to
                            understand. That's why we keep the journey structured, provide
                            clear communication and help you understand what happens next.
                        </p>

                    </div>

                    {/* Highlight Card */}
                    <div className="relative overflow-hidden rounded-[8px] border border-[#eaded9] bg-white p-7 shadow-[0_12px_35px_rgba(40,25,20,0.06)]">

                        <div className="absolute right-0 top-0 h-[110px] w-[110px] rounded-full bg-[#ac3e25]/[0.06] blur-[1px]" />

                        <div className="relative">

                            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[6px] bg-[#ac3e25]/10 text-[18px] text-[#ac3e25]">
                                ✓
                            </div>

                            <h3 className="mt-5 text-[19px] font-semibold text-[#211a18]">
                                One step at a time
                            </h3>

                            <p className="mt-2 text-[13px] leading-[1.7] text-[#716966]">
                                Don't know where to start? That's okay. Our team can help you
                                understand what information and documents you'll need.
                            </p>

                            <Link
                                to="/contact-us"
                                className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-[#ac3e25] transition-all hover:gap-3"
                            >
                                Talk to our team
                                <span>→</span>
                            </Link>

                        </div>
                    </div>

                </div>

            </section>


            {/* =========================================================
          CLAIM PROCESS
      ========================================================= */}
            <section
                id="claim-process"
                className="border-y border-[#eee5e1] bg-white"
            >

                <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-0 lg:py-[78px]">

                    <div className="text-center">

                        <p className="text-[11px] font-medium uppercase tracking-[1.8px] text-[#ac3e25]">
                            Claim journey
                        </p>

                        <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.7px] sm:text-[36px]">
                            Four simple steps
                        </h2>

                        <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.8] text-[#706966]">
                            We've designed the process to be straightforward, so you can
                            focus on what matters while we take care of the details.
                        </p>

                    </div>


                    {/* Steps */}
                    <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                        {/* Connecting line */}
                        <div className="absolute left-[12%] right-[12%] top-[31px] hidden h-px bg-[#e8d9d4] lg:block" />

                        {claimSteps.map((step) => (
                            <div
                                key={step.number}
                                className="group relative rounded-[8px] border border-[#ece3df] bg-[#faf9f8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ac3e25]/20 hover:bg-white hover:shadow-[0_16px_35px_rgba(45,25,20,0.07)]"
                            >

                                <div className="relative z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#e5d5d0] bg-white shadow-[0_5px_16px_rgba(50,30,25,0.06)] transition-all duration-300 group-hover:border-[#ac3e25]/30">

                                    <span className="text-[13px] font-semibold text-[#ac3e25]">
                                        {step.number}
                                    </span>

                                </div>

                                <h3 className="mt-7 text-[18px] font-semibold text-[#211a18]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-[13px] leading-[1.75] text-[#716966]">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* =========================================================
          DOCUMENT CHECKLIST
      ========================================================= */}
            <section className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-0 lg:py-[78px]">

                <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">

                    {/* Left */}
                    <div>

                        <p className="text-[11px] font-medium uppercase tracking-[1.8px] text-[#ac3e25]">
                            Before you submit
                        </p>

                        <h2 className="mt-3 text-[30px] font-semibold leading-[1.2] tracking-[-0.7px] sm:text-[35px]">
                            Keep these documents ready.
                        </h2>

                        <p className="mt-5 max-w-[500px] text-[14px] leading-[1.85] text-[#706966]">
                            Having the right information available can make your claim
                            easier to process. Requirements can vary depending on your
                            policy and the type of claim.
                        </p>

                        <Link
                            to="/contact-us"
                            className="mt-7 inline-flex items-center gap-2 rounded-[5px] bg-[#111] px-6 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#252020]"
                        >
                            Ask what you need
                            <span>→</span>
                        </Link>

                    </div>


                    {/* Checklist */}
                    <div className="rounded-[8px] border border-[#eaded9] bg-white p-7 shadow-[0_10px_30px_rgba(40,25,20,0.05)] sm:p-9">

                        <div className="grid gap-4 sm:grid-cols-2">

                            {documents.map((document) => (
                                <div
                                    key={document}
                                    className="flex items-start gap-3 rounded-[6px] bg-[#faf8f7] p-4 transition-colors duration-200 hover:bg-[#f6efec]"
                                >

                                    <span className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#ac3e25]/10 text-[10px] font-semibold text-[#ac3e25]">
                                        ✓
                                    </span>

                                    <p className="text-[12px] leading-[1.6] text-[#514a47]">
                                        {document}
                                    </p>

                                </div>
                            ))}

                        </div>

                        <div className="mt-6 border-t border-[#eee5e1] pt-5">

                            <p className="text-[11px] leading-[1.7] text-[#8a817d]">
                                <span className="font-medium text-[#5e5652]">
                                    Please note:
                                </span>{" "}
                                The exact documents required may differ depending on your
                                policy and claim type.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
          PREMIUM SUPPORT CTA
      ========================================================= */}
            <section className="mx-auto w-full max-w-[1280px] px-6 pb-[70px] lg:px-0 lg:pb-[80px]">

                <div className="relative overflow-hidden rounded-[10px] bg-[#111] px-7 py-10 sm:px-10 lg:px-12 lg:py-11">

                    {/* Decorative shapes */}
                    <div className="absolute -right-[90px] -top-[110px] h-[280px] w-[280px] rounded-full border border-white/[0.06]" />

                    <div className="absolute -right-[35px] -bottom-[100px] h-[220px] w-[220px] rounded-full bg-[#ac3e25]/20 blur-[2px]" />

                    <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                        <div className="max-w-[690px]">

                            <p className="text-[11px] font-medium uppercase tracking-[1.7px] text-[#c77761]">
                                Need a little help?
                            </p>

                            <h2 className="mt-3 text-[27px] font-semibold leading-[1.25] tracking-[-0.5px] text-white sm:text-[32px]">
                                We're only a message away.
                            </h2>

                            <p className="mt-3 text-[13px] leading-[1.75] text-white/55">
                                If you're unsure about your claim, required documents or what
                                to do next, our team is ready to guide you.
                            </p>

                        </div>

                        <Link
                            to="/contact-us"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-[5px] bg-white px-7 py-4 text-[13px] font-medium text-[#171313] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f5eeeb]"
                        >
                            Contact claims support

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

