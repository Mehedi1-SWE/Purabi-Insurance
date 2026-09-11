import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

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

export default function EditBlog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        image: "",
        category: "Insurance",
        author: "Purabi Insurance",
    });

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem("adminToken");

                if (!token) {
                    navigate("/admin-login");
                    return;
                }

                if (!id) {
                    setError("Blog not found.");
                    return;
                }

                const response = await fetch(
                    `http://localhost:5000/api/blogs/${id}`
                );

                const result = await response.json();

                if (!response.ok || !result.success) {
                    throw new Error(
                        result.message || "Blog not found."
                    );
                }

                const blog: Blog = result.data;

                setFormData({
                    title: blog.title || "",
                    description: blog.description || "",
                    content: blog.content || "",
                    image: blog.image || "",
                    category: blog.category || "Insurance",
                    author: blog.author || "Purabi Insurance",
                });
            } catch (err) {
                console.error("Fetch blog error:", err);
                setError("Unable to load blog.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id, navigate]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!id) {
            setError("Blog not found.");
            return;
        }

        try {
            setUpdating(true);
            setError("");
            setMessage("");

            const token = localStorage.getItem("adminToken");

            if (!token) {
                navigate("/admin-login");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/blogs/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            // Token expired or invalid
            if (response.status === 401) {
                localStorage.removeItem("adminToken");
                navigate("/admin-login");
                return;
            }

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Failed to update blog."
                );
            }

            setMessage("Blog updated successfully!");

            setTimeout(() => {
                navigate("/blog-management");
            }, 1000);
        } catch (err) {
            console.error("Update blog error:", err);

            setError(
                err instanceof Error
                    ? err.message
                    : "Unable to update blog."
            );
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-[700px] bg-[#faf8f7] px-8 py-24 text-center font-['Poppins']">
                <p className="text-[14px] text-[#666]">
                    Loading blog...
                </p>
            </div>
        );
    }

    if (error && !formData.title) {
        return (
            <div className="min-h-[700px] bg-[#faf8f7] px-8 py-24 text-center font-['Poppins']">

                <h1 className="text-4xl font-semibold">
                    Blog not found
                </h1>

                <p className="mt-4 text-[14px] text-[#666]">
                    {error}
                </p>

                <Link
                    to="/blog-management"
                    className="mt-6 inline-block rounded-[5px] bg-[#ac3e25] px-6 py-3 text-[13px] font-medium text-white"
                >
                    ← Back to Blog Management
                </Link>

            </div>
        );
    }

    return (
        <div className="min-h-[900px] bg-[#faf8f7] px-[80px] py-[70px] font-['Poppins'] text-[#111]">

            <div className="mx-auto w-[900px]">

                {/* Header */}
                <div className="mb-10">

                    <Link
                        to="/blog-management"
                        className="text-[13px] text-[#655b57] transition hover:text-[#ac3e25]"
                    >
                        ← Back to Blog Management
                    </Link>

                    <h1 className="mt-6 text-[42px] font-semibold tracking-[-1px] text-[#211a18]">
                        Edit Blog
                    </h1>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                        Update your Purabi Insurance blog article.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-[8px] border border-[#eadfdc] bg-white p-8 shadow-[0_8px_28px_rgba(0,0,0,.04)]"
                >

                    {/* Title */}
                    <div>

                        <label className="text-[13px] font-medium text-[#333]">
                            Blog Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Description */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-2 w-full resize-none rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Content */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Content
                        </label>

                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows={10}
                            className="mt-2 w-full resize-y rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] leading-[1.7] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Image */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Image URL
                        </label>

                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Category */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Category
                        </label>

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] bg-white px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        >
                            <option value="Insurance">
                                Insurance
                            </option>

                            <option value="Insurance Guide">
                                Insurance Guide
                            </option>

                            <option value="Protection">
                                Protection
                            </option>

                            <option value="Claims">
                                Claims
                            </option>
                        </select>

                    </div>

                    {/* Author */}
                    <div className="mt-6">

                        <label className="text-[13px] font-medium text-[#333]">
                            Author
                        </label>

                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            className="mt-2 w-full rounded-[5px] border border-[#ddd] px-4 py-3 text-[13px] outline-none transition focus:border-[#ac3e25]"
                        />

                    </div>

                    {/* Success */}
                    {message && (
                        <div className="mt-6 rounded-[5px] bg-green-50 px-4 py-3 text-[13px] text-green-700">
                            {message}
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="mt-6 rounded-[5px] bg-red-50 px-4 py-3 text-[13px] text-red-600">
                            {error}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={updating}
                        className="mt-7 rounded-[5px] bg-[#ac3e25] px-7 py-3 text-[13px] font-medium text-white transition hover:bg-[#93341f] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {updating
                            ? "Updating Blog..."
                            : "Update Blog →"}
                    </button>

                </form>

            </div>

        </div>
    );
}