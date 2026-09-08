import { Link } from "react-router";

const steps = [
    { number: "01", title: "Submit your claim", text: "Share your policy details and the basic information about your claim." },
    { number: "02", title: "We review", text: "Our team checks the documents and validates your claim carefully." },
    { number: "03", title: "Claim decision", text: "You receive a clear update once the review is complete." },
    { number: "04", title: "Get your settlement", text: "Approved claims are processed through your selected payment channel." },
];

export default function Claims() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111111]">
            <section className="relative overflow-hidden bg-[#111] px-[80px] py-[82px] text-white">
                <img src="/claims-banner.jpg" alt="Insurance claim support" className="absolute inset-0 h-full w-full object-cover opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
                <div className="absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full bg-[#ac3e25]/20" />
                <div className="relative mx-auto flex w-[1280px] items-end justify-between">
                    <div className="max-w-[720px]">
                        <p className="mb-4 text-[13px] font-medium uppercase tracking-[2px] text-[#d9785f]">Claims support</p>
                        <h1 className="text-[54px] font-semibold leading-[1.05] tracking-[-1.2px]">Claims, made simple.</h1>
                        <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-white/70">A clear, guided process to help you submit, understand and follow up on your insurance claim without unnecessary hassle.</p>
                    </div>
                    <Link to="/contact-us" className="rounded-[5px] bg-[#ac3e25] px-7 py-4 text-[14px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#922f1c] hover:shadow-[0_10px_25px_rgba(172,62,37,.25)]">Need help? Contact us</Link>
                </div>
            </section>

            <section className="mx-auto w-[1280px] py-[75px]">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <p className="text-[12px] uppercase tracking-[1.5px] text-[#ac3e25]">How it works</p>
                        <h2 className="mt-2 text-[34px] font-semibold tracking-[-0.7px]">From claim to resolution</h2>
                    </div>
                    <p className="max-w-[390px] text-right text-[14px] leading-[1.7] text-[#666]">We keep every step straightforward so you always know what happens next.</p>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {steps.map((step) => (
                        <article key={step.number} className="rounded-[8px] border border-[#eadfdc] bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(0,0,0,.08)]">
                            <span className="text-[13px] font-semibold text-[#ac3e25]">{step.number}</span>
                            <h3 className="mt-8 text-[19px] font-semibold">{step.title}</h3>
                            <p className="mt-3 text-[13px] leading-[1.7] text-[#666]">{step.text}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-between rounded-[8px] bg-[#111] px-8 py-6 text-white">
                    <div><p className="text-[17px] font-medium">Ready to start a claim?</p><p className="mt-1 text-[13px] text-white/60">Have your policy number and supporting documents ready.</p></div>
                    <Link to="/contact-us" className="rounded-[5px] bg-white px-6 py-3 text-[13px] font-medium text-[#111] hover:bg-[#f2e7e3]">Get assistance</Link>
                </div>
            </section>
        </div>
    );
}
