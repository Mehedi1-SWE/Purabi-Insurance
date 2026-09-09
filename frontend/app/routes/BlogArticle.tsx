import { Link, useParams } from "react-router";
import { posts } from "./Blogs";

const articleContent: Record<
    string,
    {
        intro: string;
        sections: {
            heading: string;
            text: string;
        }[];
    }
> = {
    "choosing-the-right-insurance-cover": {
        intro:
            "The right insurance policy should feel like a practical safety net—not a confusing list of terms. Start with what you need to protect, then choose coverage that matches your real responsibilities.",

        sections: [
            {
                heading: "Start with what you need to protect",
                text:
                    "List the people, property, vehicles, health needs or business responsibilities that would create a serious financial impact if something unexpected happened.",
            },
            {
                heading: "Understand the coverage before the price",
                text:
                    "A lower premium is not always the better choice. Compare the protection offered, exclusions, limits, deductibles and claim requirements so you know what you are actually buying.",
            },
            {
                heading: "Choose a cover that can grow with you",
                text:
                    "Your income, family, assets and business responsibilities can change. A good policy should be reviewed when those circumstances change rather than left untouched for years.",
            },
        ],
    },

    "why-policy-review-matters": {
        intro:
            "An annual policy review is a simple habit that helps keep your protection aligned with your life. Changes in assets, responsibilities and financial goals can make an old policy less suitable.",

        sections: [
            {
                heading: "Your circumstances change",
                text:
                    "A new vehicle, property purchase, growing family or expanding business can change the amount and type of protection you need.",
            },
            {
                heading: "Coverage gaps are easier to fix early",
                text:
                    "Reviewing your policy gives you an opportunity to spot outdated information, missing coverage or limits that no longer reflect your current needs.",
            },
            {
                heading: "Keep your policy information accurate",
                text:
                    "Make sure contact details, nominees, insured values and other important information remain current. Accurate records can make future service and claims conversations smoother.",
            },
        ],
    },

    "claim-ready-checklist": {
        intro:
            "When a claim happens, having the right information ready can reduce unnecessary back-and-forth. A little preparation can make the process clearer and easier to follow.",

        sections: [
            {
                heading: "Keep your policy details accessible",
                text:
                    "Have your policy number and relevant policy documents ready so the claim can be matched to the correct coverage quickly.",
            },
            {
                heading: "Collect supporting evidence",
                text:
                    "Depending on the claim, this may include photographs, invoices, reports, receipts, identification and other documents requested during assessment.",
            },
            {
                heading: "Keep communication clear",
                text:
                    "Share accurate information, respond to requests promptly and keep copies of the documents you submit. This helps everyone maintain a clear record of the claim.",
            },
        ],
    },
};

export default function BlogArticle() {
    const { slug } = useParams();

    const post = posts.find(
        (item) => item.slug === slug
    );

    const content = slug
        ? articleContent[slug]
        : undefined;

    if (!post || !content) {
        return (
            <div className="min-h-[700px] bg-[#faf8f7] px-8 py-24 text-center font-['Poppins']">

                <h1 className="text-4xl font-semibold">
                    Article not found
                </h1>

                <Link
                    to="/blogs"
                    className="mt-6 inline-block text-[#ac3e25]"
                >
                    ← Back to Blogs
                </Link>

            </div>
        );
    }

    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">

            {/* Article Banner */}
            <section className="relative overflow-hidden bg-[#f6f1ee] px-[80px] py-[90px] text-[#171313]">

                <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.86]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,243,0.99)_0%,rgba(248,245,243,0.96)_34%,rgba(248,245,243,0.72)_58%,rgba(248,245,243,0.22)_82%,rgba(248,245,243,0.08)_100%)]" />

                <div className="relative mx-auto w-[1280px]">

                    <Link
                        to="/blogs"
                        className="inline-flex text-[13px] text-[#655b57] transition hover:text-[#ac3e25]"
                    >
                        ← Back to Blogs
                    </Link>

                    <p className="mt-10 text-[12px] font-medium uppercase tracking-[2px] text-[#8f3723]">
                        {post.category}
                    </p>

                    <h1 className="mt-4 max-w-[900px] text-[52px] font-semibold leading-[1.08] tracking-[-1px] text-[#211a18]">
                        {post.title}
                    </h1>

                    <div className="mt-6 flex gap-5 text-[12px] text-[#756c68]">
                        <span>
                            {post.date}
                        </span>

                        <span>
                            •
                        </span>

                        <span>
                            {post.readTime}
                        </span>
                    </div>

                </div>
            </section>

            {/* Article Body */}
            <main className="mx-auto w-[900px] py-[72px]">

                <p className="text-[20px] font-medium leading-[1.8] text-[#333]">
                    {content.intro}
                </p>

                <div className="mt-12 space-y-11">

                    {content.sections.map(
                        (section, index) => (
                            <section key={section.heading}>

                                <div className="flex gap-5">

                                    <span className="pt-1 text-[12px] font-semibold tracking-[1px] text-[#ac3e25]">
                                        0{index + 1}
                                    </span>

                                    <div>

                                        <h2 className="text-[27px] font-semibold tracking-[-.5px]">
                                            {section.heading}
                                        </h2>

                                        <p className="mt-4 text-[15px] leading-[1.9] text-[#666]">
                                            {section.text}
                                        </p>

                                    </div>

                                </div>

                            </section>
                        )
                    )}

                </div>

                {/* CTA */}
                <div className="mt-14 rounded-[8px] bg-[#111] p-8 text-white">

                    <p className="text-[17px] font-medium">
                        Need help with your insurance?
                    </p>

                    <p className="mt-2 text-[13px] leading-[1.7] text-white/60">
                        Our team can help you understand your policy, claims and next steps.
                    </p>

                    <Link
                        to="/contact-us"
                        className="mt-5 inline-flex rounded-[5px] bg-white px-6 py-3 text-[13px] font-medium text-[#111] transition hover:bg-[#f2e7e3]"
                    >
                        Contact us →
                    </Link>

                </div>

            </main>
        </div>
    );
}