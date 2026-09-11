import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

type Blog = {
    _id: string;
    title: string;
    category: string;
    author: string;
    createdAt: string;
};

export default function AdminDashboard() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin-login");
            return;
        }

        fetchBlogs();
    }, [navigate]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/blogs"
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setBlogs(result.data);
            }
        } catch (error) {
            console.error("Dashboard error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
    };

    const totalBlogs = blogs.length;

    const recentBlogs = [...blogs]
        .sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )
        .slice(0, 5);

    return (
        <div className="min-h-screen bg-[#faf8f7] px-6 py-10 font-['Poppins'] text-[#111] md:px-[80px]">

            <div className="mx-auto max-w-[1280px]">

                {/* Header */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                    <div>
                        <p className="text-[12px] font-medium uppercase tracking-[2px] text-[#ac3e25]">
                            Purabi Insurance
                        </p>

                        <h1 className="mt-2 text-[36px] font-semibold tracking-[-1px] text-[#211a18] md:text-[42px]">
                            Admin Dashboard
                        </h1>

                        <p className="mt-2 text-[14px] text-[#777]">
                            Manage your website content from one place.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="w-fit rounded-[5px] border border-[#ddd] bg-white px-6 py-3 text-[13px] font-medium text-[#333] transition hover:border-[#ac3e25] hover:text-[#ac3e25]"
                    >
                        Logout
                    </button>

                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

                    {/* Total Blogs */}
                    <div className="rounded-[8px] border border-[#eadfdc] bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        <p className="text-[12px] font-medium uppercase tracking-[1px] text-[#888]">
                            Total Blogs
                        </p>

                        <h2 className="mt-3 text-[38px] font-semibold text-[#211a18]">
                            {loading ? "—" : totalBlogs}
                        </h2>

                        <p className="mt-1 text-[12px] text-[#999]">
                            Published articles
                        </p>

                    </div>

                    {/* Categories */}
                    <div className="rounded-[8px] border border-[#eadfdc] bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        <p className="text-[12px] font-medium uppercase tracking-[1px] text-[#888]">
                            Categories
                        </p>

                        <h2 className="mt-3 text-[38px] font-semibold text-[#211a18]">
                            {loading
                                ? "—"
                                : new Set(
                                    blogs.map(
                                        (blog) => blog.category
                                    )
                                ).size}
                        </h2>

                        <p className="mt-1 text-[12px] text-[#999]">
                            Active categories
                        </p>

                    </div>

                    {/* Quick Action */}
                    <div className="rounded-[8px] bg-[#ac3e25] p-7 text-white shadow-[0_8px_28px_rgba(172,62,37,.15)]">

                        <p className="text-[12px] font-medium uppercase tracking-[1px] text-white/70">
                            Quick Action
                        </p>

                        <h2 className="mt-3 text-[24px] font-semibold">
                            Create a new blog
                        </h2>

                        <Link
                            to="/add-blog"
                            className="mt-5 inline-block rounded-[5px] bg-white px-5 py-3 text-[12px] font-medium text-[#ac3e25] transition hover:bg-[#f8f8f8]"
                        >
                            + Add New Blog
                        </Link>

                    </div>

                </div>

                {/* Recent Blogs */}
                <div className="mt-10 rounded-[8px] border border-[#eadfdc] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                    <div className="flex flex-col justify-between gap-4 border-b border-[#eee] p-7 md:flex-row md:items-center">

                        <div>
                            <h2 className="text-[22px] font-semibold text-[#211a18]">
                                Recent Blogs
                            </h2>

                            <p className="mt-1 text-[12px] text-[#999]">
                                Your latest published articles
                            </p>
                        </div>

                        <Link
                            to="/blog-management"
                            className="text-[12px] font-medium text-[#ac3e25] hover:underline"
                        >
                            Manage All Blogs →
                        </Link>

                    </div>

                    {loading ? (
                        <div className="p-10 text-center text-[13px] text-[#777]">
                            Loading blogs...
                        </div>
                    ) : recentBlogs.length === 0 ? (
                        <div className="p-10 text-center">

                            <p className="text-[13px] text-[#777]">
                                No blogs available.
                            </p>

                            <Link
                                to="/add-blog"
                                className="mt-4 inline-block rounded-[5px] bg-[#ac3e25] px-5 py-3 text-[12px] font-medium text-white"
                            >
                                Create Your First Blog
                            </Link>

                        </div>
                    ) : (
                        <div>

                            {recentBlogs.map((blog, index) => (
                                <div
                                    key={blog._id}
                                    className={`flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between ${index !==
                                        recentBlogs.length - 1
                                        ? "border-b border-[#eee]"
                                        : ""
                                        }`}
                                >

                                    <div className="min-w-0">

                                        <div className="flex items-center gap-3">

                                            <span className="text-[10px] font-medium uppercase tracking-[1px] text-[#ac3e25]">
                                                {blog.category}
                                            </span>

                                            <span className="text-[11px] text-[#aaa]">
                                                •
                                            </span>

                                            <span className="text-[11px] text-[#999]">
                                                {new Date(
                                                    blog.createdAt
                                                ).toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </span>

                                        </div>

                                        <h3 className="mt-2 truncate text-[16px] font-medium text-[#211a18]">
                                            {blog.title}
                                        </h3>

                                        <p className="mt-1 text-[11px] text-[#999]">
                                            By {blog.author}
                                        </p>

                                    </div>

                                    <Link
                                        to={`/blogs/${blog._id}`}
                                        className="w-fit shrink-0 rounded-[5px] border border-[#ddd] px-5 py-2 text-[12px] font-medium text-[#333] transition hover:border-[#ac3e25] hover:text-[#ac3e25]"
                                    >
                                        View
                                    </Link>

                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}