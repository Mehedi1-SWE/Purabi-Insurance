import { Link } from "react-router";

const legalPages = [
    ["/terms-and-conditions", "Terms & Condition"],
    ["/privacy-policy", "Privacy & Policy"],
    ["/refund-policy", "Refund & Policy"],
] as const;

const sections = [
    [
        "1. Information we collect",
        "We may collect information you provide when you request a quote, purchase or manage a policy, contact us, or use our website and related services.",
    ],
    [
        "2. How we use information",
        "Information may be used to provide and improve our services, process requests, communicate with you, maintain security and meet applicable legal requirements.",
    ],
    [
        "3. Protecting your information",
        "We take reasonable administrative and technical measures to help protect information against unauthorized access, misuse, alteration or disclosure.",
    ],
    [
        "4. Sharing information",
        "We may share information with service providers, partners or authorities where necessary to deliver services, protect our users or comply with applicable law.",
    ],
    [
        "5. Your choices",
        "If you have a question about your personal information or want to make a privacy-related request, contact our support team for assistance.",
    ],
];

export default function PrivacyPolicy() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">
            <section className="bg-[#f2e7e3] px-[80px] py-[72px]">
                <div className="mx-auto w-[1280px]">
                    <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                        Your privacy matters
                    </p>

                    <h1 className="mt-3 text-[48px] font-semibold tracking-[-1px]">
                        Privacy & Policy
                    </h1>

                    <p className="mt-5 max-w-[720px] text-[16px] leading-[1.7] text-[#555]">
                        This policy explains how information may be collected, used and
                        protected when you use our services.
                    </p>

                    <p className="mt-5 text-[11px] uppercase tracking-[1px] text-[#888]">
                        Last updated · September 2026
                    </p>
                </div>
            </section>

            <section className="mx-auto grid w-[1280px] grid-cols-[250px_1fr] gap-16 py-[70px]">
                <aside className="h-fit rounded-[8px] border border-[#eadfdc] bg-white p-5">
                    <p className="mb-4 text-[11px] uppercase tracking-[1.2px] text-[#999]">
                        Legal pages
                    </p>

                    {legalPages.map(([href, title]) => (
                        <Link
                            key={href}
                            to={href}
                            className={`block rounded-[5px] px-3 py-3 text-[12px] ${href === "/privacy-policy"
                                ? "bg-[#ac3e25] text-white"
                                : "text-[#555] hover:bg-[#f6efed]"
                                }`}
                        >
                            {title}
                        </Link>
                    ))}
                </aside>

                <div className="rounded-[8px] border border-[#eadfdc] bg-white p-10 shadow-[0_8px_28px_rgba(0,0,0,.03)]">
                    {sections.map(([title, text]) => (
                        <section
                            key={title}
                            className="border-b border-[#eee] py-7 first:pt-0 last:border-0"
                        >
                            <h2 className="text-[18px] font-semibold">{title}</h2>

                            <p className="mt-3 text-[13px] leading-[1.85] text-[#666]">
                                {text}
                            </p>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
}