import { Link } from "react-router";

const posts = [
    {
        slug: "choosing-the-right-insurance-cover",
        category: "Insurance Guide",
        title: "A simple guide to choosing the right insurance cover",
        text: "Understand the essentials before you choose a policy for yourself, your family or your business.",
        date: "September 05, 2026",
        image: "/blog-card-1.jpg",
        readTime: "5 min read",
    },
    {
        slug: "why-policy-review-matters",
        category: "Protection",
        title: "Why reviewing your policy every year matters",
        text: "Life changes. Your insurance should keep pace with the people, plans and priorities you want to protect.",
        date: "August 22, 2026",
        image: "/blog-card-2.jpg",
        readTime: "4 min read",
    },
    {
        slug: "claim-ready-checklist",
        category: "Claims",
        title: "What to keep ready when you need to make a claim",
        text: "A practical checklist of the information and documents that can make the claims process smoother.",
        date: "August 10, 2026",
        image: "/blog-card-3.jpg",
        readTime: "6 min read",
    },
];

export { posts };

export default function Blogs() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">

            <section className="relative h-[341px] w-full overflow-hidden bg-[#f6f1ee] px-[80px] py-[50px] text-[#171313]">

                <img
                    src="/blogs-banner.png"
                    alt="Insurance consultation"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.92]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,243,0.99)_0%,rgba(248,245,243,0.94)_32%,rgba(248,245,243,0.70)_50%,rgba(248,245,243,0.28)_72%,rgba(248,245,243,0.08)_100%)]" />

                <div className="absolute -right-28 -bottom-40 h-[420px] w-[420px] rounded-full border border-[#ac3e25]/10 bg-[#ac3e25]/5" />

                <div className="relative mx-auto flex h-full w-[1280px] items-center">

                    <div className="w-full">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ac3e25]/15 bg-white/70 px-3 py-1.5 shadow-[0_4px_14px_rgba(80,45,35,.06)] backdrop-blur-sm">

                            <span className="h-1.5 w-1.5 rounded-full bg-[#ac3e25]" />

                            <p className="text-[10px] font-medium uppercase tracking-[1.6px] text-[#8f3723]">
                                Insights & updates
                            </p>

                        </div>

                        <h1 className="text-[44px] font-semibold leading-[1.05] tracking-[-1px] text-[#211a18]">
                            Insurance, explained better.
                        </h1>

                        <p className="mt-4 max-w-[650px] text-[14px] leading-[1.7] text-[#5f5753]">
                            Useful ideas, practical guides and simple explanations to help you
                            make more confident protection decisions.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mx-auto w-[1280px] py-[72px]">

                <div className="grid grid-cols-3 gap-6">

                    {posts.map((post, index) => (

                        <article
                            key={post.slug}
                            className="group overflow-hidden rounded-[8px] border border-[#eadfdc] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.10)]"
                        >

                            <div className="relative h-[185px] overflow-hidden bg-[#111]">

                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-65 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

                                <div className="relative flex h-full items-end justify-between p-7">

                                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[1px] text-white/85 backdrop-blur-sm">
                                        0{index + 1}
                                    </span>

                                    <span className="text-[12px] text-white/70">
                                        {post.category}
                                    </span>

                                </div>

                            </div>

                            <div className="p-7">

                                <div className="flex items-center justify-between gap-3 text-[11px] text-[#ac3e25]">

                                    <span>
                                        {post.date}
                                    </span>

                                    <span className="text-[#999]">
                                        {post.readTime}
                                    </span>

                                </div>

                                <h2 className="mt-3 text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] transition-colors group-hover:text-[#ac3e25]">
                                    {post.title}
                                </h2>

                                <p className="mt-4 text-[13px] leading-[1.7] text-[#666]">
                                    {post.text}
                                </p>

                                <Link
                                    to={`/blogs/${post.slug}`}
                                    className="mt-6 inline-flex items-center text-[13px] font-medium text-[#111] transition-all group-hover:gap-3 group-hover:text-[#ac3e25]"
                                >
                                    Read article

                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </section>

        </div>
    );
}