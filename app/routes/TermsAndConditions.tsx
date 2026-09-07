import { Link } from "react-router";

const legalPages = [
    ["/terms-and-conditions", "Terms & Condition"],
    ["/privacy-policy", "Privacy & Policy"],
    ["/refund-policy", "Refund & Policy"],
] as const;

const sections = [
    [
        "1. Using our services",
        "Please provide accurate information when requesting a quote, purchasing a policy or contacting our team. Services are subject to the terms of the relevant insurance product and applicable law.",
    ],
    [
        "2. Information and communications",
        "We may use the information you provide to respond to requests, manage services, improve customer support and communicate important updates about your policy.",
    ],
    [
        "3. Your responsibilities",
        "Keep your account and policy information secure, review documents carefully and tell us promptly if important information changes.",
    ],
    [
        "4. Changes and updates",
        "Policies, website content and service details may be updated from time to time. The latest version published on this page will apply going forward.",
    ],
    [
        "5. Contacting us",
        "If you have questions about a policy, service or these terms, please contact our support team. We will guide you through the appropriate process.",
    ],
];

export default function TermsAndConditions() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">
            <section className="bg-[#f2e7e3] px-[80px] py-[72px]">
                <div className="mx-auto w-[1280px]">
                    <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                        Your agreement with us
                    </p>

                    <h1 className="mt-3 text-[48px] font-semibold tracking-[-1px]">
                        Terms & Condition
                    </h1>

                    <p className="mt-5 max-w-[720px] text-[16px] leading-[1.7] text-[#555]">
                        These terms explain the basic rules for using Purabi Insurance
                        services and this website.
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
                            className={`block rounded-[5px] px-3 py-3 text-[12px] ${href === "/terms-and-conditions"
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