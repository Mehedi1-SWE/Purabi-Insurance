import { Link, useParams } from "react-router";
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
    updatedAt?: string;
};

export default function BlogArticle() {
    const { id } = useParams();

    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (!id) {
                    setError("Article not found");
                    setLoading(false);
                    return;
                }

                const response = await fetch(
                    `http://localhost:5000/api/blogs/${id}`
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    setError(result.message || "Article not found");
                    return;
                }

                setBlog(result.data);
            } catch (err) {
                console.error("Blog article error:", err);
                setError("Unable to load article.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[700px] bg-[#faf8f7] px-8 py-24 text-center font-['Poppins']">
                <p className="text-[14px] text-[#666]">
                    Loading article...
                </p>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-[700px] bg-[#faf8f7] px-8 py-24 text-center font-['Poppins']">
                <h1 className="text-4xl font-semibold">
                    Article not found
                </h1>

                <p className="mt-4 text-[14px] text-[#666]">
                    {error}
                </p>

                <Link
                    to="/blogs"
                    className="mt-6 inline-block rounded-[5px] bg-[#ac3e25] px-6 py-3 text-[13px] font-medium text-white"
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

                {blog.image && (
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.86]"
                    />
                )}

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,243,0.99)_0%,rgba(248,245,243,0.96)_34%,rgba(248,245,243,0.72)_58%,rgba(248,245,243,0.22)_82%,rgba(248,245,243,0.08)_100%)]" />

                <div className="relative mx-auto w-[1280px]">

                    <Link
                        to="/blogs"
                        className="inline-flex text-[13px] text-[#655b57] transition hover:text-[#ac3e25]"
                    >
                        ← Back to Blogs
                    </Link>

                    <p className="mt-10 text-[12px] font-medium uppercase tracking-[2px] text-[#8f3723]">
                        {blog.category}
                    </p>

                    <h1 className="mt-4 max-w-[900px] text-[52px] font-semibold leading-[1.08] tracking-[-1px] text-[#211a18]">
                        {blog.title}
                    </h1>

                    <div className="mt-6 flex gap-5 text-[12px] text-[#756c68]">

                        <span>
                            {new Date(
                                blog.createdAt
                            ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "2-digit",
                                year: "numeric",
                            })}
                        </span>

                        <span>•</span>

                        <span>
                            By {blog.author}
                        </span>

                    </div>

                </div>
            </section>

            {/* Article Body */}
            <main className="mx-auto w-[900px] py-[72px]">

                {/* Description */}
                <p className="text-[20px] font-medium leading-[1.8] text-[#333]">
                    {blog.description}
                </p>

                {/* Content */}
                <div className="mt-10">
                    <p className="whitespace-pre-line text-[15px] leading-[1.9] text-[#666]">
                        {blog.content}
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-14 rounded-[8px] bg-[#111] p-8 text-white">

                    <p className="text-[17px] font-medium">
                        Need help with your insurance?
                    </p>

                    <p className="mt-2 text-[13px] leading-[1.7] text-white/60">
                        Our team can help you understand your policy,
                        claims and next steps.
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