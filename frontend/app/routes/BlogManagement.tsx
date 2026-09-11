import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

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

export default function BlogManagement() {
    const navigate = useNavigate();

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [deletingId, setDeletingId] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin-login");
            return;
        }

        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:5000/api/blogs"
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to fetch blogs"
                );
            }

            setBlogs(result.data);
        } catch (error) {
            console.error("Blog fetch error:", error);
            setError("Unable to load blogs.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this blog?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setDeletingId(id);

            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin-login");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/blogs/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to delete blog"
                );
            }

            setBlogs((prevBlogs) =>
                prevBlogs.filter((blog) => blog._id !== id)
            );
        } catch (error) {
            console.error("Delete blog error:", error);
            alert("Unable to delete blog.");
        } finally {
            setDeletingId("");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
    };

    return (
        <div className="min-h-[900px] bg-[#faf8f7] px-[80px] py-[70px] font-['Poppins'] text-[#111]">

            <div className="mx-auto w-[1280px]">

                {/* Header */}
                <div className="mb-10 flex items-end justify-between">

                    <div>

                        <Link
                            to="/blogs"
                            className="text-[13px] text-[#655b57] transition hover:text-[#ac3e25]"
                        >
                            ← Back to Blogs
                        </Link>

                        <h1 className="mt-6 text-[42px] font-semibold tracking-[-1px] text-[#211a18]">
                            Blog Management
                        </h1>

                        <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                            Manage your Purabi Insurance blog articles.
                        </p>

                    </div>

                    <div className="flex items-center gap-3">

                        <Link
                            to="/add-blog"
                            className="rounded-[5px] bg-[#ac3e25] px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#93341f]"
                        >
                            + Add New Blog
                        </Link>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="rounded-[5px] border border-[#ddd] bg-white px-6 py-3 text-[13px] font-medium text-[#333] transition hover:border-[#ac3e25] hover:text-[#ac3e25]"
                        >
                            Logout
                        </button>

                    </div>

                </div>

                {/* Loading */}
                {loading && (
                    <div className="rounded-[8px] border border-[#eadfdc] bg-white py-20 text-center shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        <p className="text-[14px] text-[#666]">
                            Loading blogs...
                        </p>

                    </div>
                )}

                {/* Error */}
                {!loading && error && (
                    <div className="rounded-[8px] border border-[#eadfdc] bg-white py-20 text-center shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        <p className="text-[14px] text-[#666]">
                            {error}
                        </p>

                        <button
                            onClick={fetchBlogs}
                            className="mt-5 rounded-[5px] bg-[#ac3e25] px-6 py-3 text-[13px] font-medium text-white"
                        >
                            Try Again
                        </button>

                    </div>
                )}

                {/* No Blogs */}
                {!loading && !error && blogs.length === 0 && (
                    <div className="rounded-[8px] border border-[#eadfdc] bg-white py-20 text-center shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        <p className="text-[14px] text-[#666]">
                            No blogs found.
                        </p>

                        <Link
                            to="/add-blog"
                            className="mt-5 inline-block rounded-[5px] bg-[#ac3e25] px-6 py-3 text-[13px] font-medium text-white"
                        >
                            Add Your First Blog
                        </Link>

                    </div>
                )}

                {/* Blog List */}
                {!loading && !error && blogs.length > 0 && (

                    <div className="overflow-hidden rounded-[8px] border border-[#eadfdc] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)]">

                        {blogs.map((blog, index) => (

                            <div
                                key={blog._id}
                                className={`flex items-center gap-6 p-6 ${index !== blogs.length - 1
                                    ? "border-b border-[#eee]"
                                    : ""
                                    }`}
                            >

                                {/* Image */}
                                <div className="h-[110px] w-[150px] shrink-0 overflow-hidden rounded-[6px] bg-[#111]">

                                    {blog.image ? (
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-[11px] text-white/50">
                                            No Image
                                        </div>
                                    )}

                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">

                                    <div className="flex items-center gap-3">

                                        <span className="text-[10px] font-medium uppercase tracking-[1px] text-[#ac3e25]">
                                            {blog.category}
                                        </span>

                                        <span className="text-[11px] text-[#999]">
                                            •
                                        </span>

                                        <span className="text-[11px] text-[#999]">
                                            {new Date(
                                                blog.createdAt
                                            ).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "long",
                                                    day: "2-digit",
                                                    year: "numeric",
                                                }
                                            )}
                                        </span>

                                    </div>

                                    <h2 className="mt-2 truncate text-[20px] font-semibold text-[#211a18]">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-2 line-clamp-2 text-[13px] leading-[1.7] text-[#666]">
                                        {blog.description}
                                    </p>

                                    <p className="mt-2 text-[11px] text-[#999]">
                                        By {blog.author}
                                    </p>

                                </div>

                                {/* Actions */}
                                <div className="flex shrink-0 items-center gap-3">

                                    <Link
                                        to={`/blogs/${blog._id}`}
                                        className="rounded-[5px] border border-[#ddd] px-4 py-2 text-[12px] font-medium text-[#333] transition hover:border-[#ac3e25] hover:text-[#ac3e25]"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        to={`/blog-management/edit/${blog._id}`}
                                        className="rounded-[5px] bg-[#111] px-4 py-2 text-[12px] font-medium text-white transition hover:bg-[#333]"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(blog._id)
                                        }
                                        disabled={
                                            deletingId === blog._id
                                        }
                                        className="rounded-[5px] border border-red-200 px-4 py-2 text-[12px] font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {deletingId === blog._id
                                            ? "Deleting..."
                                            : "Delete"}
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}