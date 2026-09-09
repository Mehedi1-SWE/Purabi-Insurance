import { Link } from "react-router";

const legalPages = [
    ["/terms-and-conditions", "Terms & Condition"],
    ["/privacy-policy", "Privacy & Policy"],
    ["/refund-policy", "Refund & Policy"],
] as const;

const sections = [
    [
        "1. Refund requests",
        "Refund requests are reviewed according to the applicable insurance product, policy terms, payment status and relevant regulations.",
    ],
    [
        "2. Cancellations",
        "If you need to cancel a service or policy, contact our support team as soon as possible. Any applicable cancellation terms will be explained before processing.",
    ],
    [
        "3. Processing time",
        "Approved refunds may require processing time depending on the payment method and financial institution used for the original transaction.",
    ],
    [
        "4. Non-refundable charges",
        "Certain fees, services or completed transactions may not be eligible for a refund where permitted by the applicable policy or law.",
    ],
    [
        "5. Need help?",
        "For questions about a refund, cancellation or payment, contact our support team with your policy or transaction details so we can assist you efficiently.",
    ],
];

export default function RefundPolicy() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">
            <section className="bg-[#f2e7e3] px-[80px] py-[72px]">
                <div className="mx-auto w-[1280px]">
                    <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                        Clear payment guidance
                    </p>

                    <h1 className="mt-3 text-[48px] font-semibold tracking-[-1px]">
                        Refund & Policy
                    </h1>

                    <p className="mt-5 max-w-[720px] text-[16px] leading-[1.7] text-[#555]">
                        This policy provides general guidance on refunds, cancellations and
                        payment-related requests.
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
                            className={`block rounded-[5px] px-3 py-3 text-[12px] ${href === "/refund-policy"
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