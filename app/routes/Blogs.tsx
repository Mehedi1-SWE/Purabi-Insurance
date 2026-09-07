const posts = [
    {
        category: "Insurance Guide",
        title: "A simple guide to choosing the right insurance cover",
        text: "Understand the essentials before you choose a policy for yourself, your family or your business.",
        date: "September 05, 2026",
    },
    {
        category: "Protection",
        title: "Why reviewing your policy every year matters",
        text: "Life changes. Your insurance should keep pace with the people, plans and priorities you want to protect.",
        date: "August 22, 2026",
    },
    {
        category: "Claims",
        title: "What to keep ready when you need to make a claim",
        text: "A practical checklist of the information and documents that can make the claims process smoother.",
        date: "August 10, 2026",
    },
];

export default function Blogs() {
    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">
            <section className="bg-[#f2e7e3] px-[80px] py-[82px]">
                <div className="mx-auto w-[1280px]">
                    <p className="text-[13px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                        Insights & updates
                    </p>

                    <h1 className="mt-3 text-[54px] font-semibold leading-[1.05] tracking-[-1.2px]">
                        Insurance, explained better.
                    </h1>

                    <p className="mt-6 max-w-[650px] text-[17px] leading-[1.7] text-[#555]">
                        Useful ideas, practical guides and simple explanations to help you
                        make more confident protection decisions.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-[1280px] py-[72px]">
                <div className="grid grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <article
                            key={post.title}
                            className="group overflow-hidden rounded-[8px] border border-[#eadfdc] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)]"
                        >
                            <div className="h-[185px] bg-[#111] p-7">
                                <div className="flex h-full items-end justify-between">
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[1px] text-white/80">
                                        0{index + 1}
                                    </span>

                                    <span className="text-[12px] text-white/50">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-7">
                                <p className="text-[11px] text-[#ac3e25]">{post.date}</p>

                                <h2 className="mt-3 text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] group-hover:text-[#ac3e25]">
                                    {post.title}
                                </h2>

                                <p className="mt-4 text-[13px] leading-[1.7] text-[#666]">
                                    {post.text}
                                </p>

                                <button className="mt-6 text-[13px] font-medium text-[#111] transition group-hover:text-[#ac3e25]">
                                    Read article <span className="ml-2">→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}