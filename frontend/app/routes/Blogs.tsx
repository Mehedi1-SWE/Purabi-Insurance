import { Link } from "react-router";
import { useEffect, useState } from "react";

type Blog = {
    _id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    category: string;
    author: string;
    createdAt: string;
};

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/blogs"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }

                const result = await response.json();

                if (result.success) {
                    setBlogs(result.data);
                } else {
                    setError("No blogs found.");
                }
            } catch (err) {
                console.error("Blog fetch error:", err);
                setError("Unable to load blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-[900px] bg-[#faf8f7] font-['Poppins'] text-[#111]">

            {/* Banner */}
            <section className="relative h-[280px] w-full overflow-hidden bg-[#f6f1ee] px-[80px] py-[50px]">

                <img
                    src="/blogs-banner.png"
                    alt="Insurance consultation"
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.92]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,243,0.99)_0%,rgba(248,245,243,0.94)_32%,rgba(248,245,243,0.70)_50%,rgba(248,245,243,0.28)_72%,rgba(248,245,243,0.08)_100%)]" />

                <div className="relative mx-auto flex h-full w-[1280px] items-center">

                    <div>

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ac3e25]/15 bg-white/70 px-3 py-1.5">

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

            {/* Blogs */}
            <section className="mx-auto w-[1280px] py-[72px]">

                {/* Loading */}
                {loading && (
                    <div className="py-20 text-center text-[14px] text-[#666]">
                        Loading blogs...
                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="py-20 text-center">

                        <p className="text-[14px] text-[#666]">
                            {error}
                        </p>

                    </div>
                )}

                {/* No blogs */}
                {!loading && !error && blogs.length === 0 && (
                    <div className="py-20 text-center">

                        <p className="text-[14px] text-[#666]">
                            No blogs found.
                        </p>

                    </div>
                )}

                {/* Blog Cards */}
                {!loading && !error && blogs.length > 0 && (

                    <div className="grid grid-cols-3 gap-6">

                        {blogs.map((blog, index) => (

                            <article
                                key={blog._id}
                                className="group overflow-hidden rounded-[8px] border border-[#eadfdc] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.10)]"
                            >

                                {/* Image */}
                                <div className="relative h-[185px] overflow-hidden bg-[#111]">

                                    {blog.image ? (
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="absolute inset-0 h-full w-full object-cover opacity-65 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-[#111]" />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />

                                    <div className="relative flex h-full items-end justify-between p-7">

                                        <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[1px] text-white/85">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-[12px] text-white/70">
                                            {blog.category}
                                        </span>

                                    </div>

                                </div>

                                {/* Content */}
                                <div className="p-7">

                                    <div className="flex items-center justify-between gap-3 text-[11px]">

                                        <span className="text-[#ac3e25]">
                                            {new Date(blog.createdAt).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "long",
                                                    day: "2-digit",
                                                    year: "numeric",
                                                }
                                            )}
                                        </span>

                                        <span className="text-[#999]">
                                            {blog.author}
                                        </span>

                                    </div>

                                    <h2 className="mt-3 text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] transition-colors group-hover:text-[#ac3e25]">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-4 text-[13px] leading-[1.7] text-[#666]">
                                        {blog.description}
                                    </p>

                                    <Link
                                        to={`/blogs/${blog._id}`}
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

                )}

            </section>

        </div>
    );
}